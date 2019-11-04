const AWS = require('aws-sdk');
AWS.config.update({
region: "us-east-1",
endpoint: "http://localhost:8000"
});
let dynamodb = new AWS.DynamoDB();
let params = {
TableName: "KhachHang",
KeySchema: [
{AttributeName: "maKH", KeyType: "HASH"},
{AttributeName: "tenKH", KeyType: "RANGE"}
],
AttributeDefinitions: [
{AttributeName: "maKH", AttributeType: "S"},
{AttributeName: "tenKH", AttributeType: "S"}
],
ProvisionedThroughput: {
ReadCapacityUnits: 10,
WriteCapacityUnits: 10
}
};
dynamodb.createTable(params, (err, data) => {
if(err){
console.error(` Tạo Table không thành công !!! ${JSON.stringify(err,null,2)}`);
}else{
console.log(`Tạo Table thành công !!!  ${JSON.stringify(data, null, 2)}`);
}
});