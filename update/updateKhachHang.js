const AWS = require('aws-sdk');
const fs = require('fs');
AWS.config.update({
region: 'us-east-1',
endpoint: 'http://localhost:8000'
});
let docClient = new AWS.DynamoDB.DocumentClient();
console.log('Start importing');
let allKhachHang = JSON.parse(fs.readFileSync("D:/CNMPTUD_DHKTPM12A_DOAN_NHOM21_CODE/database/data//DataKhachHang.json", 'utf-8'));
allKhachHang.forEach((KhachHang) => {
let params = {
TableName: "KhachHang",
Item: {
    maKH: KhachHang.maKH,
    tenKH: KhachHang.tenKH,
    diaChi:KhachHang.diaChi,
    TaiKhoan:KhachHang.TaiKhoan
}
};
docClient.put(params,(err, data) => {
if (err) {
console.error(`Unable to add Khach Hang${KhachHang.title}, ${JSON.stringify(err, null, 2)}`);
}else{
console.log(`Khach Hang created:  ${KhachHang.tenKH}- ${KhachHang.maKH}`);
}
});
});