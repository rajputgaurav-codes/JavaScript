// DOM Manipulation

// 1 - selecting by id --------------------------------------------------------------------------------
let header = document.getElementById("heading"); // accessed h1 node
console.log(header);

// 2 - selecting by class
// ------------------------------------------------------------------------------
let para = document.getElementsByClassName("paragraph");
console.log(para);

// 3 - selecting by tag ------------------------------------------------------------------------------
let paras = document.getElementsByTagName('p');
console.log(paras);

// 4 - selecting by queryselector --------------------------------------------------------------------
let firstParagraph = document.querySelector("p");  //return only first p element in the overall html code.
console.log(firstParagraph);

// 5 - selecting by queryselectorall -----------------------------------------------------------------
let heading = document.querySelectorAll("p");  //return all p elements in the overall html tag.
console.log(heading);

//6. -- selecting by innerText , Textcontent -------------------------------------------------------
//  -- both used to change and select the inner text in the html .

let para2 = document.querySelector(".p2");
para2.outerText = "this is not a logical paragraph this only a random";  //same changes made by the Textcontent.
console.dir(para2);

//7. selecting by innerHTML -- used to change the direct html code

//8 . selecting by setattribute -- used to set a attribute name and also change.

// ex : set href in the anker tag.
//syntax: a.setattribute("href","https://www.gogle.com");  //the href is changed using javascript.


// create element using javascript. --append/prepend karo jaha tumhe karna hai
let img = document.createElement("img");
img.textContent = "random photo";
img.setAttribute ("src","https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-800x525.jpg")
document.querySelector("body").prepend(img);
console.log(img);

// style changes using js.
let change = document.querySelector("img");
change.style.border = "5px solid black";
change.style.width = "100%";