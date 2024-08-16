/* JS Code Here */

// const mainNav = document.getElementById("mainNav");
// const divElements = document.getElementsByTagName("div");
// const cardElements = document.getElementsByClassName("card");

        //^^ these work but lets try querySelector ^^


//querySelector 
const mainNav = document.querySelector("#mainNav"); //targeting id="mainNav" (using #)
const divElements = document.querySelectorAll("div"); //targeting all divs
const cardElements = document.querySelectorAll(".card"); //targeting the class "card" (using .)

for (var i=0; i<cardElements.length; i++)
{
    cardElements[i].style.backgroundColor = "pink";
}

const logoTitle = document.querySelector("#logoTitle").innerHTML = "Birthday Cakes";

const firstCard = document.querySelector(".card:nth-of-type(1)");
firstCard.style.backgroundColor = "yellow";

//targeting individual elements (child/siblings) of first card
// (h2, h3, p, a)
const titleFirstCard = firstCard.querySelector("h2"); //h2
//move to next sibling 
const subTitleFirstCard = titleFirstCard.nextElementSibling; //h3
subTitleFirstCard.style.color = "white";
subTitleFirstCard.style.color = "green";

//find all anchor tags within nav
const links = document.querySelectorAll("nav a");//Home, About, Contact

//loop over (using 'forEach' loop)
links.forEach(temp => console.log(temp.innerHTML));//console.log just for testing

//change collection into array
const linksArr = Array.from(links);
const homeLink = linksArr.find(temp => temp.innerHTML == "Home");
console.log(homeLink);//for testing

const textFirstCard = firstCard.querySelector("p");
textFirstCard.nextElementSibling.setAttribute("href", "https://www.sait.ca");

const header = document.querySelector("header");
header.classList.add("icing");

setInterval(() => header.classList.toggle("icing"),1000);

//creating an element (in nav bar)
const serviceLink = document.createElement("a");//adding <a></a>
serviceLink.textContent = "Services";//adding <a>Services</a>
serviceLink.href = "#"; //adding href="#"
document.querySelector("nav").appendChild(serviceLink);//appending to nav bar
serviceLink.classList.add("menu-item"); // adding class="menu-item"

