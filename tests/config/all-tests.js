//var context = require.context('./tests', true, /.js$/);
var context = require.context('../', true, /.js$/);
context.keys().forEach(context);
module.exports = context;