/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35;
var dayCounter = 0;

var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");

var mondaySelected = false;
var tuesdaySelected = false;
var wednesdaySelected = false;
var thursdaySelected = false;
var fridaySelected = false;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monday.addEventListener("click", addClassClicked);
tuesday.addEventListener("click", addClassClicked);
wednesday.addEventListener("click", addClassClicked);
thursday.addEventListener("click", addClassClicked);
friday.addEventListener("click", addClassClicked);

function addClassClicked()
{
    event.target.classList.add("clicked");

    if (monday.classList.contains("clicked") && (mondaySelected == false))
    { 
        dayCounter += 1;
        mondaySelected = true;
    }
    if (tuesday.classList.contains("clicked") && (tuesdaySelected == false))
    { 
        dayCounter += 1;
        tuesdaySelected = true;
    }
    if (wednesday.classList.contains("clicked") && (wednesdaySelected == false))
    { 
        dayCounter += 1;
        wednesdaySelected = true;
    }
    if (thursday.classList.contains("clicked") && (thursdaySelected == false))
    { 
        dayCounter += 1;
        thursdaySelected = true;
    }
    if (friday.classList.contains("clicked") && (fridaySelected == false))
    { 
        dayCounter += 1;
        fridaySelected = true;
    }
    recalculate();
}



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearAll);

function clearAll()
{
    dayCounter = 0;
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");

    mondaySelected = false;
    tuesdaySelected = false;
    wednesdaySelected = false;
    thursdaySelected = false;
    fridaySelected = false;

    recalculate();
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

var halfDayButton = document.getElementById("half");
var fullDayButton = document.getElementById("full");

halfDayButton.addEventListener("click", changeRateHalf);
fullDayButton.addEventListener("click", changeRateFull);

function changeRateHalf()
{
    if (fullDayButton.classList.contains("clicked") == true)
    {
        halfDayButton.classList.add("clicked");
        fullDayButton.classList.remove("clicked");
        costPerDay = 20;
        recalculate();
    }
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeRateFull()
{
    if (halfDayButton.classList.contains("clicked") == true)
    {
        fullDayButton.classList.add("clicked");
        halfDayButton.classList.remove("clicked");
        costPerDay = 35;
        recalculate();
    }
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate()
{
    var costLabel = document.getElementById("calculated-cost");
    var totalCost = 0;
    totalCost = dayCounter * costPerDay;
    costLabel.innerHTML = totalCost;
}



// HINT for switching between full day and half day, need to remove a class from one, and apply class to another