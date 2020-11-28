var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var cognitoISP = new AWS.CognitoIdentityServiceProvider();

var paramsAuth = {
  //AuthFlow: USER_SRP_AUTH | REFRESH_TOKEN_AUTH | REFRESH_TOKEN | CUSTOM_AUTH | ADMIN_NO_SRP_AUTH | USER_PASSWORD_AUTH,
  AuthFlow: 'ADMIN_NO_SRP_AUTH',
  ClientId: '',
  UserPoolId: '',

  AuthParameters: {
      "USERNAME":"","PASSWORD":""
    }
  };

  cognitoISP.adminInitiateAuth(paramsAuth, function(err, data) {
  if (err) {
  console.log(err, err.stack);
}
  else {
    sessionData = data.Session;
    console.log(data);

    var paramsResponse = {
      ChallengeName: 'NEW_PASSWORD_REQUIRED',
      ClientId: paramsAuth.ClientId,
      UserPoolId: paramsAuth.UserPoolId,
      ChallengeResponses: {
        'USERNAME':paramsAuth.AuthParameters.USERNAME,'NEW_PASSWORD':''
      },
      Session: sessionData
    };

    cognitoISP.adminRespondToAuthChallenge(paramsResponse, function(err, data) {
      if (err) {
        console.log(err, err.stack);
      }
      else {
        console.log(data);
      }
    });
  }
});