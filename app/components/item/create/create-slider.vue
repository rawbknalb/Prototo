<template>

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

<script>
module.exports = {

  props: ["option", "item"],

  data: function() {
    return {
      slider_params: {
        min: '0',
        max: '100',
        step: '1',
        amount: ''
      }
    };
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
