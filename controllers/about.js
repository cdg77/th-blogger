Blogger.AboutController= Ember.Controller.extend({
  isPictureShowing: false,

  actions: {
    showNovelDetails: function() {
      alert('What\'s your fashion story?');
    },
    showDre: function() {
      this.set('isPictureShowing', true);
    },
    hideDre: function () {
      this.set('isPictureShowing', false);
    }
  }
});