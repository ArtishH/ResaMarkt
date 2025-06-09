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
    const playerCardsSection = document.getElementById('playerCardsSection');
    const searchSection = document.getElementById('searchSection');
    const infoSectionBtn = document.getElementById('infoSectionBtn');
    const infoText = document.getElementById('infoText');

    
    playerCardsSection.style.display = 'none';
    searchSection.style.display = 'none';
    infoText.style.display = 'none';

    playersSectionBtn.addEventListener('click', function() {
        if (playerCardsSection.style.display === 'none' || playerCardsSection.style.display === '') {
            playerCardsSection.style.display = 'grid'; 
            searchSection.style.display = 'flex'; 
            infoText.style.display = 'none'; 
        } else {
            playerCardsSection.style.display = 'none';
            searchSection.style.display = 'none';
        }
        
        if (playerCardsSection.style.display === 'none') {
            document.getElementById('searchInput').value = '';
            document.querySelectorAll('.fifa-card').forEach(card => {
                card.style.display = 'block';
            });
        }
    });

    infoSectionBtn.addEventListener('click', function() {
        if (infoText.style.display === 'none' || infoText.style.display === '') {
            infoText.style.display = 'block';
            playerCardsSection.style.display = 'none'; 
            searchSection.style.display = 'none'; 
            document.getElementById('searchInput').value = ''; 
            document.querySelectorAll('.fifa-card').forEach(card => { 
                card.style.display = 'block';
            });
        } else {
            infoText.style.display = 'none';
        }
    });
});