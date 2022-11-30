const express = require("express");
const request = require("request");
const app = express();
const CryptoJS = require("crypto-js");

const PORT = process.env.PORT || 3000;

app.get("/SMSAuth", (req, res) => {
    res.send(send_message(req.query.phone));
    console.log("호출됨");
});

function send_message(phone) {
    var user_phone_number = phone; //수신 전화번호 기입
    var resultCode = 404;
    const date = Date.now().toString();
    const uri = "ncp:sms:kr:296737339859:sms_send_test"; //서비스 ID
    const secretKey = "6I1KmeE1eQ2LAmNQ0VuS7AdLEEMCY2QbnVQNF50U"; // Secret Key
    const accessKey = "KLVEMmAUVTF0GHvYVnuS"; //Access Key
    const method = "POST";
    const space = " ";
    const newLine = "\n";
    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`;
    const url2 = `/sms/v2/services/${uri}/messages`;
    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
    hmac.update(method);
    hmac.update(space);
    hmac.update(url2);
    hmac.update(newLine);
    hmac.update(date);
    hmac.update(newLine);
    hmac.update(accessKey);
    const hash = hmac.finalize();
    const signature = hash.toString(CryptoJS.enc.Base64);
    request(
        {
            method: method,
            json: true,
            uri: url,
            headers: {
                "Contenc-type": "application/json; charset=utf-8",
                "x-ncp-iam-access-key": accessKey,
                "x-ncp-apigw-timestamp": date,
                "x-ncp-apigw-signature-v2": signature,
            },
            body: {
                type: "SMS",
                countryCode: "82",
                from: "테스트",
                content: "인증번호는 [123456] 입니다.",
                messages: [{ to: `${user_phone_number}` }],
            },
        },
        function (err, res, html) {
            if (err) console.log(err);
            else {
                resultCode = 200;
                console.log(html);
            }
        }
    );
    return resultCode;
}

app.listen(PORT, () => {
    console.log(`Server on : http://localhost:${PORT}/`);
});
