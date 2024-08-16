/* JS code here*/
// array -> [] (like a list, can be indexed [0], [1], [-1], etc)
var customer = [];
function storedata()
{
    var fullName = document.getElementById("clientname").value;
    customer[0] = fullName;
    
    var address = document.getElementById("address").value;
    customer[1] = address;

    var phone = document.getElementById("contactphone").value;
    customer[2] = phone;

    var email = document.getElementById("email").value;
    customer[3] = email;

    alert(customer[0] + "\n" + customer[1] + "\n" + customer[2] + "\n" + customer[3])

    // alert(customer); <- default display for alert box

    setFormEdit(); //enables the controls
}

function setFormEdit()
{
    document.getElementById("principle").readOnly = false;
    document.getElementById("years").readOnly = false;
    document.getElementById("interestrate").disabled = false;
    document.getElementById("fvbutton").disabled = false;
}

function calcfv()
{
    var finalMessage = "";
    var interestRate = document.getElementById("interestrate").value;
    var principle = document.getElementById("principle").value;
    var years = document.getElementById("years").value;

    var month = years * 12;
    interestRate = interestRate/12 + 1;
    var futureValue = principle * Math.pow(interestRate, month);

    finalMessage += "Welcome " + customer[0] + "<br>";
    finalMessage += "Future value of investment: $" + futureValue.toFixed(2);

    document.getElementById("result").innerHTML = finalMessage;
}