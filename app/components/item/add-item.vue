 <template>

    <!-- This is the modal -->
    <div id="{{ module.id }}" class="uk-modal">
        <div class="uk-modal-dialog uk-modal-dialog-blank uk-height-viewport modal-backround">
            <a class="uk-modal-close uk-close"></a>
            <h4>Icon only, fullwidth</h4>

<ui-tabs type="icon" fullwidth>
    <ui-tab icon="book">
        My books
    </ui-tab>

    <ui-tab icon="person">
        Authors
    </ui-tab>

    <ui-tab icon="collections_bookmark">
        My collections
    </ui-tab>

    <ui-tab icon="favorite">
        <b>Favourite with longer content</b>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!</p>
    </ui-tab>
</ui-tabs>
            <div class="mdl-grid">

              <div class="mdl-components mdl-js-components mdl-cell--top mdl-cell--stretch mdl-cell--2-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                <aside class="mdl-components__nav docs-text-styling mdl-shadow--4dp">
                  <h2>Items</h2>

                    <a v-for="item in module.items" href="#{{ category.name }}-section" class="mdl-components__link mdl-component badges">
                      <!-- <div class="mdl-components__link-image">
                      {{item.text}}
                    </div> -->
                    <span class="mdl-components__link-text">{{ item.text }}</span>
                  </a>

              </aside>
            </div>
            <div class="mdl-cell--top mdl-cell--stretch mdl-cell--10-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
              <h1>TestTest</h1>
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
