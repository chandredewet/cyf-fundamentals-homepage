//cart

var cart, cartprices, item;

cart = [];
cartprices = [];

document.getElementById("showcart").addEventListener("click", (event) => {
  let element_cartpic = document.getElementById("cartpic");
  element_cartpic.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsWTvQnZyL_qrEXnvAsCvo95ChQn5GcdPmA&usqp=CAU"
  );
  cart.forEach((item) => {
    let element_cart = document.getElementById("cart");
    let new_li = document.createElement("li");
    new_li.innerText = item;

    element_cart.appendChild(new_li);
  });
  let element_disptotal = document.getElementById("disptotal");
  element_disptotal.innerText = " Current Total: R";
  let new_span = document.createElement("span");
  new_span.innerText = cartprices.reduce((a, b) => a + b, 0);

  element_disptotal.appendChild(new_span);

  console.log(new_span);
});

console.log(cartprices);

document.getElementById("add1").addEventListener("click", (event) => {
  cart.push("Archive Assistance");
  cartprices.push(150);
});

document.getElementById("add2").addEventListener("click", (event) => {
  cart.push("3 Level Family Tree");
  cartprices.push(500);
});

document.getElementById("add3").addEventListener("click", (event) => {
  cart.push("Speaker/Workshops");
  cartprices.push(1000);
});

document.getElementById("add4").addEventListener("click", (event) => {
  cart.push("Familytree App");
  cartprices.push(50);
});

//image carousel
var mypics, testarray;

mypics = [
  "https://user-images.githubusercontent.com/65244840/166117168-9462f100-08fd-44ab-936a-709178dbb715.JPG",
  "https://user-images.githubusercontent.com/65244840/166116185-199d86ba-6e9f-43ed-b83d-f43c0ba008db.jpg",
  "https://user-images.githubusercontent.com/65244840/166116200-b1138ca0-8813-42ff-a569-ebf6b292b57b.jpg",
  "https://user-images.githubusercontent.com/65244840/166117205-f43e10a2-ebdb-42eb-b06a-f35717ee7f43.jpg",
  "https://user-images.githubusercontent.com/65244840/166116241-b706fa05-6524-4228-861b-6793142a41ac.jpg",
  "https://user-images.githubusercontent.com/65244840/166116347-d945c531-b08f-47b8-bf8e-33b06e53c4ee.jpg",
  "https://user-images.githubusercontent.com/65244840/166116962-c9d291cd-0257-41c8-8007-44e8f54acc2a.jpg",
];
testarray = ["1", "2", "3", "4", "5", "6", "7"];
let element_myimg = document.getElementById("myimg");
element_myimg.setAttribute("src", mypics[0]);
let element_picno = document.getElementById("picno");
element_picno.innerText = testarray[0];

document.getElementById("next").addEventListener("click", (event) => {
  testarray.push(testarray.shift());
  mypics.push(mypics.shift());
  let element_picno2 = document.getElementById("picno");
  element_picno2.innerText = testarray[0];
  let element_myimg2 = document.getElementById("myimg");
  element_myimg2.replaceChildren();
  element_myimg2.setAttribute("src", mypics[0]);
});

document.getElementById("prev").addEventListener("click", (event) => {
  testarray.unshift(testarray.pop());
  mypics.unshift(mypics.pop());
  let element_picno3 = document.getElementById("picno");
  element_picno3.innerText = testarray[0];
  let element_myimg3 = document.getElementById("myimg");
  element_myimg3.replaceChildren();
  element_myimg3.setAttribute("src", mypics[0]);
});

document.getElementById("daymode").addEventListener("click", (event) => {
  let element_fullSite = document.getElementById("fullpage");
  element_fullSite.style.color = "#55b4b0";
  element_fullSite.style.backgroundColor = "rgb(239, 239, 239)";

  // additional dom methods

  const collection = document.getElementsByClassName("changemode");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.color = "#55b4b0";
    collection[i].style.backgroundColor = "rgb(239, 239, 239)";
  }

  const anchorcollection = document.getElementsByTagName("a");
  for (let i = 0; i < anchorcollection.length; i++) {
    anchorcollection[i].style.color = "#55b4b0";
  }

  const btncollection = document.getElementsByTagName("button");
  for (let i = 0; i < btncollection.length; i++) {
    btncollection[i].style.color = "rgb(239, 239, 239)";
    btncollection[i].style.backgroundColor = "#55b4b0";
  }
});

document.getElementById("nightmode").addEventListener("click", (event) => {
  let element_page2 = document.getElementById("fullpage");
  element_page2.style.color = "#9999ff";
  element_page2.style.backgroundColor = "#3B384B";
  // let element_about = document.getElementById("aboutNight");
  // element_about.style.color = "#9999ff";
  // element_about.style.backgroundColor = "#000066";

  const collection = document.getElementsByClassName("changemode");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.color = "#9999ff";
    collection[i].style.backgroundColor = "#3B384B";
  }

  const anchorcollection = document.getElementsByTagName("a");
  for (let i = 0; i < anchorcollection.length; i++) {
    anchorcollection[i].style.color = "#9999ff";
  }

  const btncollection = document.getElementsByTagName("button");
  for (let i = 0; i < btncollection.length; i++) {
    btncollection[i].style.color = "#3B384B";
    btncollection[i].style.backgroundColor = "#9999ff";
  }
});
