var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template(
    '<td class="playSong">(<%= artist %>)</td> \
    <td class="playSong"><%= title %></td> \
    <td><button type"button" class="addtoplaylist">Add to Playlist</button></td>'),

  events: {

    'click .playSong'     : function() { this.model.play(); },
    'click .addtoplaylist': function() { this.model.addToPlayList(); }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
