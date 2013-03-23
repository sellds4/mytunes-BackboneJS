var PlaylistView = Backbone.View.extend({

    initialize: function() {
      this.collection.on('change', this.render, this)
      this.render();
    },

    render: function() {
      this.$el.html(['click on something']);
      return this;
    }
});
