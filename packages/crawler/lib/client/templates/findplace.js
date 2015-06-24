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

Posts.views.add("multipleCategories", function (terms) {
  if (terms.slug1!= -1) {
    venue1 = Categories.findOne({slug: terms.slug1})._id;
  } else {
    venue1 = 0;
  }
  if (terms.slug2!= -1) {
    venue2 = Categories.findOne({slug: terms.slug2})._id;
  } else {
    venue2 = 0;
  }
  if (terms.slug3!= -1) {
    venue3 = Categories.findOne({slug: terms.slug3})._id;
  } else {
    venue3 = 0;
  }
  if (terms.price1!= -1) {
    price_range1 = Categories.findOne({slug: terms.price1})._id;
  } else {
    price_range1 = 0;
  }
  if (terms.price2!= -1) {
    price_range2 = Categories.findOne({slug: terms.price2})._id;
  } else {
    price_range2 = 0;
  }
  if (terms.price3!= -1) {
    price_range3 = Categories.findOne({slug: terms.price3})._id;
  } else {
    price_range3 = 0;
  }
  if (terms.where1!= -1) {
    where1 = Categories.findOne({slug: terms.where1})._id;
  } else {
    where1 = 0;
  }
  if (terms.where2!= -1) {
    where2 = Categories.findOne({slug: terms.where2})._id;
  } else {
    where2 = 0;
  }
  if (terms.where3!= -1){
    where3 = Categories.findOne({slug: terms.where3})._id;
  } else {
    where3 = 0;
  }
  
  //case if one entire attribute is not searched for
  if ((venue1 || venue2 || venue3)==0) {
    return {
    find: { $and : [ 

      { $or: [ {categories: price_range1}, {categories:price_range2}, {categories:price_range3} ] },
      { $or: [ {categories: where1}, {categories:where2}, {categories:where3} ] }

      ]},
    options: {sort: {sticky: -1, score: -1}} // for now categories views default to the "top" view
    };
  }

  if ((price_range1 || price_range2 || price_range3)==0) {
    return {
    find: { $and : [ 

      { $or: [ {categories: venue1}, {categories:venue2}, {categories:venue3} ] },
      { $or: [ {categories: where1}, {categories:where2}, {categories:where3} ] }

      ]},
    options: {sort: {sticky: -1, score: -1}} // for now categories views default to the "top" view
    };
  }

  if ((where1 || where2 || where3)==0) {
    return {
    find: { $and : [ 

      { $or: [ {categories: venue1}, {categories:venue2}, {categories:venue3} ] },
      { $or: [ {categories: price_range1}, {categories:price_range2}, {categories:price_range3} ] }

      ]},
    options: {sort: {sticky: -1, score: -1}} // for now categories views default to the "top" view
    };
  }

  return {
  	find: { $and : [ 

      { $or: [ {categories: venue1}, {categories:venue2}, {categories:venue3} ] },
      { $or: [ {categories: price_range1}, {categories:price_range2}, {categories:price_range3} ] },
      { $or: [ {categories: where1}, {categories:where2}, {categories:where3} ] }

      ]},
    options: {sort: {sticky: -1, score: -1}} // for now categories views default to the "top" view
  };
});

