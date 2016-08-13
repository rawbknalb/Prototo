<template>

    <!-- This is the modal -->
    <div id="{{ module.id }}" class="uk-modal">
        <div class="uk-modal-dialog modal-tweak uk-modal-dialog-large">
            <a class="uk-modal-close uk-close"></a>

            <div class="mdl-grid">
                <!-- This is the left half -->
                <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-tablet mdl-cell--12-col-phone">
                    <h1>Create a new Item</h1>
        <!--
                    <pre>
                        {{ item.data.type | json }}
                    </pre> -->

                    <h3>Choose an Item Type</h3>
                    <mdl-button id="menu-example" accent raised icon>
                        Select Type
                        <i class="material-icons">favorite</i>
                    </mdl-button>
                    <mdl-menu for="menu-example">
                        <mdl-menu-item @click="setType(types.multiple)">Multiple Choise</mdl-menu-item>
                        <mdl-menu-item @click="setType(types.single)">Single Choise</mdl-menu-item>
                        <mdl-menu-item @click="setType(types.scale)">Scale</mdl-menu-item>
                    </mdl-menu>
                    <br>
                    <!-- Selected: {{ item.data.type }} -->

                    <hr>
                    <form class="uk-form">
                        <!-- <mdl-select
                        label="Item Type"
                        id="item-type-select"
                        :value.sync="item.data.type"
                        :options="types"
                        >
                        </mdl-select> -->
                        <template v-if="types.multiple.active" >

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
                                >
                                </mdl-textfield>

                                <mdl-button icon mini-fab accent @click.prevent="addOption(option)">
                                    <i class="material-icons">add</i>
                                </mdl-button>
                            </div>

                        </template>


                        <div class="uk-form-row">
                            <mdl-button raised accent
                            @click.prevent="addItem(item, module.id, module)"
                            >
                                Save Item
                                <i class="material-icons">save</i>
                            </mdl-button>
                        </div>

                    </form>
                </div>

                <!-- This is the right half -->
                <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-tablet mdl-cell--12-col-phone">
                    <h1>Preview </h1>

                    <h3>{{ item.text }}</h3>

                    <!-- <mdl-checkbox :checked.sync="checks" value="" :value="option.text">{{option.text}}</mdl-checkbox> -->

                    <ul class="mdl-list" v-for="option in item.data.options">
                        <div class="mdl-list__item">
                            <mdl-checkbox :checked.sync="checks" value="" :value="option.text">{{option.text}}</mdl-checkbox>
                            <span class="mdl-list__item-secondary-action">
                                <mdl-button
                                    class="mdl-button--icon"
                                    primary
                                    @click.prevent="removeOption(option)"
                                >
                                    <i class="material-icons">delete</i>
                                </mdl-button>
                            </span>
                        </div>

                    </ul>
                </div>

            </div>

        </div>

    </div>

</template>

<script>

module.exports = {
    props: [
        {
            name: 'module',
            type: Object
        },
    ],
    data: function() {
        return {

            item: {
                text: '',
                data: {
                    type: '',
                    options: []
                }
            },

            types: {
                multiple: {
                    name: 'Multiple Choice',
                    active: false,
                },
                single: {
                    name: 'Single Choice',
                    active: false,
                },
                scale: {
                    name: 'Scale',
                    active: false,
                }
            },

            type: '',

            option: {
                text: '',
                value: 1,
                id: 1,
            },

            checks: [],
            // types: ['Multiple','Single','Skala']
        };
    },
    methods: {

        addItem: function (item, module_id, module) {

            var data = {item: _.merge(item, {module_id: module_id}) };

            this.$http.post('admin/osamaker/api/item/save', data)

            .then(function (response) {

                module.items.push(response.data.item);

                this.item = {
                    text: '',
                    data: {
                        type: '',
                        options: []
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
                value: 1,
                id: 1
            }
        },

        removeOption: function (option) {

            this.item.data.options.$remove(option);

        },

        setType: function (type) {

            type.active = true;

            if (type.name == 'Multiple Choice') {
                this.item.data.type = 'multiple';
                this.types.single.active = false;
                this.types.scale.active = false;
            };

            if (type.name == 'Single Choice') {
                this.item.data.type = 'single';
                this.types.multiple.active = false;
                this.types.scale.active = false;
            };

            if (type.name == 'Scale') {
                this.item.data.type = 'scale';
                this.types.multiple.active = false;
                this.types.single.active = false;
            };
        }

    }

};


</script>
