<template>
  <h1>{{item.text}}</h1>
  <create-scale v-if="types.scale.active"
    :option="option"
    :suboption="suboption"
    :item="item">
  </create-scale>

  <create-slider v-if="types.slider.active"
                :option="option"
                :item="item"
                >
  </create-slider>

    <create-single v-if="types.slider.active"
                   :option="option"
                   :item="item"
                   >
    </create-single>

    <create-multiple v-if="types.slider.active"
                   :option="option"
                   :item="item"
                   >
    </create-multiple>

</template>

<script>
module.exports = {
  components: {
    'create-scale': require('./create-scale.vue'),
    'create-slider': require('./create-slider.vue'),
    'create-single': require('./create-single.vue'),
    'create-multiple': require('./create-multiple.vue')
  },
  props: ["item", "types"],

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
          }
        }
      },

      suboption: {
          text : ''
      }

    };
  },

  methods: {
      addOption: function (option) {

          this.item.data.options.push(option);

          this.option = {
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
                  }
              }
          };

          this.options = {
              text: ''
          }
      }
  }
};

</script>
