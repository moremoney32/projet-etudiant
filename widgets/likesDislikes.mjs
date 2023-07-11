/**function qui permet d incrementer au like et decrementer au dislike */

export function likesDiskes() {
     let likes = document.querySelectorAll(".likes");

     likes.forEach((likeElement) => {
          let etat = false;
          likeElement.lastElementChild.addEventListener("click", () => {
               if (!etat) {
                    etat = true;
                    let etape = parseInt(
                         likeElement.firstElementChild.textContent++
                    );
                    return etape;
               } else {
                    etat = false;
                    let etape = parseInt(
                         likeElement.firstElementChild.textContent--
                    );
                    return etape;
               }
          });
     });
}
