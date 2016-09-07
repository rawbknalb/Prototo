<template>
  <tr v-for="suboption in item.data.suboptions">
    <td class="mdl-data-table__cell--non-numeric">{{suboption.text}}</td>
    <td v-for="option in item.data.options">
      <mdl-radio class="table_radio" :checked.sync="check" value="" :value="[suboption.text, option.text]" ></mdl-radio>
    </td>
  </tr>
</template>

<script>
module.exports = {
  
  props: [
    {
      name: 'scale-suboption',
      type: Object
    },
  ],

  data: function() {

  }

};


</script>
