 <template>

    <!-- This is the modal -->
    <div id="{{ module.id }}" class="uk-modal">
        <div class="uk-modal-dialog uk-modal-dialog-blank uk-height-viewport">
            <a class="uk-modal-close uk-close"></a>

            <div class="mdl-grid">
                <!-- This is the left half -->
                <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone">

                  <create-frame :module="module"></create-frame>

                    <hr>

                        <template v-if="types.multiple.active || types.single.active">



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

                        </template>

                        <template v-if="types.scale.active">

                            <mdl-textfield
                              floating-label="Item Text"
                              :value.sync="item.text"
                              class="uk-form-width-small"
                            >
                            </mdl-textfield>

                            <br>

                            <mdl-textfield
                                floating-label="Option Text"
                                :value.sync="option.text"
                                class="uk-form-width-small"
                                @keyup.enter="addOption(option)"
                            ></mdl-textfield>

                            <mdl-textfield
                                floating-label="Option Value"
                                :value.sync="option.value"
                                class="uk-form-width-small"
                                pattern="-?[0-9]*(\.[0-9]+)?"
                                error="Input is not a number!"
                                @keyup.enter="addOption(option)"
                            ></mdl-textfield>

                            <mdl-button
                                icon
                                mini-fab
                                accent
                                @click.prevent="addOption(option)">
                                    <i class="material-icons">add</i>
                            </mdl-button>


                            <mdl-textfield
                                floating-label="Suboption Text"
                                :value.sync="suboption.text"
                                class="uk-form-width-small"
                                @keyup.enter="addSubOption(suboption)"
                            ></mdl-textfield>

                            <mdl-button
                                icon
                                mini-fab
                                accent
                                @click.prevent="addSubOption(suboption)">
                                    <i class="material-icons">add</i>
                            </mdl-button>

                        </template>

                        <template v-if="types.slider.active">

                            <div class="uk-form-row">
                                <mdl-textfield
                                required
                                floating-label="Item Text"
                                :value.sync="item.text"
                                >
                                </mdl-textfield>
                            </div>

                            <div data-uk-margin>
                                <mdl-textfield
                                    floating-label="Step"
                                    :value.sync="slider_params.step"
                                    class="uk-form-width-small"
                                    pattern="-?[0-9]*(\.[0-9]+)?"
                                    error="Input is not a number!"
                                >
                                </mdl-textfield>

                                <mdl-textfield
                                    floating-label="min value"
                                    :value.sync="slider_params.min"
                                    class="uk-form-width-small"
                                    pattern="-?[0-9]*(\.[0-9]+)?"
                                    error="Input is not a number!"
                                >
                                </mdl-textfield>

                                <mdl-textfield
                                    floating-label="max value"
                                    :value.sync="slider_params.max"
                                    required
                                    class="uk-form-width-small"
                                    pattern="-?[0-9]*(\.[0-9]+)?"
                                    error="Input is not a number!"
                                >
                                </mdl-textfield>
                            </div>

                        </template>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

module.exports = {

  components: {
      'create-frame': require('./create/frame.vue'),
  },

    props: ["module"],
    data: function() {
        return {
            type: '',

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

            slider_params: {
                min: '0',
                max: '100',
                step: '1',
                amount: '',
            },

            checks: [],
            // types: ['Multiple','Single','Skala']
        };
    },
    methods: {


        addSubOption: function (suboption) {

          this.item.data.suboptions.push(suboption);

          this.suboption = {
            text: ''
          }
        },

        addSlider: function() {

            this.item.data.slider.push(this.slider_params);

            this.slider_params = {
                min: '0',
                max: '100',
                step: '1',
                amount: ''
            };
        },


    }

};

Vue.ready(module.exports);

</script>
