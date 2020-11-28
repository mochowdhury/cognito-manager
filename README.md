# Cognito Manager
__
## Contents

* Situation
* Goal
* Summary of Actions
* Inputs- Services/Resources
* Steps
* Documentation/Sources
* Possible Variations
* Future Improvements

___
### Situation

When a new user is created through the Cognito console, they are automatically created in the FORCE_CHANGE_PASSWORD status. There is no easy way in the console to get them to CONFIRMED.

___
### Goal

For bootstrapping of new environments and also quickly being able to activate new users, it would be useful to have a Lambda function available that could move these users to CONFIRMED with a new password after they were created.

___
### Summary of Actions

Used the AWS SDK for JavaScript to interface with Cognito service to create, delete, enable, auth, etc., as administrator, Cognito users. Later, some of those scripts were created into Lambda functions.

___
### Inputs - Services/Resources

AWS Lambda Functions

* createCognitoUser
* authCognitoUser

IAM Role

* cognitoCRUD_Role

___
### Steps

* Log in to AWS Console
* Switch to applicable AWS account
* Switch to Lambda service
* Open desired Cognito function
* Configure a test
   * For createCognitoUser
      {
        "userPoolId": "",
        "cognitoUsername": "",
        "tempPassWord": "",
        "userFullName": "",
        "userEmailAddress": ""
      }
   * For authCognitoUser
      {
        "userPoolId": "",
        "clientId": "",
        "cognitoUsername": "",
        "tempPassWord": "",
        "newPassword": ""
      }
* Click test
* Wait for success message
* Function does log to CloudWatch Logs, so you can debug should anything goes wrong.

___
### Documentation/Sources

https://aws.amazon.com/sdk-for-node-js/

___
### Possible Variations

Not pondered upon.

___
### Future Improvements

Not pondered upon.
