/* ==============================
   LANDING PAGE
============================== */

function goToPage() {
    window.location.href = "page1.html";
}

function runAway(button) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}


/* ==============================
   PAGE NAVIGATION
============================== */

function nextPage(page) {
    window.location.href = page;
}


/* ==============================
   PAGE 5 – FUN QUESTION
============================== */

function wrongAnswer() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}

function correctAnswer() {
    document.getElementById("nextBtn").classList.remove("hidden");
}


/* ==============================
   PAGE 7 – LEAVE QUESTION
============================== */

function wrongLeave() {
    const popup = document.getElementById("leavePopup");
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}

function correctLeave() {
    document.getElementById("leaveNext").classList.remove("hidden");
}


/* ==============================
   PAGE 9 – LOVE QUESTION
============================== */

function wrongLove() {
    const popup = document.getElementById("lovePopup");
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}

function correctLove() {
    document.getElementById("loveNext").classList.remove("hidden");
}


/* ==============================
   PAGE 12 – BIRTHDAY REVEAL
============================== */

function revealBirthday() {
    document.getElementById("beforeReveal").classList.add("hidden");
    document.getElementById("afterReveal").classList.remove("hidden");
}


/* ==============================
   PAGE 13 – FINAL PAGE
============================== */

function moveNoButton(button){
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    button.style.transform = `translate(${x}px, ${y}px)`;
}

function showSpecial(){
    document.getElementById("specialMessage").classList.remove("hidden");
    createHearts();
}
function createHearts(){
    for(let i=0;i<30;i++){
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = "20px";
        heart.style.transition = "all 1s ease-out";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.style.left = Math.random()*100 + "vw";
            heart.style.top = Math.random()*100 + "vh";
            heart.style.opacity = 0;
        },10);

        setTimeout(()=>heart.remove(),1000);
    }
}
const card = document.querySelector(".card-3d");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});