
/*JS Code here*/

// NOT initfunction() -> no parenthesis bc you arent trying to return a value to window.onload
window.onload = initfunction;

function initfunction()
{
    var current_dateTime = new Date();
    
    // formatting the date into m/d/y format
    // .getMonth()+1) bc month starts at 0 (january)
    var formattedDate = current_dateTime.getDate() + "/" + (current_dateTime.getMonth()+1) + "/" + current_dateTime.getFullYear();

    document.getElementById(
        "dtfield").innerHTML = formattedDate;
}


function buttonandchecks()
{
    var giftAmount = 0;
    var choice = ""
    var clientName = document.getElementById("clientname").value;
    var phone = document.getElementById("contactphone").value;
    var resultMessage = "Thank you for your order " + clientName + "<br>";
    // can also concatenate:
    // resultMessage += clientName + "<br>";

    // targeting all radio buttons w name "specialty" using .querySelector("input[name=specialty]:checked").value;
    // parseFloat() to make convert value to float instead of string
    var radioValue = parseFloat(document.querySelector("input[name=specialty]:checked").value);

    // checkboxes - gift items (necklace, earrings, etc)
    // using querySelector("input[name=earrings]:checked to target [name=xyz]
    if(document.querySelector("input[name=earrings]:checked"))
    {
        giftAmount += parseFloat(document.querySelector("input[name=earrings]:checked").value);
        choice += "<br>Earrings";
    }

    if(document.querySelector("input[name=broach]:checked"))
        {
            giftAmount += parseFloat(document.querySelector("input[name=broach]:checked").value);
            choice += "<br>Broach";
        }
    
    if(document.querySelector("input[name=watch]:checked"))
        {
            giftAmount += parseFloat(document.querySelector("input[name=watch]:checked").value);
            choice += "<br>Watch";
        }
    
    if(document.querySelector("input[name=necklace]:checked"))
        {
            giftAmount += parseFloat(document.querySelector("input[name=necklace]:checked").value);
            choice += "<br>Necklace";
        }

    var totalAmount = giftAmount + radioValue;

    resultMessage += "Your box will cost: $" + radioValue.toFixed(2) + "<br>Your box contains: " + choice + "<br>Total cost: $" + totalAmount.toFixed(2) + "<br>Contact phone: " + phone;

    document.getElementById("result").innerHTML = resultMessage;
}
