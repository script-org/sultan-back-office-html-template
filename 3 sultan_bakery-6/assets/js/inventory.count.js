var vm = new Vue({
  el: '#main-page',
  data: {
    isChanged: false,
    isEdit: false,
    isShowAlert: false,
    showPage: 'index',
    status: '',
    data: {
      name: '0',
      type: 'partial',
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
    toCountPage: function () {
      this.showPage = 'count';
    },
    toDetailPendingPage: function () {
      this.status = 'pending';
      this.showPage = 'detail';
    },
    handleEdit: function() {
      this.isEdit = true;
      this.showPage = 'create';
    },
    handleChanged: function() {
      this.isChanged = true;
    },
    handleDelete: function() {
      this.isShowAlert = true;
      this.message = 'Inventory count has been deleted successfully';
      this.toIndexPage();
    },
    handleSaveCount: function() {
      this.showPage = 'detail';
      this.status = 'in-progress';
      this.isChanged = true;
      this.isShowAlert = true;
      this.message = 'Inventory count has been saved successfully';
    },
    handleCompleteCount: function() {
      this.showPage = 'detail';
      this.status = 'complete';
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
    isShowAlert: function (val) {
      if (val) {
        setTimeout(function () {
          vm.isShowAlert = false;
        }, 3000);
      }
    }
  }
});

$(document).ready(function () {
  $('footer').hide();
  $('footer').removeClass('d-none');
});