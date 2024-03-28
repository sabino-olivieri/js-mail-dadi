// prendo elemento button play
const playBtnElem = document.getElementById("play");

// prendo elemento message-number
const messageNumberElem = document.querySelector(".message-number");

// prendo elemento container
const containerElem = document.querySelector(".container");

// aggiungo eventlistner clik al button
playBtnElem.addEventListener("click", function () {

    const numPc = Math.floor(Math.random() * 6 + 1);
    console.log("numPc:", numPc);

    const numUser = Math.floor(Math.random() * 6 + 1);
    console.log("numUser:", numUser);

    let containerBg = "bg-green";

    let resultMessage = "Hai vinto";

    if (numPc === numUser) {

        resultMessage = "Hai pareggiato";
        containerBg = "bg-bisque"

    } else if (numPc > numUser) {

        resultMessage = "Hai perso";
        containerBg = "bg-red";

    }

    containerElem.classList.remove("bg-bisque", "bg-red", "bg-green");
    containerElem.classList.add(containerBg);
    console.warn(resultMessage);

    messageNumberElem.classList.remove("hidden");
    messageNumberElem.innerHTML = `
    <h6>Dado PC: ${numPc}</h6>
    <h6>Dado Utente: ${numUser}</h6>
    <h2>${resultMessage}</h2>`;

});