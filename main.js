import Bio from "./modules/bio/Bio.js";
import Gallery from "./modules/gallery/Gallery.js";
import Nav from "./modules/nav/Nav.js";
import { request, addEntryToDb, getEntry } from "./database.js";

const rootDiv = document.getElementById("root");

const Main = () => {
  return `
        ${Nav()}
        <div class="container">
            ${Bio()}
            ${Gallery()}
       </div>
    `;
};

rootDiv.innerHTML = Main();

// Calling the request function when the database has been successfully created
request.onsuccess = () => {
   addEntryToDb('bio', {name: "Beny Lee", description: `Hey I'm Benzy`});
  getEntry('bio');
};

const editBio = document.querySelector(".edit-bio");

editBio.addEventListener("submit", () => {
  // tto prevent default========= site reload
  event.preventDefault();

  //targeting the nameInput
  const nameInput = document.querySelector("#name").value;
  const nameOutput = document.querySelector(".name");

  nameOutput.innerText = nameInput;
});
