let mix = require('laravel-mix').mix;

mix.js('src/js/index.js', 'docs/js')
    .copy('src/index.html', 'docs/index.html')
    .sass('src/scss/app.scss', 'docs/css')
    .copy('./fonts', 'docs/fonts')
    .disableNotifications();
