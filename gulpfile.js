var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var htmlbeautify = require('gulp-html-beautify');
var imagemin = require('gulp-imagemin');
var del = require('del');
var concat = require('gulp-concat');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('sass', function() {
  return sass('src/sass/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('html', function() {
  var options = {
    indentSize: 2
  };
  gulp.src('./src/html/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./dist/'))
    .pipe(reload({ stream:true }));
});

gulp.task('serve', ['sass'], function() {
  browserSync({
    server: {
      baseDir: './dist'
    }
  });

  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/html/*.html', ['html']);
  gulp.watch('src/**/*.nunjucks', ['templates']);
  gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('images', function() {
	gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});
gulp.task('clean', function () {
  return del([
    'dist/**/*'
  ]);
});
 
gulp.task('scripts', function() {
  return gulp.src(['./src/js/jquery.js', 
      './src/js/jquery1_12_4.js', 
      './src/js/jquery-migrate.min.js', 
      './src/js/jquery_ui.js', 
      './src/js/jquery.themepunch.tools.min.js', 
      './src/js/jquery.themepunch.essential.min.js', 
      './src/js/jquery.themepunch.revololution.min.js', 
      './src/js/lightbox.js', './src/js/photon.js', 
      './src/js/position.min.js',  
      './src/js/js_composer_front.min.js',  
      './src/js/what-input.js', 
      './src/js/foundation.js', 
      './src/js/imageMapResizer.min.js', 
      './src/js/tingle.js', 
      './src/js/responsive_menu_pro.js', 
      './src/js/app.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload({ stream:true }));
});

gulp.task('fonts', function() {
  return gulp.src(['./src/fonts/**/*'])
    .pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('templates', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('src/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['src/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('dist'))
  .pipe(reload({ stream:true }));
});

gulp.task('default', ['sass', 'html', 'images', 'serve']);