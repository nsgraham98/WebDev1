// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", submitFunction);

function submitFunction()
{
    var content = document.getElementById("contact-page");
    content.innerHTML = "<p style='font-size: 24px; text-align:center; margin:auto;'>Thank you for your message</p>";
}