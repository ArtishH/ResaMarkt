const playerData = {
    name: "babatopcuu",
    image: "https://i.hizliresim.com/rroolxd.png",
    position: "Ortasaha-Forvet",
    nationality: "Türkiye",
    flag: "https://flagcdn.com/w20/tr.png",
    currentTeam: {
        name: "Borussia Dortmund",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Borussia_Dortmund.png",
        league: "Bundesliga",
        leagueLevel: "1"
    },
    marketValue: {
        current: "€60,000,000(S20)",
        highest: "€85,000,000",
        highestDate: "S19",
        lowest: "€900,000(S7)",
        history: [
            { date: "Sezon 7", value: 900000 },
            { date: "Sezon 8", value: 3000000 },
            { date: "Sezon 10", value: 12000000 },
            { date: "Sezon 11", value: 13100000 },
            { date: "Sezon 12", value: 10000000 },
            { date: "Sezon 13", value: 9000000 },
            { date: "Sezon 14", value: 1000000 },
            { date: "Sezon 15", value: 1000000 },
            { date: "Sezon 16", value: 1000000 },
            { date: "Sezon 17", value: 15000000 },
            { date: "Sezon 18", value: 45000000 },
            { date: "Sezon 19", value: 85000000 },
            { date: "Sezon 20", value: 60000000 },
        ]
    },
    awards: [
        { name: "İspanya LaLiga2", image: "https://tmssl.akamaized.net//images/erfolge/medium/878.png", seasons: ["Sezon 10(Getafe)"] },
        { name: "Fa Cup", image: "https://www.kindpng.com/picc/m/419-4195027_820-x-1222-fa-cup-trophy-png-transparent.png", seasons: ["Sezon 15(Manchester City)"] },
        { name: "Resa Cup", image: "https://e7.pngegg.com/pngimages/388/563/png-clipart-trophy-golden-cup-gold-trophy-metal-digital-image.png", seasons: ["Sezon 18(Juventus)"] },
        { name:"Şampiyonlar Ligi", image: "https://i.pinimg.com/736x/02/82/80/0282805dcfe401855ad998b80e95a549.jpg", seasons: ["Sezon 18(Juventus)"] },
        { name: "Uefa Super Cup", image: "https://i.pinimg.com/564x/23/30/74/23307464e47f1581246d6cf6679d9cea.jpg", seasons: ["Sezon 18(Juventus)"] }
    ],
    seasons: {
        "Sezon 8": {
            leagueLogos: {
                "Bundesliga": "https://upload.wikimedia.org/wikipedia/tr/d/d9/Bundesliga_2017_logo.png",
                "Premier League":"https://city-png.b-cdn.net/preview/preview_public/uploads/preview/hd-the-official-premier-league-logo-transparent-background-701751712333741unp10ha2yg.png",
                "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
            },
            stats: {
                "Bundesliga": { matches: 4, starting: 3, goals: 0, assists: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "schalke" },
                "Premier League": { matches: 7, starting: 5, goals: 4, assists: 2, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Chelsea" },
                "Uefa Champions League": { matches: 3, starting: 2, goals: 0, assists: 0, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "schalke" },
            }
        },
        "Sezon 10": {
            leagueLogos: {
                "La Liga 2": "https://www.gamesatlas.com/images/football/leagues/la-liga-2.png",
                "Copa Del Rey":"https://e7.pngegg.com/pngimages/576/936/png-clipart-2017-18-copa-del-rey-spain-2013-14-copa-del-rey-2017-copa-del-rey-final-logo-club-world-cup-2018-emblem-text-thumbnail.png",
                "Uefa Europa League":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Europa_League_2021.svg/2120px-Europa_League_2021.svg.png"
            },
            stats: {
                "La Liga 2": { matches: 11, starting: 10, goals: 4, assists: 3, yellowCards: 0, yellowRedCards: 0, redCards: 1, team: "Getafe" },
                "Copa Del Rey": { matches: 2, starting: 2, goals: 1, assists: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Getafe" },
                "Uefa Europa League": { matches: 12, starting: 8, goals: 9, assists: 13, yellowCards: 2, yellowRedCards: 0, redCards: 0, team: "Getafe" },
                
                
            }
        },
        "Sezon 11": {
            leagueLogos: {
                "Bundesliga": "https://upload.wikimedia.org/wikipedia/tr/d/d9/Bundesliga_2017_logo.png",      
                "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
                "Serie A":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Serie_A_logo_2022.svg/1193px-Serie_A_logo_2022.svg.png",
                "Tim Cup":"https://classicfootballshirts.co.uk/pub/media/catalog/product/t/i/timcup_finale2019_patch.jpg"
            },
            stats: {
                "Bundesliga": { matches: 9, starting: 7, goals: 3, assists: 6, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Eintracht Frankfurt" },
                "Uefa Champions League": { matches: 5, starting: 4, goals: 1, assists: 3, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Eintracht Frankfurt" },
                "Serie A": { matches: 5, starting: 5, goals: 4, assists: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Atalanta" },
                "Tim Cup": { matches: 2, starting: 2, goals: 0, assists: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Atalanta" },     
            }
        },
        "Sezon 12": {
            leagueLogos: {
                "Tier 2A":"https://i.hizliresim.com/fxzznmk.png",
                "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
            },
            stats: {
                "Tier 2A": { matches: 10, starting: 8, goals: 0, assists: 5, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Napoli" },
                "Uefa Champions League": { matches: 7, starting: 6, goals: 1, assists: 6, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Napoli" },  
            }
        },
        "Sezon 13": {
            leagueLogos: {
                "Bundesliga": "https://upload.wikimedia.org/wikipedia/tr/d/d9/Bundesliga_2017_logo.png",      
                "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
            },
            stats: {
               "Bundesliga": { matches: 13, starting: 10, goals: 4, assists: 8, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Eintracht Frankfurt" },
                "Uefa Champions League": { matches: 8, starting: 4, goals: 3, assists: 6, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Eintracht Frankfurt" },
            }
        },
        "Sezon 14": {
            leagueLogos: {
                "Premier League":"https://city-png.b-cdn.net/preview/preview_public/uploads/preview/hd-the-official-premier-league-logo-transparent-background-701751712333741unp10ha2yg.png",    
            },
            stats: {
               "Premier League": { matches: 0, starting: 0, goals: 0, assists: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Manchester City" },
            }
        },
        "Sezon 15": {
            leagueLogos: {
                "Division 2":"https://images.seeklogo.com/logo-png/49/1/danish-2nd-division-logo-png_seeklogo-496525.png",
                "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
            },
            stats: {
               "Division 2": { matches: 6, starting: 0, goals: 2, assists: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "AFC Ajax" },
               "Uefa Champions League": { matches: 5, starting: 0, goals: 0, assists: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "AFC Ajax" },
            }
        },
        "Sezon 16": {
            leagueLogos: {
                "La Liga 2": "https://www.gamesatlas.com/images/football/leagues/la-liga-2.png",
                "Uefa Europa League":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Europa_League_2021.svg/2120px-Europa_League_2021.svg.png"
            },
            stats: {
                "La Liga 2": { matches: 8, starting: 4, goals: 0, assists: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "FC Andorra" },
                "Uefa Europa League": { matches: 6, starting: 6, goals: 2, assists: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "FC Andorra" },
            }
        },
        "Sezon 17": {
            leagueLogos: {
                "Division B -G1": "https://i.hizliresim.com/f3bnkpg.png",
                "Division B -G2":"https://i.hizliresim.com/f3bnkpg.png",
                "Resa Cup":"https://i.hizliresim.com/n24akwo.png",
                "Intermediate League":"https://i.hizliresim.com/3ztyynv.png",
                "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
            },
            stats: {
                "Division B -G1": { matches: 5, starting: 5, goals: 2, assists: 2, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Galatasaray"},
                "Division B -G2": { matches: 6, starting: 5 , goals: 4, assists: 5, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "RB Leipzig" },
                "Resa Cup": { matches: 6, starting: 6, goals: 5, assists: 3, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "RB Leipzig" },
                "Intermediate League": { matches: 7, starting: 7, goals: 4, assists: 6, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Borussia Dortmund" },
                "Uefa Champions League": { matches: 6, starting: 6, goals: 5, assists: 2, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Borussia Dortmund" },
            }
        },
        "Sezon 18": {
            leagueLogos: {
                "Division A": "https://i.hizliresim.com/qdxxp0u.png",   
                "Resa Cup":"https://i.hizliresim.com/n24akwo.png",
                "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
            },
            stats: {
                "Division A": { matches: 15, starting: 15, goals: 9, assists: 9, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Juventus"},
                "Resa Cup": { matches: 5, starting: 5, goals: 3, assists: 5, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Juventus"},
                "Uefa Champions League": { matches: 6, starting: 6, goals: 6, assists: 6, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Juventus" },
            }
        },
        "Sezon 19": {
            leagueLogos: {
                "Serie A":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Serie_A_logo_2022.svg/1193px-Serie_A_logo_2022.svg.png",
                "Tim Cup":"https://classicfootballshirts.co.uk/pub/media/catalog/product/t/i/timcup_finale2019_patch.jpg",
                "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
                "Uefa Europa League":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Europa_League_2021.svg/2120px-Europa_League_2021.svg.png"
            },
            stats: {
                "Serie A": { matches: 15, starting: 15, goals: 13, assists: 2, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "SS Lazio"},
                "Uefa Champions League": { matches: 5, starting: 5, goals: 1, assists: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "SS Lazio" },
                "Uefa Europa League": { matches: 8, starting: 8, goals: 5, assists: 5, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "SS Lazio" },
            }
        },

    },
    transferHistory: [
        {
            season: "Sezon 7",
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            },
            currentClub: {
                country: "Custom",
                name: "Vidigal Tigers",
                league: "Division B",
                logo: "https://i.hizliresim.com/3rbz65n.png"
            }
        },
        {
            season: "Sezon 8",
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            },
            currentClub: {
                country: "İngiltere",
                name: "Chelsea",
                league: "Premier League",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
            }
        },
        {
            season: "Sezon 8",
            type: "Release",
            previousClub: {
                country: "İngiltere",
                name: "Chelsea",
                league: "Premier League",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
            },
            currentClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            }
        },
        {
            season: "Sezon 8",
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            },
            currentClub: {
                country: "Almanya",
                name: "Schalke",
                league: "Bundesliga",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/FC_Schalke_04_Logo.svg/2048px-FC_Schalke_04_Logo.svg.png"
            }
        },
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
                name: "Getafe",
                league: "LaLiga 2",
                logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Getafe_CF_Logo.png"
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
                country: "İtalya",
                name: "Atalanta",
                league: "Serie A",
                logo: "https://w7.pngwing.com/pngs/770/754/png-transparent-atalanta-thumbnail.png"
            }
        },
        {
            season: "Sezon 11",
            type: "Release",
            previousClub: {
                country: "İtalya",
                name: "Atalanta",
                league: "Serie A",
                logo: "https://w7.pngwing.com/pngs/770/754/png-transparent-atalanta-thumbnail.png"
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
                country: "Almanya",
                name: "Eintracht Frankfurt",
                league: "Bundesliga",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Eintracht_Frankfurt_crest.svg/1200px-Eintracht_Frankfurt_crest.svg.png"
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
                country: "İtalya",
                name: "Napoli",
                league: "Tier 2A",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/SSC_Napoli_2024_%28deep_blue_navy%29.svg/1200px-SSC_Napoli_2024_%28deep_blue_navy%29.svg.png"
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
                name: "Eintracht Frankfurt",
                league: "Bundesliga",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Eintracht_Frankfurt_crest.svg/1200px-Eintracht_Frankfurt_crest.svg.png"
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
                name: "Manchester City",
                league: "Premier League",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png"
            }
        },
        {
            season: "Sezon 15",
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
            season: "Sezon 16",
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            },
            currentClub: {
                country: "İspanya",
                name: "FC Andorra",
                league: "La Liga 2",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/FC_Andorra_logo_team.png/500px-FC_Andorra_logo_team.png"
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
                country: "Türkiye",
                name: "Galatasaray",
                league: "Division B -G1",
                logo: "https://images.seeklogo.com/logo-png/61/1/galatasaray-5-yildizli-concept-logo-png_seeklogo-617686.png"
            }
        },
        {
            season: "Sezon 17",
            type: "Transfer",
            previousClub: {
                country: "Türkiye",
                name: "Galatasaray",
                league: "Division B -G1",
                logo: "https://images.seeklogo.com/logo-png/61/1/galatasaray-5-yildizli-concept-logo-png_seeklogo-617686.png"
            },
            currentClub: {
                country: "Almanya",
                name: "RB Leipzig",
                league: "Division B -G2",
                logo: "https://upload.wikimedia.org/wikipedia/tr/f/fd/RB_Leipzig.png"
            }
        },
        {
            season: "Sezon 17",
            type: "Transfer",
            previousClub: {
                country: "Almanya",
                name: "RB Leipzig",
                league: "Division B -G2",
                logo: "https://upload.wikimedia.org/wikipedia/tr/f/fd/RB_Leipzig.png"
            },
            currentClub: {
                country: "Almanya",
                name: "Borussia Dortmund",
                league: "Intermediate League",
                logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Borussia_Dortmund.png"
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
                country: "İtalya",
                name: "Juventus",
                league: "Division A",
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Juventus_FC_2017_logo.png"
            }
        },
        {
            season: "Sezon 19",
            type: "Release",
            previousClub: {
                country: "İtalya",
                name: "Juventus",
                league: "Serie A",
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Juventus_FC_2017_logo.png"
            },
            currentClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
            }
        },
        {
            season: "Sezon 19",
            type: "Transfer",
            previousClub: {
                country: "İtalya",
                name: "Juventus",
                league: "Serie A",
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Juventus_FC_2017_logo.png"
            },
            currentClub: {
                country: "İtalya",
                name: "SS Lazio",
                league: "Serie A",
                logo: "https://upload.wikimedia.org/wikipedia/tr/2/22/Sslazio.png"
            }
        },
       
    ]
};

// Stats için takım logoları
const statsTeamLogos = {
    "schalke":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/FC_Schalke_04_Logo.svg/2048px-FC_Schalke_04_Logo.svg.png",
    "Chelsea":"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
    "Getafe":"https://upload.wikimedia.org/wikipedia/commons/b/b9/Getafe_CF_Logo.png", 
    "Eintracht Frankfurt":"https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Eintracht_Frankfurt_crest.svg/1200px-Eintracht_Frankfurt_crest.svg.png",
    "Atalanta":"https://w7.pngwing.com/pngs/770/754/png-transparent-atalanta-thumbnail.png",
    "Napoli":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/SSC_Napoli_2024_%28deep_blue_navy%29.svg/1200px-SSC_Napoli_2024_%28deep_blue_navy%29.svg.png",
    "Manchester City":"https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
    "AFC Ajax":"https://upload.wikimedia.org/wikipedia/tr/6/68/AFC_Ajax_logo.png",
    "FC Andorra":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/FC_Andorra_logo_team.png/500px-FC_Andorra_logo_team.png",
    "Galatasaray":"https://images.seeklogo.com/logo-png/61/1/galatasaray-5-yildizli-concept-logo-png_seeklogo-617686.png",
    "RB Leipzig":"https://upload.wikimedia.org/wikipedia/tr/f/fd/RB_Leipzig.png",
    "Borussia Dortmund":"https://upload.wikimedia.org/wikipedia/commons/7/74/Borussia_Dortmund.png",
    "Juventus":"https://upload.wikimedia.org/wikipedia/commons/5/51/Juventus_FC_2017_logo.png",
    "SS Lazio":"https://upload.wikimedia.org/wikipedia/tr/2/22/Sslazio.png",

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
    <p>Günümüz Değeri: <span>${playerData.marketValue.current}</span></p>
    <p>En Yüksek Değer: <span>${playerData.marketValue.highest} (${playerData.marketValue.highestDate})</span></p>
    <p>En Düşük Değer: <span>${playerData.marketValue.lowest}</span></p>
`;

const ctx = document.getElementById("market-chart").getContext("2d");
const marketChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: playerData.marketValue.history.map(h => h.date),
        datasets: [{
            label: "Piyasa Değeri", // Label updated, no unit here
            data: playerData.marketValue.history.map(h => h.value), // Use raw value here
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
                ticks: {
                    color: "#068af1",
                    font: { size: 14, weight: 'bold' },
                    padding: 10,
                    callback: function(value, index, values) {
                        if (value >= 1000000) {
                            return `€${(value / 1000000).toFixed(0)}M`;
                        } else if (value >= 1000) {
                            return `€${(value / 1000).toFixed(0)}K`;
                        }
                        return `€${value}`;
                    }
                }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#60a5f0",
                titleColor: "#ffffff",
                bodyColor: "#ffffff",
                callbacks: {
                    label: function(context) {
                        let value = context.parsed.y;
                        if (value >= 1000000) {
                            return `€${(value / 1000000).toFixed(1)}M`;
                        } else if (value >= 1000) {
                            return `€${(value / 1000).toFixed(0)}K`;
                        }
                        return `€${value}`;
                    }
                },
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
updateLeagueSelector("Sezon 8");
updateStats("Sezon 8", Object.keys(playerData.seasons["Sezon 8"].stats)[0]);

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