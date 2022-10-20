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
            Name: "codigo.png"
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

        //console.log(data);
        //console.log(datas.Labels[0]);

     

        for(x of datas.Labels){

            
            

            if (x.Name == "Laptop" ) {

                if (x.Confidence > 98) {
                    
                    console.log(x.Confidence, x.Name);
                }
                else{
                    console.log("no tiene la suficiente confianza")
                }

                
            }
            
               
            
           
        }
        console.log("No es una laptop");

    }

    

});


