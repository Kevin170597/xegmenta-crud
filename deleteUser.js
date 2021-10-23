const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

exports.handler = (event, context, callback) => {
    
    let params = {
        TableName: 'users',
        Key: {"id" : event.id},
        ConditionExpression: 'attribute_exists(id)'
    };
    
    docClient.delete(params, function(err, data) {
    if(err){
        console.log("not work");
        callback(err);
    } else {
        console.log(`Data for user successfully deleted`);
        console.log(data);
        callback(null, `Data for user ${event.id} successfully deleted`);
    }
});
};