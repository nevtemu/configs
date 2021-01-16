const { src, dest } = require('gulp');
var rename = require("gulp-rename");

exports.default = function() {
  return src('src/*.js')
    .pipe(dest('dist/'));
}