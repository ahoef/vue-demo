// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

console.log('Welcome!');

var Alert = {
  props: {
    message: {
      type: String
    }
  },

  methods: {
    close() {
      this.$emit("close");
    }
  },

  template: "<p v-html='message'></p>"
};

var utils = {
  methods: {
    logString(string) {
      console.log(string);
    },
  }
};

new Vue({
  el: "#container",

  data: {
    alertMessage: null,
    dogs: null,
    headline: "Hello 👋🐩😎✨"
  },

  methods: {
    handleClick(name, description) {
      this.setAlert(name);
      this.logString(description);
    },

    setAlert(dogName) {
      this.alertMessage = `${dogName} is cute!`;
    }
  },

  components: {
    'alert': Alert
  },

  mixins: [utils],

  created() {
    axios.get("/dogs.json").then(response => {
      this.dogs = response.data;
    })
  }
});

