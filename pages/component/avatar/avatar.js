const util = require('../../../utils/util.js')
Component({
  properties: {
    url: {
      type: String,
      value: ''
    },
    login: {
      type: String,
      value: ''
    },
    action: {
      type: String,
      value: ''
    },
    created_at: {
      type: String,
      value: '',
      observer() {
        this.handleTimeago();
      }
    },
  },

  data: {
    timeago: ''
  },

  methods: {
    handleTimeago: function () {
      this.setData({ timeago: util.timeAgo(this.data.created_at)})
    },
  }
})