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
        console.log('App created');
    }
});
