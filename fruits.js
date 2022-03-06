img="";
stat="";
function preload()
{
    img=loadImage("pic.jpg");
}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    detector=ml5.objectDetector("cocossd", modelLoaded);
}
function modelLoaded()
{
    console.log("CocoSSD initialized");
    stat=true;
    detector.detect(img, gotResults);
}
function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    if(results.length>0)
    {
        console.log(results);
    }
}
function draw()
{
    image(img, 0, 0, 640, 420);
}