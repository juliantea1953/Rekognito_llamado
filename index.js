var aws = require('aws-sdk');


//credenciales.
aws.config.update({
    accessKeyId: 'AKIASATSNDRYUOTL4BR5',
    secretAccessKey: '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',
    region: 'us-east-1'
});

var params ={
    Image: {
        S3Object: {
            Bucket: "imgdecomparacion",
            Name: "laptopAndres.jpeg"
        }
    },
    MaxLabels: 5,
    MinConfidence: 80
};

const rekognition = new aws.Rekognition();


rekognition.detectLabels(params, function( err , data){
    if (err) {
        console.log("error");
        console.log(err, err.stack); 
    }
    else{
        let datas = JSON.parse(JSON.stringify(data));

        // console.log(data);
        console.log(data.Labels[0]);

    }

    

});


