Bustle.Router.map(function() {
  this.resource('articles', {path: '/'}, function(){
    this.resource('eagles');
    this.resource('coffee');
    this.resource('bridges');
    this.resource('oceans');
  });

});
