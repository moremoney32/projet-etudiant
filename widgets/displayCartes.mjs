/**
 *function qui affiche les cartes dans le dom
 @param {array} arrayUser
 @return {} */
export function displayCartes(arrayUserForm) {
     let htmlUser;
     arrayUserForm.forEach((userForm) => {
          htmlUser = `


    <div class="sous-contenair">
        <p>${userForm.userName}</p>
        <span>${userForm.tagline}</span>
        <div class='likes'>
            <span class='counter'>${userForm.likes}</span>
            <img src="icons/hearth.svg"  class='hearth' alt="">
        </div>
        <img src="icons/close.svg"  class='close' alt="">

    </div>
        
        
        `;
     });

     return (document.querySelector("#contenair").innerHTML += htmlUser);
}
