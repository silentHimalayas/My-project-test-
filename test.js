import Vue from 'vue';

export default  Vue.component('test', {
    template: '<span>{{msg}}</span>',
    data () {
        msg: 'this is a test'
    }
})