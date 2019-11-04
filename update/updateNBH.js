const AWS = require('aws-sdk');
const fs = require('fs');
AWS.config.update({
region: 'us-east-1',
endpoint: 'http://localhost:8000'
});
let docClient = new AWS.DynamoDB.DocumentClient();
console.log('Start importing');
let allNBH = JSON.parse(fs.readFileSync("D:/CNMPTUD_DHKTPM12A_DOAN_NHOM21_CODE/database/data//DataNhaBanHang.json", 'utf-8'));
allNBH.forEach((NBH) => {
let params = {
TableName: "NhaBanHang",
Item: {
    maNBH: NBH.maNBH,
    tenNBH:NBH.tenNBH,
    sdt:NBH.sdt,
    diaChi:NBH.diaChi,
    SanPham:NBH.SanPham,
    TaiKhoan:NBH.TaiKhoan
}
};
docClient.put(params,(err, data) => {
if (err) {
console.error(`Unable to add Nha Ban Hang${NBH.title}, ${JSON.stringify(err, null, 2)}`);
}else{
console.log(`Nha Ban Hang created:  ${NBH.tenNBH}`);
}
});
});