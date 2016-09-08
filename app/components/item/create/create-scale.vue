<template>

  <mdl-textfield
    floating-label="Item Text"
    :value.sync="item.text"
    class="uk-form-width-small">
  </mdl-textfield>

  <br>

  <mdl-textfield
    floating-label="Option Text"
    :value.sync="option.text"
    class="uk-form-width-small"
    @keyup.enter="addOption(option)">
  </mdl-textfield>

  <mdl-textfield
    floating-label="Option Value"
    :value.sync="option.value"
    class="uk-form-width-small"
    pattern="-?[0-9]*(\.[0-9]+)?"
    error="Input is not a number!"
    @keyup.enter="addOption(option)">
  </mdl-textfield>

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
    @keyup.enter="addSubOption(suboption)">
  </mdl-textfield>

  <mdl-button
    icon
    mini-fab
    accent
    @click.prevent="addSubOption(suboption)">
      <i class="material-icons">add</i>
  </mdl-button>

  <!-- Rendered Table -->
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

<script>
module.exports = {

  props: ["option", "suboption", "item"],

  data: function() {
    return {};
  },

  methods: {

  }
};

</script>
