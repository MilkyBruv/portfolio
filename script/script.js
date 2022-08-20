const finalIntroText = ["", "K", "a", "i", " ", "M", "c", "E", "n", "r", "o", "e"];
let introText = "";

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

async function start() {

    for (let i = 0; i < finalIntroText.length; i++) {
        
        introText += finalIntroText[i];
        document.getElementById("intro-text-header").innerHTML = introText + "_";
        await sleep(100);
        
    }

}

window.onload = start;