import Vue from "vue";
import Component from "vue-class-component";
require("./login.scss");

@Component({
  template: require("./login.html")
})
export default class Login extends Vue {
  constructor() {
    super();
  }

  msg = 'Welcome to Your Vue.js App';
  mounted() {

  }
}
