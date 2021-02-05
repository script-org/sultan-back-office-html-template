var vm = new Vue({
  el: '#main-page',
  data: {
    isEdit: false,
    showPage: 'index',
    isShowAlert: false,
    message: '',
    employee: '0'
  },
  methods: {
    toPayrollCreatePage: function() {
      vm.showPage = 'payroll-create'
    },
    toIndexPage: function() {
      vm.showPage = 'index';
      vm.employee = '0';
      $('footer').slideUp();
    },
    toEmployeeInfoPage: function() {
      vm.showPage = 'employee-info';
    },
    toPayrollInfoPage: function() {
      if(vm.showPage !== 'employee-info') {
        vm.showPage = 'payroll-info';
        $('footer').slideDown();
      }
    },
    handleSave: function() {
      vm.isShowAlert = true;
      if(vm.showPage === 'payroll-create') {
        vm.message = 'Payment has been made successfully.';
      } else {
        vm.message = 'Payment has been made successfully.';
      }
      vm.showPage = 'index';
    },
    handlePayrollEdit: function() {
      setTimeout(function() {
        vm.showPage = 'payroll-edit';
        vm.employee = '1';
      }, 100);
    },
    handleDelete: function() {
      vm.message = 'Role has been deleted successfully.';
      vm.isShowAlert = true;
      vm.isEdit = false;
    }
  },
  watch: {
    isShowAlert: function(val) {
      if(val) {
        setTimeout(function() {
          vm.isShowAlert = false;
        }, 3000);
      }
    },
    employee: function(val) {
      if(val !== '0') {
        $('footer').slideDown();
      } else {
        $('footer').slideUp();
      }
    }
  },
});

$(document).ready(function() {
  $('footer').hide();
  $('footer').removeClass('d-none');
});