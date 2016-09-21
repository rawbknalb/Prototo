<template>
  <ui-modal
  :show.sync="show.module"
  type="large"
  hide-footer
  header="Module Name">
  <div class="mdl-grid">

    <div class="mdl-components mdl-js-components mdl-cell--top mdl-cell--stretch mdl-cell--2-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
      <aside class="mdl-components__nav docs-text-styling mdl-shadow--4dp">
        <h2>Items</h2>
        <template v-for="module in modules">
          <a v-for="item in module.items" href="#{{ category.name }}-section" class="mdl-components__link mdl-component badges">
            <!-- <div class="mdl-components__link-image">
            {{item.text}}
          </div> -->
          <span class="mdl-components__link-text">{{ item.text }}</span>
        </a>
      </template>
    </aside>
  </div>
  <div class="mdl-cell--top mdl-cell--stretch mdl-cell--10-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
    <h1>TestTest</h1>
  </div>
  </div>

  </ui-modal>
</template>

<script>
module.exports = {

  props: ["module"],
  events: {
    Test: function(module) {
      console.log(module);
    }
  },
  data: function() {
    return {}
  },

  methods: {

  }
};

</script>
