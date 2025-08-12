
const players = [
    { name: "Artish", photo: "https://i.hizliresim.com/d71b4ax.png", marketValue: 12.5 }, 
    { name: "Helziy", photo: "https://i.hizliresim.com/prb757u.png", marketValue: 20 },
    { name: "babatopcuu", photo: "https://i.hizliresim.com/rroolxd.png", marketValue: 60 },
    { name: "MeteTurkic", photo: "https://i.hizliresim.com/mxw4wtl.png", marketValue: 12.5 },
    { name: "Erdozor61", photo: "https://i.hizliresim.com/q7lpwk0.png", marketValue: 12.5 },
    { name: "Mete7104", photo: "https://i.hizliresim.com/gibidyr.png", marketValue: 20 },
    { name: "Bulutkrh52", photo: "https://i.hizliresim.com/jdsf2o7.png", marketValue: 22.5 },
    { name: "emrdoku", photo: "https://i.hizliresim.com/kld6vht.png", marketValue: 25 },
    { name: "Lagi", photo: "https://i.hizliresim.com/3nfqp6a.png", marketValue: 52.5 },
    { name: "evil33pro", photo: "https://i.hizliresim.com/dcnjcv4.png", marketValue: 27.5 },
    { name: "Frieztaa", photo: "https://i.hizliresim.com/dxc9akw.png", marketValue: 30 },
    { name: "Yhyatic", photo: "https://i.hizliresim.com/fs2ctkh.png", marketValue: 25 },
    { name: "Memorientes", photo: "https://i.hizliresim.com/4pk9hvw.png", marketValue: 20 },
    { name: "Miraç7104", photo: "https://i.hizliresim.com/1lvk6o4.png", marketValue: 12 },
    { name: "KemalAhmet", photo: "https://i.hizliresim.com/cm9wsex.png", marketValue: 12.5 },
    { name: "Splashx321", photo: "https://i.hizliresim.com/69u7dav.png", marketValue: 22.5 },
     { name: "Huso_Master", photo: "https://i.hizliresim.com/sxtilem.png", marketValue: 10 },
     { name: "Demirall", photo: "https://i.hizliresim.com/fwspm75.png", marketValue: 10 },
     { name: "IOnlySuat", photo: "https://i.hizliresim.com/m1ibeii.png", marketValue: 22.5 },
     { name: "asiturkic", photo: "https://i.hizliresim.com/r7kom4p.png", marketValue: 22.5 },
      { name: "Atagyh", photo: "https://i.hizliresim.com/63nurvu.png", marketValue: 10 },
      { name: "egereiz3256", photo: "https://i.hizliresim.com/d1p17s7.png", marketValue: 12.5 },
      { name: "enisify", photo: "https://i.hizliresim.com/lka0pq4.png", marketValue: 12.5 },
       { name: "Umutkurt", photo: "https://i.hizliresim.com/27j349q.png", marketValue: 22.5 },
       { name: "Punchlife", photo: "https://i.hizliresim.com/a9b58df.png", marketValue: 10 },
       { name: "Preytic", photo: "https://i.hizliresim.com/p3a6w70.png", marketValue: 10 },
       { name: "Solow", photo: "https://i.hizliresim.com/fqqssg1.png", marketValue: 10 },
       { name: "Kayra", photo: "https://i.hizliresim.com/s4nrl8k.png", marketValue: 22.5 },
       { name: "Verlaon", photo: "https://i.hizliresim.com/ag6talh.png", marketValue: 12.5 },
       { name: "Muh", photo: "https://i.hizliresim.com/49xgalp.png", marketValue: 12.5 },
       { name: "Eray", photo: "https://i.hizliresim.com/54n5yuc.png", marketValue: 10 },
       { name: "Raspy", photo: "https://i.hizliresim.com/caxh8td.png", marketValue: 10 },
    
];

let score = 0; 
let currentPlayers = []; 
let gameActive = true; 


function getRandomPlayer(excludePlayers = []) {
    
    let availablePlayers = players.filter(p => !excludePlayers.some(ep => ep.name === p.name));
    
    
    if (availablePlayers.length === 0) {
        availablePlayers = players;
    }

    const randomIndex = Math.floor(Math.random() * availablePlayers.length);
    return availablePlayers[randomIndex];
}


 
 
function initializeGame() {
    score = 0;
    updateScore();
    nextRound(); 
}


 
 
function displayPlayers() {
    const [player1, player2] = currentPlayers;

    const player1Card = document.getElementById('player1-card');
    const player2Card = document.getElementById('player2-card');
    const player1ValueDisplay = document.getElementById('player1-value');
    const player2ValueDisplay = document.getElementById('player2-value');

    
    player1Card.dataset.value = player1.marketValue;
    player2Card.dataset.value = player2.marketValue;

    
    player1Card.querySelector('img').src = player1.photo;
    player1Card.querySelector('img').alt = player1.name;
    player1Card.querySelector('p').textContent = player1.name;

    
    player2Card.querySelector('img').src = player2.photo;
    player2Card.querySelector('img').alt = player2.name;
    player2Card.querySelector('p').textContent = player2.name;

    
    player1Card.classList.remove('bg-green-500/50', 'bg-red-500/50');
    player2Card.classList.remove('bg-green-500/50', 'bg-red-500/50');
    
    player1Card.classList.remove('bg-gradient-to-br'); 
    player2Card.classList.remove('bg-gradient-to-br'); 
    player1ValueDisplay.classList.add('hidden');
    player2ValueDisplay.classList.add('hidden');

   
    player1Card.classList.add('bg-gradient-to-br', 'from-blue-950', 'to-gray-800');
    player2Card.classList.add('bg-gradient-to-br', 'from-blue-950', 'to-gray-800');


    gameActive = true; 
}


 
 
function updateScore() {
    document.getElementById('score').textContent = score;
}


function handleGuess(chosenPlayerId) {
    if (!gameActive) return;

    gameActive = false; 

    const player1Card = document.getElementById('player1-card');
    const player2Card = document.getElementById('player2-card');
    const player1ValueDisplay = document.getElementById('player1-value');
    const player2ValueDisplay = document.getElementById('player2-value');

    const player1Value = parseFloat(player1Card.dataset.value);
    const player2Value = parseFloat(player2Card.dataset.value);

    let isCorrect = false;
    let chosenCard = (chosenPlayerId === 'player1-card') ? player1Card : player2Card;
    let otherCard = (chosenPlayerId === 'player1-card') ? player2Card : player1Card;

    
    player1Card.classList.remove('bg-gradient-to-br', 'from-blue-950', 'to-gray-800');
    player2Card.classList.remove('bg-gradient-to-br', 'from-blue-950', 'to-gray-800');

    
    if (chosenPlayerId === 'player1-card') {
        if (player1Value >= player2Value) { 
            isCorrect = true;
        }
    } else { 
        if (player2Value >= player1Value) { 
            isCorrect = true;
        }
    }

   
    if (isCorrect) {
        score++;
        chosenCard.classList.add('bg-green-500/50'); 
        
        if (player1Value === player2Value) { 
            player1Card.classList.add('bg-green-500/50');
            player2Card.classList.add('bg-green-500/50');
        } else if (player1Value > player2Value) { 
            player1Card.classList.add('bg-green-500/50');
            player2Card.classList.add('bg-red-500/50');
        } else { 
            player2Card.classList.add('bg-green-500/50');
            player1Card.classList.add('bg-red-500/50');
        }
    } else {
        score = 0; 
        chosenCard.classList.add('bg-red-500/50'); 
        
        if (player1Value > player2Value) {
            player1Card.classList.add('bg-green-500/50');
        } else if (player2Value > player1Value) {
            player2Card.classList.add('bg-green-500/50');
        }
    }
    updateScore();

    
    player1ValueDisplay.textContent = `Değer: ${player1Value} M €`;
    player2ValueDisplay.textContent = `Değer: ${player2Value} M €`;
    player1ValueDisplay.classList.remove('hidden');
    player2ValueDisplay.classList.remove('hidden');

   
    setTimeout(() => {
        nextRound();
    }, 2000); 
}


function nextRound() {
    let player1 = getRandomPlayer();
   
    let player2 = getRandomPlayer([player1]); 

    
    
    while (player1.marketValue === player2.marketValue && players.length > 1) {
        player2 = getRandomPlayer([player1]);
    }

    currentPlayers = [player1, player2];
    displayPlayers(); 
}


window.onload = function() {
   
    document.getElementById('player1-card').addEventListener('click', () => handleGuess('player1-card'));
    document.getElementById('player2-card').addEventListener('click', () => handleGuess('player2-card'));
    
    initializeGame(); 
};