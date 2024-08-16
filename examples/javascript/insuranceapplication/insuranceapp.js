/*JS Code here*/
function register()
{
    var name = document.getElementById("firstname").value;
    alert("Welcome " + name + "\nPlease enter number of tickets");
    document.getElementById("tickets").disabled = false;
}

function controlinfo()
{
    var numberOfTickets = document.getElementById("tickets").value;
    if(numberOfTickets>3)
    {
        alert("Give me your keys and ride your bike bozo \ninsurance DENIED");
    }
    else
    {
        alert("Please enter age and car value");
        document.getElementById("age").readOnly = false;
        document.getElementById("carvalue").readOnly = false;
        document.getElementById("submitbutton").disabled = false;
    }
}

function calculatepremium()
{
    var age = document.getElementById("age").value;
    var carvalue = document.getElementById("carvalue").value;
    var numberOfTickets = document.getElementById("tickets").value;

    var baseRate = carvalue * 0.05;
    var finalMessage = "Base rate: $" + baseRate;

    var premium = baseRate;
    if(age<25)
    {
        premium = premium + (baseRate*0.15);
        finalMessage += "\nAge Premium: $" + (baseRate*0.15);
    }
    if(numberOfTickets ==1 || numberOfTickets ==2)
    {
        premium = premium + (baseRate*0.1);
        finalMessage += "\nTicket Premium: $" + (baseRate*0.1);
    }
    else if(numberOfTickets ==3)
    {
        premium = premium + (baseRate*0.25);
        finalMessage += "\nTicket Premium: $" + (baseRate*0.25);
    }

    finalMessage += "\nTotal Premium: $" + premium;
    alert(finalMessage);
}