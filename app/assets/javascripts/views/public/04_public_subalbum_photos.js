TwinkieSetApp.Views.PublicSubalbumPhotos = Backbone.CompositeView.extend({
  template: JST['public/04_public_subalbum_photos'],

  initialize: function () {
    this.listenTo(this.model.photos(), 'add', this.addPhotoView);
    this.model.photos().each(this.addPhotoView.bind(this));
  },

  events: {
    // 'click .public-subalbum-photos': 'addMasonry'
  },

  addPhotoView: function (photo) {
    var subview = new TwinkieSetApp.Views.PhotoItem({ model: photo });
    this.addSubview('.public-subalbum-photos', subview);
  },

  render: function () {
    var content = this.template({
      subalbum: this.model
    });
    this.$el.html(content);
    this.attachSubviews();



    return this;
  },



});
