var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var cognitoISP = new AWS.CognitoIdentityServiceProvider();

var paramsCreate = {
  UserPoolId: '',
  Username: '',
  DesiredDeliveryMediums: ["EMAIL"],
  ForceAliasCreation: false,
  TemporaryPassword: '',
  UserAttributes: [
    {
      Name: 'name',
      Value: ''
    },
    {
      Name: 'email',
      Value: ''
    }
  ],
  ValidationData: [
    {
      Name: 'name',
      Value: '',
    },
    {
      Name: 'email',
      Value: ''
    }
  ]
};
cognitoISP.adminCreateUser(paramsCreate, function(err, data) {
  if (err) console.log(err, err.stack);
  else     console.log(data);
});