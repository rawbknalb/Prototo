<template>
  <mdl-button id="{{module.title}}" accent raised icon>
      Select Type
      <i class="material-icons">favorite</i>
  </mdl-button>

  <mdl-menu for="" :for="module.title">

    <mdl-menu-item @click="setType(types.multiple)">Multiple Choise</mdl-menu-item>
    <mdl-menu-item @click="setType(types.single)">Single Choise</mdl-menu-item>
    <mdl-menu-item @click="setType(types.scale)">Scale</mdl-menu-item>
    <mdl-menu-item @click="setType(types.slider)">Slider</mdl-menu-item>

  </mdl-menu></template>

<script>
module.exports = {

  props: ["module", "item"],

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
      }
    };
  },

  methods: {

    setType: function (type, slider_params) {
      type.active = true;

      if (type.name == 'Multiple Choice') {
        this.item.data.type = 'multiple';
        this.types.single.active = false;
        this.types.scale.active = false;
        this.types.slider.active = false;

      }

      if (type.name == 'Single Choice') {
        this.item.data.type = 'single';
        this.types.multiple.active = false;
        this.types.scale.active = false;
        this.types.slider.active = false;

      }

      if (type.name == 'Scale') {
        this.item.data.type = 'scale';
        this.types.multiple.active = false;
        this.types.single.active = false;
        this.types.slider.active = false;

      }

      if (type.name == 'Slider') {
        this.item.data.type = 'slider';
        this.types.multiple.active = false;
        this.types.single.active = false;
        this.types.scale.active = false;

      }
    }
  }
};

</script>
