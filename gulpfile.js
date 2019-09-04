"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var server = require("browser-sync").create();
var rename = require("gulp-rename");

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "server"));

gulp.task("html-build", function () {
  return gulp.src("source/*.html")
    .pipe(gulp.dest("build"))
});

gulp.task("js-build", function () {
  return gulp.src("source/js/*.js")
    .pipe(gulp.dest("build/js"))
});

gulp.task("img-build", function () {
  return gulp.src("source/img/*.{png,jpg,webp}")
    .pipe(gulp.dest("build/img"))
});

gulp.task("svg-build", function () {
  return gulp.src(["source/img/logo-*.svg", "source/img/sprites.svg"])
    .pipe(gulp.dest("build/img"))
});

gulp.task("fonts-build", function () {
  return gulp.src(["source/fonts/*.woff", "source/fonts/*.woff2"])
    .pipe(gulp.dest("build/fonts"))
});
