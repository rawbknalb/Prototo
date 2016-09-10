<template>

  <div class="uk-form-row">
    <mdl-textfield
            required
            floating-label="Item Text"
            :value.sync="item.text"
    >
    </mdl-textfield>
  </div>

  <div class="uk-form-row">

    <mdl-textfield
            floating-label="Add Option"
            :value.sync="option.text"
            id="{{ item.id }}"
            v-show="!option.input.textfield.active"
    >
    </mdl-textfield>

    <mdl-button
            v-show="option.text || option.input.textfield.active || option.input.textarea.active"
            icon
            mini-fab
            accent
            @click.prevent="addOption(option)">
      <i class="material-icons">add</i>
    </mdl-button>

    <mdl-switch :checked.sync="option.input.textfield.active" value="true">Textfield</mdl-switch>
    <mdl-switch :checked.sync="option.input.textarea.active" value="true">Textarea</mdl-switch>

  </div>

  <ul class="mdl-list" v-for="option in item.data.options">

    <li class="mdl-list__item">

      <!--
      **To Do: Change
      **:value (do not use option.text)
      **better: unique option identifier (id)
      -->
      <mdl-checkbox
              :checked.sync="checks"
              value=""
              :value="option.text"
              v-if="types.multiple.active"
      >
        {{option.text}}
      </mdl-checkbox>

                                <span class="mdl-list__item-secondary-action">

                                    <mdl-button
                                            class="mdl-button--icon"
                                            primary
                                            @click.prevent="removeOption(option)"
                                    >
                                        <i class="material-icons">delete</i>

                                    </mdl-button>

                                </span>

    </li>

  </ul>


</template>

<script>
module.exports = {

  props: ["option", "item"],

  data: function() {
    return {};
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
