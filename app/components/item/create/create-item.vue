<template>
  <h1>{{item.text}}</h1>
  <create-scale
    :option="option"
    :suboption="suboption"
    :item="item">
  </create-scale>

</template>

<script>
module.exports = {
  components: {
    'create-scale': require('./create-scale.vue')
  },
  props: ["item"],

  data: function() {
    return {

      option: {
        text: '',
        value: '',
        id: 1,
        input: {
          textfield: {
            active: false,
            input_text: ''
          },
          textarea: {
            active: false,
            input_text: ''
          },
        }
      },

      suboption: {
          text : ''
      },

    };
  },

  methods: {

  }
};

</script>
