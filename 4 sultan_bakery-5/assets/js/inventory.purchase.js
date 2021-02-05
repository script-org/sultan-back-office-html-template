var vm = new Vue({
  el: '#main-page',
  data: {
    isChanged: false,
    isEdit: false,
    isShowAlert: false,
    showPage: 'index',
    status: '',
    markTransferred: '',
    data: {
      supplier: '',
      location: '',
      orderDate: '',
      expectedOn: 'none',
      referenceNum: '',
      note: ''
    }
  },
  methods: {
    toIndexPage: function () {
      this.showPage = 'index';
      this.isChanged = false;
    },
    toCreatePage: function () {
      this.isEdit = false;
      this.showPage = 'create';
    },
    toReceivePage: function () {
      this.showPage = 'receive';
    },
    toEditPage: function() {
      this.showPage = 'create';
      this.isEdit = true;
    },
    toDetailDraftPage: function () {
      this.status = 'draft';
      this.showPage = 'detail';
    },
    toDetailPendingPage: function() {
      this.status = 'pending';
      this.showPage = 'detail';
    },
    toDetailCompletePage: function() {
      this.status = 'complete';
      this.showPage = 'detail';
    },
    toDetailPartialPage: function() {
      this.status = 'partial';
      this.showPage = 'detail';
    },
    handleConfirm: function() {
      this.isShowAlert = true;
      this.message = 'Remaining products have been canceled successfully.';
      this.toDetailPartialPage();
    },
    handleEdit: function () {
      this.isEdit = true;
      this.showPage = 'create';
    },
    handleChanged: function () {
      this.isChanged = true;
    },
    handleSaveCount: function () {
      this.showPage = 'detail';
      this.status = 'in-progress';
      this.isChanged = true;
      this.isShowAlert = true;
      this.message = 'Inventory count has been saved successfully';
    },
    handleDraftDelete: function() {
      this.isShowAlert = true;
      this.message = 'Purchase order draft has been deleted successfully';
      this.toIndexPage();
    },
    handleDelete: function() {
      this.isShowAlert = true;
      this.message = 'Purchase order has been deleted successfully';
      this.toIndexPage();
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
  },
  components: {
    'progress-bar': {
      data: function() {
        return {
          accepted: 60,
          canceled: 20,
          rejected: 20,
        }
      },
      template: `
        <tr>
          <td>
            <span class="text-dark">Strawberry Short Cake</span><br>
            <small>SKU 10008 | 5280003102913 | VAT 11%</small>
          </td>
          <td class="text-right" style="width: 150px">
            <div class="progress my-2" style="height: 5px">
              <div class="progress-bar bg-success" v-bind:style="{width: this.accepted + '%'}"></div>
              <div class="progress-bar bg-warning" v-bind:style="{width: this.canceled + '%'}"></div>
              <div class="progress-bar bg-danger" v-bind:style="{width: this.rejected + '%'}"></div>
            </div>
            <span>10 of 50</span>
          </td>
          <td>
            <div class="input-group">
              <input type="number" class="form-control" v-model="this.accepted">
              <div class="input-group-append">
                <span class="input-group-text">All</span>
              </div>
            </div>
          </td>
          <td>
            <div class="input-group">
              <input type="number" class="form-control" v-model="this.canceled">
              <div class="input-group-append">
                <span class="input-group-text">All</span>
              </div>
            </div>
          </td>
          <td>
            <div class="input-group">
              <input type="number" class="form-control" v-model="this.rejected">
              <div class="input-group-append">
                <span class="input-group-text">All</span>
              </div>
            </div>
          </td>
        </tr>`
    }
  }
});

$(document).ready(function () {
  $('footer').hide();
  $('footer').removeClass('d-none');
});