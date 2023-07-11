import { recuperationFormData } from "../modules/recuperationformData.mjs";
import { closeTags } from "../modules/closeTags.mjs";
import { displayCartes } from "../widgets/displayCartes.mjs";
import { likesDiskes } from "../widgets/likesDIslikes.mjs";

document.addEventListener("DOMContentLoaded", () => {
     document.querySelector("#button button").addEventListener("click", (e) => {
          e.preventDefault();
          let userFormulaire = {
               userName: document.querySelector("#userName").value,
               tagline: document.querySelector("#tagline").value,
               likes: document.querySelector("#likes").value,
          };
          console.log(userFormulaire);
          recuperationFormData(userFormulaire).then((response) => {
               if (response === "veuillez remplir toutes les cases") {
                    return alert("veuillez remplir toutes les cases");
               }
               return displayCartes(response), closeTags(), likesDiskes();
          });
     });
});
