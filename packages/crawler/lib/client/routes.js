PostsCustomController = Posts.controllers.list.extend({
  view: 'recentlyCommented'
});

Router.route('/recentlycommented/', {
  controller: PostsCustomController,
  name: 'recentlyCommented'
});

PostsTwoCategories = Posts.controllers.list.extend({

  data: function () {
    return {
      terms: {
        view: 'twocategories',
        slug1: this.params.slug1,
        slug2: this.params.slug2
      }
    }
  }
  });

MultipleCategories = Posts.controllers.list.extend({

  data: function () {
    return {
      terms: {
        view: 'multipleCategories',
        slug1: this.params.slug1,
        slug2: this.params.slug2
      }
    }
  }
  });

Router.route('/category/:slug1/:slug2', {
    name: 'twocategories',
    controller: PostsTwoCategories
});

Router.route('/category/:slug1/:slug2', {
    name: 'twocategories',
    controller: MultipleCategories
});

Meteor.startup(function() {
Router.route('/findplace', {
    template: getTemplate('findplace')
});
});

