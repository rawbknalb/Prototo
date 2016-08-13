<template>



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

                type: '',

                types: ['Multiple','Single','Skala']
            };
        },
        methods: {
            addItem: function (item, module_id, module) {
                var data = {item: _.merge(item, {module_id: module_id}) };
                //   console.log(data);
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
        }

    };


</script>
