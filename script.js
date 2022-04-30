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
