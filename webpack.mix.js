let mix = require('laravel-mix').mix;

mix.js('src/js/index.js', 'docs/js')
    .js('src/js/components/Monogram', 'dist/vue-monograms.js')
    .copy('src/index.html', 'docs/index.html')
    .sass('src/scss/app.scss', 'docs/css')
    .disableNotifications();
