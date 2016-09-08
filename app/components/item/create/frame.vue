<template>

<div class="container">
  <h1>Create a new Item</h1>

  <h3>Choose an Item Type</h3>

  <mdl-button id="{{module.title}}" accent raised icon>
      Select Type
      <i class="material-icons">favorite</i>
  </mdl-button>

  <mdl-menu for="" :for="module.title">

    <mdl-menu-item @click="setType(types.multiple)">Multiple Choise</mdl-menu-item>
    <mdl-menu-item @click="setType(types.single)">Single Choise</mdl-menu-item>
    <mdl-menu-item @click="setType(types.scale)">Scale</mdl-menu-item>
    <mdl-menu-item @click="setType(types.slider)">Slider</mdl-menu-item>

  </mdl-menu>

  <h2>Selected: {{ item.data.type }}</h2>
  <form class="uk-form" @submit.prevent="saveItem(item, module.id, module)">
    
      <create-scale v-if="types.scale.active"></create-scale>

      <div class="uk-form-row">
          <mdl-button raised accent
          >
              Save Item
              <i class="material-icons">save</i>
          </mdl-button>
      </div>

  </form>
</div>
</template>

<script>

module.exports = {

  props: ["module"],

  data: function(){
    return {

      item: {
          text: '',
          data: {
              type: '',
              options: [],
              suboptions: [],
              slider: []
          }
      },

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
    },
    saveItem: function (item, module_id, module) {
        // Check if item-type is slider
        if (item.data.type === 'slider'){
            this.addSlider();
        }
        var data = {item: _.merge(item, {module_id: module_id}) };
        this.$http.post('admin/osamaker/api/item/save', data)
        .then(function (response) {
            module.items.push(response.data.item);
            this.item = {
                text: '',
                data: {
                    type: '',
                    options: [],
                    suboptions: [],
                    slider: []
                }
            };
            UIkit.notify('Item saved');
        })
        .catch(function() {
            UIkit.notify('Something went wrong');
        });
    },
  }

}

</script>
