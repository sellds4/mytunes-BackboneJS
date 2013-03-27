var Song = Backbone.Model.extend({
  initialize: function(song){
    this.set('selectedSong', song);
  },

  play: function(){
    this.trigger('play', this);

  },

  addToPlayList: function(){
  	this.trigger('addToPlayList', this);
  },

  removeFromList: function() {
  	this.trigger('removeFromList', this);
  }

});
