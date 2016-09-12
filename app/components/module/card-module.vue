

<template>

<div class="mdl-card mdl-cell--top mdl-cell--stretch mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-shadow--8dp">

    <div class="mdl-card__title card-background">
        <div class="mdl-card__title-text title-text">
            {{module.title}} <br>
        </div>
    </div>
    <div class="mdl-card__supporting-text card-text-background">
        <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam accusamus, consectetur.
        </p>
    </div>


    <div class="mdl-card__actions">
        <!-- This is a button toggling the modal -->
        <mdl-button colored accent raised data-uk-modal="{target:'#{{ module.id }}'}">
            <i class="material-icons">add</i>
            Show Items (Modal)
        </mdl-button>

        <!-- This is the button toggling the off-canvas sidebar -->
        <mdl-button colored accent raised data-uk-offcanvas="{target:'#{{ module.title }}'}">
            <i class="material-icons">add</i>
            Show Items (Off-Canvas)
        </mdl-button>

    </div>

    <div class="mdl-card__menu">
        <mdl-button v-mdl-ripple-effect fab accent @click="remove(module, modules)">
            <i class="material-icons">delete</i>
        </mdl-button>

        <mdl-button v-mdl-ripple-effect fab accent @click="update(module)"><i class="material-icons">save</i></mdl-button>


    </div>
</div>
</div>

</template>

<script>

    module.exports = {
        props: [],
        data: function() {
            return {
                item: {
                    text: '',
                    item_order: ''
                },
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

        methods: {
            deleteItem: function(item, items) {
                items.$remove(item);

            },
        }
    };


</script>
