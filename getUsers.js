const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

exports.handler = (event, context, callback) => {
    let params = {
        TableName: 'users'
    };
    
    docClient.scan(params, function(err, data) {
    if(err){
        callback(err, null);
    } else {
        callback(null, data);
    }
});
};
