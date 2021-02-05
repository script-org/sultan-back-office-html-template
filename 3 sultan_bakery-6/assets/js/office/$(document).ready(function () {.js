

var vm = new Vue({
  el: '#container',
  data: {
    hideFooter: true,
    allCheck: false,
    storeHours: [
      {
        name: 'Monday',
        checked: false
      },
      {
        name: 'Tuesday',
        checked: false
      },
      {
        name: 'Wednesday',
        checked: false
      },
      {
        name: 'Thursday',
        checked: false
      },
      {
        name: 'Friday',
        checked: false
      },
      {
        name: 'Saturday',
        checked: false
      },
      {
        name: 'Sunday',
        checked: false
      }
    ],
    periodServices: ['Graveyard', 'Morning', 'Afternoon', 'Evening'],
    checkedItemCount: 0
  },
  components: {
    'store-hours': {
      props: {
        name: String,
        checked: Boolean
      },
      methods: {
        handleCheck: function () {
          vm.hideFooter = false;
          vm.storeHours.forEach(function(item) {
            console.log(item.checked);
          })
        }
      },
      template: `
        <tr style="height:60px">
          <td>{{name}}</td>
          <td>
            <span class="d-flex align-items-center">
              <span>
                <label class="ui-switch ui-switch-md">
                  <input type="checkbox" v-on:change="handleCheck" v-model="checked">
                  <i></i>
                </label>
              </span>
              <span class="ml-2" v-bind:class="{ 'text-dark font-weight-bold': checked }">{{checked ? 'Open' : 'Closed'}}</span>
            </span>
          </td>
          <td>
            <div class="d-flex align-items-center" v-if="checked">
              <div class="input-group">
                <select class="custom-select">
                  <option v-for="n in 24" v-bind:value="n">{{ Math.ceil(n / 2) + ':' + (n % 2 === 0 ? '30' : '00') }}</option>
                </select>
                <div class="input-group-append">
                  <select name="" class="custom-select" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </div>
              </div>
              <span class="px-5">-</span>
              <div class="input-group">
                <select class="custom-select">
                  <option v-for="n in 24" v-bind:value="n">{{ Math.ceil(n / 2) + ':' + (n % 2 === 0 ? '30' : '00') }}</option>
                </select>
                <div class="input-group-append">
                  <select name="" class="custom-select" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </div>
              </div>
            </div>
          </td>
        </tr>
      `
    },
    'period-services': {
      props: {
        flag: String,
      },
      data: function () {
        return {
          checked: false
        }
      },
      template: `
        <tr style="height:60px">
          <td>{{flag}}</td>
          <td>
            <span class="d-flex align-items-center">
              <span>
                <label class="ui-switch ui-switch-md">
                  <input type="checkbox" v-model="checked">
                  <i></i>
                </label>
              </span>
              <span class="ml-2" v-bind:class="{ 'text-dark font-weight-bold': checked }">{{checked ? 'Enabled' : 'Disabled'}}</span>
            </span>
          </td>
          <td>
            <div class="d-flex align-items-center" v-if="checked">
              <div class="input-group">
                <select class="custom-select">
                  <option v-for="n in 24" v-bind:value="n">{{ Math.ceil(n / 2) + ':' + (n % 2 === 0 ? '30' : '00') }}</option>
                </select>
                <div class="input-group-append">
                  <select name="" class="custom-select" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </div>
              </div>
              <span class="px-5">-</span>
              <div class="input-group">
                <select class="custom-select">
                  <option v-for="n in 24" v-bind:value="n">{{ Math.ceil(n / 2) + ':' + (n % 2 === 0 ? '30' : '00') }}</option>
                </select>
                <div class="input-group-append">
                  <select name="" class="custom-select" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </div>
              </div>
            </div>
          </td>
        </tr>
      `
    }
  }
});