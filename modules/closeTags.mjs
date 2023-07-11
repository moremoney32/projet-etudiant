/***
 * function qui efface les cartes
 */

export function closeTags() {
     let sousContain = document.querySelectorAll(".sous-contenair");

     sousContain.forEach((closeElement) => {
          closeElement.lastElementChild.addEventListener("click", () => {
               closeElement.remove();
          });
     });
}
