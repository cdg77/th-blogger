Blogger.PostsRoute = Ember.Route.extend ({
  // This is how to overide controller and template if you want something other thatn the default shown here(lines:3-5)
  // controllerName: 'posts',
  // renderTemplate: function() {
  //   this.render('posts');
  // },
  model: function() {
    return this.store.find('post');
  }
});