<template>
    <div class="mdl-card card-wide mdl-shadow--4dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">
            <mdl-textfield
                    required
                    floating-label="Item Text"
                    :value.sync="item.text"
                    v-show="toggle.edit_mode"
            >
            </mdl-textfield>

            <template v-show="!toggle.edit_mode">
              {{item.text}}
            </template>

        </h2>
      </div>
      <div class="mdl-card__supporting-text">
          <ul class="mdl-list" v-for="option in item.data.options">
              <li class="mdl-list__item">
                  <mdl-radio
                      :checked.sync="check"
                      class="mdl-js-ripple-effect"
                      value=""
                      :value="option.text"
                      v-if="!(option.input.textarea.active) && !(option.input.textfield.active)">
                      {{option.text}}
                  </mdl-radio>

                  <mdl-textfield
                      label="Other"
                      class="full_width"
                      :value.sync="option.input.textfield.input_text"
                      v-if="option.input.textfield.active">
                  </mdl-textfield>

                  <mdl-textfield
                      class="full_width list_textarea_padding"
                      floating-label="Textarea"
                      textarea rows="4"
                      v-if="option.input.textarea.active">
                  </mdl-textfield>

                  <span class="mdl-list__item-secondary-action">
                      <mdl-button
                      class="mdl-button--icon"
                      primary
                      @click.prevent="this.$dispatch('removeOption',option)">
                          <i class="material-icons">delete</i>
                      </mdl-button>
                  </span>
              </li>
          </ul>
      </div>
      <div class="mdl-card__actions mdl-card--border">
          <mdl-textfield
                 floating-label="Add Option"
                  :value.sync="option.text"
                  v-show="!option.input.textfield.active"
                  @keyup.enter.stop="this.$dispatch('addOption', option)">
          </mdl-textfield>

          <mdl-textfield
            class="uk-form-width-small"
            floating-label="Add Value"
            :value.sync="option.value"
            v-show="!option.input.textfield.active"
            @keyup.enter.stop="this.$dispatch('addOption', option)">
          </mdl-textfield>

          <mdl-button
              v-show="option.text || option.input.textfield.active || option.input.textarea.active"
              icon
              mini-fab
              accent
              @click.prevent="this.$dispatch('addOption', option)">
                  <i class="material-icons">add</i>
          </mdl-button>

          <form class="uk-form" @submit.prevent="this.$dispatch('saveItem', 'data')">
              <mdl-button class="card_save_button mdl-button--icon" fab primary>
                  <i class="material-icons">save</i>
              </mdl-button>
          </form>
      </div>
    </div>

  <div class="uk-form-row">



    <mdl-switch :checked.sync="option.input.textfield.active" value="true">Textfield</mdl-switch>
    <mdl-switch :checked.sync="option.input.textarea.active" value="true">Textarea</mdl-switch>

  </div>



</template>

<script>
module.exports = {

  props: ["option", "item"],

  data: function() {
    return {
      toggle: {
        edit_mode: true
      }
    };
  },

  methods: {
    toggleEditMode: function() {
      if (this.toggle.edit_mode == false) {
        this.toggle.edit_mode = true;
      }
      else this.toggle.edit_mode = false;
    }
  }
};

</script>
