var Song = Backbone.Model.extend({

  play: function() {
    this.trigger('play', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

  addToPlayList: function() {
  	this.trigger('addToPlayList', this);
  },

  removeFromList: function() {
  	this.trigger('removeFromList', this);
  }

});
