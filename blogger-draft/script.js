console.log('script start')

// ---------------------------------------
// 操作界面：設定
// ---------------------------------------

var panel = $('<form id="puli_util_20190122" data-status="wait-config"></form>')

// ---------------------------------------
// 操作界面：預覽的圖片
// ---------------------------------------

var previewPanel = $('<div class="editor-preview-panel"><label><input type="checkbox" checked="checked" />Auto Refresh</label><button type="button">CLEAR</button><div class="img-list"></div></div>').appendTo(panel)

var drawPreviewPanel = function () {
	if (previewPanel.find("input:checked").length === 0) {
		return
	}
	
	if ($("#postingComposeBox").length === 0) {
		return
	}
	//console.log($("#postingComposeBox").length)
	var body = $($("#postingComposeBox")[0].contentWindow.document.body.innerHTML)
	//console.log(body.find("a[href][imageanchor]").length)
	var imgList = previewPanel.find(".img-list")
	imgList.empty()
	body.find("a[href][imageanchor]").each(function (i, ele) {
		var img = ele.href
		console.log(img)
		imgList.append('<a href="' + img + '"><img src="' + img + '" /></a>')
	})
};

var timer = setInterval(() => {
	drawPreviewPanel()
}, 5000)

previewPanel.find("input").change(function () {
	console.log(this.checked)
	if (this.checked === false) {
		clearInterval(timer)
	}
	else {
		drawPreviewPanel()
		timer = setInterval(() => {
			drawPreviewPanel()
		}, 5000)
	}
	
})

previewPanel.find("button").click(function () {
	$($("#postingComposeBox")[0].contentWindow.document.body).empty()
})



// ---------------------------------------
// 操作界面：初始設定
// ---------------------------------------


var initPanel = $('<div class="init-panel"></div>').appendTo(panel)

var helpButton = $('<a href="https://docs.google.com/document/d/e/2PACX-1vRuVvvVIwG4wgxQt6JqPyfg0rd5T-rIezkuFGHDz_BArXKXl5K14-ojCK6SYGuDcewPwM3weYLAw1zF/pub" target="puli_util_20190122_help"><button type="button">HELP</button></a>').appendTo(initPanel)
var urlInput = $('<input type="text" placeholder="https://www.blogger.com/upload-image-ajax.do?blogID=..." class="url-input" />').appendTo(initPanel)

var uploadingMessage = $('<div class="uploading-message">Uploading...</div>').appendTo(panel)

var appendToBody = function () {
	if ($("#postingComposeBox").length === 0) {
		setTimeout(function () {
			appendToBody()
		}, 3*1000)
		return
	}
	
	panel.appendTo("body:first")
	
	setTimeout(function() {
		if ($("#puli_util_20190122").length === 0) {
			appendToBody()
		}
		else {
			initPastImageReader(function (link) {
				setImage(link)
			})
			//testPost()
			//testConfig()
		}
	}, 3*1000);
}
appendToBody()

var prefixNeedle = "https://www.blogger.com/upload-image-ajax.do?blogID="

var detectURLInputChange = function () {
	var url = this.value
	//url = "https://www.blogger.com/upload-image-ajax.do?blogID=16607461&security_token=AOuZoY7IFvJXDr7Iyt-V0-7FavZR7Hj0Rw%3A1549095174100"
	if (url.startsWith(prefixNeedle) && url.indexOf("&security_token=") > -1) {
		this.style.display = "none"
		//panel.removeClass("wait-config").addClass("inited")
		panel.attr("data-status", "wait-upload")
	}
	else {
		console.log("URL is not correct: " + url)
	}
}

urlInput.change(detectURLInputChange)
	.keyup(detectURLInputChange)
	.click(detectURLInputChange)


var getPostURL = function () {
	var url = urlInput.val()
	if (url.startsWith(prefixNeedle) && url.indexOf("&security_token=") > -1) {
		return url
	}
	else {
		return false
	}
}

var testPost = function () {
	var link = "http://1.bp.blogspot.com/-GL-qtFqFLJA/XEbeBhtSIoI/AAAAAAAEATc/WDmHkFxgpV8s66KRAf6h9Kb4qpr6L0UJACK4BGAYYCw/s1600/2019-01-19_132000.png"
	setImage(link)
}

var testConfig = function () {
	var config = "https://www.blogger.com/upload-image-ajax.do?blogID=16607461&security_token=AOuZoY4FGrbbIbPp7opHDVa4t5FojGxicw%3A1548143228479"
	urlInput.val(config).change()
}

//console.log('script break point 1')

// ---------------------------------------
// 操作界面：偵測圖片尺寸
// ---------------------------------------
var detectImg = $('<img class="detect-size" />').appendTo(panel)

var click_copy_button = "copy-thumbnail"

detectImg[0].onload = function () {
	var img = $(this)
	// http://1.bp.blogspot.com/-GL-qtFqFLJA/XEbeBhtSIoI/AAAAAAAEATc/WDmHkFxgpV8s66KRAf6h9Kb4qpr6L0UJACK4BGAYYCw/s1600/2019-01-19_132000.png
	if (img.attr("src") === undefined 
		|| (img.attr("src").endsWith(".png") !== true 
			&& img.attr("src").endsWith(".jpg") !== true 
			&& img.attr("src").endsWith(".jpeg") !== true
			&& img.attr("src").endsWith(".gif") !== true)) {
		return
	}
	
	// 讀取完成
	panel.attr("data-status", "image-loaded")
	
	// 開始做複製的動作
	$("." + click_copy_button).click()
}

var setImage = function (link) {
	panel.find('img').attr('src', link)
}

//console.log('script break point 2')

var waitMessage = $('<div class="wait-upload-message">Drop or Paste image here</div>').appendTo(panel)

// ---------------------------------------
// 操作界面：上傳結果
// ---------------------------------------

var grid = $('<table class="display-result"><tbody><tr><td class="buttons"></td><td class="td-img"><img /></td></tr></tbody></table>').appendTo(panel)
var buttonsPanel = grid.find('.buttons')

grid.find(".td-img img").click(function () {
	// 開始做複製的動作
	$("." + click_copy_button).click()
})
/*
var button0 = $('<button type="button" class="paste">' + 'PASTE' + '</button>').appendTo(buttonsPanel)
button0.click(function () {
	var pasteText = document.querySelector("#editor");
	pasteText.focus();
	document.execCommand("paste");
})
*/
var button1 = $('<button type="button" class="copy-link">' + '✂️LINK' + '</button>').appendTo(buttonsPanel)
button1.click(function () {
	var link = getImageLink()
	var size = getImageSize()
	copyToClip(link)
	click_copy_button = "copy-link"
})

var button3 = $('<button type="button" class="copy-full">' + '✂️FULL' + '</button>').appendTo(buttonsPanel)
button3.click(function () {
	var link = getImageLink()
	var alt = getImageTitle()
	var size = getImageSize()
	
	var html = '<a href="' + link + '">'
			+ '<img data-class="blogger-post-image" class="blogger-post-image" alt="' + alt + '" title="' + alt + '" src="' + link + '" border="0" width="' + size.width + '" height="' + size.height + '"/>'
			+ '</a>'
	copyToClip(html)
	click_copy_button = "copy-full"
})

var button2 = $('<button type="button" class="copy-thumbnail">' + '✂️THUMBNAIL' + '</button>').appendTo(buttonsPanel)
button2.click(function () {
	var resize = 450
	var linkFull = getImageLink()
	var linkThumbnail = getImageLink(resize)
	var alt = getImageTitle()
	var size = getImageSize(resize)
	
	var html = '<a href="' + linkFull + '">'
			+ '<img data-class="blogger-post-image" class="blogger-post-image" alt="' + alt + '" title="' + alt + '" src="' + linkThumbnail + '" border="0" width="' + size.width + '" height="' + size.height + '"/>'
			+ '</a>'
	copyToClip(html)
	click_copy_button = "copy-thumbnail"
})

var thumbnailSizeInput = $('<input type="text" class="thumbnail-size buttons" value="450">').appendTo(buttonsPanel)

var getImageLink = function (resize) {
	// mock up
	//return "http://1.bp.blogspot.com/-GL-qtFqFLJA/XEbeBhtSIoI/AAAAAAAEATc/WDmHkFxgpV8s66KRAf6h9Kb4qpr6L0UJACK4BGAYYCw/s1600/2019-01-19_132000.png"
	var link = panel.find('.detect-size').attr("src")
	if (typeof(resize) === "number") {
		var parts = link.split("/")
		parts[(parts.length-2)] = "s" + resize
		link = parts.join("/")
	}
	
	return link
}

var getImageTitle = function () {
	// mock up
	//return "http://1.bp.blogspot.com/-GL-qtFqFLJA/XEbeBhtSIoI/AAAAAAAEATc/WDmHkFxgpV8s66KRAf6h9Kb4qpr6L0UJACK4BGAYYCw/s1600/2019-01-19_132000.png"
	var link = panel.find('.detect-size').attr("src")
	var parts = link.split("/")
	return parts[(parts.length-1)]
}

var getImageSize = function (resize) {
	// mock up
	var img = panel.find('.detect-size')
	var width = img.width()
	var height = img.height()
	
	if (typeof(resize) === "number") {
		if (width > resize || height > resize) {
			if (width > height) {
				var radio = resize / width
				height = parseInt(height * radio, 10)
				width = resize
			}
			else {
				var radio = resize / height
				width = parseInt(width * radio, 10)
				height = resize
			}
		}
	}
	
	return {
		width: width, 
		height: height
	}
}

//console.log('script break point 3')

// ---------------------------------------
// 操作界面：上傳表單
// ---------------------------------------

var inputContanier = $('<div class="input-container"></div>').appendTo(panel)

var inputFile = $('<input class="box__file" type="file" name="files[]" />').appendTo(inputContanier)
var submitButton = $('<button class="box__button" type="submit">Upload</button>').appendTo(inputContanier)

panel.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
  .on('dragover dragenter', function() {
    panel.addClass('is-dragover');
  })
  .on('dragleave dragend drop', function() {
    panel.removeClass('is-dragover');
  })
  .on('drop', function(e) {
  	//console.log(e.originalEvent.dataTransfer)
  	
  	panel.attr("data-status", "uploading")
  	
    droppedFiles = e.originalEvent.dataTransfer.files;
    //panel.find('input[type="file"]').prop('files', droppedFiles);
    //panel.find('.input-container input[type="file"]').prop('files', droppedFiles);
    //return
    
    dropUpload(droppedFiles)
  });
  
var dropUpload = function (droppedFiles) {
	var inputFile = panel.find('.input-container input[type="file"]').prop('files', droppedFiles);
	
	var formData = new FormData();
	formData.append('file', inputFile[0].files[0]);
	
	
	// ----------
	
    // 就這裡來做xhr上傳吧
    var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == XMLHttpRequest.DONE) {
	    	console.log("ok")
	        var link = JSON.parse(xhr.responseText)['details']['fileUrl']
	        //console.log("2")
	        // 將link做一下整理
	        // http://4.bp.blogspot.com/-xGRBCt54Zfw/XEbeGAGLvEI/AAAAAAAEATk/IfmGf11sr6EVvOWyaL6CgkOqAZuapbGdgCK4BGAYYCw/s400/blob
	        var parts = link.split("/")
	        
	        parts[(parts.length-2)] = "s0"
	        //var ext = type.split("/")[1]
	        //parts[(parts.length-1)] = getTimestamp() + "." + ext
	        
	        // 處理一下名字的部分
	        var fileName = decodeURI(parts[(parts.length-1)])
	        //console.log(fileName)
	        if (fileName === "image.png" 
	        	|| fileName === "Presentation1.png" 
	        	|| fileName === "簡報1.png" 
	        	|| (fileName.startsWith("image%2B%28") && fileName.endsWith("%29.png"))) {
	        		parts[(parts.length-1)] = getTimestamp() + ".png"
	        		//console.log(parts[(parts.length-1)])
	        	}
	        
	        //console.log(JSON.parse(xhr.responseText));
	        link = parts.join("/")
	        setImage(link)
	        //console.log(link)
	    }
	}
	
	var url = getPostURL()
	//xhr.open("POST", "https://www.blogger.com/upload-image-ajax.do?blogID=" + blogID + "&security_token=" + security_token, true);
	
	
	xhr.open("POST", url, true);
	xhr.send(formData);
	//console.log("send")
}

// ---------------------------------------
// 貼上上傳功能
// ---------------------------------------

var uploadBase64 = function (base64, callback) {
	
	var u8Image  = b64ToUint8Array(base64);
	var type = base64.slice(5, base64.indexOf(';base64,'))
	//console.log("ready to upload: " + type)

	var formData = new FormData();
	formData.append("image", new Blob([ u8Image ], {type: type}));
	
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == XMLHttpRequest.DONE) {
	        //console.log(JSON.parse(xhr.responseText).details.fileUrl);
	        var link = JSON.parse(xhr.responseText)['details']['fileUrl']
	        
	        // 將link做一下整理
	        // http://4.bp.blogspot.com/-xGRBCt54Zfw/XEbeGAGLvEI/AAAAAAAEATk/IfmGf11sr6EVvOWyaL6CgkOqAZuapbGdgCK4BGAYYCw/s400/blob
	        var parts = link.split("/")
	        parts[(parts.length-2)] = "s0"
	        var ext = type.split("/")[1]
	        parts[(parts.length-1)] = getTimestamp() + "." + ext
	        
	        //console.log(JSON.parse(xhr.responseText));
	        link = parts.join("/")
	        callback(link)
	    }
	}
	
	//var blogID = BloggerClientFlags['65']
	//var security_token = encodeURIComponent(BloggerClientFlags['101'])
	
	// T https://www.blogger.com/upload-image-ajax.do?blogID=16607461&security_token=AOuZoY4ZGwDE1xUjbdLfAycoff4rHqKLzQ%3A1548143049319
	// F https://www.blogger.com/upload-image-ajax.do?blogID=16607461&security_token=AOuZoY4FGrbbIbPp7opHDVa4t5FojGxicw%3A1548143228479
	// T https://www.blogger.com/upload-image-ajax.do?blogID=16607461&security_token=AOuZoY4zns9s-69Lng-3MnFtnIfdzPnR9g%3A1548143230803
	// T https://www.blogger.com/upload-image-ajax.do?blogID=16607461&security_token=AOuZoY4zns9s-69Lng-3MnFtnIfdzPnR9g%3A1548143230803

	var url = getPostURL()
	//xhr.open("POST", "https://www.blogger.com/upload-image-ajax.do?blogID=" + blogID + "&security_token=" + security_token, true);
	xhr.open("POST", url, true);
	xhr.send(formData);
	//console.log("send")
}

function b64ToUint8Array(b64Image) {
   var img = atob(b64Image.split(',')[1]);
   var img_buffer = [];
   var i = 0;
   while (i < img.length) {
      img_buffer.push(img.charCodeAt(i));
      i++;
   }
   return new Uint8Array(img_buffer);
}

$(document).ready(function() {
  
  $('#editor').on('paste', function (e) {
    var orgEvent = e.originalEvent;
    for (var i = 0; i < orgEvent.clipboardData.items.length; i++) {
      if (orgEvent.clipboardData.items[i].kind == "file" && orgEvent.clipboardData.items[i].type == "image/png") {
				var imageFile = orgEvent.clipboardData.items[i].getAsFile();
				var fileReader = new FileReader();
        
				fileReader.onloadend = function () {
    			$('#result').html(fileReader.result);
  			}
        
			fileReader.readAsDataURL(imageFile);
			break;
      }
    }
  });
    
});

var getTimestamp = function() {
	var d = new Date()
    var pad2 = function (n) {  // always returns a string
        return (n < 10 ? '0' : '') + n;
    }

    return d.getFullYear() +
            pad2(d.getMonth() + 1) + 
            pad2(d.getDate()) +
        	"-" +
        	pad2(d.getHours()) +
        	pad2(d.getMinutes()) +
        	pad2(d.getSeconds());
}

//console.log('script break point 4')

// -------------------
// https://codepen.io/netsi1964/pen/IoJbg

// Created by STRd6
// MIT License
// jquery.paste_image_reader.js


var dataURL, filename;
var initPastImageReader = function (callback) {

(function($) {
	var defaults;
	$.event.fix = (function(originalFix) {
		return function(event) {
			event = originalFix.apply(this, arguments);
			if (event.type.indexOf("copy") === 0 || event.type.indexOf("paste") === 0) {
				event.clipboardData = event.originalEvent.clipboardData;
			}
			return event;
		};
	})($.event.fix);
	defaults = {
		callback: $.noop,
		matchType: /image.*/
	};
	return ($.fn.pasteImageReader = function(options) {
		if (typeof options === "function") {
			options = {
				callback: options
			};
		}
		options = $.extend({}, defaults, options);
		return this.each(function() {
			var $this, element;
			element = this;
			$this = $(this);
			return $this.bind("paste", function(event) {
				var clipboardData, found;
				found = false;
				clipboardData = event.clipboardData;
				return Array.prototype.forEach.call(clipboardData.types, function(type, i) {
					var file, reader;
					if (found) {
						return;
					}
					if (
						type.match(options.matchType) ||
						clipboardData.items[i].type.match(options.matchType)
					) {
						file = clipboardData.items[i].getAsFile();
						reader = new FileReader();
						reader.onload = function(evt) {
							return options.callback.call(element, {
								dataURL: evt.target.result,
								event: evt,
								file: file,
								name: file.name
							});
						};
						reader.readAsDataURL(file);
						//snapshoot();
						return (found = true);
					}
				});
			});
		});
	});
})(jQuery);
	
	$("html:first").pasteImageReader(function(results) {
		var url = getPostURL()
		if (url === false) {
			return
		}
		
		panel.attr("data-status", "uploading")
		
		filename = results.filename, dataURL = results.dataURL;
		//$data.text(dataURL);
		//$size.val(results.file.size);
		//$type.val(results.file.type);
		var img = document.createElement("img");
		img.src = dataURL;
		var w = img.width;
		var h = img.height;
		//$width.val(w);
		//$height.val(h);
		//console.log(dataURL)
		/*
		return $(".active")
			.css({
				backgroundImage: "url(" + dataURL + ")"
			})
			.data({ width: w, height: h });
		*/
		uploadBase64(dataURL, callback)
	});
}
	

// ---------------------------------------
// 複製功能
// ---------------------------------------

function copyText(text) {
  var copyTextInput = document.getElementById("puliClipboardInput")
  if (copyTextInput === null) {
    var copyTextInput = document.createElement("input");
    copyTextInput.id = "puliClipboardInput"
    copyTextInput.type = "text"
    document.body.appendChild(copyTextInput); 
  }
  
  copyTextInput.value = text  

  copyTextInput.style = "display: inline"
  /* Select the text field */
  copyTextInput.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");
  
  copyTextInput.style = "display: none"
}

function copyToClip(str) {
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
};

// ---------------------------------------
// 程式結尾
// ---------------------------------------

console.log('script end')

