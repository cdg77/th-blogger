Blogger.PostController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    editPost: function() {
      this.set('isEditing', true);
    },

    save: function() {
      this.set('isEditing', false);
    }
  }


});