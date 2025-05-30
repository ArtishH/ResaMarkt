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