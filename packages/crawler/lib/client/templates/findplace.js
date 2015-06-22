Posts.views.add("recentlyCommented", function (terms) {
  return {
    options: {sort: {lastCommentedAt: -1}}
  };
});

Posts.views.add("twocategories", function (terms) {
  var categoryIds = [];
  id1 = Categories.findOne({slug: terms.slug1})._id;
  id2 = Categories.findOne({slug: terms.slug2})._id;
  categoryIds.push(Categories.findOne({slug: terms.slug1})._id);
  categoryIds.push(Categories.findOne({slug: terms.slug2})._id);
  return {
  	find: { $and : [ { categories: id1}, {categories:id2} ]},
    options: {sort: {sticky: -1, score: -1}} // for now categories views default to the "top" view
  };
});
