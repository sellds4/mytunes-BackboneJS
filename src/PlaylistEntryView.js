var PlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= artist %></td><td><%= title %></td><td><button type="button" class="remove">Remove</button></td>'),

  events: {
    'click .play'   : 	function() { this.model.play(); },
    'click .remove'		: 	'delete'
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  delete: function() {
  	this.model.removeFromList();
  	this.$el.remove();
  }

});
