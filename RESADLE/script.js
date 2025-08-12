document.addEventListener('DOMContentLoaded', () => {
    const players = [
       {name: "ARTISHPRO31", position:"CB", team:"BVB", league:"BUNDESLIGA", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:1, image: "https://i.hizliresim.com/d71b4ax.png", },
 {name: "HELZIY", position:"CM", team:"FIORENTINA", league:"SERIE A", country:"TÜRKİYE", rank:"C", ballondor: 0, ucl:0, image: "https://i.hizliresim.com/prb757u.png", },
 {name: "MEMORIENTES", position:"CM", team:"SEVILLA", league:"LALIGA", country:"TÜRKİYE", rank:"C", ballondor: 0, ucl:1, image: "https://i.hizliresim.com/4pk9hvw.png", },
 {name: "YHYATIC", position:"ST", team:"JUVENTUS", league:"SERIE A", country:"TÜRKİYE", rank:"C", ballondor: 0, ucl:0, image: "https://i.hizliresim.com/fs2ctkh.png", },
{name: "FRIEZTAA", position:"CB", team:"BVB", league:"BUNDESLIGA", country:"TÜRKİYE", rank:"C", ballondor: 0, ucl:1, image: "https://i.hizliresim.com/dxc9akw.png", },
{name: "BULUTKRH52", position:"CM", team:"F/A", league:"Takımsız", country:"TÜRKİYE", rank:"C", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/jdsf2o7.png", },
{name: "EMREDOKU", position:"CM", team:"F/A", league:"Takımsız", country:"TÜRKİYE", rank:"C", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/kld6vht.png", },
{name: "METE7104", position:"CB", team:"BVB", league:"BUNDESLIGA", country:"TÜRKİYE", rank:"C", ballondor: 0, ucl:1, image: "https://i.hizliresim.com/gibidyr.png", },
 {name: "ERDOZOR61", position:"ST", team:"BVB", league:"BUNDESLIGA", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:0, image: "https://i.hizliresim.com/q7lpwk0.png", },
 {name: "METETURKIC", position:"CM", team:"BVB", league:"BUNDESLIGA", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:1, image: "https://i.hizliresim.com/mxw4wtl.png", },
{name: "AHMET", position:"CM", team:"BVB", league:"BUNDESLIGA", country:"TÜRKİYE", rank:"B", ballondor: 0, ucl:1, image: "https://i.hizliresim.com/rroolxd.png", },
 {name: "EGEREIZ", position:"CB", team:"HEIDENHEIM", league:"BUNDESLIGA", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:0, image: "https://i.hizliresim.com/d1p17s7.png", },
 {name: "ASITURKIC", position:"CM", team:"JUVENTUS", league:"SERIE A", country:"TÜRKİYE", rank:"C", ballondor: 0, ucl:0, image: "https://i.hizliresim.com/r7kom4p.png", },
 {name: "IONLYSUAT", position:"CB", team:"SEVILLA", league:"LALIGA", country:"TÜRKİYE", rank:"C", ballondor: 0, ucl:1, image: "https://i.hizliresim.com/m1ibeii.png", },
 {name: "ATAGYH", position:"CM", team:"F/A", league:"Takımsız", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/63nurvu.png", },
 {name: "ENISIFY", position:"CB", team:"F/A", league:"Takımsız", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/lka0pq4.png", },
  {name: "DEMIRAII", position:"CM", team:"BVB", league:"BUNDESLIGA", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:0, image: "https://i.hizliresim.com/fwspm75.png", },
  {name: "KEMALAHMET", position:"CM", team:"F/A", league:"Takımsız", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/cm9wsex.png", },
   {name: "SPLASH", position:"CB", team:"FIORENTINA", league:"SERIE A", country:"TÜRKİYE", rank:"C", ballondor: 0, ucl:0, image: "https://i.hizliresim.com/69u7dav.png", },
    {name: "PUNCHLIFE", position:"CB",  team:"VALENCIA", league:"LALIGA", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/a9b58df.png", },
     {name: "UMUTKURT", position:"CM", team:"SPORTING", league:"PORTEKIZ LIGI", country:"TÜRKİYE", rank:"C", ballondor: 0, ucl:0, image: "https://i.hizliresim.com/27j349q.png", },
      {name: "SOLURELION", position:"CB",   team:"F/A", league:"Takımsız",  country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/fqqssg1.png", },
       {name: "H_ASCHWALTH", position:"CM", team:"FIORENTINA", league:"SERIE A", country:"TÜRKİYE", rank:"C", ballondor: 0, ucl:0, image: "https://i.hizliresim.com/s4nrl8k.png", },
        {name: "VERLAON", position:"CM",  team:"VALENCIA", league:"LALIGA", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/ag6talh.png", },
        {name: "PREYTIC", position:"GK", team:"F/A", league:"Takımsız", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/p3a6w70.png", },
        {name: "MUH", position:"GK", team:"F/A", league:"Takımsız", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/49xgalp.png", },
        {name: "MİRAÇ", position:"GK", team:"BVB", league:"BUNDESLIGA", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/a8fz6yf.png", },
        {name: "MALUZUR", position:"ST",team:"BARCELONA", league:"LALIGA", country:"İNGİLİZ", rank:"X", ballondor: 2, ucl:2, image:"https://i.hizliresim.com/a2ie8ht.png", }, 
        {name: "NINJISSO", position:"CM",team:"F/A", league:"Takımsız", country:"İNGİLİZ", rank:"X", ballondor: 3, ucl:6, image:"https://i.hizliresim.com/kobgq1o.png", },  
        {name: "DHPREME", position:"CM",team:"REAL MADRID", league:"LALIGA", country:"ABD", rank:"X", ballondor: 1, ucl:0, image:"https://i.hizliresim.com/adbdfzv.png", }, 
        {name: "MAKELELE", position:"CM",team:"MANCHESTER UNITED", league:"PREMIER LEAGUE", country:"PORTEKIZ", rank:"X", ballondor: 2, ucl:2, image:"https://i.hizliresim.com/dd07fqm.png", },
         {name: "NEPZOS", position:"ST",team:"BVB", league:"BUNDESLIGA", country:"ABD", rank:"X", ballondor: 1, ucl:2, image:"https://i.hizliresim.com/tbmdxjm.png", }, 
         {name: "4RKKZ", position:"CM",team:"LEVERKUSEN", league:"BUNDESLIGA", country:"İNGİLİZ", rank:"A", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/cfs4emq.png", }, 
         {name: "GINGIKEL", position:"CB",team:"REAL MADRID", league:"LALIGA", country:"PORTEKIZ", rank:"A", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/sec84kg.png", },  
         {name: "RASPY", position:"CM", team:"F/A", league:"Takımsız", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/caxh8td.png", },
         {name: "ERAY", position:"ST", team:"F/A", league:"Takımsız", country:"TÜRKİYE", rank:"D", ballondor: 0, ucl:0, image:"https://i.hizliresim.com/54n5yuc.png", },
    ];

    const rankHierarchy = { 'D': 0, 'C': 1, 'B': 2, 'A': 3, 'X': 4 };

    let secretPlayer;
    let guessCount = 0;
    let guessedPlayerNames = [];

    // DOM Elementleri
    const playerInput = document.getElementById('player-input');
    const suggestionsBox = document.getElementById('suggestions-box');
    const guessesGrid = document.getElementById('guesses-grid');
    const guessCountSpan = document.getElementById('guess-count');
    const winMessage = document.getElementById('win-message');
    const winGuessCountSpan = document.getElementById('win-guess-count');
    const secretPlayerNameSpan = document.getElementById('secret-player-name');
    const playAgainBtn = document.getElementById('play-again-btn');

    function initGame() {
        secretPlayer = players[Math.floor(Math.random() * players.length)];
        // console.log("Gizli Oyuncu:", secretPlayer.name);
        guessCount = 0;
        guessedPlayerNames = [];
        updateGuessCount();
        guessesGrid.innerHTML = '';
        playerInput.value = '';
        playerInput.disabled = false;
        winMessage.classList.add('hidden');
    }

    function updateGuessCount() {
        guessCountSpan.textContent = guessCount;
    }

    playerInput.addEventListener('input', () => {
        const query = playerInput.value.toLowerCase();
        suggestionsBox.innerHTML = '';
        if (query.length < 1) { return; }

        const filteredPlayers = players.filter(player =>
            player.name.toLowerCase().startsWith(query) && !guessedPlayerNames.includes(player.name)
        );

        filteredPlayers.forEach(player => {
            const item = document.createElement('div');
            item.classList.add('suggestion-item');
            
            // DÜZELTME: Silinen resim etiketinin içeriği geri eklendi (Öneri Kutusu)
            item.innerHTML = `
                <img src="${player.image}" alt="${player.name}">
                <span>${player.name}</span>
            `;

            item.addEventListener('click', () => {
                handleGuess(player.name);
                playerInput.value = '';
                suggestionsBox.innerHTML = '';
            });
            suggestionsBox.appendChild(item);
        });
    });

    function handleGuess(playerName) {
        const guessedPlayer = players.find(p => p.name === playerName);
        if (!guessedPlayer || guessedPlayerNames.includes(playerName)) { return; }

        guessCount++;
        updateGuessCount();
        guessedPlayerNames.push(playerName);

        const row = document.createElement('div');
        row.classList.add('guess-row');
        
        // DÜZELTME: Silinen resim etiketinin içeriği geri eklendi (Tahmin Tablosu)
        row.appendChild(createCell(guessedPlayer.name === secretPlayer.name, `<img src="${guessedPlayer.image}" class="player-image" alt="${guessedPlayer.name}">`));
        
        row.appendChild(createCell(guessedPlayer.position === secretPlayer.position, guessedPlayer.position));
        row.appendChild(createCell(guessedPlayer.team === secretPlayer.team, guessedPlayer.team));
        row.appendChild(createCell(guessedPlayer.league === secretPlayer.league, guessedPlayer.league));
        row.appendChild(createCell(guessedPlayer.country === secretPlayer.country, guessedPlayer.country));
        row.appendChild(createRankCell(guessedPlayer.rank, secretPlayer.rank));
        row.appendChild(createNumericCell(guessedPlayer.ballondor, secretPlayer.ballondor));
        row.appendChild(createNumericCell(guessedPlayer.ucl, secretPlayer.ucl));

        guessesGrid.prepend(row);

        if (guessedPlayer.name === secretPlayer.name) {
            setTimeout(() => {
                winGuessCountSpan.textContent = guessCount;
                secretPlayerNameSpan.textContent = secretPlayer.name;
                winMessage.classList.remove('hidden');
                playerInput.disabled = true;
            }, 1000); 
        }
    }

    function createCell(isCorrect, content) {
        const cell = document.createElement('div');
        cell.classList.add('guess-cell');
        if (isCorrect) {
            cell.classList.add('correct');
        } else {
            cell.classList.add('incorrect');
        }
        cell.innerHTML = content;
        return cell;
    }

    function createRankCell(guessedRank, secretRank) {
        const cell = document.createElement('div');
        cell.classList.add('guess-cell');
        const guessedValue = rankHierarchy[guessedRank];
        const secretValue = rankHierarchy[secretRank];
        let arrow = '';
        if (guessedValue < secretValue) { arrow = ' ▲'; } 
        else if (guessedValue > secretValue) { arrow = ' ▼'; }
        cell.textContent = guessedRank + arrow;
        if (guessedValue === secretValue) {
            cell.classList.add('correct');
        } else {
            cell.classList.add('incorrect');
        }
        return cell;
    }

    function createNumericCell(guessedValue, secretValue) {
        const cell = document.createElement('div');
        cell.classList.add('guess-cell');
        let arrow = '';
        if (guessedValue < secretValue) { arrow = ' ▲'; } 
        else if (guessedValue > secretValue) { arrow = ' ▼'; }
        cell.textContent = guessedValue + arrow;
        if (guessedValue === secretValue) {
            cell.classList.add('correct');
        } else if (Math.abs(guessedValue - secretValue) <= 1) {
            cell.classList.add('close');
        } else {
            cell.classList.add('incorrect');
        }
        return cell;
    }

    playAgainBtn.addEventListener('click', initGame);
    
    document.addEventListener('click', (e) => {
        if (!playerInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.innerHTML = '';
        }
    });

    initGame();
});