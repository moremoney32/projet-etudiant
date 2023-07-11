/***
 * function qui recupere les donnees dans l input
 * @param {object} userFormulaire
 * @return {promise}
 */
let arrayUser = [];
export function recuperationFormData(userFormulaire) {
     return new Promise((resolve) => {
          let { userName, tagline, likes } = userFormulaire;
          if ([userName, tagline, likes].includes("") === true) {
               return resolve("veuillez remplir toutes les cases");
          } else {
               arrayUser.push(userFormulaire);
               return (
                    resolve(arrayUser),
                    (document.querySelector("#userName").value = ""),
                    (document.querySelector("#tagline").value = ""),
                    (document.querySelector("#likes").value = "")
               );
          }
     });
}
