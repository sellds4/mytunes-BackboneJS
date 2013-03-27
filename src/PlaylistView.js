var PlaylistView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('add', this.render, this);
  },

  render: function() {
    // TODO: figure out detach stupid, when implementing remove song from playlist
    // this.$el.children().detach();

    return this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song) {
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }

});
