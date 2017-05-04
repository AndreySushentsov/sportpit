'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
    var locals = require('../../content.json');
    return $.gulp.src('./source/template/views/*.pug')
      .pipe($.gp.pug({
        locals: locals,
        pretty: true
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
