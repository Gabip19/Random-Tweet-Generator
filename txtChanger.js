

// function loadTxt() {
//     beginQuotes = readFileSync('text/baica_inceput.txt', 'utf-8').split('\n');
//     midQuotes = readFileSync('text/baica_mijloc.txt', 'utf-8').split('\n');
//     finalQuotes = readFileSync('text/baica_final.txt', 'utf-8').split('\n');
//     console.log("Loaded strings");
// }

function changeTxt() {
    var beginQuotes = [
        "I'm home. 9:31PM. It's warm.", 
        "The confort zone, installs after 3 hard weeks.",
        "I'm in the car. Volkswagen Golf. 8:15PM.",
        "He told me a story...",
        "Rule 1:"
    ];
    var midQuotes = [
        "Ride wife.",
        "In these silent and peaceful moments, all the fails that I have, integrate in my process.",
        "Otherwise, the oportunity will catch you, fact which, automatically makes you a modern slave. A consumer.",
        "Dupa maraton ai nevoie de o meritata pauza cu siguranta. 🚀",
        "He said BINGO. \"Let\'s make money for a pizza for our kids\" xd",
        "He took the phone and answer to that post.",
        "\"Hi, I can fix your bathroom, when can I come to you?\"",
        "He solved all the problems and get paid like 200 lei.",
        "\"In life, it depends where you position yourself and how\"",
        "I take it to 4 thousand turations. Clutch kick.",
        "14 ani. 5 clienți. 0 scuze.",
        "\"Growth Partners ce creeaza sisteme de achiziție automatizate.\" 50,000€ (profit)",
        "800 euro/month 💸💸"
    ];
    var finalQuotes = [
        "Life good.",
        "Trust in your process.",
        "Regret.",
        "Trust in his word. In process of escaping the Matrix. The modern slavery sistem.",
        "Keep this in mind.✌",
        "Tatal meu are un brand personal foarte puternic. Eu urmez.❤",
        "Efect și cauzalitate."
    ];
    
    var text = "";
    const elem = document.getElementById("text-box");

    var beginIndex = Math.floor(Math.random() * (beginQuotes.length));
    text += beginQuotes[beginIndex] + "<br><br>";

    var maxQuotes = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < maxQuotes; i++) {
        midIndex = Math.floor(Math.random() * (midQuotes.length));
        text += midQuotes[midIndex] + "<br>";
    }

    var finalIndex = Math.floor(Math.random() * (finalQuotes.length));
    text += "<br>" + finalQuotes[finalIndex];
    
    elem.innerHTML = text;
}