import * as dartSass from "sass";
import {src, dest, watch, series} from "gulp";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

export function css( done ){
    src("src/sass/app.scss")
        .pipe(sass())
        .pipe(dest("build/css"));

    done();
}

export function js( done ){
    src("src/js/app.js")
    .pipe(dest("build/js"));

    done();
}

export function dev(){
    watch("src/sass/**/*.scss", css);
    watch("src/js/*.js", js);
}

export default series(js, dev);