
/*JS CODE HERE*/

var ranImg = document.getElementById("ranImg");

//addEventListener() <- important
ranImg.addEventListener("click", showPic); // for addEventListener don't use "onclick", just "click"

function showPic()
{
    var a = Math.random();
    var b = 10;

    var ran = Math.ceil(b*a);
    document.getElementById("slider").innerHTML = "<img src=img/" + ran + ".jpg height=500 width=500>";
    document.getElementById("mypic").innerHTML = ran;
    setTimeout(showPic, 1500);
}


	
	
