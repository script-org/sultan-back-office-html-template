var vm = new Vue({
  el: '#main-page',
  data: {
    isEdit: false,
    isShowAlert: false,
    message: '',
  },
  methods: {
    handleAdd: function() {
      vm.isEdit = false
    },
    handleSave: function() {
      vm.isShowAlert = true;
      if(vm.isEdit) {
        vm.message = 'Timecard has been saved successfully.';
      } else {
        vm.message = 'Timecard has been added successfully.';
      }
      vm.isEdit = false;
    },
    handleEdit: function() {
      vm.isEdit = true;
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
    }
  }
});

$(document).ready(function() {
  $('footer').hide();
  $('footer').removeClass('d-none');
});