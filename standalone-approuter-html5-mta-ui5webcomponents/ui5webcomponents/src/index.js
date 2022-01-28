import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/DatePicker.js";
import "@ui5/webcomponents/dist/MessageStrip.js";
import "@ui5/webcomponents/dist/Dialog.js";
import "@ui5/webcomponents/dist/Switch.js";
import "@ui5/webcomponents/dist/Title.js";

import { getTheme, setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
import {  } from "@ui5/webcomponents-base/dist/config/Theme.js";
import "@ui5/webcomponents/dist/Assets";

fetch("/user-api/currentUser").then((res) => {
  return res.json();
}).then((user) => {
  document.getElementById("title").textContent = `Hi ${user.firstname}, Welcome to UI5 Web Components!`
});

function switchTheme() {
    if (getTheme() !== "sap_horizon") {
        setTheme("sap_horizon")
    } else {
        setTheme("sap_fiori_3")
    }
  
  displayTheme()
}

function displayTheme() {
    document.getElementById("myThemeLabel").textContent = `Current Theme: ${getTheme()}`
}

displayTheme()

const themeBtn = document.getElementById("themeDialogButton")
themeBtn.addEventListener("click", () => {
  switchTheme()
});

const openBtn = document.getElementById("openDialogButton");
const closeBtn = document.getElementById("closeDialogButton");
const dialog = document.getElementById("hello-dialog");
openBtn.addEventListener("click", () => {
  dialog.show();
});
closeBtn.addEventListener("click", () => {
  dialog.close();
});