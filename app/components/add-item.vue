<template>
            <mdl-textfield floating-label="New Item" :value.sync="item.text" ></mdl-textfield>

            <mdl-button fab accent @click="this.$root.addItem(item, module.id, module)"><i class="material-icons">add</i></mdl-button>
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
                    item_order: ''
                },
                items: '',
            };
        }
        
    };


</script>
