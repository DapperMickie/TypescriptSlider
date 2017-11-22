var gulp = require("gulp");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var ts = require("gulp-typescript");

gulp.task("sass", function() {
    return gulp.src("src/stylesheets/app.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist/assets/css"));
});

gulp.task("ts", function() {
    return gulp.src("src/scripts/*.ts")
        .pipe(ts({
            noImplicitAny: true,
            outFile: "main.js",
            module: "amd"
        }))
        .pipe(gulp.dest("dist/assets/js"));
});

gulp.task("watch", ["sass"], function() {
    gulp.watch("src/stylesheets/**/*.scss", ['sass']);
});