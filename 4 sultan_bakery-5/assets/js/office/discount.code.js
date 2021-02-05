var vm = new Vue({
  el: '#main-page',
  data: {
    isChanged: false,
    isEdit: false,
    showPage: 'index',
    isShowAlert: false,
    message: '',
    isEndDate: false,
    summaryInfo: {
      discountName: '',
      discountType: '',
      appliesTo: 'entire'
    }
  },
  methods: {
    toIndexPage: function () {
      vm.showPage = 'index';
      vm.isEdit = false;
      vm.isChanged = false;
    },
    toCreatePage: function() {
      vm.showPage = 'create';
      vm.isEdit = false;
    },
    toEditPage: function () {
      vm.isEdit = true;
      vm.showPage = 'edit';
    },
    handleSave: function () {
      vm.isShowAlert = true;
      if (vm.showPage === 'create') {
        vm.message = 'Discount code has been saved successfully.';
      } else {
        vm.message = 'Discount code has been saved successfully.';
      }
      this.toIndexPage();
    },
    handleEdited: function() {
      vm.isChanged = true;
    },
    handleDelete: function () {
      vm.message = 'Discount code has been deleted successfully.';
      this.toIndexPage();
      vm.isShowAlert = true;
    }
  },
  watch: {
    isShowAlert: function (val) {
      if (val) {
        setTimeout(function () {
          vm.isShowAlert = false;
        }, 3000);
      }
    },
    isChanged: function (val) {
      if(val) {
        $('footer').slideDown();
      } else {
        $('footer').slideUp();
      }
    }
  },
});

$(document).ready(function () {
  $('footer').hide();
  $('footer').removeClass('d-none');
});