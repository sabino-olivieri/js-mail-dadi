// creo array mailList

const mailList = ["pippo@email.it", "pluto@email.it", "paperino@email.it", "topolino@email.it"];

// prendo l'elemento button send
const sendBtn = document.getElementById("send");

// prendo l'elemento button cancel
const cancelBtn = document.getElementById("cancel");

// prendo l'elemento container
const containerElem = document.querySelector(".container");

// prendo l'elemento message
const messageElem = document.querySelector(".message");

// applico eventlistner a sendBtn
sendBtn.addEventListener("click", function () {
    console.log("clik");

    // creo variabile per il messaggio
    let userMessage = "Utente non autorizzato";

    //prendo il contenuto di input mail
    const userMail = document.getElementById("mail").value;
    console.log("userMail:", userMail);

    // creo classe per cabiare colore di sfondo
    let classBg = "bg-red";

    //creo ciclo per il controllo
    for(let i = 0; i < mailList.length; i++) {

        console.log(mailList[i]);

        if(userMail === mailList[i]) {

            userMessage = "Benvenuto";
            classBg = "bg-green";

        }
    }

    containerElem.classList.remove("bg-bisque","bg-green", "bg-red");
    containerElem.classList.add(classBg);

    messageElem.classList.remove("hidden")
    messageElem.innerHTML = `<h2>${userMessage}</h2>`;
});

cancelBtn.addEventListener("click", function () {

    const userMail = document.getElementById("mail").value = "";


    containerElem.classList.remove("bg-green", "bg-red");
    containerElem.classList.add("bg-bisque");

    messageElem.classList.add("hidden")
    messageElem.innerHTML = "";


});