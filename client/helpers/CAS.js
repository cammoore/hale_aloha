/**
 * Created by carletonmoore on 8/8/15.
 */
// handle the CAS Login
casLogin = function() {
  var callback = function loginCallback(error){
    console.log("in login callback");
    if (error) {
      console.log(error);
      Session.set("login_error", error.reason);
    }
    else {
      console.log("trying to redirect.");
      Router.go('/power');
      window.location.reload();
    }
  };

  Meteor.loginWithCas(callback);
  return false;
};
