let mix = require('laravel-mix').mix;

mix.js('demo/js/index.js', 'docs/js')
    .copy('demo/index.html', 'docs/index.html')
    .sass('demo/scss/app.scss', 'docs/css')
    .disableNotifications();
