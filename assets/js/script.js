//declarations des variables
const password=document.getElementById('password');
const confirmation=document.getElementById('confirm-password');
const icone=document.getElementsByClassName('fas');
const message=document.getElementsByClassName('message');
const mesure_password=document.getElementsByClassName("password-meter-unit");
const cache=document.querySelector('.hidden');
const bouton=document.querySelector(".bouton-soumettre");
//code intermediaire

/*===============================================================*/

//appels des fonctions
password.addEventListener("input",passwordSize);
password.addEventListener("input",TestMAjMin);
password.addEventListener("input",TestCaracteres);
password.addEventListener("input",forceMotPasse);
bouton.addEventListener('click',ConfirmePassword);

/*=================================================================*/


//functions utilisées
//fonction pour la taille du mot de passe
function passwordSize()
{
    let pass=document.getElementById("password").value;
    let check=icone[0];
    if(pass.length>=8)
    {
        check.classList.add("fa-check");
        message[0].style.color="green";
    }
    else
    {
       check.classList.add("fa-ban");
       message[0].style.color="red";
    }
}

//fonction pour vérifier si il y'a au moins une majuscule et minuscule
function ContientMajuscule(mot)
{   
    const regex= /[A-Z]/;
    return regex.test(mot);
}
function ContientMinuscule(mot)
{
    const regex= /[a-z]/;
    return regex.test(mot);
}


//tester les majuscules et minuscules
function TestMAjMin(){
    let pass=document.getElementById("password").value;
    let check=icone[1];
    if(ContientMajuscule(pass) && ContientMinuscule(pass))
    {
        check.classList.add("fa-check");
        message[1].style.color="green";
    }
    else
    {
        check.classList.add("fa-ban");
        message[1].style.color="red";
    }

}


//es ce qu'il contient un caractère spécial
function ContientCaractereSpecial(mot)
{
    const caractereSpecial_regex = /[!@#$%^&*(),.?":{}|<>]/;
    return caractereSpecial_regex.test(mot);
}

//es ce qu'il contient un caractère spécial
function TestCaracteres(){
    let pass=document.getElementById("password").value;
    let check=icone[2];
    if(ContientCaractereSpecial(pass))
    {
        check.classList.add("fa-check");
        message[2].style.color="green";
    }
    else
    {
        check.classList.add("fa-ban");
        message[2].style.color="red";
    }
}

function forceMotPasse(){
    let pass=document.getElementById("password").value;
    if(zxcvbn(pass).score<2)
    {

        for(let i=0; i<2; i++){
            mesure_password[i].style.backgroundColor="red";
        }
    }
    else if(zxcvbn(pass).score<4){
        for(let i=0; i<4; i++){
            mesure_password[i].style.backgroundColor="yellow";
            }
        }
    else{
        for(let i=0; i<5; i++){
            mesure_password[i].style.backgroundColor="green";
        } 
    }
}

//confirmation du mot de passe
function ConfirmePassword(e)
{
    let pass=document.getElementById("password").value;
    let passConfirm=confirmation.value;

    if(pass!=passConfirm){
        e.preventDefault();
        cache.classList.toggle("hidden");
        cache.style.color="red";
    }
}



