Webcam.set({
 width:350,
 height:300,
 image_format:'png',
 png_quality:90
});

camera= document.getElementById("input");
Webcam.attach('#input');

function takeSnapshot() {
   Webcam.snap(function(data_uri)
   {
     document.getElementById("output").innerHTML='<img id="captured_img" src="' +data_uri+'"/>';
   }
   );
}

console.log('ml5version',ml5.version);

Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/n1VtnHnSO/model.json',modelLoaded);
