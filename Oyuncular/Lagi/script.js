const playerData = {
    name: "Hjaltee",
    image: "https://i.hizliresim.com/3nfqp6a.png",
    position: "GK",
    nationality: "Danmark",
    flag: "https://st3.depositphotos.com/1381835/13472/v/600/depositphotos_134724996-stock-video-flag-of-denmark.jpg",
    currentTeam: {
        name: "Borussia Dortmund",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Borussia_Dortmund.png",
        league: "Bundesliga",
        leagueLevel: "1"
    },
    marketValue: {
        current: "€52,500,000(S20)",
        highest: "€60,000,000",
        highestDate: "S19",
        lowest: "€900,000(S8)",
        history: [
            { date: "S8", value: 900000 },
            { date: "S9", value: 1500000 },
            { date: "S10", value: 5000000 },
            { date: "S11", value: 4000000 },
            { date: "S12", value: 3000000 },
            { date: "S13", value: 2000000 },
            { date: "S14", value: 1000000 },
            { date: "S15", value: 990000 },
            { date: "S16", value: 1000000 },
            { date: "S17", value: 35000000 },
            { date: "S18", value: 40000000 },
            { date: "S19", value: 60000000 },
            { date: "S20", value: 52500000 },
            
        ]
    },
    awards: [
        { name: "La Liga", image: "https://facequad.com/cdn/shop/products/football-spain-la-liga-trophy-7.jpg?v=1590907004&width=1445", seasons: ["S9 Real Madrid"] },
        { name: "Premier League", image: "https://i.hizliresim.com/i2q1pet.png", seasons: ["S10 Leicester City"] },
        { name: "Fa Community Shield", image: "https://i.hizliresim.com/okywy1n.png", seasons: ["S10 Leicester City"] },
        { name: "Resa Cup", image: "https://e7.pngegg.com/pngimages/388/563/png-clipart-trophy-golden-cup-gold-trophy-metal-digital-image.png", seasons: ["S18 Juventus"] },
        { name:"Şampiyonlar Ligi", image: "https://i.pinimg.com/736x/02/82/80/0282805dcfe401855ad998b80e95a549.jpg", seasons: ["S18 Juventus)"] },
        { name: "Uefa Super Cup", image: "https://sortitoutsi.b-cdn.net/uploads/media_2023/drtIPSTebsokM5cJAK13NWWs5CcW3cHLNu4JiO3a.png", seasons: ["S18 Juventus"] },
        { name: "Serie A", image: "https://i.pinimg.com/736x/a7/f0/ca/a7f0cacbc0773d903f7812852f94c966.jpg", seasons: ["S19 Lazio"] },
        { name: "Intermediate League", image: "https://clipart-library.com/img/1260244.png", seasons: ["S17 Borussia Dortmund"] },
        { name: "Division 2 Tots", image: "https://i.hizliresim.com/kf83exa.png", seasons: ["S16 Dusseldorf"] },
        { name: "UEL Tots", image: "https://i.hizliresim.com/hlt92ph.png", seasons: ["S16 Dusseldorf"] },

    ],
    seasons: {
        "Sezon 8": {
            leagueLogos: {
                "Premier League":"https://city-png.b-cdn.net/preview/preview_public/uploads/preview/hd-the-official-premier-league-logo-transparent-background-701751712333741unp10ha2yg.png",
                "Uefa Europa League": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UEFA_Europa_League_logo_%282024_version%29.svg/1436px-UEFA_Europa_League_logo_%282024_version%29.svg.png"
            },
            stats: {
                "Premier League": { matches: 10, starting: 10, goals: 0, assists: 2, cleanSheets: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Chelsea" },
                "Uefa Europa League": { matches: 6, starting: 6, goals: 0, assists: 0, cleanSheets: 2, yellowCards: 1, yellowRedCards: 0, redCards: 0, team: "Chelsea" },
            }
        },
        "Sezon 10": {
            leagueLogos: {
                "Premier League":"https://city-png.b-cdn.net/preview/preview_public/uploads/preview/hd-the-official-premier-league-logo-transparent-background-701751712333741unp10ha2yg.png",
            },
            stats: {
                "Premier League": { matches: 7, starting: 7, goals: 0, assists: 0, cleanSheets: 2, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Leicester City" },
            }
        },
        "Sezon 16": {
            leagueLogos: {
                "Bundesliga 2":"https://upload.wikimedia.org/wikipedia/tr/thumb/7/7b/2._Bundesliga_logo.svg/2048px-2._Bundesliga_logo.svg.png",
                "DFB Pokal":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/DFB-Pokal_logo_2016.svg/1200px-DFB-Pokal_logo_2016.svg.png",
                "Uefa Europa League": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UEFA_Europa_League_logo_%282024_version%29.svg/1436px-UEFA_Europa_League_logo_%282024_version%29.svg.png"
            },
            stats: {
                "Bundesliga 2": { matches: 10, starting: 10, goals: 0, assists: 1, cleanSheets: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Fortuna Düsseldorf" },
                "DFB Pokal": { matches: 4, starting: 4, goals: 0, assists: 1, cleanSheets: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Fortuna Düsseldorf" },
                "Uefa Europa League": { matches: 6, starting: 6, goals: 0, assists: 1, cleanSheets: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Fortuna Düsseldorf" },
            }
        },
        "Sezon 17": {
            leagueLogos: {
                "Intermediate League":"https://i.hizliresim.com/3ztyynv.png",
            },
            stats: {
                "Intermediate League": { matches: 6, starting: 6, goals: 0, assists: 1, cleanSheets: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Borussia Dortmund" },
            }
        },
        "Sezon 18": {
            leagueLogos: {
                "Division A":"https://i.hizliresim.com/3ztyynv.png",
                "Resa Cup":"https://i.hizliresim.com/n24akwo.png",
                "Uefa Champions League": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
            },
            stats: {
                "Division A": { matches: 10, starting: 10, goals: 1, assists: 0, cleanSheets: 2, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Juventus" },
                "Resa Cup": { matches: 6, starting: 6, goals: 0, assists: 0, cleanSheets: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Juventus" },
                "Uefa Champions League": { matches: 10, starting: 10, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "Juventus" },
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
                "Serie A": { matches: 10, starting: 10, goals: 2, assists: 3, cleanSheets: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "SS Lazio" },
                "Tim Cup": { matches: 6, starting: 6, goals: 1, assists: 1, cleanSheets: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "SS Lazio" },
                "Uefa Europa League": { matches: 10, starting: 10, goals: 3, assists: 0, cleanSheets: 1, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "SS Lazio" },
                "Uefa Champions League": { matches: 5, starting: 5, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, yellowRedCards: 0, redCards: 0, team: "SS Lazio" },
            }
        },
    
    },
    transferHistory: [
        {
            season: "Sezon 8",
            type: "Transfer",
            previousClub: {
                country: "Almanya",
                name: "Eintracht Frankfurt",
                league: "Bundesliga",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Eintracht_Frankfurt_crest.svg/1200px-Eintracht_Frankfurt_crest.svg.png"
            },
            currentClub: {
                country: "İngiltere",
                name: "Chelsea",
                league: "Premier League",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
            }
        },
        {
            season: "Sezon 9",
            type: "Transfer",
            previousClub: {
                country: "İngiltere",
                name: "Chelsea",
                league: "Premier League",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
            },
            currentClub: {
                country: "İspanya",
                name: "Real Madrid",
                league: "La Liga",
                logo: "https://media.designrush.com/inspirations/797792/conversions/Real-Madrid-preview.jpg"
            }
        },
        {
            season: "Sezon 10",
            type: "Transfer",
            previousClub: {
                country: "İspanya",
                name: "Real Madrid",
                league: "La Liga",
                logo: "https://media.designrush.com/inspirations/797792/conversions/Real-Madrid-preview.jpg"
            },
            currentClub: {
                country: "İngiltere",
                name: "Leicester City",
                league: "Premier League",
                logo: "https://upload.wikimedia.org/wikipedia/tr/a/a2/Leicester_City_logo.png"
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
                country: "Almanya",
                name: "Fortuna Düsseldorf",
                league: "Bundesliga 2",
                logo: "https://tmssl.akamaized.net//images/wappen/head/38.png?lm=1405514004"
            }
        },
        {
            season: "Sezon 17",
            type: "Transfer",
            previousClub: {
                country: "Belçika",
                name: "Club Brugge",
                league: "Expansion League",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Club_Brugge_KV_logo.svg/1200px-Club_Brugge_KV_logo.svg.png"
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
            type: "Transfer",
            previousClub: {
                country: "",
                name: "Takımsız",
                league: "",
                logo: "https://www.fifacm.com/content/media/imgs/fifa22/teams/256/l111592.png"
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
    "Chelsea":"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
    "Eintracht Frankfurt":"https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Eintracht_Frankfurt_crest.svg/1200px-Eintracht_Frankfurt_crest.svg.png",
    "Real Madrid":"https://media.designrush.com/inspirations/797792/conversions/Real-Madrid-preview.jpg",
    "Leicester City":"https://upload.wikimedia.org/wikipedia/tr/a/a2/Leicester_City_logo.png",
    "Fortuna Düsseldorf":"https://tmssl.akamaized.net//images/wappen/head/38.png?lm=1405514004",
    "Borussia Dortmund":"https://upload.wikimedia.org/wikipedia/commons/7/74/Borussia_Dortmund.png",
    "Juventus":"https://upload.wikimedia.org/wikipedia/commons/5/51/Juventus_FC_2017_logo.png",
    "SS Lazio":"https://upload.wikimedia.org/wikipedia/tr/2/22/Sslazio.png",
    
};

// Translation data
const translations = {
    "tr": {
        "Ana Sayfa": "Ana Sayfa",
        "Takım:": "Takım:",
        "Lig:": "Lig:",
        "Lig Seviyesi:": "Lig Seviyesi:",
        "Mevki:": "Mevki:",
        "Uyruk:": "Uyruk:",
        "Piyasa Değeri": "Piyasa Değeri",
        "Güncel Değeri:": "Güncel Değeri:",
        "En Yüksek Değer:": "En Yüksek Değer:",
        "En Düşük Değer:": "En Düşük Değer:",
        "Sezonlar": "Sezonlar",
        "Değer (€)": "Değer (€)",
        "Oyuncu Resmi": "Oyuncu Resmi",
        "Takım Logosu": "Takım Logosu",
        "Uyruk Bayrağı": "Uyruk Bayrağı",
        "Kazandığı Sezon:": "Kazandığı Sezon:",
        "İstatistikler": "İstatistikler",
        "Sezon:": "Sezon:",
        "Tüm Zamanlar": "Tüm Zamanlar",
        "Sarı Kart": "Sarı Kart",
        "Sarı-Kırmızı Kart": "Sarı-Kırmızı Kart",
        "Kırmızı Kart": "Kırmızı Kart",
        "Maç": "Maç",
        "Gol": "Gol",
        "Asist": "Asist",
        "Clean Sheets": "Clean Sheets",
        "İlk 11": "İlk 11",
        "Sarı Kart Yüzdesi": "Sarı Kart Yüzdesi",
        "Kırmızı Kart Yüzdesi": "Kırmızı Kart Yüzdesi",
        "Skor Katkısı": "Skor Katkısı",
        "Clean Sheet Yüzdesi": "Clean Sheet Yüzdesi",
        "Sezon için veri bulunamadı": "Sezon için veri bulunamadı",
        "Lig için veri bulunamadı": "Lig için veri bulunamadı",
        "Logosu": "Logosu",
        "Transfer Geçmişi": "Transfer Geçmişi",
        "Sezon": "Sezon",
        "Önceki Takım": "Önceki Takım",
        "Tür": "Tür",
        "Sonraki Takım": "Sonraki Takım",
        "Transfer": "Transfer",
        "Release": "Release",
        "Takımsız": "Takımsız",
    },
    "da": {
        "Ana Sayfa": "Hjemmeside",
        "Takım:": "Hold:",
        "Lig:": "Liga:",
        "Lig Seviyesi:": "Liga Niveau:",
        "Mevki:": "Position:",
        "Uyruk:": "Nationalitet:",
        "Piyasa Değeri": "Markedsværdi",
        "Güncel Değeri:": "Nuværende Værdi:",
        "En Yüksek Değer:": "Højeste Værdi:",
        "En Düşük Değer:": "Laveste Værdi:",
        "Sezonlar": "Sæsoner",
        "Değer (€)": "Værdi (€)",
        "Oyuncu Resmi": "Spillerbillede",
        "Takım Logosu": "Holdlogo",
        "Uyruk Bayrağı": "Nationalitetsflag",
        "Kazandığı Sezon:": "Vundne sæsoner:",
        "İstatistikler": "Statistik",
        "Sezon:": "Sæson:",
        "Tüm Zamanlar": "Alle Tider",
        "Sarı Kart": "Gule Kort",
        "Sarı-Kırmızı Kart": "Gule-Røde Kort",
        "Kırmızı Kart": "Røde Kort",
        "Maç": "Kampe",
        "Gol": "Mål",
        "Asist": "Assists",
        "Clean Sheets": "Clean Sheets",
        "İlk 11": "Startende 11",
        "Sarı Kart Yüzdesi": "Gul Kort Procentdel",
        "Kırmızı Kart Yüzdesi": "Rød Kort Procentdel",
        "Skor Katkısı": "Målbidrag",
        "Clean Sheet Yüzdesi": "Clean Sheet Procentdel",
        "Sezon için veri bulunamadı": "Ingen data fundet for sæsonen",
        "Lig için veri bulunamadı": "Ingen data fundet for ligaen",
        "Logosu": "Logo",
        "Transfer Geçmişi": "Transferhistorik",
        "Sezon": "Sæson",
        "Önceki Takım": "Tidligere Hold",
        "Tür": "Type",
        "Sonraki Takım": "Næste Hold",
        "Transfer": "Transfer",
        "Release": "Frigivelse",
        "Takımsız": "Klubløs",
    }
};

let currentLang = "tr"; // Default language

function applyTranslations() {
    document.querySelectorAll("[data-tr]").forEach(element => {
        const key = element.getAttribute("data-tr");
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Update specific elements that are not static or have dynamic content
    document.getElementById("player-image").alt = translations[currentLang]["Oyuncu Resmi"];
    document.getElementById("team-logo").alt = translations[currentLang]["Takım Logosu"];
    document.getElementById("player-flag").alt = `${translations[currentLang]["Uyruk Bayrağı"]}`;

    // Market Value Summary
    const valueSummary = document.getElementById("value-summary");
    valueSummary.innerHTML = `
        <p>${translations[currentLang]["Güncel Değeri:"]} <span>${playerData.marketValue.current}</span></p>
        <p>${translations[currentLang]["En Yüksek Değer:"]} <span>${playerData.marketValue.highest} (${playerData.marketValue.highestDate})</span></p>
        <p>${translations[currentLang]["En Düşük Değer:"]} <span>${playerData.marketValue.lowest}</span></p>
    `;

    // Chart labels
    if (marketChart) {
        marketChart.options.scales.x.title.text = translations[currentLang]["Sezonlar"];
        marketChart.options.scales.y.title.text = translations[currentLang]["Değer (€)"];
        marketChart.update();
    }

    // Awards modal content
    const awardModals = document.querySelectorAll(".award-modal-content h2");
    awardModals.forEach(modal => {
        const awardName = modal.textContent;
        const award = playerData.awards.find(a => a.name === awardName);
        if (award) {
            modal.nextElementSibling.textContent = `${translations[currentLang]["Kazandığı Sezon:"]} ${award.seasons.join(", ")}`;
        }
    });

    // Season filter options
    const seasonFilter = document.getElementById("season-filter");
    Array.from(seasonFilter.options).forEach(option => {
        if (option.value === "Tüm Zamanlar") {
            option.textContent = translations[currentLang]["Tüm Zamanlar"];
        }
    });

    // Stats cards
    document.getElementById("stat-yellow-cards").previousElementSibling.textContent = translations[currentLang]["Sarı Kart"];
    document.getElementById("stat-yellow-red-cards").previousElementSibling.textContent = translations[currentLang]["Sarı-Kırmızı Kart"];
    document.getElementById("stat-red-cards").previousElementSibling.textContent = translations[currentLang]["Kırmızı Kart"];

    // Stats grid
    document.getElementById("stat-matches").previousElementSibling.textContent = translations[currentLang]["Maç"];
    document.getElementById("stat-goals").previousElementSibling.textContent = translations[currentLang]["Gol"];
    document.getElementById("stat-assists").previousElementSibling.textContent = translations[currentLang]["Asist"];
    document.getElementById("stat-clean-sheets").previousElementSibling.textContent = translations[currentLang]["Clean Sheets"];

    // Percentage grid
    document.querySelector("#circle-starting + span").textContent = translations[currentLang]["İlk 11"];
    document.querySelector("#circle-yellow-card + span").textContent = translations[currentLang]["Sarı Kart Yüzdesi"];
    document.querySelector("#circle-red-card + span").textContent = translations[currentLang]["Kırmızı Kart Yüzdesi"];
    document.querySelector("#circle-contribution + span").textContent = translations[currentLang]["Skor Katkısı"];
    document.querySelector("#circle-clean-sheet + span").textContent = translations[currentLang]["Clean Sheet Yüzdesi"];
    
    // Transfer History Header
    const transferHeader = document.querySelector(".transfer-header");
    if (transferHeader) {
        transferHeader.children[0].textContent = translations[currentLang]["Sezon"];
        transferHeader.children[1].textContent = translations[currentLang]["Önceki Takım"];
        transferHeader.children[2].textContent = translations[currentLang]["Tür"];
        transferHeader.children[4].textContent = translations[currentLang]["Sonraki Takım"];
    }

    // Transfer types
    document.querySelectorAll(".transfer-type").forEach(typeElement => {
        if (typeElement.textContent.trim() === "Transfer") {
            typeElement.textContent = translations[currentLang]["Transfer"];
        } else if (typeElement.textContent.trim() === "Release") {
            typeElement.textContent = translations[currentLang]["Release"];
        }
    });

    // Team info
    const teamInfoSpan = document.querySelector("#team-info span");
    if (teamInfoSpan && teamInfoSpan.textContent.includes("Sezon için veri bulunamadı")) {
        teamInfoSpan.textContent = translations[currentLang]["Sezon için veri bulunamadı"];
    } else if (teamInfoSpan && teamInfoSpan.textContent.includes("Lig için veri bulunamadı")) {
        teamInfoSpan.textContent = translations[currentLang]["Lig için veri bulunamadı"];
    } else if (teamInfoSpan) {
         // Re-render the team info with translated 'Logosu' if it's the default placeholder
         const currentTeamName = teamInfoSpan.textContent;
         const currentTeamLogoSrc = document.querySelector("#team-info img").src;
         if (currentTeamLogoSrc.includes("fqxpyfr.png") && currentTeamName === "Resa") {
             teamInfoSpan.textContent = `${currentTeamName}`;
             document.querySelector("#team-info img").alt = `${currentTeamName} ${translations[currentLang]["Logosu"]}`;
         } else if (statsTeamLogos[currentTeamName]) {
             document.querySelector("#team-info img").alt = `${currentTeamName} ${translations[currentLang]["Logosu"]}`;
         }
    }

    // Transfer club info
    document.querySelectorAll(".transfer-club .league-info").forEach(info => {
        const parentDiv = info.closest('.transfer-club');
        let clubName = '';
        if (parentDiv) {
            const spanElement = parentDiv.querySelector('span:not(.league-info)');
            if (spanElement) {
                clubName = spanElement.textContent;
            }
        }
        
        let originalText = info.dataset.originalText || info.textContent; // Store original text
        if (!info.dataset.originalText) {
            info.dataset.originalText = info.textContent;
        }

        if (currentLang === "da") {
           
            const parts = originalText.split(" (");
            if (parts.length > 1) {
                let countryAndLeague = parts[1].slice(0, -1); // Remove trailing ')'
                let country = countryAndLeague.split(' ')[0];
                let league = countryAndLeague.substring(country.length + 1);

                let translatedCountry = country;
                if (country === "Almanya") translatedCountry = "Tyskland";
                if (country === "İngiltere") translatedCountry = "England";
                if (country === "İspanya") translatedCountry = "Spanien";
                if (country === "Belçika") translatedCountry = "Belgien";
                if (country === "İtalya") translatedCountry = "Italien";

                // Translate 
                if (clubName === translations["tr"]["Takımsız"]) {
                    info.textContent = `(${translations[currentLang]["Takımsız"]})`;
                } else {
                    info.textContent = `(${translatedCountry} ${league})`;
                }
            }
        } else {
            info.textContent = originalText;
        }
    });

    
     document.getElementById("player-nationality").textContent = translations[currentLang][playerData.nationality] || playerData.nationality;
     document.getElementById("player-position").textContent = translations[currentLang][playerData.position] || playerData.position;

     
     document.getElementById("player-flag").alt = `${translations[currentLang]["Uyruk Bayrağı"]}`;
}


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
            label: "Piyasa Değeri", 
            data: playerData.marketValue.history.map(h => h.value), 
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
            <p>${translations[currentLang]["Kazandığı Sezon:"]} ${award.seasons.join(", ")}</p>
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
allSeasonsOption.textContent = translations[currentLang]["Tüm Zamanlar"];
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
        cleanSheets: 0, 
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
            aggregatedStats.cleanSheets += stat.cleanSheets || 0; // Aggregate cleanSheets
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
    { labelKey: "Sarı Kart", id: "yellow-cards", icon: "https://w7.pngwing.com/pngs/942/268/png-transparent-penalty-card-yellow-card-association-football-referee-sim-cards-electronics-rectangle-color-thumbnail.png" },
    { labelKey: "Sarı-Kırmızı Kart", id: "yellow-red-cards", icon: "https://w7.pngwing.com/pngs/376/843/png-transparent-penalty-card-red-card-yellow-card-football-angle-rectangle-orange.png" },
    { labelKey: "Kırmızı Kart", id: "red-cards", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Red_card.svg/1575px-Red_card.svg.png" }
];
cardStats.forEach(stat => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${stat.icon}" alt="${stat.labelKey}">
        <div class="label">${translations[currentLang][stat.labelKey]}</div>
        <div class="value" id="stat-${stat.id}">0</div>
    `;
    statsCards.appendChild(card);
});

// İstatistik Grid
const statsGrid = document.getElementById("stats-grid");
const gridStats = [
    { labelKey: "Maç", id: "matches", icon: "https://w7.pngwing.com/pngs/709/226/png-transparent-game-sport-football-tactic-soccer-field-template-angle-text-rectangle-thumbnail.png" },
    { labelKey: "Gol", id: "goals", icon: "https://cdn-icons-png.flaticon.com/512/919/919462.png" },
    { labelKey: "Asist", id: "assists", icon: "https://cdn-icons-png.flaticon.com/512/98/98611.png" },
    { labelKey: "Clean Sheets", id: "clean-sheets", icon: "https://www.shutterstock.com/image-vector/football-goalkeeper-glove-ball-icon-600nw-2529191625.jpg" } 
];
gridStats.forEach(stat => {
    const item = document.createElement("div");
    item.className = "stat-item";
    item.innerHTML = `
        <img src="${stat.icon}" alt="${stat.labelKey}">
        <span>${translations[currentLang][stat.labelKey]}</span>
        <span class="value" id="stat-${stat.id}">0</span>
    `;
    statsGrid.appendChild(item);
});

// Yüzde Çemberleri
const percentageGrid = document.getElementById("percentage-grid");
const percentageStats = [
    { labelKey: "İlk 11", id: "starting" },
    { labelKey: "Sarı Kart Yüzdesi", id: "yellow-card" },
    { labelKey: "Kırmızı Kart Yüzdesi", id: "red-card" },
    { labelKey: "Skor Katkısı", id: "contribution" },
    { labelKey: "Clean Sheet Yüzdesi", id: "clean-sheet" } // Added clean sheet percentage
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
        <span>${translations[currentLang][stat.labelKey]}</span>
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
        document.getElementById("stat-clean-sheets").textContent = "N/A"; // Clean sheets N/A
        updateCircle("circle-starting", 0);
        updateCircle("circle-yellow-card", 0);
        updateCircle("circle-red-card", 0);
        updateCircle("circle-contribution", 0);
        updateCircle("circle-clean-sheet", 0); // Clean sheet percentage 0
        document.getElementById("team-info").innerHTML = `<span>${translations[currentLang]["Sezon için veri bulunamadı"]}</span>`;
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
        document.getElementById("stat-clean-sheets").textContent = "N/A"; // Clean sheets N/A
        updateCircle("circle-starting", 0);
        updateCircle("circle-yellow-card", 0);
        updateCircle("circle-red-card", 0);
        updateCircle("circle-contribution", 0);
        updateCircle("circle-clean-sheet", 0); // Clean sheet percentage 0
        document.getElementById("team-info").innerHTML = `<span>${translations[currentLang]["Lig için veri bulunamadı"]}</span>`;
        return;
    }

    document.getElementById("stat-yellow-cards").textContent = stats.yellowCards || 0;
    document.getElementById("stat-yellow-red-cards").textContent = stats.yellowRedCards || 0;
    document.getElementById("stat-red-cards").textContent = stats.redCards || 0;
    document.getElementById("stat-matches").textContent = stats.matches || 0;
    document.getElementById("stat-goals").textContent = stats.goals || 0;
    document.getElementById("stat-assists").textContent = stats.assists || 0;
    document.getElementById("stat-clean-sheets").textContent = stats.cleanSheets || 0; // Display clean sheets

    const startingPercentage = stats.matches > 0 ? (stats.starting / stats.matches * 100).toFixed(0) : 0;
    const yellowCardPercentage = stats.matches > 0 ? (stats.yellowCards / stats.matches * 100).toFixed(1) : 0;
    const redCardPercentage = stats.matches > 0 ? (stats.redCards / stats.matches * 100).toFixed(1) : 0;
    const contributionPercentage = stats.matches > 0 ? Math.min(((stats.goals + stats.assists) / stats.matches * 100).toFixed(1), 100) : 0;
    const cleanSheetPercentage = stats.matches > 0 ? (stats.cleanSheets / stats.matches * 100).toFixed(1) : 0; // Calculate clean sheet percentage

    updateCircle("circle-starting", startingPercentage);
    updateCircle("circle-yellow-card", yellowCardPercentage);
    updateCircle("circle-red-card", redCardPercentage);
    updateCircle("circle-contribution", contributionPercentage);
    updateCircle("circle-clean-sheet", cleanSheetPercentage); // Update clean sheet circle

    const teamInfo = document.getElementById("team-info");
    const teamName = stats.team;
    const teamLogo = statsTeamLogos[teamName] || "https://i.hizliresim.com/fqxpyfr.png";
    teamInfo.innerHTML = `
        <img src="${teamLogo}" alt="${teamName} ${translations[currentLang]["Logosu"]}">
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
    <div class="transfer-season">${translations[currentLang]["Sezon"]}</div>
    <div class="transfer-club previous-club">${translations[currentLang]["Önceki Takım"]}</div>
    <div class="transfer-type">${translations[currentLang]["Tür"]}</div>
    <div class="transfer-arrow">➡️</div>
    <div class="transfer-club current-club">${translations[currentLang]["Sonraki Takım"]}</div>
`;
transferHistory.appendChild(headerRow);

// Transfer verileri
playerData.transferHistory.forEach(transfer => {
    const row = document.createElement("div");
    row.className = "transfer-row";
    const previousClubLogo = transfer.previousClub.logo || "https://via.placeholder.com/40?text=Unknown";
    const currentClubLogo = transfer.currentClub.logo || "https://via.placeholder.com/40?text=Unknown";
    const transferTypeClass = transfer.type === "Transfer" ? "transfer-type-transfer" : "transfer-type-Release";
    
    // Store original text content for league info before translation
    const previousLeagueInfoText = `(${transfer.previousClub.country} ${transfer.previousClub.league})`;
    const currentLeagueInfoText = `(${transfer.currentClub.country} ${transfer.currentClub.league})`;

    row.innerHTML = `
        <div class="transfer-season">${transfer.season}</div>
        <div class="transfer-club previous-club">
            <img src="${previousClubLogo}" alt="${transfer.previousClub.name} ${translations[currentLang]["Logosu"]}">
            <span>${translations[currentLang][transfer.previousClub.name] || transfer.previousClub.name}</span>
            <span class="league-info" data-original-text="${previousLeagueInfoText}">${previousLeagueInfoText}</span>
        </div>
        <div class="transfer-type ${transferTypeClass}">${translations[currentLang][transfer.type]}</div>
        <div class="transfer-arrow">➡️</div>
        <div class="transfer-club current-club">
            <img src="${currentClubLogo}" alt="${transfer.currentClub.name} ${translations[currentLang]["Logosu"]}">
            <span>${translations[currentLang][transfer.currentClub.name] || transfer.currentClub.name}</span>
            <span class="league-info" data-original-text="${currentLeagueInfoText}">${currentLeagueInfoText}</span>
        </div>
    `;
    transferHistory.appendChild(row);
});

// Translate button functionality
const translateButton = document.getElementById("translate-button");
const languageOptions = document.getElementById("language-options");

translateButton.addEventListener("click", () => {
    languageOptions.classList.toggle("show");
});

languageOptions.addEventListener("click", (e) => {
    if (e.target.classList.contains("lang-option")) {
        currentLang = e.target.dataset.lang;
        applyTranslations();
        languageOptions.classList.remove("show"); // Hide options after selection
        // Re-render the transfer history to apply translations to club names and league info
        renderTransferHistory();
        updateStats(seasonFilter.value, Object.keys(playerData.seasons[seasonFilter.value]?.stats || {})[0]);
    }
});

function renderTransferHistory() {
    transferHistory.innerHTML = ''; // Clear existing content

    // Add header row
    const headerRow = document.createElement("div");
    headerRow.className = "transfer-row transfer-header";
    headerRow.innerHTML = `
        <div class="transfer-season">${translations[currentLang]["Sezon"]}</div>
        <div class="transfer-club previous-club">${translations[currentLang]["Önceki Takım"]}</div>
        <div class="transfer-type">${translations[currentLang]["Tür"]}</div>
        <div class="transfer-arrow">➡️</div>
        <div class="transfer-club current-club">${translations[currentLang]["Sonraki Takım"]}</div>
    `;
    transferHistory.appendChild(headerRow);

    playerData.transferHistory.forEach(transfer => {
        const row = document.createElement("div");
        row.className = "transfer-row";
        const previousClubLogo = transfer.previousClub.logo || "https://via.placeholder.com/40?text=Unknown";
        const currentClubLogo = transfer.currentClub.logo || "https://via.placeholder.com/40?text=Unknown";
        const transferTypeClass = transfer.type === "Transfer" ? "transfer-type-transfer" : "transfer-type-Release";

        let previousClubNameTranslated = translations[currentLang][transfer.previousClub.name] || transfer.previousClub.name;
        let currentClubNameTranslated = translations[currentLang][transfer.currentClub.name] || transfer.currentClub.name;

        let previousCountry = transfer.previousClub.country;
        let currentCountry = transfer.currentClub.country;

        if (currentLang === "da") {
            if (previousCountry === "Almanya") previousCountry = "Tyskland";
            else if (previousCountry === "İngiltere") previousCountry = "England";
            else if (previousCountry === "İspanya") previousCountry = "Spanien";
            else if (previousCountry === "Belçika") previousCountry = "Belgien";
            else if (previousCountry === "İtalya") previousCountry = "Italien";

            if (currentCountry === "Almanya") currentCountry = "Tyskland";
            else if (currentCountry === "İngiltere") currentCountry = "England";
            else if (currentCountry === "İspanya") currentCountry = "Spanien";
            else if (currentCountry === "Belçika") currentCountry = "Belgien";
            else if (currentCountry === "İtalya") currentCountry = "Italien";
        }

        row.innerHTML = `
            <div class="transfer-season">${transfer.season}</div>
            <div class="transfer-club previous-club">
                <img src="${previousClubLogo}" alt="${previousClubNameTranslated} ${translations[currentLang]["Logosu"]}">
                <span>${previousClubNameTranslated}</span>
                <span class="league-info">(${previousCountry} ${transfer.previousClub.league})</span>
            </div>
            <div class="transfer-type ${transferTypeClass}">${translations[currentLang][transfer.type]}</div>
            <div class="transfer-arrow">➡️</div>
            <div class="transfer-club current-club">
                <img src="${currentClubLogo}" alt="${currentClubNameTranslated} ${translations[currentLang]["Logosu"]}">
                <span>${currentClubNameTranslated}</span>
                <span class="league-info">(${currentCountry} ${transfer.currentClub.league})</span>
            </div>
        `;
        transferHistory.appendChild(row);
    });
}


// Initial translation application
applyTranslations();
renderTransferHistory();