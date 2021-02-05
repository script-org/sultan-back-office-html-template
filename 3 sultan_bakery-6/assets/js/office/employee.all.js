var vm = new Vue({
  el: '#main-page',
  data: {
    isEdit: false,
    isTrack: true,
    isShowAlert: false,
    isChanged: false,
    isActive: false,
    message: ''
  },
  methods: {
    handleSave: function() {
      vm.isEdit = false;
      vm.isTrack = true;
      vm.isChanged = false;
      vm.isShowAlert = true;
      vm.message = 'New employee has been added successfully';
    },
    handleEdit: function() {
      vm.isEdit = true;
      vm.isTrack = true;
      vm.isChanged = true;
      vm.isActive = false;
    },
    handleChange: function() {
      vm.isChanged = true;
      vm.isActive = true;
    },
    handleLeave: function() {
      vm.isActive = false;
      vm.isEdit = false;
      vm.isTrack = true;
      vm.isChanged = false;
    },
    handleDelete: function() {
      vm.message = 'Employee has been deleted successfully';
      vm.isShowAlert = true;
      vm.isActive = false;
      vm.isEdit = false;
      vm.isTrack = true;
      vm.isChanged = false;
    }
  },
  watch: {
    isChanged: function(val) {
      if(val) {
        $('footer').slideDown();
      } else {
        $('footer').slideUp();
      }
    },
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