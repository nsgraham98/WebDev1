/*arrayofobjects.js*/

var objectArray = []
var indexValue = 0

function addToArray()
{
    //object {}; is list of property with name value pair
    var clientObject = {
        lastname,
        firstname,
        address,
        postalcode,
        info: [],
        asset: []
    };

    clientObject.lastname = document.getElementById("lastname").value;
    clientObject.firstname = document.getElementById("firstname").value;
    clientObject.address = document.getElementById("address").value;
    clientObject.postalcode = document.getElementById("postalcode").value;
    
    var businesstype = document.querySelector("input[name=businesstype]:checked").value;
    var residence = document.querySelector("input[name=residence]:checked").value;

    clientObject.info.push(businesstype); //[0]
    clientObject.info.push(residence); //[1]

    if (document.querySelector("input[name=truck]:checked"))
    {
        clientObject.asset.push("truck");
    }

    if (document.querySelector("input[name=car]:checked"))
    {
        clientObject.asset.push("car");
    }

    if (document.querySelector("input[name=rv]:checked"))
    {
        clientObject.asset.push("rv");
    }

    objectArray.push(clientObject);
    displayList();
    
    document.getElementById("register").reset();
}

function displayList()
{
    var clientList = ""
    var displayRadioButton = ""
    for (var i = 0 ; i < objectArray.length ; i ++)
    {
        //local instance of clientObject
        var clientObject = {
            lastname,
            firstname,
            address,
            postalcode,
            info: [],
            asset: []
        };

        clientObject = objectArray[1]; //0
        clientList = clientObject.lastname + " , " + clientObject.firstname + " , " + clientObject.address + " , " + clientObject.postalcode;

        for (var x = 0; x < clientObject.info.length ; x ++)
        {
            clientList += clientObject.info[x] + "; " ;
        }
        for (var x = 0; x < clientObject.asset.length ; x ++)
        {
            clientList += clientObject.asset[x] + "; " ;
        }

        displayRadioButton += "<input type=radio name= listitem value=" + i + " onchange=modifyItem(this.value)>"
        displayRadioButton += clientList + "<br>";
    }

    document.getElementById("showlist").innerHTML = displayRadioButton;
}

function modifyItem(i) //edit button
{
    indexValue = i;
    var clientObject = {
        lastname,
        firstname,
        address,
        postalcode,
        info: [],
        asset: []
    };

    clientObject = objectArray[i];

    //enable and disable of submit/edit buttons
    document.getElementById("submit").disabled = true; //disable submit
    document.getElementById("edit").disabled = false; //enable edit

    document.getElementById("lastname").value = clientObject.lastname;
    document.getElementById("firstname").value = clientObject.firstname;
    document.getElementById("address").value = clientObject.address;
    document.getElementById("postalcode").value = clientObject.postalcode;
    
    //loading from info and asset
    var dataitem;
    dataitem = clientObject.info[0]; //businesstype

    if (dataitem == "commercial")
    {
        document.register.businesstype[0].checked = true;
    }
    else
    {
        document.register.businesstype[1].checked = true;
    }

    dataitem = clientObject.info[1]; //residence
    if (dataitem == "city")
    {
        document.register.residence[0].checked = true;
    }
    else
    {
        document.register.residence[1].checked = true;
    }

    //reset all my checkboxes
    document.register.truck.checked = false;
    document.register.car.checked = false;
    document.register.rv.checked = false;

    for (var i = 0 ; i < clientObject.asset.length ; i ++)
    {
        dataitem = clientObject.asset[i];
        if (dataitem == "truck")
        {
            document.register.truck.checked = true;
        }
        if (dataitem == "car")
        {
            document.register.car.checked = true;
        }
        if (dataitem == "rv")
        {
            document.register.rv.checked = true;
        }
    }

function setClientObject()
    {

    clientObject.info.push(businesstype); //[0]
    clientObject.info.push(residence); //[1]

    if (document.querySelector("input[name=truck]:checked"))
    {
        clientObject.asset.push("truck");
    }

    if (document.querySelector("input[name=car]:checked"))
    {
        clientObject.asset.push("car");
    }

    if (document.querySelector("input[name=rv]:checked"))
    {
        clientObject.asset.push("rv");
    }

    objectArray[indexValue] = clientObject;
    document.getElementById("submit").disabled = false;
    document.getElementById("edit").disabled = true;
    displayList();
    }

}