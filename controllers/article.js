Bustle.ArticleController = Ember.Controller.extend({

  showPicture:false,
  actions:{
    showPictures: function(){
      this.set('showPicture', true);

    },
    hidePictures: function(){
      this.set('showPicture', false);
    };
  }



})
