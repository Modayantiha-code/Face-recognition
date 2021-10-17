Webcam.set({
    width: 500,
    height: 300,
    image_format: "png",
    png_quality: 100
});
Webcam.attach("#webcamholder");

function clickimage() {
    Webcam.snap(function(imagesrc) {
        var clickedimage = document.getElementById("pictureholder").innerHTML = '<img id="clickedimage" src="' + imagesrc + '">';
        console.log(ml5.version);

    });
}
var familymodel = ml5.imageClassifier("///put link to model here", modelloaded);

function modelloaded() {
    console.log("Model loaded");
    familymodel.classify(clickedimage, getresults);
}

function getresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        var person = results[0].label;

    }
}

function identifypeople() {
    document.getElementById("identifiedperson").innerHTML = person;
}