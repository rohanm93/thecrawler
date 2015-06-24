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
        slug1: this.params.slug1 || -1,
        slug2: this.params.slug2 || -1,
        slug3: this.params.slug3 || -1,
        price1: this.params.price1 || -1,
        price2: this.params.price2 || -1,
        price3: this.params.price3 || -1,
        where1: this.params.where1 || -1,
        where2: this.params.where2 || -1,
        where3: this.params.where3 || -1
      }
    }
  }
  });

Router.route('/category/:slug1/:slug2', {
    name: 'twocategories',
    controller: PostsTwoCategories
});

Router.route('/venue/:slug1?/:slug2?/:slug3?/price/:price1?/:price2?/:price3?/where/:where1?/:where2?/:where3?', {
    name: 'multiplecategories',
    controller: MultipleCategories
});

Meteor.startup(function() {
Router.route('/findplace', {
    template: getTemplate('findplace')
});
});

