AccountsTemplates.configureRoute('signIn', {
  redirect: function () {
    var user = Meteor.user();
    if (user) {
      Router.go('/power');
      window.location.reload();
    }
    else {
      this.next();
    }
  },
  layoutTemplate: 'appLayout'
});
//AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'signInLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});
//AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 5,
  }]);

//console.log(AccountsTemplates.oauthServices());
//console.log(Accounts);