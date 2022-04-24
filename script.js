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

/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify,
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);
