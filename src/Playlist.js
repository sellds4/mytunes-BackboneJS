var Playlist = Songs.extend({

  initialize: function(){
  	this.on('addToPlayList', function(song) {
  		if(this.length === 1) {
  			song.play();
  		}
  	}, this)
  }

  // this.on('ended', function() {
  // 	this.removeFromList(song);
  // 	this.length && this.at(0).play();
  // }, this)

});
