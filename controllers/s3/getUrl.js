const AWS = require("aws-sdk");

const accessKeyId =  process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const region = process.env.AWS_REGION;
const bucketName = process.env.AWS_BUCKET_NAME;

const s3 = new AWS.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: "4"
});

// upload url 만듦
module.exports = async () => {
    const imgName = "" // 랜덤 유니크 이미지네임 어떻게 할까요?
    const params = {
        Bucket: bucketName,
        Key: imgName,
        Expires: 60
    };
    const uploadUrl = await s3.getSignedUrlPromise(
        "putObject", 
        params
    );
    return uploadUrl;
};