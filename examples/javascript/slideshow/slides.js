//slides.js

window.onload = initLink;

var myPix = new Array("pics/autumn_waterfall.jpg", "pics/river_fall.jpg", "pics/spring_waterfall.jpg");
var thisPic = 0;

function initLink()
{
    document.getElementById("prevLink").onclick = processPrevious;
    document.getElementById("nextLink").onclick = processNext;
}

function processNext()
{
    thisPic ++ ;
    // use if block to check if you are at end of array, set thisPic back to 0 (instead of 4)
    if (thisPic == myPix.length)
    {
        thisPic = 0;
    }
    document.getElementById("myPicture").src = myPix[thisPic];
    return false;

}

function processPrevious()
{
    // use if block to check if you are at end of array, set thisPic back to 0 (instead of 4)
    if (thisPic == 0)
    {
        thisPic = myPix.length; //3
    }
    thisPic -- ; //2
    document.getElementById("myPicture").src = myPix[thisPic];
    return false;
}