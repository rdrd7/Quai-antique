const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSingin = document.getElementById("btnSignin");

btnSingin.addEventListener("click",checkCredentials);

function checkCredentials(){
    //ici, il faudra appeler l'API pour verifier les credentials en BDD
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        alert("vous ete connecté");

        //Il faudra récupérer le vrai token
        const token = "zdopkkzaodpjzapoefjazpoefjpofjpojfp";

        //placer ce token en cookie

        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}

