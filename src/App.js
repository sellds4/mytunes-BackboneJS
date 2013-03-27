var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('playlist', new Playlist());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('addToPlayList', function(song){
      this.get('playlist').add(song);
    }, this);

    params.library.on('removeFromList', function(song){
      this.get('playlist').remove(song);
    }, this);
  }

});
