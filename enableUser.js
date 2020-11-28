var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var cognitoISP = new AWS.CognitoIdentityServiceProvider();

var paramsEnable = {
  UserPoolId: '',
  Username: ''
};
cognitoISP.adminEnableUser(paramsEnable, function(err, data) {
  if (err) console.log(err, err.stack);
  else     console.log(data);
});