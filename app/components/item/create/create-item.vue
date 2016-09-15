<template>

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

<create-single v-if="types.single.active"
:option="option"
:item="item"
>
</create-single>

<create-multiple v-if="types.multiple.active"
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
    props: ["item", "types", "module"],

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

    events: {
        addOption: function(option) {
            this.addOption(option);
        },
        removeOption: function(option) {
            this.removeOption(option);
        },
        saveItem: function(data) {
            this.saveItem(this.item, this.module.id, this.module)
        }
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
        },

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
        },

        removeOption: function (option) {
            this.item.data.options.$remove(option);
        }
    }
};

</script>
