if(Meteor.isClient) {
  Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].public.meta.title
        title: 'Welcome',
        suffix: 'Hale Aloha Dashboard'
      }
  });
}
