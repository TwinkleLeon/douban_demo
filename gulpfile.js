var gulp = require("gulp");
var cssmin = require("gulp-cssmin");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var htmlmin = require("gulp-htmlmin");

gulp.task("yscss", function () {
    gulp.src(["./src/**/*.css"], {
            base: "./src"
        })
        .pipe(cssmin())
        .pipe(gulp.dest("./dist"));
});
gulp.task("ysjs", function () {
    gulp.src(["./src/**/*.js", "!./src/asset/js/prefixfree.min.js", "!./src/node_modules/angular/*.js", "!./src/node_modules/angular-route/*.js"], {
            base: "./src"
        })
        .pipe(uglify())
        .pipe(gulp.dest("./dist"));
});
gulp.task("wcme", function () {
    gulp.watch("./src/app.js", ["ysjs"]);
});
gulp.task("yshtml", function () {
    gulp.src(["./src/**/*.html"], {
            base: "./src"
        })
        .pipe(htmlmin({
            removeComments: true,
            collapseWhitespace: true
        }))
        .pipe(gulp.dest("./dist"));
});