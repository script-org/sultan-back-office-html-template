var vm = new Vue({
  el: '#main-page',
  data: {
    isChanged: false,
    showPage: 'index',
    data: {
      name: '0',
      reason: 'inventory-count',
      note: ''
    }
  },
  methods: {
    toIndexPage: function () {
      this.showPage = 'index';
      this.isChanged = false;
    },
    toCreatePage: function () {
      this.showPage = 'create';
    },
    toDetailPage: function () {
      this.showPage = 'detail';
    },
    handleChanged: function() {
      this.isChanged = true;
    }
  },
  watch: {
    isChanged: function (val) {
      if (val) {
        $('footer').slideDown();
      } else {
        $('footer').slideUp();
      }
    },
  }
});

$(document).ready(function () {
  $('footer').hide();
  $('footer').removeClass('d-none');
});