const players = [
    {
        id: 1,
        name: "Artishpro31",
        photo: "https://i.hizliresim.com/d71b4ax.png",
        stats: {
            position: "Defans",
            goals: 3,
            assists: 7,
            cleanSheets: 0,
            trophies: 6,
            marketValue: "12,5 Milyon €",
            matchesPlayed: 78,
            yellowCards: 11,
            redCards: 4,
        },
        percentages: {
            first11: 79,
            yellowCard: 14.1,
            redCard: 5.1,
            scoreContribution: 12.8,
            cleanSheetsPercentage: 0,
        }
    },
    {
        id: 2,
        name: "Helziy",
        photo: "https://i.hizliresim.com/prb757u.png",
        stats: {
            position: "Defans-Ortasaha",
            goals: 36,
            assists: 44,
            cleanSheets: 1,
            trophies: 4,
            marketValue: "20 Milyon €",
            matchesPlayed: 168,
            yellowCards: 22,
            redCards: 1,
        },
        percentages: {
            first11: 92,
            yellowCard: 13.1,
            redCard: 0.6,
            scoreContribution: 47.6,
            cleanSheetsPercentage: 0.60, 
        }
    },
    {
        id: 3,
        name: "babatopcuu",
        photo: "https://i.hizliresim.com/rroolxd.png",
        stats: {
            position: "Ortasaha-Forvet",
            goals: 95,
            assists: 104,
            cleanSheets: 1,
            trophies: 6,
            marketValue: "60 Milyon €",
            matchesPlayed: 207,
            yellowCards: 9,
            redCards: 1,
        },
        percentages: {
            first11: 82,
            yellowCard: 4.3,
            redCard: 0.5,
            scoreContribution: 96.1,
            cleanSheetsPercentage: 0.48, 
        }
    },
    {
        id: 4,
        name: "MeteTurkic",
        photo: "https://i.hizliresim.com/mxw4wtl.png",
        stats: {
            position: "Ortasaha-Forvet",
            goals: 37,
            assists: 14,
            cleanSheets: 1,
            trophies: 9,
            marketValue: "12,5 Milyon €",
            matchesPlayed: 105,
            yellowCards: 4,
            redCards: 1,
        },
        percentages: {
            first11: 85,
            yellowCard: 3.8,
            redCard: 1.0,
            scoreContribution: 48.6,
            cleanSheetsPercentage: 0.95, 
        }
    },
    {
        id: 5,
        name: "Erdozor61",
        photo: "https://i.hizliresim.com/q7lpwk0.png",
        stats: {
            position: "Ortasaha-Forvet",
            goals: 60,
            assists: 38,
            cleanSheets: 0,
            trophies: 4,
            marketValue: "12,5 Milyon €",
            matchesPlayed: 91,
            yellowCards: 4,
            redCards: 0,
        },
        percentages: {
            first11: 76,
            yellowCard: 4.4,
            redCard: 0,
            scoreContribution: 100,
            cleanSheetsPercentage: 0, 
        }
    },
    {
        id: 6,
        name: "Mete7104",
        photo: "https://i.hizliresim.com/gibidyr.png",
        stats: {
            position: "Defans",
            goals: 8,
            assists: 7,
            cleanSheets: 0,
            trophies: 7,
            marketValue: "20 Milyon €",
            matchesPlayed: 97,
            yellowCards: 11,
            redCards: 2,
        },
        percentages: {
            first11: 70,
            yellowCard: 11.3,
            redCard: 2.1,
            scoreContribution: 15.5,
            cleanSheetsPercentage: 0, 
        }
    },
    {
        id: 7,
        name: "Bulutkrh52",
        photo: "https://i.hizliresim.com/jdsf2o7.png",
        stats: {
            position: "Defans-Ortasaha",
            goals: 27,
            assists: 27,
            cleanSheets: 0,
            trophies: 3,
            marketValue: "22,5 Milyon €",
            matchesPlayed: 78,
            yellowCards: 8,
            redCards: 0,
        },
        percentages: {
            first11: 63,
            yellowCard: 10.3,
            redCard: 0,
            scoreContribution: 69.2,
            cleanSheetsPercentage: 0, 
        }
    },
    {
        id: 8,
        name: "emrdoku",
        photo: "https://i.hizliresim.com/kld6vht.png",
        stats: {
            position: "Ortasaha-Forvet",
            goals: 183,
            assists: 94,
            cleanSheets: 0,
            trophies: 3,
            marketValue: "25 Milyon €",
            matchesPlayed: 219,
            yellowCards: 24,
            redCards: 1,
        },
        percentages: {
            first11: 89,
            yellowCard: 11.0,
            redCard: 0.5,
            scoreContribution: 100,
            cleanSheetsPercentage: 0, 
        }
    },
    {
        id: 9,
        name: "Hjaltee",
        photo: "https://i.hizliresim.com/3nfqp6a.png",
        stats: {
            position: "Kaleci",
            goals: 7,
            assists: 10,
            cleanSheets: 9,
            trophies: 8,
            marketValue: "52,5 Milyon €",
            matchesPlayed: 106,
            yellowCards: 1,
            redCards: 0,
        },
        percentages: {
            first11: 100,
            yellowCard: 0.9,
            redCard: 0,
            scoreContribution: 16,
            cleanSheetsPercentage: 8.5, 
        }
    },
    {
        id: 10,
        name: "evil33pro",
        photo: "https://i.hizliresim.com/dcnjcv4.png",
        stats: {
            position: "Kaleci",
            goals: 0,
            assists: 3,
            cleanSheets: 14,
            trophies: 2,
            marketValue: "27,5 Milyon €",
            matchesPlayed: 90,
            yellowCards: 0,
            redCards: 0,
        },
        percentages: {
            first11: 100,
            yellowCard: 0,
            redCard: 0,
            scoreContribution: 3.3,
            cleanSheetsPercentage: 15.6, 
        }
    },
    {
        id: 11,
        name: "Frieztaa",
        photo: "https://i.hizliresim.com/dxc9akw.png",
        stats: {
            position: "Defans",
            goals: 24,
            assists: 24,
            cleanSheets: 0,
            trophies: 4,
            marketValue: "30 Milyon €",
            matchesPlayed: 169,
            yellowCards: 11,
            redCards: 1,
        },
        percentages: {
            first11: 96,
            yellowCard: 6.5,
            redCard: 0.6,
            scoreContribution: 28.4,
            cleanSheetsPercentage: 0, 
        }
    },
    {
        id: 12,
        name: "Yhyatic",
        photo: "https://i.hizliresim.com/fs2ctkh.png",
        stats: {
            position: "Ortasaha-Forvet",
            goals: 143,
            assists: 62,
            cleanSheets: 0,
            trophies: 4,
            marketValue: "25 Milyon €",
            matchesPlayed: 188,
            yellowCards: 14,
            redCards: 0,
        },
        percentages: {
            first11: 94,
            yellowCard: 7.4,
            redCard: 0,
            scoreContribution: 100,
            cleanSheetsPercentage: 0, 
        }
    },
    {
        id: 13,
        name: "Memorientes",
        photo: "https://i.hizliresim.com/4pk9hvw.png",
        stats: {
            position: "Ortasaha-Forvet",
            goals: 15,
            assists: 6,
            cleanSheets: 0,
            trophies: 4,
            marketValue: "20 Milyon €",
            matchesPlayed: 39,
            yellowCards: 3,
            redCards: 1,
        },
        percentages: {
            first11: 54,
            yellowCard: 7.7,
            redCard: 2.6,
            scoreContribution: 53.8,
            cleanSheetsPercentage: 0, 
        }
    },
];

const playerListDiv = document.getElementById('player-list');
const playerDetailsDiv = document.getElementById('player-details');
const compareButton = document.getElementById('compare-button');
const selectionStatusDiv = document.getElementById('selection-status');
const searchInput = document.getElementById('search-input');
const sortButton = document.getElementById('sort-button');
const resetSortButton = document.getElementById('reset-sort-button');

let selectedPlayerIds = [];
let currentSortIndex = 0; 


const sortOptions = [
    { label: 'Varsayılan', key: null, type: null, isLowerBetter: false },
    { label: 'En Fazla Gol', key: 'goals', type: 'stats', isLowerBetter: false },
    { label: 'En Fazla Asist', key: 'assists', type: 'stats', isLowerBetter: false },
    { label: 'En Fazla Maç', key: 'matchesPlayed', type: 'stats', isLowerBetter: false },
    { label: 'En Fazla Clean Sheets', key: 'cleanSheets', type: 'stats', isLowerBetter: false },
    { label: 'En Yüksek Piyasa Değeri', key: 'marketValue', type: 'stats', isLowerBetter: false },
    { label: 'En Fazla Kupa', key: 'trophies', type: 'stats', isLowerBetter: false },
    { label: 'En Fazla Sarı Kart', key: 'yellowCards', type: 'stats', isLowerBetter: false },
    { label: 'En Fazla Kırmızı Kart', key: 'redCards', type: 'stats', isLowerBetter: false },
    { label: 'En Yüksek İlk 11 Yüzdesi', key: 'first11', type: 'percentages', isLowerBetter: false },
    { label: 'En Yüksek Sarı Kart Yüzdesi', key: 'yellowCard', type: 'percentages', isLowerBetter: false },
    { label: 'En Yüksek Kırmızı Kart Yüzdesi', key: 'redCard', type: 'percentages', isLowerBetter: false },
    { label: 'En Yüksek Skor Katkısı Yüzdesi', key: 'scoreContribution', type: 'percentages', isLowerBetter: false },
    { label: 'En Yüksek Clean Sheets Yüzdesi', key: 'cleanSheetsPercentage', type: 'percentages', isLowerBetter: false }
];


players.forEach(player => {
    if (player.stats.matchesPlayed > 0) {
        player.percentages.cleanSheetsPercentage = parseFloat(((player.stats.cleanSheets / player.stats.matchesPlayed) * 100).toFixed(1));
    } else {
        player.percentages.cleanSheetsPercentage = 0;
    }
});

function renderPlayerList() {
    playerListDiv.innerHTML = '';
    const currentPlayers = searchInput.value.trim() !== ''
        ? players.filter(player => player.name.toLowerCase().includes(searchInput.value.toLowerCase()))
        : players;

    if (currentPlayers.length === 0) {
        playerListDiv.innerHTML = '<p class="text-gray-400 text-center">Oyuncu bulunamadı.</p>';
        return;
    }

    currentPlayers.forEach(player => {
        const playerItem = document.createElement('div');
        playerItem.classList.add(
            'flex', 'items-center', 'gap-4', 'p-3', 'mb-3', 'bg-gray-800',
            'rounded-lg', 'shadow-xl', 'cursor-pointer', 'hover:bg-blue-700',
            'transition-all', 'duration-300', 'ease-in-out', 'transform', 'hover:-translate-y-1'
        );
        if (selectedPlayerIds.includes(player.id)) {
            playerItem.classList.add('selected-player-item');
        }
        playerItem.dataset.playerId = player.id;

        const img = document.createElement('img');
        img.src = player.photo;
        img.alt = player.name;
        img.classList.add('w-14', 'h-14', 'rounded-full', 'object-cover', 'border-3', 'border-blue-500', 'shadow-md');
        img.onerror = "this.onerror=null;this.src='https://placehold.co/120x120/0d1117/e2e8f0?text=N/A';";

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('text-xl', 'font-semibold', 'text-white');
        nameSpan.textContent = player.name;

        playerItem.appendChild(img);
        playerItem.appendChild(nameSpan);
        playerListDiv.appendChild(playerItem);
    });

    updateSelectionStatusAndButton();
}

function handlePlayerSelection(playerId) {
    const index = selectedPlayerIds.indexOf(playerId);
    if (index > -1) {
        selectedPlayerIds.splice(index, 1);
    } else {
        if (selectedPlayerIds.length < 2) {
            selectedPlayerIds.push(playerId);
        } else {
            return;
        }
    }
    renderPlayerList();
  
}

function updateSelectionStatusAndButton() {
    const count = selectedPlayerIds.length;
    compareButton.disabled = count !== 2;
    selectionStatusDiv.textContent = '';
}


let player1Wins = 0;
let player2Wins = 0;

function createComparedStatRow(label, statName, player1, player2, isLowerBetter = false, isPercentage = false) {
    let val1, val2;

    if (player1.stats[statName] !== undefined) {
        val1 = player1.stats[statName];
        val2 = player2.stats[statName];
    } else if (player1.percentages[statName] !== undefined) {
        val1 = player1.percentages[statName];
        val2 = player2.percentages[statName];
    } else {
        val1 = undefined; 
        val2 = undefined;
    }

    let class1 = '';
    let class2 = '';

    if (val1 !== undefined && val2 !== undefined) {
        let numVal1 = val1;
        let numVal2 = val2;

        if (statName === 'marketValue') {
            numVal1 = parseFloat(val1.replace(',', '.').replace(' Milyon €', ''));
            numVal2 = parseFloat(val2.replace(',', '.').replace(' Milyon €', ''));
        }

        if (numVal1 === numVal2) {
            class1 = 'text-orange-400 font-extrabold';
            class2 = 'text-orange-400 font-extrabold';
        } else if (isLowerBetter) { 
            if (numVal1 < numVal2) {
                class1 = 'text-green-400 font-extrabold';
                
                if (!['yellowCards', 'redCards', 'yellowCard', 'redCard'].includes(statName)) {
                    player1Wins++;
                }
            } else {
                class2 = 'text-green-400 font-extrabold';
                if (!['yellowCards', 'redCards', 'yellowCard', 'redCard'].includes(statName)) {
                    player2Wins++;
                }
            }
        } else { 
            if (numVal1 > numVal2) {
                class1 = 'text-green-400 font-extrabold';
                player1Wins++;
            } else {
                class2 = 'text-green-400 font-extrabold';
                player2Wins++;
            }
        }
    }

    let displayVal1 = val1;
    let displayVal2 = val2;

    if (isPercentage && val1 !== undefined) {
        displayVal1 = `${val1}%`;
    }
    if (isPercentage && val2 !== undefined) {
        displayVal2 = `${val2}%`;
    }

    if (val1 === undefined) displayVal1 = '-';
    if (val2 === undefined) displayVal2 = '-';


    return `
        <div class="stat-item items-center w-full">
            <span class="text-gray-300 flex-1 text-left">${label}:</span>
            <span class="font-bold flex-1 text-center ${class1}">${displayVal1}</span>
            <span class="font-bold flex-1 text-center ${class2}">${displayVal2}</span>
        </div>
    `;
}


function displayComparison() {
    if (selectedPlayerIds.length !== 2) {
        playerDetailsDiv.innerHTML = `
            <h2 class="text-3xl font-semibold text-blue-400 mb-6">Karşılaştırma Alanı</h2>
            <p class="text-gray-400 text-lg">Sol menüden iki oyuncu seçerek karşılaştır butonuna tıklayın.</p>
        `;
        return;
    }

    const player1 = players.find(p => p.id === selectedPlayerIds[0]);
    const player2 = players.find(p => p.id === selectedPlayerIds[1]);

    if (!player1 || !player2) {
        playerDetailsDiv.innerHTML = `
            <h2 class="text-3xl font-semibold text-blue-400 mb-6">Hata</h2>
            <p class="text-gray-400 text-lg">Seçilen oyunculardan biri bulunamadı. Lütfen tekrar deneyin.</p>
        `;
        return;
    }

    player1Wins = 0;
    player2Wins = 0;

    const statRows = `
        
        ${createComparedStatRow('Gol', 'goals', player1, player2)}
        ${createComparedStatRow('Asist', 'assists', player1, player2)}
        ${createComparedStatRow('CleanSheets', 'cleanSheets', player1, player2)}
        ${createComparedStatRow('Kupalar', 'trophies', player1, player2)}
        ${createComparedStatRow('Piyasa Değeri', 'marketValue', player1, player2)}
        ${createComparedStatRow('Çıktığı Maç', 'matchesPlayed', player1, player2)}
        ${createComparedStatRow('Sarı Kart', 'yellowCards', player1, player2, true)}
        ${createComparedStatRow('Kırmızı Kart', 'redCards', player1, player2, true)}
        ${createComparedStatRow('İlk 11 Yüzdesi', 'first11', player1, player2, false, true)}
        ${createComparedStatRow('Sarı Kart Yüzdesi', 'yellowCard', player1, player2, true, true)}
        ${createComparedStatRow('Kırmızı Kart Yüzdesi', 'redCard', player1, player2, true, true)}
        ${createComparedStatRow('Skor Katkısı', 'scoreContribution', player1, player2, false, true)}
        ${createComparedStatRow('CleanSheets Yüzdesi', 'cleanSheetsPercentage', player1, player2, false, true)}
    `;

    playerDetailsDiv.innerHTML = `
        <div class="flex flex-col md:flex-row justify-around items-stretch w-full gap-8 mb-8">
            <div class="w-full md:w-1/2 bg-gray-800 p-8 rounded-xl shadow-2xl flex flex-col items-center border border-gray-700">
                <img src="${player1.photo}" alt="${player1.name}"
                     class="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4 shadow-xl"
                     onerror="this.onerror=null;this.src='https://placehold.co/120x120/0d1117/e2e8f0?text=N/A';">
                <h3 class="text-4xl font-extrabold text-white mb-2">${player1.name}</h3>
                <p class="text-blue-300 text-2xl font-medium mb-4">${player1.stats.position}</p>
                <p class="text-xl font-bold text-gray-200">Kazanılan İstatistik: ${player1Wins}</p>
            </div>

            <div class="w-full md:w-1/2 bg-gray-800 p-8 rounded-xl shadow-2xl flex flex-col items-center justify-start border border-gray-700">
                <img src="${player2.photo}" alt="${player2.name}"
                     class="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4 shadow-xl"
                     onerror="this.onerror=null;this.src='https://placehold.co/120x120/0d1117/e2e8f0?text=N/A';">
                <h3 class="text-4xl font-extrabold text-white mb-2">${player2.name}</h3>
                <p class="text-blue-300 text-2xl font-medium mb-4">${player2.stats.position}</p>
                <p class="text-xl font-bold text-gray-200">Kazanılan İstatistik: ${player2Wins}</p>
            </div>
        </div>

        <div class="w-full bg-gray-800 p-8 rounded-xl shadow-2xl flex flex-col border border-gray-700">
            <h4 class="text-3xl font-semibold text-blue-400 mb-8 text-center">Karşılaştırmalı İstatistikler</h4>
            <div class="grid grid-cols-3 gap-4 pb-4 mb-4 border-b border-blue-600">
                <span class="text-blue-300 text-xl font-bold text-left">İstatistik</span>
                <span class="text-blue-300 text-xl font-bold text-center">${player1.name}</span>
                <span class="text-blue-300 text-xl font-bold text-center">${player2.name}</span>
            </div>
            <div class="space-y-2 flex-1 overflow-y-auto pr-2">
                ${statRows}
            </div>
        </div>
    `;
    
}


function handleSort() {
    currentSortIndex = (currentSortIndex + 1) % sortOptions.length;
    const currentOption = sortOptions[currentSortIndex];

    sortButton.textContent = `Sırala: ${currentOption.label}`;
    resetSortButton.classList.remove('hidden');

    if (currentOption.key === null) { 
        playerDetailsDiv.innerHTML = `
            <h2 class="text-3xl font-semibold text-blue-400 mb-6">Karşılaştırma Alanı</h2>
            <p class="text-gray-400 text-lg">Sol menüden iki oyuncu seçerek karşılaştır butonuna tıklayın.</p>
        `;
        resetSortButton.classList.add('hidden'); 
        return;
    }

    const sortedPlayers = [...players].sort((a, b) => {
        let valA, valB;

        if (currentOption.type === 'stats') {
            valA = a.stats[currentOption.key];
            valB = b.stats[currentOption.key];
        } else if (currentOption.type === 'percentages') {
            valA = a.percentages[currentOption.key];
            valB = b.percentages[currentOption.key];
        }

        if (currentOption.key === 'marketValue') {
            valA = parseFloat(valA.replace(',', '.').replace(' Milyon €', ''));
            valB = parseFloat(valB.replace(',', '.').replace(' Milyon €', ''));
        }

        if (valA === undefined || valA === null) return 1;
        if (valB === undefined || valB === null) return -1;

        if (currentOption.isLowerBetter) {
            return valA - valB; 
        } else {
            return valB - valA; 
        }
    });

   
    const top3Players = sortedPlayers.slice(0, 3);

    let top3Html = `<h2 class="text-3xl font-semibold text-blue-400 mb-6 text-center">En İyi 3 Oyuncu: ${currentOption.label}</h2>`;
    top3Html += `<div class="bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">`;
    top3Html += `<ul class="list-none p-0 m-0 space-y-4">`;

    top3Players.forEach((player, index) => {
        let statValue;
        if (currentOption.type === 'stats') {
            statValue = player.stats[currentOption.key];
        } else if (currentOption.type === 'percentages') {
            statValue = `${player.percentages[currentOption.key]}%`;
        } else {
            statValue = '-';
        }
        
        
        if (currentOption.key === 'marketValue' && player.stats.marketValue) {
             statValue = player.stats.marketValue;
        }

        top3Html += `
            <li class="flex items-center gap-4 text-white text-xl">
                <span class="font-bold text-blue-400">${index + 1}.</span>
                <img src="${player.photo}" alt="${player.name}" class="w-10 h-10 rounded-full object-cover border-2 border-blue-500">
                <span class="flex-1">${player.name}</span>
                <span class="font-bold text-green-400">${statValue}</span>
            </li>
        `;
    });

    top3Html += `</ul></div>`;
    playerDetailsDiv.innerHTML = top3Html;

   
    renderPlayerList(); 
}


function resetSort() {
    currentSortIndex = 0;
    sortButton.textContent = `Sırala: ${sortOptions[currentSortIndex].label}`;
    resetSortButton.classList.add('hidden');
    
  
    playerDetailsDiv.innerHTML = `
        <h2 class="text-3xl font-semibold text-blue-400 mb-6">Karşılaştırma Alanı</h2>
        <p class="text-gray-400 text-lg">Sol menüden iki oyuncu seçerek karşılaştır butonuna tıklayın.</p>
    `;

    selectedPlayerIds = []; 
    renderPlayerList(); 
}

document.addEventListener('DOMContentLoaded', () => {
    renderPlayerList();

    playerListDiv.addEventListener('click', (event) => {
        const playerItem = event.target.closest('[data-player-id]');
        if (playerItem) {
            const playerId = parseInt(playerItem.dataset.playerId);
            handlePlayerSelection(playerId);
          
        }
    });

    compareButton.addEventListener('click', displayComparison);
    sortButton.addEventListener('click', handleSort);
    searchInput.addEventListener('input', () => {
        renderPlayerList();
       
        if (currentSortIndex !== 0) { 
            resetSort();
        }
    });
    resetSortButton.addEventListener('click', resetSort);
});