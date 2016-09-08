 <template>

    <!-- This is the modal -->
    <div id="{{ module.id }}" class="uk-modal">
        <div class="uk-modal-dialog modal-tweak uk-modal-dialog-large">
            <a class="uk-modal-close uk-close"></a>

            <div class="mdl-grid">
                <!-- This is the left half -->
                <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-tablet mdl-cell--12-col-phone">

                  <create-frame :module="module"><create-frame>

                    <hr>

                        <template v-if="types.multiple.active || types.single.active">

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

                <!-- This is the right half -->
                <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-tablet mdl-cell--12-col-phone">
                    <h1>Preview </h1>

                    <h3>{{ item.text }}</h3>

                    <!-- This is the slider-preview -->
                    <template v-if="types.slider.active">

                        <div class="uk-form-row">

                            <mdl-textfield
                                floating-label="Value"
                                :value.sync="slider_params.amount"
                                readonly
                            >
                            </mdl-textfield>

                            <mdl-slider
                                :value.sync="slider_params.amount"
                                :min.sync="slider_params.min"
                                :max.sync="slider_params.max"
                                :step.sync="slider_params.step"
                            >
                            </mdl-slider>

                        </div>
                    </template>

                    <!-- This is the slider-preview -->
                    <template v-if="types.scale.active">

                      <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">

                        <thead>
                          <tr>
                            <th></th>
                            <th
                              class="mdl-data-table__cell--non-numeric"
                              v-for="option in item.data.options"
                            >
                              {{option.text}}
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr v-for="suboption in item.data.suboptions">
                            <td class="mdl-data-table__cell--non-numeric">{{suboption.text}}</td>
                            <td v-for="option in item.data.options">
                              <mdl-radio
                                class="table_radio"
                                :checked.sync="check[suboption.text]"
                                value=""
                                :value="option.text">
                              </mdl-radio>
                            </td>
                          </tr>
                        </tbody>
                      </table>


                    </template>

                    <!-- This is list of options -->
                    <!-- To Do: Preview-Components -->
                    <template v-if="types.multiple.active">
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

                    <!-- This is list of options -->
                    <!-- To Do: Preview-Components -->
                    <template v-if="types.single.active">
                        <ul class="mdl-list" v-for="option in item.data.options">

                            <li class="mdl-list__item">

                                <!--
                                **To Do: Change
                                **:value (do not use option.text)
                                **better: unique option identifier (id)
                                -->

                                <mdl-radio
                                    :checked.sync="check"
                                    class="mdl-js-ripple-effect"
                                    value=""
                                    :value="option.text"
                                    v-if="!(option.input.textarea.active) && !(option.input.textfield.active)"

                                >
                                    {{option.text}}
                                </mdl-radio>

                                <mdl-textfield
                                    label="Other"
                                    class="full_width"
                                    :value.sync="option.input.textfield.input_text"
                                    v-if="option.input.textfield.active"
                                >
                                </mdl-textfield>


                                <mdl-textfield
                                    class="full_width list_textarea_padding"
                                    floating-label="Textarea"
                                    textarea rows="4"
                                    v-if="option.input.textarea.active"
                                >
                                </mdl-textfield>



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
                    },
                }
            }

            this.options = {
                text: ''
            }
        },

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
                amount: '',
            };
        },

        removeOption: function (option) {

            this.item.data.options.$remove(option);

        },

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

Vue.ready(module.exports);

</script>
