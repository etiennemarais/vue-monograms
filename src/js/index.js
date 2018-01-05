import Vue from 'vue';
Vue.config.debug = true;

/**
 * Application bootstrap
 */
import App from './App';

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
