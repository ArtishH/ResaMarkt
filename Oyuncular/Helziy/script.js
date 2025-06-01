const playerData = {
    name: "Helziy",
    image: "https://i.hizliresim.com/prb757u.png",
    position: "Defans-Ortasaha",
    nationality: "Türkiye",
    flag: "https://flagcdn.com/w20/tr.png",
    currentTeam: {
        name: "Real Betis",
        logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/1/13/Real_betis_logo.svg/800px-Real_betis_logo.svg.png",
        league: "La Liga",
        leagueLevel: "1"
    },
    marketValue: {
        current: "€20,000,000(S20)",
        highest: "€25,000,000",
        highestDate: "S19",
        lowest: "€2,000,000(S10)",
        history: [
            { date: "Sezon 10", value: 2000000 },
            { date: "Sezon 11", value: 3000000 },
            { date: "Sezon 12", value: 20000000 },
            { date: "Sezon 13", value: 11000000 },
            { date: "Sezon 14", value: 10000000 },
            { date: "Sezon 15", value: 7500000 },
            { date: "Sezon 16", value: 25000000 },
            { date: "Sezon 17", value: 20000000 },
            { date: "Sezon 18", value: 25000000 },
            { date: "Sezon 19", value: 25000000 },
            { date: "Sezon 20", value: 20000000 },
        ]
    },
    awards: [
        { name: "İspanya LaLiga2", image: "https://tmssl.akamaized.net//images/erfolge/medium/878.png", seasons: ["S9 CD Tenerife"] },
        { name: "Premier League", image: "https://i.hizliresim.com/i2q1pet.png", seasons: ["S11 Liverpool"] },
        { name: "Super League", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/South_African_Premiership_trophy.png", seasons: ["S12 Bayern M"] },
        { name: "Promotion Division", image: "https://clipart-library.com/img/1260244.png", seasons: ["S12 Bayern M"] },
    ],
    seasons: {
        "Sezon 10": {
            leagueLogos: {
                "La Liga": "https://brandlogos.net/wp-content/uploads/2023/07/la_liga-logo_brandlogos.net_e6gnt.png",
                "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
                "Uefa Europa League": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UEFA_Europa_League_logo_%282024_version%29.svg/1436px-UEFA_Europa_League_logo_%282024_version%29.svg.png"
            },
            stats: {
                "La Liga": { matches: 12, starting: 10, goals: 1, assists: 1, yellowCards: 3, yellowRedCards: 1, redCards: 1, team: "Celta De Vigo" },
                "Uefa Champions League": { matches: 3, starting: 3, goals: 1, assists: 0, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Celta De Vigo" },
                "Uefa Europa League": { matches: 3, starting: 3, goals: 0, assists: 2, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Celta De Vigo" }
            }
        },
        "Sezon 11": {
            leagueLogos: {
                "Premier League": "https://city-png.b-cdn.net/preview/preview_public/uploads/preview/hd-the-official-premier-league-logo-transparent-background-701751712333741unp10ha2yg.png",
                "Emirates Fa Cup": "https://images.seeklogo.com/logo-png/38/1/emirates-fa-cup-logo-png_seeklogo-386089.png",
                "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
                
            },
            stats: {
                "Premier League": { matches: 6, starting: 6, goals: 1, assists: 3, yellowCards: 2, yellowRedCards: 0, redCards: 0, team: "Liverpool" },
                "Emirates Fa Cup": { matches: 3, starting: 3, goals: 0, assists: 1, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Liverpool" },
                "Uefa Champions League": { matches: 5, starting: 5, goals: 0, assists: 2, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Liverpool" },
                
            }
        },
        "Sezon 12": {
            leagueLogos: {
                "Super League": "https://i.hizliresim.com/p6616s6.png",
                "Tier 1B": "https://i.hizliresim.com/jc9zhri.png",
                "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
                
            },
            stats: {
                "Super League": { matches: 10, starting: 10, goals: 0, assists: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Bayern Munich" },
                "Tier 1B": { matches: 8, starting: 8, goals: 0, assists: 0, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Bayern Munich" },
                "Uefa Champions League": { matches: 5, starting: 5, goals: 0, assists: 0, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Bayern Munich" },
                
            }
        },
        "Sezon 13": {
            leagueLogos: {
                "La Liga": "https://brandlogos.net/wp-content/uploads/2023/07/la_liga-logo_brandlogos.net_e6gnt.png",
                "Copa Del Rey": "https://e7.pngegg.com/pngimages/576/936/png-clipart-2017-18-copa-del-rey-spain-2013-14-copa-del-rey-2017-copa-del-rey-final-logo-club-world-cup-2018-emblem-text-thumbnail.png",
                "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
                
            },
            stats: {
                "La Liga": { matches: 10, starting: 10, goals: 3, assists: 2, yellowCards: 2, yellowRedCards: 0, redCards: 0, team: "Sevilla" },
                "Copa Del Rey": { matches: 4, starting: 4, goals: 1, assists: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Sevilla" },
                "Uefa Champions League": { matches: 5, starting: 5, goals: 0, assists: 2, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Sevilla" },
                
            }
        },
        "Sezon 14": {
            leagueLogos: {
               "Premier League": "https://city-png.b-cdn.net/preview/preview_public/uploads/preview/hd-the-official-premier-league-logo-transparent-background-701751712333741unp10ha2yg.png",
                 "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
                "Uefa Europa League": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UEFA_Europa_League_logo_%282024_version%29.svg/1436px-UEFA_Europa_League_logo_%282024_version%29.svg.png"
                
            },
            stats: {
                "Premier League": { matches: 5, starting: 5, goals: 0, assists: 1, yellowCards: 2, yellowRedCards: 0, redCards: 0, team: "Arsenal" },
                "Uefa Champions League": { matches: 5, starting: 5, goals: 1, assists: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Arsenal" },
                "Uefa Europa League": { matches: 3, starting: 3, goals: 0, assists: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Arsenal" }
            }
        },
        "Sezon 15": {
            leagueLogos: {
               "Ligue 1": "https://upload.wikimedia.org/wikipedia/commons/4/49/Ligue1_Uber_Eats_logo.png",
                 "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
                
                
            },
            stats: {
                "Ligue 1": { matches: 4, starting: 4, goals: 2, assists: 1, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Stade Rennais FC" },
                "Uefa Champions League": { matches: 2, starting: 2, goals: 1, assists: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Stade Rennais FC" },
                
            }
        },
        "Sezon 16": {
            leagueLogos: {
               "Bundesliga": "https://upload.wikimedia.org/wikipedia/tr/d/d9/Bundesliga_2017_logo.png",
                 "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
                 "Tim Cup": "https://c0.klipartz.com/pngpicture/731/603/gratis-png-italia-2015-16-coppa-italia-u-c-sampdoria-atalanta-b-c-ternana-calcio-italia.png"
                
                
            },
            stats: {
                "Bundesliga": { matches: 14, starting: 10, goals: 3, assists: 7, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Borussia Dortmund" },
                "Tim Cup": { matches: 3, starting: 1, goals: 1, assists: 1, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Napoli" },
                "Uefa Champions League": { matches: 2, starting: 2, goals: 0, assists: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Borussia Dortmund" },
                
            }
        },
        "Sezon 17": {
            leagueLogos: {
               "Division B-G1": "https://i.hizliresim.com/f3bnkpg.png",
                 "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
                 "Resa Cup": "https://i.hizliresim.com/n24akwo.png"
                
                
            },
            stats: {
                "Division B-G1": { matches: 4, starting: 3, goals: 1, assists: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Club Brugge" },
                "Resa Cup": { matches: 4, starting: 4, goals: 1, assists: 1, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Club Brugge" },
                "Uefa Champions League": { matches: 3, starting: 3, goals: 0, assists: 0, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Club Brugge" },
                
            }
        },
        "Sezon 18": {
            leagueLogos: {
               "Division 1": "https://i.hizliresim.com/gljidtn.png",
                 "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
                 "Resa Cup": "https://i.hizliresim.com/n24akwo.png",
                "Uefa Europa League": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UEFA_Europa_League_logo_%282024_version%29.svg/1436px-UEFA_Europa_League_logo_%282024_version%29.svg.png"
                
            },
            stats: {
                "Division 1": { matches: 6, starting: 5, goals: 1, assists: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Olympique Lyonnais" },
                "Resa Cup": { matches: 4, starting: 4, goals: 1, assists: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Olympique Lyonnais" },
                "Uefa Champions League": { matches: 3, starting: 3, goals: 0, assists: 2, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Real Betis" },
                "Uefa Europa League": { matches: 3, starting: 3, goals: 0, assists: 2, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Olympique Lyonnais" },
                
                
            }
        },
        "Sezon 19": {
            leagueLogos: {
               "Bundesliga": "https://upload.wikimedia.org/wikipedia/tr/d/d9/Bundesliga_2017_logo.png",
                 "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
                 "Resa Cup": "https://i.hizliresim.com/n24akwo.png",
                "Uefa Europa League": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UEFA_Europa_League_logo_%282024_version%29.svg/1436px-UEFA_Europa_League_logo_%282024_version%29.svg.png"
                
            },
            stats: {
                "Bundesliga": { matches: 16, starting: 15, goals: 12, assists: 7, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Bayern Munich" },
                "Resa Cup": { matches: 4, starting: 4, goals: 1, assists: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Bayern Munich" },
                "Uefa Champions League": { matches: 6, starting: 4, goals: 3, assists: 2, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Bayern Munich" },
                "Uefa Europa League": { matches: 3, starting: 3, goals: 1, assists: 2, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Bayern Munich" },
                
                
            }
        }
    },
    transferHistory: [
        {
            season: "Sezon 10",
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            },
            currentClub: {
                country: "İspanya",
                name: "Celta De Vigo",
                league: "La Liga",
                logo: "https://upload.wikimedia.org/wikipedia/tr/3/3d/Celta_de_Vigo.png"
            }
        },
        {
            season: "Sezon 11",
            type: "Release",
            previousClub: {
                country: "İspanya",
                name: "Celta De Vigo",
                league: "La Liga",
                logo: "https://upload.wikimedia.org/wikipedia/tr/3/3d/Celta_de_Vigo.png"
            },
            currentClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            }
        },
        {
            season: "Sezon 11",
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            },
            currentClub: {
                country: "İngiltere",
                name: "Liverpool",
                league: "Premier League",
                logo: "https://upload.wikimedia.org/wikipedia/tr/2/2e/Liverpool_FC_logo_2024.png"
            }
        },
        {
            season: "Sezon 11",
            type: "Release",
            previousClub: {
                country: "İngiltere",
                name: "Liverpool",
                league: "Premier League",
                logo: "https://upload.wikimedia.org/wikipedia/tr/2/2e/Liverpool_FC_logo_2024.png"
            },
            currentClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            }
        },
        {
            season: "Sezon 12",
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            },
            currentClub: {
                country: "Almanya",
                name: "Bayern Munich",
                league: "Bundesliga",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_München_logo_%282017%29.svg/1200px-FC_Bayern_München_logo_%282017%29.svg.png"
            }
        },
        {
            season: "Sezon 13",
            type: "Release",
            previousClub: {
                country: "Almanya",
                name: "Bayern Munich",
                league: "Bundesliga",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_München_logo_%282017%29.svg/1200px-FC_Bayern_München_logo_%282017%29.svg.png"
            },
            currentClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            }
        },
        {
            season: "Sezon 13",
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            },
            currentClub: {
                country: "Almanya",
                name: "RB Leipzig",
                league: "Bundesliga",
                logo: "https://upload.wikimedia.org/wikipedia/tr/f/fd/RB_Leipzig.png"
            }
        },
        {
            season: "Sezon 14",
            type: "Release",
            previousClub: {
                country: "Almanya",
                name: "RB Leipzig",
                league: "Bundesliga",
                logo: "https://upload.wikimedia.org/wikipedia/tr/f/fd/RB_Leipzig.png"
            },
            currentClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            }
        },
        {
            season: "Sezon 14",
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            },
            currentClub: {
                country: "İngiltere",
                name: "Arsenal",
                league: "Premier League",
                logo: "https://upload.wikimedia.org/wikipedia/tr/9/92/Arsenal_Football_Club.png"
            }
        },
        {
            season: "Sezon 15",
            type: "Transfer",
            previousClub: {
                country: "İngiltere",
                name: "Arsenal",
                league: "Premier League",
                logo: "https://upload.wikimedia.org/wikipedia/tr/9/92/Arsenal_Football_Club.png"
            },
            currentClub: {
                country: "Fransa",
                name: "Stade Rennais FC",
                league: "Ligue 1",
                logo: "https://upload.wikimedia.org/wikipedia/tr/3/32/Stade-Rennais.png"
            }
        },
        {
            season: "Sezon 16",
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            },
            currentClub: {
                country: "İtalya",
                name: "Napoli",
                league: "Serie A",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/SSC_Napoli_2024_%28deep_blue_navy%29.svg/800px-SSC_Napoli_2024_%28deep_blue_navy%29.svg.png"
            }
        },
        {
            season: "Sezon 17",
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            },
            currentClub: {
                country: "İngiltere",
                name: "Manchester City",
                league: "Premier League",
                logo: "https://upload.wikimedia.org/wikipedia/tr/f/f6/Manchester_City.png"
            }
        },
        {
            season: "Sezon 18",
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            },
            currentClub: {
                country: "Hollanda",
                name: "AFC Ajax",
                league: "Division 2",
                logo: "https://upload.wikimedia.org/wikipedia/tr/6/68/AFC_Ajax_logo.png"
            }
        },
        {
            season: "Sezon 18",
            type: "Transfer",
            previousClub: {
                country: "Hollanda",
                name: "AFC Ajax",
                league: "Division 2",
                logo: "https://upload.wikimedia.org/wikipedia/tr/6/68/AFC_Ajax_logo.png"
            },
            currentClub: {
                country: "Fransa",
                name: "Olympique Lyonnais",
                league: "Ligue 1",
                logo: "https://frenchfootballdaily.com/wp-content/uploads/2011/05/Olympique-Lyon-logo-274x300.jpg"
            }
        },
        {
            season: "Sezon 19",
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            },
            currentClub: {
                country: "Almanya",
                name: "Bayern Munich",
                league: "Bundesliga",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_München_logo_%282017%29.svg/1200px-FC_Bayern_München_logo_%282017%29.svg.png"
            }
        },
        {
            season: "Sezon 20",
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            },
            currentClub: {
                country: "İspanya",
                name: "Real Betis",
                league: "La Liga",
                logo: "https://upload.wikimedia.org/wikipedia/tr/thumb/1/13/Real_betis_logo.svg/800px-Real_betis_logo.svg.png"
            }
        }
    ]
};

// Stats için takım logoları
const statsTeamLogos = {
    "Celta De Vigo": "https://upload.wikimedia.org/wikipedia/tr/3/3d/Celta_de_Vigo.png",
    "Liverpool": "https://upload.wikimedia.org/wikipedia/tr/2/2e/Liverpool_FC_logo_2024.png",
    "Bayern Munich": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_München_logo_%282017%29.svg/1200px-FC_Bayern_München_logo_%282017%29.svg.png",
    "Sevilla": "https://upload.wikimedia.org/wikipedia/tr/e/ed/Sevillafc.png",
    "RB Leipzig": "https://upload.wikimedia.org/wikipedia/tr/f/fd/RB_Leipzig.png",
    "Arsenal": "https://upload.wikimedia.org/wikipedia/tr/9/92/Arsenal_Football_Club.png",
    "Stade Rennais FC": "https://upload.wikimedia.org/wikipedia/tr/3/32/Stade-Rennais.png",
    "Borussia Dortmund": "https://upload.wikimedia.org/wikipedia/commons/7/74/Borussia_Dortmund.png",
    "Napoli": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/SSC_Napoli_2024_%28deep_blue_navy%29.svg/800px-SSC_Napoli_2024_%28deep_blue_navy%29.svg.png",
    "Manchester City": "https://upload.wikimedia.org/wikipedia/tr/f/f6/Manchester_City.png",
    "AFC Ajax": "https://upload.wikimedia.org/wikipedia/tr/6/68/AFC_Ajax_logo.png",
    "Olympique Lyonnais": "https://frenchfootballdaily.com/wp-content/uploads/2011/05/Olympique-Lyon-logo-274x300.jpg",
    "Real Betis": "https://upload.wikimedia.org/wikipedia/tr/thumb/1/13/Real_betis_logo.svg/800px-Real_betis_logo.svg.png",
    "Club Brugge": "https://upload.wikimedia.org/wikipedia/tr/d/d7/Club_Brugge.jpg",

};

// DOM elementlerine veri atama
document.getElementById("player-name").textContent = playerData.name;
document.getElementById("player-image").src = playerData.image;

// Current Team ve Oyuncu Bilgileri
document.getElementById("team-logo").src = playerData.currentTeam.logo;
document.getElementById("team-name").textContent = playerData.currentTeam.name;
document.getElementById("team-league").textContent = playerData.currentTeam.league;
document.getElementById("team-league-level").textContent = playerData.currentTeam.leagueLevel;
document.getElementById("player-position").textContent = playerData.position;
document.getElementById("player-flag").src = playerData.flag;
document.getElementById("player-flag").alt = `${playerData.nationality} Bayrağı`;
document.getElementById("player-nationality").textContent = playerData.nationality;

// Piyasa Değeri
const valueSummary = document.getElementById("value-summary");
valueSummary.innerHTML = `
    <p>Güncel Değeri: <span>${playerData.marketValue.current}</span></p>
    <p>En Yüksek Değer: <span>${playerData.marketValue.highest} (${playerData.marketValue.highestDate})</span></p>
    <p>En Düşük Değer: <span>${playerData.marketValue.lowest}</span></p>
`;

const ctx = document.getElementById("market-chart").getContext("2d");
const marketChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: playerData.marketValue.history.map(h => h.date),
        datasets: [{
            label: "Piyasa Değeri (€M)",
            data: playerData.marketValue.history.map(h => h.value / 1000000),
            borderColor: "#60a5fa",
            backgroundColor: "rgba(96, 165, 250, 0.25)",
            fill: true,
            tension: 0.4,
            pointBackgroundColor: "#60a5fa",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        devicePixelRatio: window.devicePixelRatio || 2,
        scales: {
            x: {
                title: { display: true, text: "Sezonlar", color: "#60a5fa", font: { size: 15, weight: 'bold' } },
                ticks: { color: "#068af1", font: { size: 14, weight: 'bold' } }
            },
            y: {
                title: { display: true, text: "Değer (€)", color: "#068af1", font: { size: 15, weight: 'bold' } },
                ticks: { color: "#068af1", font: { size: 14, weight: 'bold' }, padding: 10 }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#60a5f0",
                titleColor: "#ffffff",
                bodyColor: "#ffffff",
                callbacks: { label: (context) => `€${context.parsed.y}M` },
                bodyFont: { size: 14, weight: 'bold' }
            }
        }
    }
});

// Ödüller (Tıklama ile Modal Açma)
const awardsContainer = document.getElementById("awards");
playerData.awards.forEach(award => {
    const awardElement = document.createElement("div");
    awardElement.className = "award";
    awardElement.innerHTML = `
        <img src="${award.image}" alt="${award.name}">
        <div class="badge">${award.seasons.length}</div>
        <span>${award.name}</span>
    `;
    awardElement.addEventListener("click", () => {
        showAwardModal(award);
    });
    awardsContainer.appendChild(awardElement);
});

// Modal oluşturma ve gösterme fonksiyonu
function showAwardModal(award) {
    const modal = document.createElement("div");
    modal.className = "award-modal";
    modal.innerHTML = `
        <div class="award-modal-content">
            <span class="close-modal">×</span>
            <img src="${award.image}" alt="${award.name}">
            <h2>${award.name}</h2>
            <p>Kazandığı Sezon: ${award.seasons.join(", ")}</p>
        </div>
    `;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector(".close-modal");
    closeButton.addEventListener("click", () => {
        modal.remove();
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Sezon Filtresi
const seasonFilter = document.getElementById("season-filter");
seasonFilter.innerHTML = ''; // Mevcut seçenekleri temizle
const allSeasonsOption = document.createElement("option");
allSeasonsOption.value = "Tüm Zamanlar";
allSeasonsOption.textContent = "Tüm Zamanlar";
seasonFilter.appendChild(allSeasonsOption);
Object.keys(playerData.seasons).forEach(season => {
    const option = document.createElement("option");
    option.value = season;
    option.textContent = season;
    seasonFilter.appendChild(option);
});

// Tüm sezonların istatistiklerini toplama fonksiyonu
function getAllSeasonsStats() {
    const aggregatedStats = {
        matches: 0,
        starting: 0,
        goals: 0,
        assists: 0,
        yellowCards: 0,
        yellowRedCards: 0,
        redCards: 0,
        team: "Resa"
    };

    Object.values(playerData.seasons).forEach(season => {
        Object.values(season.stats).forEach(stat => {
            aggregatedStats.matches += stat.matches || 0;
            aggregatedStats.starting += stat.starting || 0;
            aggregatedStats.goals += stat.goals || 0;
            aggregatedStats.assists += stat.assists || 0;
            aggregatedStats.yellowCards += stat.yellowCards || 0;
            aggregatedStats.yellowRedCards += stat.yellowRedCards || 0;
            aggregatedStats.redCards += stat.redCards || 0;
        });
    });

    return aggregatedStats;
}

// Lig Seçiciyi Sezon ve Mevcut Verilere Göre Güncelle
function updateLeagueSelector(season) {
    const leagueSelector = document.getElementById("league-selector");
    leagueSelector.innerHTML = '';
    if (season === "Tüm Zamanlar" || !playerData.seasons[season]) {
        leagueSelector.style.display = 'none';
        updateStats(season, null);
        return;
    }
    leagueSelector.style.display = 'flex';
    const seasonData = playerData.seasons[season];
    const availableLeagues = Object.keys(seasonData.stats);
    const leagueLogos = seasonData.leagueLogos;

    availableLeagues.forEach(league => {
        const img = document.createElement("img");
        img.src = leagueLogos[league] || "https://via.placeholder.com/40?text=Unknown";
        img.alt = league;
        img.title = league; // Lig ismini tooltip olarak ekle
        img.style.border = league === availableLeagues[0] ? "3px solid #60a5fa" : "none";
        img.addEventListener("click", () => {
            availableLeagues.forEach(l => {
                const images = leagueSelector.getElementsByTagName("img");
                for (let i = 0; i < images.length; i++) {
                    if (images[i].alt === l) {
                        images[i].style.border = l === league ? "3px solid #60a5fa" : "none";
                    }
                }
            });
            updateStats(season, league);
        });
        leagueSelector.appendChild(img);
    });
}

// İstatistik Kartları
const statsCards = document.getElementById("stats-cards");
const cardStats = [
    { label: "Sarı Kart", id: "yellow-cards", icon: "https://w7.pngwing.com/pngs/942/268/png-transparent-penalty-card-yellow-card-association-football-referee-sim-cards-electronics-rectangle-color-thumbnail.png" },
    { label: "Sarı-Kırmızı Kart", id: "yellow-red-cards", icon: "https://w7.pngwing.com/pngs/376/843/png-transparent-penalty-card-red-card-yellow-card-football-angle-rectangle-orange.png" },
    { label: "Kırmızı Kart", id: "red-cards", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Red_card.svg/1575px-Red_card.svg.png" }
];
cardStats.forEach(stat => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${stat.icon}" alt="${stat.label}">
        <div class="label">${stat.label}</div>
        <div class="value" id="stat-${stat.id}">0</div>
    `;
    statsCards.appendChild(card);
});

// İstatistik Grid
const statsGrid = document.getElementById("stats-grid");
const gridStats = [
    { label: "Maç", id: "matches", icon: "https://w7.pngwing.com/pngs/709/226/png-transparent-game-sport-football-tactic-soccer-field-template-angle-text-rectangle-thumbnail.png" },
    { label: "Gol", id: "goals", icon: "https://cdn-icons-png.flaticon.com/512/919/919462.png" },
    { label: "Asist", id: "assists", icon: "https://cdn-icons-png.flaticon.com/512/98/98611.png" }
];
gridStats.forEach(stat => {
    const item = document.createElement("div");
    item.className = "stat-item";
    item.innerHTML = `
        <img src="${stat.icon}" alt="${stat.label}">
        <span>${stat.label}</span>
        <span class="value" id="stat-${stat.id}">0</span>
    `;
    statsGrid.appendChild(item);
});

// Yüzde Çemberleri
const percentageGrid = document.getElementById("percentage-grid");
const percentageStats = [
    { label: "İlk 11", id: "starting" },
    { label: "Sarı Kart Yüzdesi", id: "yellow-card" },
    { label: "Kırmızı Kart Yüzdesi", id: "red-card" },
    { label: "Skor Katkısı", id: "contribution" }
];
percentageStats.forEach(stat => {
    const item = document.createElement("div");
    item.className = "percentage-item";
    item.innerHTML = `
        <div class="percentage-circle" id="circle-${stat.id}">
            <svg>
                <circle class="bg" cx="45" cy="45" r="40"></circle>
                <circle class="progress" cx="45" cy="45" r="40"></circle>
            </svg>
            <div class="text" id="percentage-${stat.id}-text">0%</div>
        </div>
        <span>${stat.label}</span>
    `;
    percentageGrid.appendChild(item);
});

// Yüzde Çemberi Güncelleme Fonksiyonu
function updateCircle(circleId, percentage) {
    const circle = document.querySelector(`#${circleId} .progress`);
    const text = document.querySelector(`#${circleId} .text`);
    const circumference = 2 * Math.PI * 40;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference - (percentage / 100) * circumference;
    text.textContent = `${percentage}%`;
    text.style.display = "block";
    text.style.opacity = "1";
}

// İstatistikleri Güncelleme Fonksiyonu
function updateStats(season, league) {
    let stats;
    if (season === "Tüm Zamanlar") {
        stats = getAllSeasonsStats();
    } else if (!playerData.seasons[season]) {
        document.getElementById("stat-yellow-cards").textContent = "N/A";
        document.getElementById("stat-yellow-red-cards").textContent = "N/A";
        document.getElementById("stat-red-cards").textContent = "N/A";
        document.getElementById("stat-matches").textContent = "N/A";
        document.getElementById("stat-goals").textContent = "N/A";
        document.getElementById("stat-assists").textContent = "N/A";
        updateCircle("circle-starting", 0);
        updateCircle("circle-yellow-card", 0);
        updateCircle("circle-red-card", 0);
        updateCircle("circle-contribution", 0);
        document.getElementById("team-info").innerHTML = `<span>Sezon için veri bulunamadı</span>`;
        return;
    } else {
        stats = playerData.seasons[season]?.stats[league];
    }

    if (!stats) {
        document.getElementById("stat-yellow-cards").textContent = "N/A";
        document.getElementById("stat-yellow-red-cards").textContent = "N/A";
        document.getElementById("stat-red-cards").textContent = "N/A";
        document.getElementById("stat-matches").textContent = "N/A";
        document.getElementById("stat-goals").textContent = "N/A";
        document.getElementById("stat-assists").textContent = "N/A";
        updateCircle("circle-starting", 0);
        updateCircle("circle-yellow-card", 0);
        updateCircle("circle-red-card", 0);
        updateCircle("circle-contribution", 0);
        document.getElementById("team-info").innerHTML = `<span>Lig için veri bulunamadı</span>`;
        return;
    }

    document.getElementById("stat-yellow-cards").textContent = stats.yellowCards || 0;
    document.getElementById("stat-yellow-red-cards").textContent = stats.yellowRedCards || 0;
    document.getElementById("stat-red-cards").textContent = stats.redCards || 0;
    document.getElementById("stat-matches").textContent = stats.matches || 0;
    document.getElementById("stat-goals").textContent = stats.goals || 0;
    document.getElementById("stat-assists").textContent = stats.assists || 0;

    const startingPercentage = stats.matches > 0 ? (stats.starting / stats.matches * 100).toFixed(0) : 0;
    const yellowCardPercentage = stats.matches > 0 ? (stats.yellowCards / stats.matches * 100).toFixed(1) : 0;
    const redCardPercentage = stats.matches > 0 ? (stats.redCards / stats.matches * 100).toFixed(1) : 0;
    const contributionPercentage = stats.matches > 0 ? Math.min(((stats.goals + stats.assists) / stats.matches * 100).toFixed(1), 100) : 0;

    updateCircle("circle-starting", startingPercentage);
    updateCircle("circle-yellow-card", yellowCardPercentage);
    updateCircle("circle-red-card", redCardPercentage);
    updateCircle("circle-contribution", contributionPercentage);

    const teamInfo = document.getElementById("team-info");
    const teamName = stats.team;
    const teamLogo = statsTeamLogos[teamName] || "https://i.hizliresim.com/fqxpyfr.png";
    teamInfo.innerHTML = `
        <img src="${teamLogo}" alt="${teamName} Logosu">
        <span>${teamName}</span>
    `;
}

// İlk Yüklemede Varsayılan İstatistikleri Göster
updateLeagueSelector("Sezon 10");
updateStats("Sezon 10", Object.keys(playerData.seasons["Sezon 10"].stats)[0]);

// Sezon Filtresi Değişiminde İstatistikleri ve Lig Seçiciyi Güncelle
seasonFilter.addEventListener("change", (e) => {
    const season = e.target.value;
    updateLeagueSelector(season);
    if (season === "Tüm Zamanlar") {
        updateStats(season, null);
    } else if (playerData.seasons[season]) {
        const selectedLeague = Object.keys(playerData.seasons[season].stats)[0];
        updateStats(season, selectedLeague);
    } else {
        updateStats(season, null);
    }
});

// Transfer Geçmişi
const transferHistory = document.getElementById("transfer-history");

// Başlık satırı
const headerRow = document.createElement("div");
headerRow.className = "transfer-row transfer-header";
headerRow.innerHTML = `
    <div class="transfer-season">Sezon</div>
    <div class="transfer-club previous-club">Önceki Takım</div>
    <div class="transfer-type">Tür</div>
    <div class="transfer-arrow"></div>
    <div class="transfer-club current-club">Sonraki Takım</div>
`;
transferHistory.appendChild(headerRow);

// Transfer verileri
playerData.transferHistory.forEach(transfer => {
    const row = document.createElement("div");
    row.className = "transfer-row";
    const previousClubLogo = transfer.previousClub.logo || "https://via.placeholder.com/40?text=Unknown";
    const currentClubLogo = transfer.currentClub.logo || "https://via.placeholder.com/40?text=Unknown";
    const transferTypeClass = transfer.type === "Transfer" ? "transfer-type-transfer" : "transfer-type-Release";
    row.innerHTML = `
        <div class="transfer-season">${transfer.season}</div>
        <div class="transfer-club previous-club">
            <img src="${previousClubLogo}" alt="${transfer.previousClub.name} Logosu">
            <span>${transfer.previousClub.name}</span>
            <span class="league-info">(${transfer.previousClub.country} ${transfer.previousClub.league})</span>
        </div>
        <div class="transfer-type ${transferTypeClass}">${transfer.type === "Transfer" ? "Transfer" : "Release"}</div>
        <div class="transfer-arrow">➡️</div>
        <div class="transfer-club current-club">
            <img src="${currentClubLogo}" alt="${transfer.currentClub.name} Logosu">
            <span>${transfer.currentClub.name}</span>
            <span class="league-info">(${transfer.currentClub.country} ${transfer.currentClub.league})</span>
        </div>
    `;
    transferHistory.appendChild(row);
});