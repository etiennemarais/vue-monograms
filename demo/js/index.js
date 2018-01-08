import Vue from 'vue';
if (process.env.NODE_ENV === 'development') {
    Vue.config.debug = true;
}

/**
 * Application bootstrap
 */
import App from './App';
import Monogram from '../../src/js';
Vue.component('monogram', Monogram);

/**
 * Initialise App
 * @type {Vue}
 */
const app = new Vue({
    el: '#app',
    render: h => h(App),
    created () {
        console.log('Hi there. You can hire me. <hello@etiennemarais.co.za>');
    }
});
