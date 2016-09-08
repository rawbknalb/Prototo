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

  <form class="uk-form" @submit.prevent="saveItem(item, module.id, module)">

    <create-item :item="item"></create-item>

      <div class="uk-form-row">
          <mdl-button raised accent>
              Save Item
              <i class="material-icons">save</i>
          </mdl-button>
      </div>

  </form>
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
    }
  }

}

</script>
