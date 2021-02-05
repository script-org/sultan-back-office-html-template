var vm = new Vue({
  el: '#main-page',
  data: {
    isEdit: false,
    isTrack: true,
    isShowAlert: false,
    isChanged: false,
    message: '',
    title: '',
    isBackOffice: false,
    isPOS: false
  },
  methods: {
    handleSave: function() {
      vm.isEdit = false;
      vm.isTrack = true;
      vm.isChanged = false;
      vm.isShowAlert = true;
      vm.isPOS = false;
      vm.isBackOffice = false;
      vm.message = 'New role has been added successfully';
    },
    handleEdit: function() {
      vm.isEdit = true;
      vm.isTrack = true;
      vm.title = 'Manager'
      vm.isChanged = true;
      vm.isBackOffice = true;
      vm.isPOS = true;
    },
    handleChange: function() {
      vm.isChanged = true;
    },
    handleLeave: function() {
      vm.isEdit = false;
      vm.isTrack = true;
      vm.isChanged = false;
      vm.title = '';
      vm.isBackOffice = false;
      vm.isPOS = false;
    },
    handleDelete: function() {
      vm.message = 'Role has been deleted successfully';
      vm.isShowAlert = true;
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