function searchPlayers() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.fifa-card');
    cards.forEach(card => {
        const playerName = card.querySelector('.player-name').textContent.toLowerCase();
        if (playerName.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchPlayers();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const playersSectionBtn = document.getElementById('playersSectionBtn');
    const gamingSectionBtn = document.getElementById('gamingSectionBtn');
    const gamingSubMenu = document.getElementById('gamingSubMenu');
    const playerCardsSection = document.getElementById('playerCardsSection');
    const searchSection = document.getElementById('searchSection');
    const infoSectionBtn = document.getElementById('infoSectionBtn');
    const infoText = document.getElementById('infoText');

    
    playerCardsSection.style.display = 'none';
    searchSection.style.display = 'none';
    infoText.style.display = 'none';
    gamingSubMenu.style.display = 'none';

    playerCardsSection.classList.remove('active-grid');
    searchSection.classList.remove('active-flex');
    infoText.classList.remove('active-block'); 

    
    function hideAllSections() {
        playerCardsSection.style.display = 'none';
        searchSection.style.display = 'none';
        infoText.style.display = 'none';
        gamingSubMenu.style.display = 'none';

        playerCardsSection.classList.remove('active-grid');
        searchSection.classList.remove('active-flex');
        infoText.classList.remove('active-block');

        document.getElementById('searchInput').value = '';
        document.querySelectorAll('.fifa-card').forEach(card => {
            card.style.display = 'block'; // 
        });
    }

    playersSectionBtn.addEventListener('click', function() {
        if (playerCardsSection.style.display === 'none') {
            hideAllSections(); 
            playerCardsSection.style.display = 'grid';
            searchSection.style.display = 'flex';
            playerCardsSection.classList.add('active-grid'); 
            searchSection.classList.add('active-flex');
        } else {
            hideAllSections(); 
        }
    });

    gamingSectionBtn.addEventListener('click', function() {
        if (gamingSubMenu.style.display === 'none') {
            hideAllSections(); 
            gamingSubMenu.style.display = 'flex'; 
        } else {
            gamingSubMenu.style.display = 'none';
        }
    });

    infoSectionBtn.addEventListener('click', function() {
        if (infoText.style.display === 'none') {
            hideAllSections(); 
            infoText.style.display = 'block';
            infoText.classList.add('active-block'); 
        } else {
            infoText.style.display = 'none';
        }
    });

    
    document.addEventListener('click', function(event) {
        if (!gamingSectionBtn.contains(event.target) && !gamingSubMenu.contains(event.target)) {
            gamingSubMenu.style.display = 'none';
        }
    });
});