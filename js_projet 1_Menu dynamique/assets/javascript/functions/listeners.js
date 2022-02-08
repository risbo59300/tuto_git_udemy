var nav = document.querySelector('nav.header-left');
var iconNav = document.querySelector('.header-icon');
var listesLi = document.querySelectorAll(".header-left ul li");

/**
 * Objet contenant les gestionnaire d'evenement
 */
var listenerFunctions = {
    //fonction d'ouverture du menu
    openNav:  () => {
        nav.style.display = "block";
    },
    //fonction de fermeture du menu
    closeNav :  () => {
        nav.style.display = "none";
    }

}

/**
 * Fonction qui realise les abonnements
 */
var setupListeners = () => {
    iconNav.onmouseover = listenerFunctions.openNav;

    nav.addEventListener('mouseleave', listenerFunctions.closeNav)
   
    //ajout d'évenement sur la liste du menu
    for (let i = 0; i < listesLi.length; i++) {
        const li = listesLi[i];
        li.onclick = listenerFunctions.closeNav;
        
    }
}


