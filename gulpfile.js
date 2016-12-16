var elixir = require('laravel-elixir');
require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('application.scss', 'docs/css/application.css')
        .sass('pc/application.scss', 'docs/pc/css/application.min.css')
        .sass('sp/application.scss', 'docs/sp/css/application.min.css')
        // .scripts([
        //     '../../../node_modules/jquery/dist/jquery.js',
        //     '../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
        // ], './docs/js/application.js');
        .webpack('application.js', 'docs/js/application.js')
        .webpack('pc/application.js', 'docs/pc/js/application.min.js')
        .webpack('sp/application.js', 'docs/sp/js/application.min.js');
});