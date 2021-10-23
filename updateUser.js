const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

exports.handler = (event, context, callback) => {
    
    let params = {
        TableName: 'users',
        Key: {"id" : event.id},
        UpdateExpression:"SET username=:username, lastName=:lastName, email=:email",
        ExpressionAttributeValues:{":username": event.username, ":lastName" : event.lastName, ":email" : event.email},
        ReturnValues:"UPDATED_NEW"
    };
    
    docClient.update(params, function(err, data) {
    if(err){
        callback(err, null);
    } else {
        callback(null, `The user ${event.username} was successfully updated`);
    }
});
};

