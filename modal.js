function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}


// message d'erreur après submit si champ vide
function validate(event) {
    event.preventDefault()
    var prenom = document.getElementById("first");
    if (prenom.value.length < 3) {
        document.getElementById("first-error").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
        prenom.style.border = "2px solid #FF4E60"
    } else {
        document.getElementById("first-error").innerHTML = ""
        prenom.style.border = "none"
    }
    var nom = document.getElementById("last")
    if (nom.value.length < 3) {
        document.getElementById("last-error").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
        nom.style.border = "2px solid #FF4E60"
    } else {
        document.getElementById("last-error").innerHTML = ""
        nom.style.border = "none"
    }
    var email = document.getElementById("email")
    if (email.value == "") {
        document.getElementById("email-error").innerHTML = "Veuillez entrer votre adresse éléctronique."
        email.style.border = "2px solid #FF4E60"
    } else {
        document.getElementById("email-error").innerHTML = ""
        email.style.border = "none"
    }
    new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    const emailex =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.value)
    if (emailex == false){
        document.getElementById("email-error").innerHTML = "Votre adresse n'est pas valide."
        email.style.border = "2px solid #FF4E60"
    } else {
        document.getElementById("email-error").innerHTML = ""
        email.style.border = "none"
    }
    var anniv = document.getElementById("birthdate")
    if (anniv.value == "") {
        document.getElementById("anniv-error").innerHTML = "Veuillez entrer votre date de naissance."
        anniv.style.border = "2px solid #FF4E60"
    } else {
        document.getElementById("anniv-error").innerHTML = ""
        anniv.style.border = "none"
    }
    var quantity = document.getElementById("quantity")
    if (quantity.value == "") {
        document.getElementById("quantite-error").innerHTML = "Vous devez choisir une option."
        quantity.style.border = "2px solid #FF4E60"
    } else {
        document.getElementById("quantite-error").innerHTML = ""
        quantity.style.border = "none"
    }
    var location1 = document.getElementById("location1")
    var location2 = document.getElementById("location2")
    var location3 = document.getElementById("location3")
    var location4 = document.getElementById("location4")
    var location5 = document.getElementById("location5")
    var location6 = document.getElementById("location6")
    if ((location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked) == false) {
        document.getElementById("ville-error").innerHTML = "Vous devez choisir une option."
    } else {
        document.getElementById("ville-error").innerHTML = ""
    }
    var checkbox1 = document.getElementById("checkbox1")
    if (checkbox1.checked == false) {
        document.getElementById("cocher-error").innerHTML = "Vous devez accepter les conditions d'utilisation."
    } else {
        document.getElementById("cocher-error").innerHTML = ""
    }
    if ((document.getElementById("first-error").innerHTML == "") &&
        (document.getElementById("last-error").innerHTML == "") &&
        (document.getElementById("email-error").innerHTML == "") &&
        (document.getElementById("anniv-error").innerHTML == "") &&
        (document.getElementById("quantite-error").innerHTML == "") &&
        (document.getElementById("ville-error").innerHTML == "") &&
        (document.getElementById("cocher-error").innerHTML == "")) {
        modalbg.style.display = "none"
        document.querySelector(".success-msg").style.display = "flex"
    }

}

document.getElementById("formulaire").addEventListener("submit", validate)




// le bouton X est fonctionnel
document.querySelector(".close").addEventListener("click", function() {
    modalbg.style.display = "none"
})

// Fermer message de confirmation
document.querySelector(".fermer").addEventListener("click", function() {
    document.querySelector(".success-msg").style.display = "none"
})