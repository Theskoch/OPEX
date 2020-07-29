

let project_folder = "asset";
let source_folder = "client";

let path = {
    build:{
        html: project_folder + "/html/",
        php: project_folder + "/html/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/"
    },
    src:{
        html: [source_folder + "/html/*.html", "!" + source_folder + "/html/_*.html"],
        php: source_folder + "/html/*.php",
        css: source_folder + "/scss/*.scss",
        js: source_folder + "/js/*",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webr}",
        fonts: source_folder + "/fonts/"
    },
    watch:{
        html: source_folder + "/**/*.html",
        php: source_folder + "/**/*.php",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webr}"
    },
    clean: "./" + project_folder + "/"
}


let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require("gulp-file-include"),
    del = require("del"),
    scss = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    group_media = require("gulp-group-css-media-queries"),
    clean_css = require("gulp-clean-css"),
    uglify = require("gulp-uglify-es").default,
    imagemin = require("gulp-imagemin"),
    ttf2woff = require("gulp-ttf2woff"),
    ttf2woff2 = require("gulp-ttf2woff2");
    convert_encoding = require("gulp-convert-encoding");
    bom = require('gulp-bom');


function browserSync(params) {
    browsersync.init({
        // server: {
        //     baseDir: ["./" + project_folder, "./" + project_folder + "/html"]
        // },

        proxy: "opex",
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function php() {
    return src(path.src.php)
        .pipe(fileinclude())
        .pipe(convert_encoding({to: 'utf8'}))
        .pipe(bom())
        .pipe(dest(path.build.php))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expended"
            })
        )
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist:["last 5 versions"],
                cascade: true
            })
        )
        .pipe(clean_css())
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(
            uglify()
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3
            }))
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function fonts(params) {
    src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts))
    return src(path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts))
}


function watchFiles(params) {
    gulp.watch([path.watch.html],html);
    gulp.watch([path.watch.css],css);
    gulp.watch([path.watch.js],js);
    gulp.watch([path.watch.img],images);
    gulp.watch([path.watch.php],php);
}

function clean(params){
    return del(path.clean);
}




let build = gulp.series(clean, gulp.parallel(js, css, html, php, images, fonts));
let watch = gulp.parallel(build, watchFiles , browserSync);

exports.php = php;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;