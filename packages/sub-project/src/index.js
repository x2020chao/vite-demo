import Button from './Button.vue';

export default {
  install(app) {
    app.component('lib-button', Button)
  }
}