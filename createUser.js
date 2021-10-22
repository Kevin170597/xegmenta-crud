const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

exports.handler = (event, context, callback) => {
    let item = {
        id : Number(event.id),
        email : event.email,
        username : event.username,
        lastName : event.lastName
    };
    
    let params = {
        TableName: 'users',
        Item: item,
        ConditionExpression: 'attribute_not_exists(id)'
    };
    
    docClient.put(params, function(err, data) {
    if (err) {
        callback(err, null);
    } else {
        console.log(data);
        callback(null, `The user ${item.username + " " + item.lastName} was successfully created`);
    }
});
};