<template>
    <div class="uk-form uk-form-horizontal">
        <form class="uk-form" @submit.prevent="save">
            <fieldset data-uk-margin>
                <legend>Create a new Module</legend>
                <div class="form-group">
                    <label>Name:</label>
                    <input class="uk-input-large uk-width-1-4" placeholder="" v-model="module.title">
                </div>
            </fieldset>
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--primary">
                <i class="material-icons">add</i>
            </button>
        </form>
    </div>
</template>

<script>
module.exports = {

  props: ["module"],

  data: function() {
    return {};
  },

  methods: {
      save: function() {
          var data = {module: this.module};
          this.$http.post('admin/osamaker/api/module/save', data)
              .then(function () {
                  // use the getModules method for updating
                  // the modules-array
                  // the view gets an update without a refresh
                  this.$dispatch('getModules', 'data');
                  UIkit.notify('Saved')
              })
              .catch(function() {
                  UIkit.notify('Something went wrong');
              });

          this.module = {
              id: '',
              title: '',
              roles: '',
          };
      }
  }
};

</script>
