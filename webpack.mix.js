const mix = require('laravel-mix');

/*
  |--------------------------------------------------------------------------
  | Mix Asset Management
  |--------------------------------------------------------------------------
  |
  | Mix provides a clean, fluent API for defining some Webpack build steps
  | for your Laravel application. By default, we are compiling the Sass
  | file for the application as well as bundling up all the JS files.
  |
 */

  mix.webpackConfig({
    resolve: {
      extensions: ['.ts','.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        // エイリアス上手くいってない
        '@': __dirname + '/resources/ts'
      }
    },
  })
  .ts('resources/ts/app.ts', 'public/js/app.js')
  .sass('resources/sass/app.scss', 'public/css');
