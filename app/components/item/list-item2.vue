
<template>
  <ul class="mdl-list uk-sortable">
    <li class="mdl-list__item" v-dragable-for="item in module.items" v-bind:options="options" >
      <span class="mdl-list__item-primary-content">
        <div><i class="handle material-icons mdl-list__item-icon">reorder</i></div>
        <span>
          Item Name: {{ item.text }} <br>
        </span>
      </span>
      <span class="mdl-list__item-secondary-action">
        <mdl-button class="mdl-button--icon" primary @click.stop="this.$root.deleteItem(item, module.items, module.title)"><i class="material-icons">delete</i></mdl-button>
      </span>
    </li>
  </ul>
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
                items: '',
                edit: false,
                options: {
                    handle: '.handle',
                    chosenClass: "chosen",
                    ghostClass: "ghost",
                    edit: false,
                    animation: 150
                },
            };
        },

    };


</script>
