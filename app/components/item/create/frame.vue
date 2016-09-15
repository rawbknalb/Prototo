<template>

<div class="container">
  <h1>Create a new Item</h1>

  <h3>Choose an Item Type</h3>

  <!-- select item type component -->
  <select-item-type
    :module="module"
    :item="item"
    :types="types">
  </select-item-type>

  <h2>Selected: {{ item.data.type }}</h2>


    <create-item :item="item" :types="types" :module="module"></create-item>


</div>
</template>

<script>

module.exports = {

  components: {
    'select-item-type': require('./select-item-type.vue'),
    'create-item': require('./create-item.vue')
  },

  props: ["module"],

  data: function() {
    return {
      types: {
        multiple: {
          name: 'Multiple Choice',
          active: false
        },
        single: {
          name: 'Single Choice',
          active: false
        },
        scale: {
          name: 'Scale',
          active: false
        },
        slider: {
          name: 'Slider',
          active: false
        }
      },

      item: {
        text: '',
        data: {
          type: '',
          options: [],
          suboptions: [],
          slider: []
        }
      }
    };
  },

  methods: {

    addSlider: function() {

      this.item.data.slider.push(this.slider_params);

      this.slider_params = {
        min: '0',
        max: '100',
        step: '1',
        amount: ''
      };
    }
  }

}

</script>
