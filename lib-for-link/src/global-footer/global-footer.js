import "./puli-guest-book/puli-guest-book.js"
import "./puli-guest-book/puli-guest-book.less"
import "./puli-guest-book/init.js"

import "./sidebar-style/sidebar-list-item.less"
import "./sidebar-style/donate-list.less"

import "./blogger-feed-loader/random-posts.js"
import "./blogger-feed-loader/recent-lib.js"
import "./blogger-feed-loader/comment-lib.js"
import "./blogger-feed-loader/init.js"

import "./blogger-feed-loader/random-posts.less"

import "./cookie-banner/cookie-banner.less"
import "./cookie-banner/cookie-banner.js"

import "./blog-statistic/blog-statistic.js"

import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';

window.axios = axios

/**
 * 確認有正常載入用
 * @type Boolean
 */
window.PULI_BLOG_INITED = true