
let team = { logo: '', name: '' };
let coins = 1000;
let squad = [];
let formation = {
    GK: null, LB: null, CB1: null, CB2: null, RB: null,
    CM1: null, CM2: null, CM3: null,
    LW: null, ST: null, RW: null
};
let selectedPositionFromPitch = null;
let isMovingPlayer = false;
let currentFilter = 'all';


let currentDivision = 5;
let divisionSeason = {
    wins: 0,
    matchesPlayed: 0
};


let ourScore = 0;
let opponentScore = 0;
let matchMinute = 0;
let matchInterval = null;
let opponentTeam = { name: '', squad: [] };
let redCardedPlayers = [];
let yellowCards = {};
let playerMatchRatings = {};
let stoppageTimeAnnounced = false;
let finalMatchMinute = 90;


let playersToSell = [];


const players = [
   { id: "fbskaar_lw", pos: "LW", name: "fbskaar", rating: 79, imageUrl: "https://i.hizliresim.com/o02bw8q.png" },
{ id: "iluvrealsyy_rw", pos: "RW", name: "iluvrealsyy", rating: 75, imageUrl: "https://i.hizliresim.com/l7ixnjh.png" },
{ id: "Synksx_LW", pos: "LW", name: "Synksx", rating: 68, imageUrl: "https://i.hizliresim.com/2t219m7.png" },
{ id: "bubblebuttercup112_st", pos: "ST", name: "bubblebuttercup112", rating: 88, imageUrl: "https://i.hizliresim.com/2ptmm06.png" },
{ id: "Clinicality_RW", pos: "RW", name: "Clinicality", rating: 73, imageUrl: "https://i.hizliresim.com/ge8r8s6.png" },
{ id: "lero_me_lw", pos: "LW", name: "lero_me", rating: 76, imageUrl: "https://i.hizliresim.com/tjf42ks.png" },
{ id: "parlayhunter_st", pos: "ST", name: "parlayhunter", rating: 83, imageUrl: "https://i.hizliresim.com/dyxjydw.png" },
{ id: "fazaldo_rw", pos: "RW", name: "fazaldo", rating: 87, imageUrl: "https://i.hizliresim.com/fjw209a.png" },
{ id: "elchinoshob_lw", pos: "LW", name: "elchinoshob", rating: 81, imageUrl: "https://i.hizliresim.com/7x9jv2f.png" },
{ id: "aresefgod_st", pos: "ST", name: "aresefgod", rating: 87, imageUrl: "https://i.hizliresim.com/637dwhv.png" },
{ id: "Jack924833_rw", pos: "RW", name: "Jack924833", rating: 85, imageUrl: "https://i.hizliresim.com/9hnjh9q.png" },
{ id: "Crisstobal_lw", pos: "LW", name: "Crisstobal", rating: 84, imageUrl: "https://i.hizliresim.com/sze1109.png" },
{ id: "KenanYildizz_st", pos: "ST", name: "KenanYildizz", rating: 66, imageUrl: "https://i.hizliresim.com/ink4sgu.png" },
{ id: "kentroya_rw", pos: "RW", name: "kentroya", rating: 84, imageUrl: "https://i.hizliresim.com/hhurmqu.png" },
 { id: "Hrisowskii_lw", pos: "LW", name: "Hrisowskii", rating: 68, imageUrl: "https://i.hizliresim.com/dv5aj4j.png" },
{ id: "22smok_st", pos: "ST", name: "22smok", rating: 83, imageUrl: "https://i.hizliresim.com/lj8a8jw.png" },
{ id: "STORMgiannis900_RW", pos: "RW", name: "STORMgiannis900", rating: 72, imageUrl: "https://i.hizliresim.com/5hwt6wt.png" },
{ id: "bonfyz_lw", pos: "LW", name: "bonfyz", rating: 65, imageUrl: "https://i.hizliresim.com/obgi7qg.png" },
{ id: "fivestariscо_st", pos: "ST", name: "fivestariscо", rating: 85, imageUrl: "https://i.hizliresim.com/mziha1v.png" },
{ id: "streetannie_rw", pos: "RW", name: "streetannie", rating: 65, imageUrl: "https://i.hizliresim.com/h64m7s0.png" },
    { id: "eviluded_cm", pos: "CM", name: "eviluded", rating: 79, imageUrl: "https://i.hizliresim.com/5d13iz0.png" },
    { id: "cineris_cm", pos: 'CM', name: "Cineris", rating: 74, imageUrl: "https://i.hizliresim.com/mle22in.png" },
    { id: "tris10_m_cm", pos: 'CM', name: "tris10_m", rating: 70, imageUrl: "https://i.hizliresim.com/5urgz42.png" },
    { id: "KosovoovlsSerbia_CM", pos: "CM", name: "KosovoovlsSerbia", rating: 83, imageUrl: "https://i.hizliresim.com/scjwtpt.png" },
    { id: "arbeloa_CM", pos: "CM", name: "arbeloa", rating: 72, imageUrl: "https://i.hizliresim.com/f4fdpaj.png" },
    { id: "MFSHAD_cm", pos: "CM", name: "MFSHAD", rating: 92, imageUrl: "https://i.hizliresim.com/43rwk1r.png" },
{ id: "ItchyLfc2005_cm", pos: "CM", name: "ItchyLfc2005", rating: 68, imageUrl: "https://i.hizliresim.com/84603x8.png" },
{ id: "awakenaldo_cm", pos: "CM", name: "awakenaldo", rating: 68, imageUrl: "https://i.hizliresim.com/ie4jude.png" },
{ id: "trincao1907_cm", pos: "CM", name: "trincao1907", rating: 71, imageUrl: "https://i.hizliresim.com/n88v3dl.png" },
{ id: "nonexistenalcries_cm", pos: "CM", name: "nonexistenalcries", rating: 89, imageUrl: "https://i.hizliresim.com/k83clzv.png" },
{ id: "Nazotiy_cm", pos: "CM", name: "Nazotiy", rating: 83, imageUrl: "https://i.hizliresim.com/ifq4flc.png" },
{ id: "AitNourii_cm", pos: "CM", name: "AitNourii", rating: 72, imageUrl: "https://i.hizliresim.com/bhb9adj.png" },
{ id: "socrattes_cm", pos: "CM", name: "socrattes", rating: 67, imageUrl: "https://i.hizliresim.com/3tffybs.png" },
{ id: "MARTINELLI_cm", pos: "CM", name: "MARTINELLI", rating: 80, imageUrl: "https://i.hizliresim.com/nb6o2lr.png" },
{ id: "raulasencioo_cm", pos: "CM", name: "raulasencioo", rating: 84, imageUrl: "https://i.hizliresim.com/izdqxn7.png" },
{ id: "tafeljas_cm", pos: "CM", name: "tafeljas", rating: 83, imageUrl: "https://i.hizliresim.com/m9ka6ys.png" },
{ id: "UberLeo_cm", pos: "CM", name: "UberLeo", rating: 83, imageUrl: "https://i.hizliresim.com/az954zo.png" },
{ id: "theworfer_cm", pos: "CM", name: "theworfer", rating: 65, imageUrl: "https://i.hizliresim.com/290zd3s.png" },
{ id: "tizongass_cm", pos: "CM", name: "tizongass", rating: 70, imageUrl: "https://i.hizliresim.com/sua99yy.png" },
{ id: "a9lire_cm", pos: "CM", name: "a9lire", rating: 69, imageUrl: "https://i.hizliresim.com/bsg1ymy.png" },
{ id: "jessnaldo_cm", pos: "CM", name: "jessnaldo", rating: 67, imageUrl: "https://i.hizliresim.com/1bgke80.png" },
{ id: "n5ves_cm", pos: "CM", name: "n5ves", rating: 90, imageUrl: "https://i.hizliresim.com/mylz52h.png" },
{ id: "luczz_cm", pos: "CM", name: "luczz", rating: 83, imageUrl: "https://i.hizliresim.com/5f7jkmc.png" },
 { id: "nvmcobain_cm", pos: "CM", name: "nvmcobain", rating: 82, imageUrl: "https://i.hizliresim.com/ff43j20.png" },
 { id: "Makelele_cm", pos: "CM", name: "Makelele", rating: 91, imageUrl: "https://i.hizliresim.com/lda0hkd.png" },
{ id: "phen5m_cm", pos: "CM", name: "phen5m", rating: 88, imageUrl: "https://i.hizliresim.com/k3su1tt.png" },
{ id: "humidos_cm", pos: "CM", name: "humidos", rating: 66, imageUrl: "https://i.hizliresim.com/f218phm.png" },
 { id: "itsslothplayz_cm", "pos": "CM", "name": "itsslothplayz", "rating": 71, "imageUrl": "https://i.hizliresim.com/2mgcz46.png" },
  { id: "asamuiaractioncoco_cm", "pos": "CM", "name": "asamuiaractioncoco", "rating": 68, "imageUrl": "https://i.hizliresim.com/g1auq41.png" },
{ id: "ProCiba099_009_cm", "pos": "CM", "name": "ProCiba099_009", "rating": 67, "imageUrl": "https://i.hizliresim.com/nckndwv.png" },
 { id: "HasHikOPriMexS_lw", "pos": "LW", "name": "HasHikO_PriMexS", "rating": 71, "imageUrl": "https://i.hizliresim.com/dzl93yq.png" },
 {id: "TheAllRounderGod_st", "pos": "ST", "name": "TheAllRounderGod", "rating": 68, "imageUrl": "https://i.hizliresim.com/3ike5yb.png" },
 { id: "qeintessence_rw", "pos": "RW", "name": "qeintessence", "rating": 70, "imageUrl": "https://i.hizliresim.com/4gupwvj.png" },
  { id: "finjoshi_cm", pos: "CM", name: "finjoshi", rating: 85, imageUrl: "https://i.hizliresim.com/hsx0gwy.png" },
   { id: "p9eng_cm", pos: "CM", name: "p9eng", rating: 75, imageUrl: "https://i.hizliresim.com/8eu62qk.png" },
  { id: "rocha90_cm", pos: "CM", name: "rocha90", rating: 75, imageUrl: "https://i.hizliresim.com/kpn0y59.png" },
  { id: "A7HARR_lw", pos: "LW", name: "A7HARR", rating: 77, imageUrl: "https://i.hizliresim.com/ggd60g1.png" },
{ id: "IlJake_XI_st", pos: "ST", name: "IlJake_XI", rating: 79, imageUrl: "https://i.hizliresim.com/oxgpzqo.png" },
{ id: "IlLowkeyXI_rw", pos: "RW", name: "IlLowkeyXI", rating: 80, imageUrl: "https://i.hizliresim.com/4hz91wf.png" },
{ id: "xevero2011_gk", pos: "GK", name: "xevero2011", rating: 77, imageUrl: "https://i.hizliresim.com/kqt5wvj.png" },
 { id: "Syqxnzl_lb", pos: "LB", name: "Syqxnzl", rating: 76, imageUrl: "https://i.hizliresim.com/i3zaj5l.png" },
 {id: "irineudosparanue_cb", pos: "CB", name: "irineudosparanue", rating: 87, imageUrl: "https://i.hizliresim.com/2c2bacj.png" },
  { id: "yuriocean_cb", pos: "CB", name: "yuriocean", rating: 82, imageUrl: "https://i.hizliresim.com/8n074qm.png" },
  { id: "dabillingham_rb", pos: "RB", name: "dabillingham", rating: 78, imageUrl: "https://i.hizliresim.com/rxod085.png" },
{ id: "NavidParsHakhamneshi_cm", pos: "CM", name: "NavidParsHakhamneshi", rating: 71, imageUrl: "https://i.hizliresim.com/dfk06ls.png" },
 { id: "Zoomical_cm", pos: "CM", name: "Zoomical", rating: 70, imageUrl: "https://i.hizliresim.com/p5ncxgu.png" },
  { id: "danielsxyz_cm", pos: "CM", name: "danielsxyz", rating: 67, imageUrl: "https://i.hizliresim.com/d3eglui.png" },
{ id: "lolololol1264_lw", pos: "LW", name: "lolololol1264", rating: 66, imageUrl: "https://i.hizliresim.com/e5uq66l.png" },
  { id: "puyafon_st", pos: "ST", name: "puyafon", rating: 77, imageUrl: "https://i.hizliresim.com/lkqr8ec.png" },
{ id: "ekawcaruso_rw", pos: "RW", name: "ekawcaruso", rating: 65, imageUrl: "https://i.hizliresim.com/504a1yf.png" }, 
    { id: "helziy_lb", pos: 'LB', name: "Helziy", rating: 75, imageUrl: "https://i.hizliresim.com/prb757u.png" },
    { id: "mood_ramos_cb", pos: 'CB', name: "Mood_Ramos", rating: 84, imageUrl: "https://i.hizliresim.com/eu5yzwj.png" },
    { id: "axguerd_cb", rating: 79, pos: 'CB', name: "axguerd", imageUrl: "https://i.hizliresim.com/19dublk.png" },
    { id: "malik_dan_rb", pos: 'RB', name: "Malik_Dan", rating: 83, imageUrl: "https://i.hizliresim.com/1qih3y7.png" },
    { id: "luukzzy_CB", pos: "CB", name: "luukzzy", rating: 84, imageUrl: "https://i.hizliresim.com/6937szw.png" },
    { id: "Zinrall_CB", pos: "CB", name: "Zinrall", rating: 80, imageUrl: "https://i.hizliresim.com/7phdkj2.png" },
    { id: "Bloxinhooo_LB", pos: "LB", name: "Bloxinhooo", rating: 71, imageUrl: "https://i.hizliresim.com/i9eeot8.png" },
    { id: "EthicasNicomachea_RB", pos: "RB", name: "EthicasNicomachea", rating: 71, imageUrl: "https://i.hizliresim.com/lcmske0.png" },
    { id: "flaandre-scarlet_cb", pos: "CB", name: "flaandre_scarlet", rating: 68, imageUrl: "https://i.hizliresim.com/clczy6g.png" },
{ id: "ElchuchoPerez_lb", pos: "LB", name: "ElchuchoPerez", rating: 67, imageUrl: "https://i.hizliresim.com/4rukvh3.png" },
{ id: "lastdisco_rb", pos: "RB", name: "lastdisco", rating: 65, imageUrl: "https://i.hizliresim.com/8ctah9r.png" },
{ id: "gingikel_cb", pos: "CB", name: "gingikel", rating: 89, imageUrl: "https://i.hizliresim.com/8fnmxh3.png" },
{ id: "Vurelixs_lb", pos: "LB", name: "Vurelixs", rating: 68, imageUrl: "https://i.hizliresim.com/jcsgm1y.png" },
{ id: "ziaderzi_cb", pos: "CB", name: "ziaderzi", rating: 85, imageUrl: "https://i.hizliresim.com/2h5tbto.png" },
{ id: "MRDamDan_cb", pos: "CB", name: "MRDamDan", rating: 77, imageUrl: "https://i.hizliresim.com/fsf0ict.png" },
{ id: "Vinariyn_rb", pos: "RB", name: "Vinariyn", rating: 68, imageUrl: "https://i.hizliresim.com/54g1zpb.png" },
{ id: "zorvean_lb", pos: "LB", name: "zorvean", rating: 77, imageUrl: "https://i.hizliresim.com/3v8vr40.png" },
{ id: "Spook3d_cb", pos: "CB", name: "Spook3d", rating: 79, imageUrl: "https://i.hizliresim.com/hbp9swx.png" },
{ id: "moshu_q_cb", pos: "CB", name: "moshu_q", rating: 87, imageUrl: "https://i.hizliresim.com/cil4bfv.png" },
{ id: "c3sual_rb", pos: "RB", name: "c3sual", rating: 70, imageUrl: "https://i.hizliresim.com/4swg4y0.png" },
{ id: "KakaViBritannia_lb", pos: "LB", name: "KakaViBritannia", rating: 70, imageUrl: "https://i.hizliresim.com/1s12i3q.png" },
{ id: "IGotNoWifi_cb", pos: "CB", name: "IGotNoWifi", rating: 74, imageUrl: "https://i.hizliresim.com/1dzqjyj.png" },
{ id: "NickOlij_cb", pos: "CB", name: "NickOlij", rating: 70, imageUrl: "https://i.hizliresim.com/rkgnldg.png" },
{ id: "c4icedo_rb", pos: "RB", name: "c4icedo", rating: 74, imageUrl: "https://i.hizliresim.com/61wbuxh.png" },
{ id: "harmoush_lb", pos: "LB", name: "harmoush", rating: 67, imageUrl: "https://i.hizliresim.com/8p5zr24.png" },
{ id: "Dogesinhoo_cb", pos: "CB", name: "Dogesinhoo", rating: 76, imageUrl: "https://i.hizliresim.com/7tixrxv.png" },
{ id: "MISHIPRAXDYT2_cb", pos: "CB", name: "MISHIPRAXDYT2", rating: 73, imageUrl: "https://i.hizliresim.com/c21eh3b.png" },
{ id: "chilavert_rb", pos: "RB", name: "chilavert", rating: 66, imageUrl: "https://i.hizliresim.com/7ur6afg.png" },
{ id: "zSameki_lb", pos: "LB", name: "zSameki", rating: 74, imageUrl: "https://i.hizliresim.com/8f2o9hc.png" },
 { id: "PLOKOLOLBROTHERS5_cb", pos: "CB", name: "PLOKOLOL_BROTHERS5", rating: 70, imageUrl: "https://i.hizliresim.com/5wwhcmq.png" },
 { id: "Suleex_cb", pos: "CB", name: "Suleex", rating: 83, imageUrl: "https://i.hizliresim.com/itlxzws.png" },
 { id: "Jekowski_rb", pos: "RB", name: "Jekowski", rating: 85, imageUrl: "https://i.hizliresim.com/kd1buix.png" },
  { id: "aguzzj_lb", pos: "LB", name: "aguzzj", rating: 68, imageUrl: "https://i.hizliresim.com/b3xlh34.png" },
 { id: "lisandroo_cb", pos: "CB", name: "lisandroo", rating: 86, imageUrl: "https://i.hizliresim.com/ashf78c.png" },
{ id: "Painshinratensei_cb", pos: "CB", name: "Painshinratensei", rating: 82, imageUrl: "https://i.hizliresim.com/c32338q.png" },
 { id: "CriticalLio_rb", pos: "RB", name: "CriticalLio", rating: 68, imageUrl: "https://i.hizliresim.com/n8qn3ag.png" },
 { id: "Yunami27X_LB", "pos": "LB", "name": "Yunami27X", "rating": 65, "imageUrl": "https://i.hizliresim.com/iky8vxu.png" },
 { id: "IgorAkinfeev35_cb", "pos": "CB", "name": "Igor_Akinfeev35", "rating": 71, "imageUrl": "https://i.hizliresim.com/mjp4o9y.png" },
 { id: "Joshlect_cb", "pos": "CB", "name": "Joshlect", "rating": 67, "imageUrl": "https://i.hizliresim.com/97jybyc.png" },
{ id: "ForisHD_rb", "pos": "RB", "name": "ForisHD", "rating": 65, "imageUrl": "https://i.hizliresim.com/7dnmxku.png" },
{ id: "SanTser780_5_lb", pos: "LB", name: "SanTser780_5", rating: 71, imageUrl: "https://i.hizliresim.com/tqd7jhw.png" },
{ id: "CriticalClip_cb", pos: "CB", name: "CriticalClip", rating: 80, imageUrl: "https://i.hizliresim.com/5fwnyr8.png" },
{ id: "stefiscoco_cb", pos: "CB", name: "stefiscoco", rating: 77, imageUrl: "https://i.hizliresim.com/ro83aed.png" },
{ id: "naim_76_rb", pos: "RB", name: "naim_76", rating: 75, imageUrl: "https://i.hizliresim.com/j295z2m.png" },
{ id: "clumsythings_gk", pos: "GK", name: "clumsythings", rating: 84, imageUrl: "https://i.hizliresim.com/tsrnf6y.png" },
{ id: "sir_aimbot012_LB", pos: "LB", name: "sir_aimbot012", rating: 83, imageUrl: "https://i.hizliresim.com/j5dmdyy.png" },
 { id: "agarnacho_7_cb", pos: "CB", name: "agarnacho_7", rating: 84, imageUrl: "https://i.hizliresim.com/ehk8iwq.png" },
{ id: "ElMorfadorDeChoripan_cb", pos: "CB", name: "ElMorfadorDeChoripan", rating: 77, imageUrl: "https://i.hizliresim.com/9xkc8ua.png" },
{ id: "kovanicic_rb", pos: "RB", name: "kovanicic", rating: 71, imageUrl: "https://i.hizliresim.com/t5j9811.png" },
 { id: "coolestwilliam_cm", pos: "CM", name: "coolestwilliam", rating: 82, imageUrl: "https://i.hizliresim.com/ho84nss.png" },
 { id: "v9nea_cm", pos: "CM", name: "v9nea", rating: 73, imageUrl: "https://i.hizliresim.com/evkva3w.png" },
 { id: "jxzyboi_cm", pos: "CM", name: "jxzyboi", rating: 71, imageUrl: "https://i.hizliresim.com/r6go96g.png" },
  { id: "retenzu_rw", pos: "RW", name: "retenzu", rating: 86, imageUrl: "https://i.hizliresim.com/hqwzcfa.png" },
{ id: "RobertLewandowski38_st", pos: "ST", name: "RobertLewandowski38", rating: 83, imageUrl: "https://i.hizliresim.com/brwkcvz.png" },
{ id: "POLSKAFUTBOL", pos: "LW", name: "POLSKAFUTBOL", rating: 76, imageUrl: "https://i.hizliresim.com/a57fgf4.png" },
{ id: "Kylian_McFrappa_gk", pos: "GK", name: "Kylian_McFrappa", rating: 68, imageUrl: "https://i.hizliresim.com/bf6m84s.png" },
  { id: "aconi5basket_lb", pos: "LB", name: "aconi5basket", rating: 66, imageUrl: "https://i.hizliresim.com/bpygaab.png" },
  { id: "retinzu_cb", pos: "CB", name: "retinzu", rating: 78, imageUrl: "https://i.hizliresim.com/c3f0pjf.png" },
  { id: "NikeBRvip10_cb", pos: "CB", name: "NikeBRvip10", rating: 77, imageUrl: "https://i.hizliresim.com/ba829fk.png" },
{ id: "Fallenciaga.rb", pos: "RB", name: "Fallenciaga", rating: 68, imageUrl: "https://i.hizliresim.com/go9nrcq.png" },
  { id: "CreitimDo_Grau123_cm", pos: "CM", name: "CreitimDo_Grau123", rating: 77, imageUrl: "https://i.hizliresim.com/1o67yhl.png" },
  { id: "Martinalkishima_cm", pos: "CM", name: "Martinalkishima", rating: 75, imageUrl: "https://i.hizliresim.com/889svul.png" },
  { id: "sparkfaded_cm", pos: "CM", name: "sparkfaded", rating: 65, imageUrl: "https://i.hizliresim.com/e5p7j2f.png" },
  { id: "CXMELEKXC_ST", pos: "ST", name: "CXMELEKXC", rating: 65, imageUrl: "https://i.hizliresim.com/56fn56k.png" },
  { id: "stjepogame_RW", pos: "RW", name: "stjepogame", rating: 65, imageUrl: "https://i.hizliresim.com/hfn00f3.png" },
  { id: "trovao16_LW", pos: "LW", name: "trovao16", rating: 65, imageUrl: "https://i.hizliresim.com/544ufsi.png" },
  { id: "Faluzur_GK", pos: "Gk", name: "Faluzur", rating: 84, imageUrl: "https://i.hizliresim.com/p60vmhq.png" },
{ id: "Khojent_lb", pos: "LB", name: "Khojent", rating: 65, imageUrl: "https://i.hizliresim.com/q25y1s5.png" },
{ id: "Idk_Scout_cb", pos: "cB", name: "Idk_Scout", rating: 88, imageUrl: "https://i.hizliresim.com/i2uwhkg.png" },
{ id: "Pionieers_cb", pos: "CB", name: "Pionieers", rating: 80, imageUrl: "https://i.hizliresim.com/d4czcxn.png" },
{ id: "IlTony_Kroos_rb", pos: "RB", name: "IlTony_Kroos", rating: 65, imageUrl: "https://i.hizliresim.com/k0tf2de.png" },
 { id: "hjl_cm", pos: "CM", name: "hjl", rating: 85, imageUrl: "https://i.hizliresim.com/f91gmz4.png" },
{ id: "7ronaldoo_cm", pos: "CM", name: "7ronaldoo", rating: 82, imageUrl: "https://i.hizliresim.com/6s8vcsn.png" },
 { id: "Gameomg_RBLX_cm", pos: "CM", name: "Gameomg_RBLX", rating: 75, imageUrl: "https://i.hizliresim.com/j13l0l7.png" },
 { id: "4rkkz_RW", pos: "RW", name: "4rkkz", rating: 89, imageUrl: "https://i.hizliresim.com/3ua46zj.png" },
 { id: "keepupwithmelo_st", pos: "ST", name: "keepupwithmelo", rating: 65, imageUrl: "https://i.hizliresim.com/bf165kr.png" },
{ id: "wINams_LW", pos: "LW", name: "wINams", rating: 65, imageUrl: "https://i.hizliresim.com/qwfc3qt.png" },
{ id: "Humberto_4268_Gk", pos: "GK", name: "Humberto_4268", rating: 76, imageUrl: "https://i.hizliresim.com/lkambm8.png" },
{ id: "bauti38err_Lb", pos: "LB", name: "bauti38err", rating: 78, imageUrl: "https://i.hizliresim.com/bs70r0m.png" },
{ id: "isaque123456677_cb", pos: "CB", name: "isaque123456677", rating: 77, imageUrl: "https://i.hizliresim.com/28m94vj.png" },
 { id: "whitetiger1912_cb", pos: "CB", name: "whitetiger1912", rating: 73, imageUrl: "https://i.hizliresim.com/qnzqo7s.png" },
 { id: "fabrituber720_rb", pos: "RB", name: "fabrituber720", rating: 69, imageUrl: "https://i.hizliresim.com/qn14ezx.png" },
  { id: "LimiDantonelli_cm", pos: "CM", name: "LimiDantonelli", rating: 81, imageUrl: "https://i.hizliresim.com/hv55ws8.png" },
{ id: "IDavidLIIII_cm", pos: "CM", name: "IDavidLIIII", rating: 71, imageUrl: "https://i.hizliresim.com/bzs5mpm.png" },
 { id: "MO129195_cm", pos: "CM", name: "MO129195", rating: 71, imageUrl: "https://i.hizliresim.com/3n2zwqw.png" },
 { id: "JONHCENA38_Lw", pos: "LW", name: "JONHCENA38", rating: 67, imageUrl: "https://i.hizliresim.com/382hija.png" },
  { id: "rewriteeyes_st", pos: "St", name: "rewriteeyes", rating: 80, imageUrl: "https://i.hizliresim.com/7zu5ro7.png" },
{ id: "9Haaaland_rw", pos: "RW", name: "9Haaaland", rating: 68, imageUrl: "https://i.hizliresim.com/8z6o40n.png" },
{ id: "Carlosgarvar_gk", pos: "GK", name: "Carlosgarvar", rating: 79, imageUrl: "https://i.hizliresim.com/kyl5dqq.png" },
{ id: "egereiz3256_LB", pos: "LB", name: "egereiz3256", rating: 70, imageUrl: "https://i.hizliresim.com/1qvirm7.png" },
{ id: "Samueltx_cb", pos: "CB", name: "Samueltx", rating: 73, imageUrl: "https://i.hizliresim.com/n5v1x9n.png" },
 { id: "p6k2q_cb", pos: "CB", name: "p6k2q", rating: 72, imageUrl: "https://i.hizliresim.com/h0o6rvw.png" },
 { id: "adaptisrogue_rb", pos: "RB", name: "adaptisrogue", rating: 70, imageUrl: "https://i.hizliresim.com/9l7v0dq.png" },
 { id: "Xenizyn_cm", pos: "CM", name: "Xenizyn", rating: 74, imageUrl: "https://i.hizliresim.com/4y3qwai.png" },
 { id: "ElJoacooo_cm", pos: "CM", name: "ElJoacooo", rating: 68, imageUrl: "https://i.hizliresim.com/acohpg6.png" },
{ id: "SkitlsRogue_CM", pos: "CM", name: "SkitlsRogue", rating: 65, imageUrl: "https://i.hizliresim.com/mnfawdh.png" },
{ id: "THEREALMOOSEMANNN_LW", pos: "LW", name: "THEREALMOOSEMANNN", rating: 68, imageUrl: "https://i.hizliresim.com/78z085k.png" },
{ id: "Atagyh_ST", pos: "ST", name: "Atagyh", rating: 68, imageUrl: "https://i.hizliresim.com/p9y1vxp.png" },
{ id: "juan810j_RW", pos: "RW", name: "juan810j", rating: 66, imageUrl: "https://i.hizliresim.com/9l9n33q.png" },
{ id: "aydincetinantreman_gk", pos: "GK", name: "aydincetinantreman", rating: 66, imageUrl: "https://i.hizliresim.com/3p9yhlx.png" },
 { id: "mete7104_LB", pos: "LB", name: "mete7104", rating: 75, imageUrl: "https://i.hizliresim.com/gibidyr.png" },
{ id: "frieztaa_cb", pos: "CB", name: "frieztaa", rating: 82, imageUrl: "https://i.hizliresim.com/dxc9akw.png" },
{ id: "miraç7104_gk", pos: "GK", name: "miraç7104", rating: 68, imageUrl: "https://i.hizliresim.com/1lvk6o4.png" },
{ id: "papucraft_43_RB", pos: "RB", name: "papucraft_43", rating: 66, imageUrl: "https://i.hizliresim.com/gfze52z.png" },
{ id: "babatopcuu_cm", pos: "CM", name: "babatopcuu", rating: 86, imageUrl: "https://i.hizliresim.com/rroolxd.png" },
{ id: "meteturkic_cm", pos: "CM", name: "meteturkic", rating: 70, imageUrl: "https://i.hizliresim.com/mxw4wtl.png" },
{ id: "reiulent_cm", pos: "CM", name: "reiulent", rating: 82, imageUrl: "https://i.hizliresim.com/3ca3fjb.png" },
{ id: "ErdoZor61_LW", pos: "LW", name: "ErdoZor61", rating: 71, imageUrl: "https://i.hizliresim.com/q7lpwk0.png" },
{ id: "nepzos_ST", pos: "ST", name: "nepzos", rating: 90, imageUrl: "https://i.hizliresim.com/orhbozd.png" },
 { id: "smottii_RW", pos: "RW", name: "smottii", rating: 86, imageUrl: "https://i.hizliresim.com/cpjrjhk.png" },
 { id: "44bobz_gk", pos: "GK", name: "44bobz", rating: 73, imageUrl: "https://i.hizliresim.com/hk0v9md.png" },
{ id: "keepupwithery_LB", pos: "LB", name: "keepupwithery", rating: 65, imageUrl: "https://i.hizliresim.com/992k338.png" },
{ id: "ocelowski_cb", pos: "CB", name: "ocelowski", rating: 87, imageUrl: "https://i.hizliresim.com/ii7vwlp.png" },
{ id: "Flashlback_cb", pos: "CB", name: "Flashlback", rating: 77, imageUrl: "https://i.hizliresim.com/ev866dt.png" },
{ id: "lau5da_RB", pos: "RB", name: "lau5da", rating: 71, imageUrl: "https://i.hizliresim.com/19m2g7e.png" },
{ id: "andaca_cm", pos: "CM", name: "anda_ca", rating: 86, imageUrl: "https://i.hizliresim.com/p6iore4.png" },
{ id: "livgavemehearts_cm", pos: "CM", name: "livgavemehearts", rating: 86, imageUrl: "https://i.hizliresim.com/ohgvhx5.png" },
{ id: "lucasjbss_cm", pos: "CM", name: "lucasjbss", rating: 86, imageUrl: "https://i.hizliresim.com/dmmu7mi.png" },
{ id: "dami0710_LW", pos: "LW", name: "dami0710", rating: 65, imageUrl: "https://i.hizliresim.com/njfq1lo.png" },
{ id: "floveramon_st", pos: "ST", name: "floveramon", rating: 86, imageUrl: "https://i.hizliresim.com/sn0g627.png" },
{ id: "freakwizard62_rw", pos: "RW", name: "freakwizard62", rating: 65, imageUrl: "https://i.hizliresim.com/6ktiemm.png" },
{ id: "k_asane_st", pos: "ST", name: "k_asane", rating: 92, imageUrl: "https://i.hizliresim.com/cwoubon.png" },
{ id: "SebzqRodriguez_lw", pos: "LW", name: "SebzqRodriguez", rating: 88, imageUrl: "https://i.hizliresim.com/sieu6wv.png" },
{ id: "xfibion_cm", pos: "CM", name: "xfibion", rating: 85, imageUrl: "https://i.hizliresim.com/dtp3gw1.png" },
{ id: "Behrazy_cm", pos: "CM", name: "Behrazy", rating: 84, imageUrl: "https://i.hizliresim.com/d56izwi.png" },
{ id: "lukekakuu_cb", pos: "CB", name: "lukekakuu", rating: 80, imageUrl: "https://i.hizliresim.com/5smkqtx.png" },
{ id: "LucianElCorte_rw", pos: "RW", name: "LucianElCorte", rating: 72, imageUrl: "https://i.hizliresim.com/9acgfjh.png" },
{ id: "mvyuluu_cb", pos: "CB", name: "mvyuluu", rating: 71, imageUrl: "https://i.hizliresim.com/gyag13a.png" },
{ id: "Mohascred_rb", pos: "RB", name: "Mohascred", rating: 67, imageUrl: "https://i.hizliresim.com/nheej5c.png" },
{ id: "ruxel_gamerpro_lb", pos: "LB", name: "ruxel_gamerpro", rating: 68, imageUrl: "https://i.hizliresim.com/o2cixah.png" },
{ id: "MF7UP_gk", pos: "GK", name: "MF7UP", rating: 67, imageUrl: "https://i.hizliresim.com/t5egqxr.png" },
{ id: "zaketti_cm", pos: "CM", name: "zaketti", rating: 65, imageUrl: "https://i.hizliresim.com/nmayj8n.png" },
{ id: "boldprodigy_st", pos: "ST", name: "BoldProdigy", rating: 82, imageUrl: "https://i.hizliresim.com/eg3cnfq.png" },
{ id: "zyrso_cm", pos: "CM", name: "zyrso", rating: 80, imageUrl: "https://i.hizliresim.com/e6k8nma.png" },
{ id: "mokil_rw", pos: "RW", name: "mokilkopop", rating: 77, imageUrl: "https://i.hizliresim.com/kv5jwby.png" },
{ id: "zlteko_lw", pos: "LW", name: "zlteko", rating: 77, imageUrl: "https://i.hizliresim.com/55gkgsf.png" },
{ id: "rayen_rb", pos: "RB", name: "RayenITAMaster", rating: 74, imageUrl: "https://i.hizliresim.com/a38od7s.png" },
{ id: "saturn_cm", pos: "CM", name: "SaturnX7x", rating: 73, imageUrl: "https://i.hizliresim.com/5j9vzwx.png" },
{ id: "omriglazer_gk", pos: "GK", name: "omriglazer", rating: 72, imageUrl: "https://i.hizliresim.com/dlsqmto.png" },
{ id: "damulek_cb", pos: "CB", name: "DAMULEKPL", rating: 71, imageUrl: "https://i.hizliresim.com/bifv8w9.png" },
{ id: "lzxthal_cm", pos: "CM", name: "lzxthal", rating: 70, imageUrl: "" },
{ id: "joaco_lb", pos: "LB", name: "joacocivile", rating: 69, imageUrl: "" },
{ id: "iiplutoski_gk", pos: "GK", name: "iiPlutoski", rating: 70, imageUrl: "" },
{ id: "kittylover29294_st", pos: "ST", name: "kittylover29294", rating: 81, imageUrl: "" },
{ id: "merknazer_gk", pos: "GK", name: "merknazer", rating: 80, imageUrl: "" },
{ id: "uziuqq_lw", pos: "LW", name: "uziuqq", rating: 79, imageUrl: "" },
{ id: "jetixpro_cb", pos: "CB", name: "jetixpro", rating: 77, imageUrl: "" },
{ id: "Cancelooo_lb", pos: "LB", name: "Cancelooo", rating: 76, imageUrl: "" },
{ id: "s1akaa_rw", pos: "RW", name: "s1aka", rating: 71, imageUrl: "" },
{ id: "jakethepig87_cb", pos: "CB", name: "jakethepig87", rating: 70, imageUrl: "" },
{ id: "veloxedge_rb", pos: "RB", name: "veloxedge", rating: 65, imageUrl: "" },
{ id: "Adamxseven7_cm", pos: "CM", name: "Adamxseven7", rating: 70, imageUrl: "" },
{ id: "p5rloi_cm", pos: "CM", name: "p5rloi", rating: 67, imageUrl: "" },
{ id: "feukmizi_cm", pos: "CM", name: "feukmizi", rating: 68, imageUrl: "" } ,
{ id: "ohink_cm", pos: "CM", name: "Ohinkzs", rating: 78, imageUrl: "" },
{ id: "henker_lb", pos: "LB", name: "henkaralhoo", rating: 76, imageUrl: "" },
{ id: "ionlysuat_cb", pos: "CB", name: "IOnlySuat", rating: 76, imageUrl: "https://i.hizliresim.com/43aj4sw.png" },
{ id: "axeldisasi_cb", pos: "CB", name: "axeldisasii", rating: 76, imageUrl: "" },
{ id: "memo_st", pos: "ST", name: "Memorientes", rating: 75, imageUrl: "https://i.hizliresim.com/g77v1pd.png" },
{ id: "yuri1bertoo_gk", pos: "GK", name: "yuri1bertoo", rating: 75, imageUrl: "" },
{ id: "8gakpo_rw", pos: "RW", name: "8gakpo", rating: 73, imageUrl: "" },
{ id: "verlaon_lw", pos: "LW", name: "verlaon", rating: 70, imageUrl: "https://i.hizliresim.com/2mju4dy.png" },
{ id: "punchlife_rb", pos: "RB", name: "punchlife1", rating: 67, imageUrl: "https://i.hizliresim.com/zvflug3.png" },
{ id: "miljan637_cm", pos: "CM", name: "miljan637", rating: 67, imageUrl: "" },
{ id: "zertiox_cm", pos: "CM", name: "zertiox", rating: 65, imageUrl: "" } ,
{ id: "nikdini_cm", pos: "CM", name: "nikdinii", rating: 79, imageUrl: "" },
{ id: "talk2themoney_st", pos: "ST", name: "talk2themoney", rating: 79, imageUrl: "https://i.hizliresim.com/fs2ctkh.png" },
{ id: "asiturkic_lw", pos: "LW", name: "asiturkic", rating: 77, imageUrl: "https://i.hizliresim.com/3fyzgtf.png" },
{ id: "dsacszpro_rw", pos: "RW", name: "dsacszpro", rating: 77, imageUrl: "" },
{ id: "swmkaa_cm", pos: "CM", name: "swmkaa", rating: 77, imageUrl: "" },
{ id: "xfixleox_lb", pos: "LB", name: "xFixLeox", rating: 76, imageUrl: "" },
{ id: "jaxovic_cb", pos: "CB", name: "J4xovic", rating: 74, imageUrl: "" },
{ id: "zodiacmat_cb", pos: "CB", name: "ZodiacMat", rating: 70, imageUrl: "" },
{ id: "personaje23236_gk", pos: "GK", name: "personaje23236", rating: 72, imageUrl: "" },
{ id: "szyluv_rb", pos: "RB", name: "szyluv", rating: 65, imageUrl: "" },
{ id: "rebelvax_cm", pos: "CM", name: "rebelvax", rating: 73, imageUrl: "" },
{ id: "Wintre7a_cm", pos: "CM", name: "Wintre7a", rating: 84, imageUrl: "" },
{ id: "zrucec_lw", pos: "LW", name: "zrucec", rating: 83, imageUrl: "" },
{ id: "Rippxh_st", pos: "ST", name: "Rippxh", rating: 81, imageUrl: "" },
{ id: "haakkimi_rw", pos: "RW", name: "haakkimi", rating: 79, imageUrl: "" },
{ id: "Cerueno_cm", pos: "CM", name: "Cerueno", rating: 78, imageUrl: "" },
{ id: "vlooteq_cm", pos: "CM", name: "vlooteq", rating: 78, imageUrl: "" },
{ id: "lxgendv_cb", pos: "CB", name: "lxgendv", rating: 77, imageUrl: "" },
{ id: "Splashx321_cb", pos: "CB", name: "Splashx321", rating: 77, imageUrl: "https://i.hizliresim.com/j90hs1e.png" },
{ id: "soXer_Q_lb", pos: "LB", name: "soXer_Q", rating: 75, imageUrl: "" },
{ id: "adruzo_rb", pos: "RB", name: "adruzo", rating: 70, imageUrl: "" },
{ id: "Kapsar01_gk", pos: "GK", name: "Kapsar01", rating: 66, imageUrl: "" },
    { id: "gjercog_gk", pos: 'GK', name: "gjercog", rating: 65, imageUrl: "https://i.hizliresim.com/dxde8m9.png" },
    { id: "3yl9d_GK", pos: "GK", name: "3yl9d", rating: 65, imageUrl: "https://i.hizliresim.com/9e56h9b.png" },
    { id: "Franksank2222_gk", pos: "GK", name: "Franksank2222", rating: 86, imageUrl: "https://i.hizliresim.com/8qoctgx.png" },
    { id: "virtco7889_gk", pos: "GK", name: "virtco7889", rating: 76, imageUrl: "https://i.hizliresim.com/lffms4b.png" },
    { id: "estce1_gk", pos: "GK", name: "estce1", rating: 74, imageUrl: "https://i.hizliresim.com/c6lcw94.png" },
    { id: "Gigo564_gk", pos: "GK", name: "Gigo564", rating: 84, imageUrl: "https://i.hizliresim.com/kbnrf9c.png" },
    { id: "Carlorzei_gk", pos: "GK", name: "Carlorzei", rating: 83, imageUrl: "https://i.hizliresim.com/qdce6r9.png" },
    { id: "ahmedmomoa_gk", pos: "GK", name: "ahmedmomoa", rating: 73, imageUrl: "https://i.hizliresim.com/100jkck.png" },
    { id: "vadimkapolyakov_gk", pos: "GK", name: "vadimkapolyakov", rating: 72, imageUrl: "https://i.hizliresim.com/3be21r4.png" },
    { id: "21Weverton_gk", "pos": "GK", "name": "21_Weverton", "rating": 77, "imageUrl": "https://i.hizliresim.com/2z49z2v.png" },
    { id: "Rayquazathepro_gk", pos: "GK", name: "Rayquazathepro", rating: 70, imageUrl: "https://i.hizliresim.com/1pvdr94.png" },
    { id: "Artishpro_CB", pos: "CB", name: "Artishpro31", rating: 74, imageUrl: "https://i.hizliresim.com/d71b4ax.png" },
    { id: "Hjaltee_gk", pos: "GK", name: "Hjaltee", rating: 84, imageUrl: "https://i.hizliresim.com/dnnkzvj.png" },
    { id: "Solow_CB", pos: "CB", name: "Solow", rating: 70, imageUrl: "https://i.hizliresim.com/fqqssg1.png" },
    { id: "Muh_GK", pos: "GK", name: "Muh", rating: 71, imageUrl: "https://i.hizliresim.com/49xgalp.png" },
     { id: "Boo4935_RB", pos: "RB", name: "Boo4935", rating: 77, imageUrl: "https://i.hizliresim.com/ezdw000.png" },
];


const announcerComments = {
    start: (ourTeam, oppTeam) => `Maç başlıyor! ${ourTeam} ile ${oppTeam} arasındaki bu mücadeleyi sabırsızlıkla bekliyoruz!`,
    atmosphere: () => `Taraftarlar stadı doldurmuş durumda, atmosfer ÇOK İYİ! Her iki takım da ısınmayı tamamladı.`,
    dribbleSuccess: [
        (dribbler, defender, team, location) => `${dribbler} (${team}) harika bir hareketle ${defender}'ı geçti! ${location ? 'Şimdi ceza sahasında!' : ''}`,
        (dribbler, defender, team, location) => `İnanılmaz bir bilek hareketi! ${dribbler} rakibi ${defender}'dan çok kolay sıyrıldı. ${location ? 'Büyük tehlike!' : ''}`,
    ],
    cross: [
        (crosser, team) => `${crosser} (${team}) kanattan mükemmel bir orta açtı, top ceza sahasına doğru süzülüyor!`,
        (crosser, team) => `İşte ${crosser}'dan gelen o beklenen orta! Gözler şimdi içerideki oyuncularda!`,
    ],
    headerGoal: [
        (scorer, crosser, team) => `GOL GOL GOL! ${crosser}'ın harika ortasına ${scorer} (${team}) müthiş bir kafa vuruşu yapıyor ve top ağlarda!`,
        (scorer, crosser, team) => `Ve Kafa Vuruşuyla GOL! ${scorer} (${team}) doğru zamanda doğru yerde! Ne kadar iyi yükseldi!`,
    ],
    headerSave: [
        (header, keeper, team, keeperTeam) => `${header}'dan (${team}) çok etkili bir kafa vuruşu! Ama kaleci ${keeper} (${keeperTeam}) inanılmaz bir refleksle topu çıkarmayı başarıyor!`,
    ],
    headerMiss: [
        (header, team) => `Orta geldi, ${header} (${team}) kafayı vurdu ancak top direğin hemen üzerinden auta gidiyor! Gole çok yaklaştı!`,
    ],
    pass: [
        (passer, receiver, team) => `${passer} (${team}) topu ${receiver}'a şık bir şekilde aktardı.`,
        (passer, receiver, team) => `Harika bir verkaç denemesi! ${passer}, ${receiver} ile duvar pası yapıyor.`,
        (passer, receiver, team) => `${team} takımında ${passer}, topu kanattaki ${receiver} ile buluşturdu.`,
        (passer, receiver, team) => `Orta alanda başarılı paslaşmalar... ${passer}'dan ${receiver}'a isabetli bir pas.`
    ],
    shotSave: [
        (shooter, keeper, shooterTeam, keeperTeam, shotType) => shotType ? `${shooter}'dan (${shooterTeam}) inanılmaz bir ${shotType}! Kaleci ${keeper} (${keeperTeam}) son anda parmaklarının ucuyla dokunuyor!` : `${shooter}'dan (${shooterTeam}) sert bir şut! Ancak kaleci ${keeper} (${keeperTeam}) harika bir refleksle topu çeliyor!`,
        (shooter, keeper, shooterTeam, keeperTeam) => `Kaleye müthiş bir plase! ${keeper} (${keeperTeam}) son anda uzanarak topu kornere gönderdi. ${shooter} (${shooterTeam}) gole çok yaklaştı!`,
    ],
    shotMiss: [
        (shooter, team, shotType) => shotType ? `${shooter} (${team}) estetik bir ${shotType} denedi ama sonuç alamadı!` : `${shooter} (${team}) kaleyi denedi ancak vuruşu isabetsiz, top auta çıkıyor.`,
        (shooter, team) => `${shooter} (${team}) ceza sahası dışından şansını denedi, top direğin hemen yanından dışarıda!`,
    ],
    goal: [
        (scorerName, assisterName, teamName, shotType) => {
            if (shotType === 'kafa vuruşu') return `GOL! ${assisterName}'ın harika ortasına ${scorerName} (${teamName}) müthiş bir kafa vuruşu yapıyor ve top ağlarda!`;
            if (shotType) return `AKILALMAZ BİR GOL! ${scorerName} (${teamName}) harika bir ${shotType} ile fileleri havalandırdı! Yılın golü olabilir!`;
            return assisterName ? `İşte gol! ${assisterName} (${teamName}) harika bir pas çıkardı, ${scorerName} topu ağlara gönderiyor! Ne gol ama!` : `Muhteşem bir gol! ${scorerName} (${teamName}) fileleri havalandırıyor! Kaleci çaresiz kaldı!`;
        },
        (scorerName, assisterName, teamName) => `GOOOOL! ${scorerName} (${teamName}) harika bir vuruşla takımını öne geçiriyor! Müthiş bir bitiricilik!`,
    ],
    generic: [
        (teamName) => `${teamName} orta sahada topu kontrol ediyor, oyun kurma çabasındalar.`,
        (teamName) => `Hızlı bir hücum denemesi, ancak ${teamName} savunması son anda kritik bir müdahale ile topu uzaklaştırdı.`,
    ],
    tactical: [
        (teamName) => `${teamName} kanatlardan geliyor, tehlikeli bir atak hazırlığı var.`,
        (teamName) => `${teamName} pas trafiğini hızlandırarak boşluk bulmaya çalışıyor, orta sahada üstünlük mücadelesi var.`,
    ],
    end: (ourTeam, oppTeam, ourScore, oppScore) => `Maç Sona Erdi! Maç Skoru: ${ourTeam} ${ourScore} - ${oppTeam} ${oppScore}.`,
    stoppageTime: (minutes) => `Normal süre sona erdi! Hakem maça en az ${minutes} dakika uzatma ekliyor!`,
};


function showModal(title, message, confirmCallback = null, buttonText = 'Kapat', autoClose = false) {
    const modal = document.getElementById('message-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalCloseBtn = document.querySelector('#message-modal .modal-close-btn');
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalCloseBtn.textContent = buttonText;
    modalCloseBtn.onclick = null;
    if (confirmCallback) {
        modalCloseBtn.onclick = () => {
            confirmCallback();
            closeModal();
        };
    } else {
        modalCloseBtn.onclick = closeModal;
    }
    modal.style.display = 'flex';
    if (autoClose) {
        setTimeout(closeModal, 3000);
    }
}

function closeModal() {
    document.getElementById('message-modal').style.display = 'none';
}

function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
    if (tabId === 'club') {
        showSubTab('squad');
    }
    checkFormationCompleteness();
}

function showSubTab(subTabId) {
    document.querySelectorAll('.sub-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.sub-tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector(`.sub-tab[onclick="showSubTab('${subTabId}')"]`).classList.add('active');
    document.getElementById(subTabId).classList.add('active');
    if (subTabId === 'squad') {
        updateClubDisplay();
    } else if (subTabId === 'player-merge') {
        renderMergeUI();
    } else if (subTabId === 'player-sell') {
        playersToSell = [];
        renderSellUI();
        updateSellButton();
    }
}

function updateDivisionStatusUI() {
    const statusDiv = document.getElementById('division-status');
    const matchesNeeded = 10;
    const winsNeeded = 6;
    const progressPercent = (divisionSeason.wins / winsNeeded) * 100;

    statusDiv.innerHTML = `
        <h4>Mevcut Lig: Division ${currentDivision}</h4>
        <div class="division-progress">
            <span>Sezon İlerlemesi: ${divisionSeason.wins} Galibiyet / ${divisionSeason.matchesPlayed} Maç</span>
            <span>Hedef: ${winsNeeded} Galibiyet</span>
        </div>
        <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${progressPercent}%;"></div>
        </div>
    `;
    statusDiv.style.display = 'block';
}


function startTeamSetup() {
    document.querySelector('.welcome').classList.remove('active');
    document.querySelector('.team-setup').classList.add('active');
}

function previewLogo(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            team.logo = e.target.result;
            const preview = document.getElementById('logo-preview');
            preview.src = team.logo;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

function saveTeam() {
    const nameInput = document.querySelector('.team-name-input').value.trim();
    if (!team.logo || !nameInput) {
        showModal('Hata', 'Lütfen bir logo yükleyin ve takım ismi girin!', null, 'Kapat', true);
        return;
    }
    team.name = nameInput;
    document.querySelector('.team-setup').classList.remove('active');
    document.querySelector('.main-game').classList.add('active');
    document.getElementById('header-logo-preview').src = team.logo;
    document.getElementById('header-team-name').textContent = team.name;
    document.getElementById('team-info-header').style.display = 'flex';
    updateClubDisplay();
    checkFormationCompleteness();
    updateDivisionStatusUI();
}


function buyPack(cost) {
    if (coins < cost) {
        showModal('Yetersiz Bakiye', 'Yetersiz Resa Coin!', null, 'Kapat', true);
        return;
    }
    coins -= cost;
    document.getElementById('coin-balance').textContent = coins;
    const newPlayers = [];
    for (let i = 0; i < 5; i++) {
        const randomPlayer = { ...players[Math.floor(Math.random() * players.length)]
        };
        randomPlayer.uniqueId = Date.now() + '_' + i + '_' + Math.random().toString(36).substring(2, 9);
        newPlayers.push(randomPlayer);
        squad.push(randomPlayer);
    }
    showCardReveal(newPlayers);
}

function showCardReveal(newPlayers) {
    const store = document.getElementById('store');
    store.innerHTML = `
        <h2>Kartlar Açılıyor!</h2>
        <div class="card-reveal"></div>
        <button class="btn close-reveal-btn" onclick="closeCardReveal()">Kapat</button>
    `;
    const revealContainer = store.querySelector('.card-reveal');
    newPlayers.forEach((player, index) => {
        const card = document.createElement('div');
        card.classList.add('player-card');
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="fifa-card-rating">${player.rating}</div>
                    <div class="fifa-card-pos">${player.pos}</div>
                    <img class="fifa-card-image" src="${player.imageUrl}" alt="${player.name}">
                    <div class="fifa-card-name">${player.name}</div>
                </div>
                <div class="card-back"></div>
            </div>
        `;
        revealContainer.appendChild(card);
        setTimeout(() => card.classList.add('revealed'), 500 * (index + 1));
    });
}

function closeCardReveal() {
    const store = document.getElementById('store');
    store.innerHTML = `
        <h2>Mağaza</h2>
        <div class="store-content">
            <div class="pack" onclick="buyPack(100)">
                <img src="https://i.hizliresim.com/42sku6m.png" alt="Basic Pack">
                <p>Paket 1-100 Resa Coin</p>
            </div>
        </div>
    `;
    updateClubDisplay();
    checkFormationCompleteness();
}


function renderMergeUI() {
    const container = document.getElementById('merge-list-container');
    container.innerHTML = '';
    const playerGroups = squad.reduce((acc, player) => {
        acc[player.id] = acc[player.id] || [];
        acc[player.id].push(player);
        return acc;
    }, {});
    const uniqueIdsInFormation = Object.values(formation).filter(p => p).map(p => p.uniqueId);
    let mergeableGroupsFound = false;
    for (const playerId in playerGroups) {
        const group = playerGroups[playerId];
        const availableToMerge = group.filter(p => !uniqueIdsInFormation.includes(p.uniqueId));
        if (availableToMerge.length >= 2) {
            mergeableGroupsFound = true;
            const playerInfo = availableToMerge[0];
            const groupDiv = document.createElement('div');
            groupDiv.classList.add('merge-group');
            groupDiv.innerHTML = `
                <div class="merge-group-info">
                    <img src="${playerInfo.imageUrl}" alt="${playerInfo.name}">
                    <div class="merge-group-details">
                        <h4>${playerInfo.name} (${playerInfo.pos})</h4>
                        <p>Uygun Kopya Sayısı: ${availableToMerge.length}</p>
                    </div>
                </div>
                <button class="btn merge-btn" onclick="mergePlayers('${playerId}')">Birleştir</button>
            `;
            container.appendChild(groupDiv);
        }
    }
    if (!mergeableGroupsFound) {
        container.innerHTML = '<p style="color: var(--text-gray); text-align: center;">Birleştirilecek uygun oyuncu bulunamadı.</p>';
    }
}

function mergePlayers(playerId) {
    const uniqueIdsInFormation = Object.values(formation).filter(p => p).map(p => p.uniqueId);
    const availableDuplicates = squad.filter(p => p.id === playerId && !uniqueIdsInFormation.includes(p.uniqueId));
    if (availableDuplicates.length < 2) {
        showModal('Hata', 'Bu oyuncuyu birleştirmek için en az 2 uygun (kadroda olmayan) kopyaya ihtiyacınız var.', null, 'Kapat', true);
        return;
    }
    const playerToUpgrade = availableDuplicates[0];
    const playerToRemove = availableDuplicates[1];
    playerToUpgrade.rating += 2;
    const indexToRemove = squad.findIndex(p => p.uniqueId === playerToRemove.uniqueId);
    if (indexToRemove > -1) {
        squad.splice(indexToRemove, 1);
    }
    showModal('Başarılı!', `${playerToUpgrade.name} başarıyla birleştirildi! Yeni reytingi: ${playerToUpgrade.rating}`, null, 'Kapat', true);
    renderMergeUI();
    updateClubDisplay();
}

function getPlayerSellValue(player) {
    
    return 90;
}

function renderSellUI() {
    const container = document.getElementById('sell-list-container');
    container.innerHTML = '';
    const uniqueIdsInFormation = Object.values(formation).filter(p => p).map(p => p.uniqueId);
    const sellablePlayers = squad.filter(p => !uniqueIdsInFormation.includes(p.uniqueId));
    if (sellablePlayers.length === 0) {
        container.innerHTML = '<p style="color: var(--text-gray); text-align: center;">Satılabilecek (kadroda olmayan) oyuncu bulunamadı.</p>';
        return;
    }
    sellablePlayers.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('sell-player-item');
        playerDiv.dataset.playerUniqueId = player.uniqueId;
        playerDiv.innerHTML = `
            <img src="${player.imageUrl}" alt="${player.name}">
            <p>${player.name}</p>
            <p>(${player.pos} - ${player.rating})</p>
            <p style="color: var(--announcer-event); font-weight: bold;">${getPlayerSellValue(player)} Coin</p>
        `;
        if (playersToSell.includes(player.uniqueId)) {
            playerDiv.classList.add('selected');
        }
        playerDiv.addEventListener('click', () => {
            playerDiv.classList.toggle('selected');
            const uniqueId = player.uniqueId;
            if (playersToSell.includes(uniqueId)) {
                playersToSell = playersToSell.filter(id => id !== uniqueId);
            } else {
                playersToSell.push(uniqueId);
            }
            updateSellButton();
        });
        container.appendChild(playerDiv);
    });
}

function updateSellButton() {
    const sellButton = document.getElementById('sell-selected-btn');
    const sellValueSpan = document.getElementById('sell-value');
    let totalValue = 0;
    playersToSell.forEach(uniqueId => {
        const player = squad.find(p => p.uniqueId === uniqueId);
        if (player) {
            totalValue += getPlayerSellValue(player);
        }
    });
    sellValueSpan.textContent = totalValue;
    if (playersToSell.length > 0) {
        sellButton.disabled = false;
        sellButton.textContent = `${playersToSell.length} Oyuncuyu Sat`;
    } else {
        sellButton.disabled = true;
        sellButton.textContent = 'Seçilenleri Sat';
    }
}

function sellSelectedPlayers() {
    if (playersToSell.length === 0) {
        showModal('Hata', 'Satmak için oyuncu seçmediniz.', null, 'Kapat', true);
        return;
    }
    let totalGainedCoins = 0;
    let soldPlayerNames = [];
    squad = squad.filter(player => {
        if (playersToSell.includes(player.uniqueId)) {
            totalGainedCoins += getPlayerSellValue(player);
            soldPlayerNames.push(player.name);
            return false;
        }
        return true;
    });
    coins += totalGainedCoins;
    document.getElementById('coin-balance').textContent = coins;
    showModal('Satış Başarılı!', `${soldPlayerNames.join(', ')} satıldı ve ${totalGainedCoins} Resa Coin kazandınız!`, null, 'Harika!', true);
    playersToSell = [];
    renderSellUI();
    updateSellButton();
    updateClubDisplay();
}


function updateClubDisplay() {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';

    const playersNotInFormation = squad.filter(player => {
        const isInFormation = Object.values(formation).some(p => p && p.uniqueId === player.uniqueId);
        const matchesFilter = currentFilter === 'all' ||
            (currentFilter === 'GK' && player.pos === 'GK') ||
            (currentFilter === 'DEF' && ['LB', 'RB', 'CB'].includes(player.pos)) ||
            (currentFilter === 'MID' && ['CM', 'CDM', 'CAM'].includes(player.pos)) ||
            (currentFilter === 'FWD' && ['LW', 'RW', 'ST'].includes(player.pos));
        return !isInFormation && matchesFilter;
    });

    if (playersNotInFormation.length) {
        playersNotInFormation.forEach((player) => {
            const playerItem = document.createElement('div');
            playerItem.classList.add('player-item');
            playerItem.setAttribute('draggable', 'true');
            playerItem.dataset.playerUniqueId = player.uniqueId;
            playerItem.dataset.playerId = player.id;
            playerItem.innerHTML = `
                <img src="${player.imageUrl}" style="width: 60px; height: 60px; border-radius: 50%; border: 2px solid var(--main-accent-color);">
                <p>${player.name} (${player.pos}, ${player.rating})</p>
            `;
            playerList.appendChild(playerItem);
        });
    } else {
        playerList.innerHTML = '<p style="color: var(--text-gray);">Kulübünüzde oyuncu yok veya mevcut filtreye uygun oyuncu bulunamadı!</p>';
    }

    const positionElements = document.querySelectorAll('.player-position');
    positionElements.forEach(posEl => {
        const posKey = posEl.id.replace('-pos', '').toUpperCase();
        const playerInFormation = formation[posKey];
        if (playerInFormation) {
            posEl.innerHTML = `
                <div class="fifa-card" data-position-id="${posKey}" data-player-unique-id="${playerInFormation.uniqueId}" data-player-id="${playerInFormation.id}" draggable="true">
                    <div class="fifa-card-rating">${playerInFormation.rating}</div>
                    <div class="fifa-card-pos">${playerInFormation.pos}</div>
                    <img class="fifa-card-image" src="${playerInFormation.imageUrl}" alt="${playerInFormation.name}">
                    <div class="fifa-card-name">${playerInFormation.name}</div>
                </div>
                <span class="position-name">${posEl.dataset.position}</span>
            `;
            posEl.classList.add('selected-position');
            posEl.classList.remove('empty-card');
        } else {
            posEl.innerHTML = `
                <div class="fifa-card-empty" data-position-id="${posKey}" draggable="false"></div>
                <span class="position-name">${posEl.dataset.position}</span>
            `;
            posEl.classList.add('empty-card');
            posEl.classList.remove('selected-position');
        }
    });
    initializeDragAndDrop();
    initializeContextMenu();
    checkFormationCompleteness();
}

function filterPlayers(filterType) {
    currentFilter = filterType;
    document.querySelectorAll('.player-filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.player-filter-btn[data-filter="${filterType}"]`).classList.add('active');
    updateClubDisplay();
}

function isPlayerInFormationById(playerIdToCheck) {
    for (const posKey in formation) {
        if (formation[posKey] && formation[posKey].id === playerIdToCheck) {
            return true;
        }
    }
    return false;
}

function initializeDragAndDrop() {
    const playerItems = document.querySelectorAll('.player-item');
    const positionElements = document.querySelectorAll('.player-position');

    playerItems.forEach(item => {
        item.removeEventListener('dragstart', handleDragStart);
        item.removeEventListener('dragend', handleDragEnd);
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });

    positionElements.forEach(pos => {
        pos.removeEventListener('dragover', handleDragOver);
        pos.removeEventListener('dragleave', handleDragLeave);
        pos.removeEventListener('drop', handleDrop);
        pos.addEventListener('dragover', handleDragOver);
        pos.addEventListener('dragleave', handleDragLeave);
        pos.addEventListener('drop', handleDrop);
    });

    document.querySelectorAll('.player-position .fifa-card').forEach(card => {
        card.removeEventListener('dragstart', handleCardDragStart);
        card.removeEventListener('dragend', handleCardDragEnd);
        card.setAttribute('draggable', 'true');
        card.addEventListener('dragstart', handleCardDragStart);
        card.addEventListener('dragend', handleCardDragEnd);
    });

    window.removeEventListener('dragover', handleWindowDragOver);
    window.addEventListener('dragover', handleWindowDragOver);
}

function handleDragStart(e) {
    this.classList.add('dragging');
    e.dataTransfer.setData('text/plain', this.dataset.playerUniqueId);
    e.dataTransfer.setData('source-type', 'player-list');
}

function handleDragEnd() {
    this.classList.remove('dragging');
    document.querySelectorAll('.player-position').forEach(pos => pos.classList.remove('dropzone-highlight'));
}

function handleCardDragStart(e) {
    e.stopPropagation();
    this.classList.add('dragging');
    e.dataTransfer.setData('text/plain', this.dataset.playerUniqueId);
    e.dataTransfer.setData('source-type', 'pitch');
    e.dataTransfer.setData('source-position-id', this.dataset.positionId);
}

function handleCardDragEnd() {
    this.classList.remove('dragging');
    document.querySelectorAll('.player-position').forEach(pos => pos.classList.remove('dropzone-highlight'));
}

function handleDragOver(e) {
    e.preventDefault();
    this.classList.add('dropzone-highlight');
}

function handleDragLeave() {
    this.classList.remove('dropzone-highlight');
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('dropzone-highlight');
    const droppedPlayerUniqueId = e.dataTransfer.getData('text/plain');
    const sourceType = e.dataTransfer.getData('source-type');
    const targetPositionId = this.id.replace('-pos', '').toUpperCase();
    let playerToPlace = null;

    if (sourceType === 'player-list') {
        playerToPlace = squad.find(p => p.uniqueId === droppedPlayerUniqueId);
        if (playerToPlace && isPlayerInFormationById(playerToPlace.id)) {
            showModal('Hata', `Bu oyuncudan (${playerToPlace.name}) zaten kadroda var! Aynı oyuncudan iki tane kadroda olamaz.`, null, 'Kapat', true);
            return;
        }
        if (playerToPlace) {
            const existingPlayerInPosition = formation[targetPositionId];
            if (existingPlayerInPosition) {}
            formation[targetPositionId] = playerToPlace;
        }
    } else if (sourceType === 'pitch') {
        const sourcePositionId = e.dataTransfer.getData('source-position-id');
        if (sourcePositionId === targetPositionId) return;
        playerToPlace = formation[sourcePositionId];
        const existingPlayerInTarget = formation[targetPositionId];
        if (playerToPlace) {
            formation[targetPositionId] = playerToPlace;
            formation[sourcePositionId] = existingPlayerInTarget;
        }
    }
    updateClubDisplay();
}

function handleWindowDragOver(e) {
    const scrollThreshold = 100;
    const scrollSpeed = 20;
    if (e.clientY < scrollThreshold) {
        window.scrollBy(0, -scrollSpeed);
    } else if (e.clientY > window.innerHeight - scrollThreshold) {
        window.scrollBy(0, scrollSpeed);
    }
}

function initializeContextMenu() {
    const contextMenu = document.getElementById('context-menu');
    document.querySelectorAll('.player-position .fifa-card').forEach(card => {
        card.removeEventListener('click', handleCardClick);
        card.addEventListener('click', handleCardClick);
    });
    document.querySelectorAll('.player-position .fifa-card-empty').forEach(emptyCard => {
        emptyCard.removeEventListener('click', handleEmptyCardClick);
        emptyCard.addEventListener('click', handleEmptyCardClick);
    });
    document.removeEventListener('click', handleDocumentClick);
    document.addEventListener('click', handleDocumentClick);
}

function handleCardClick(e) {
    e.stopPropagation();
    selectedPositionFromPitch = this.dataset.positionId;
    const rect = this.getBoundingClientRect();
    const contextMenu = document.getElementById('context-menu');
    contextMenu.style.top = `${rect.bottom + window.scrollY}px`;
    contextMenu.style.left = `${rect.left + window.scrollX}px`;
    contextMenu.style.display = 'flex';
}

function handleEmptyCardClick(e) {
    e.stopPropagation();
    if (isMovingPlayer) {
        const targetPositionId = this.dataset.positionId;
        movePlayerToNewPosition(targetPositionId);
    }
}

function handleDocumentClick(e) {
    const contextMenu = document.getElementById('context-menu');
    if (contextMenu && !contextMenu.contains(e.target)) {
        contextMenu.style.display = 'none';
        if (isMovingPlayer) {
            cancelPlayerMove();
        }
        selectedPositionFromPitch = null;
    }
}

function startPlayerMove() {
    if (!selectedPositionFromPitch) return;
    const contextMenu = document.getElementById('context-menu');
    contextMenu.style.display = 'none';
    isMovingPlayer = true;
    highlightDroppablePositions();
}

function highlightDroppablePositions() {
    document.querySelectorAll('.player-position').forEach(pos => {
        const posKey = pos.id.replace('-pos', '').toUpperCase();
        if (posKey === selectedPositionFromPitch) {
            pos.classList.remove('move-target-highlight');
            return;
        }
        pos.classList.add('move-target-highlight');
    });
}

function removeHighlightFromDroppablePositions() {
    document.querySelectorAll('.player-position').forEach(pos => {
        pos.classList.remove('move-target-highlight');
    });
}

function movePlayerToNewPosition(targetPositionId) {
    if (!isMovingPlayer || !selectedPositionFromPitch) return;
    const playerToMove = formation[selectedPositionFromPitch];
    if (!playerToMove) {
        cancelPlayerMove();
        return;
    }
    if (selectedPositionFromPitch === targetPositionId) {
        cancelPlayerMove();
        return;
    }
    const existingPlayerInTarget = formation[targetPositionId];
    formation[targetPositionId] = playerToMove;
    formation[selectedPositionFromPitch] = existingPlayerInTarget;
    cancelPlayerMove();
    updateClubDisplay();
}

function cancelPlayerMove() {
    isMovingPlayer = false;
    selectedPositionFromPitch = null;
    removeHighlightFromDroppablePositions();
}

function removePlayer() {
    if (!selectedPositionFromPitch) return;
    formation[selectedPositionFromPitch] = null;
    document.getElementById('context-menu').style.display = 'none';
    updateClubDisplay();
    selectedPositionFromPitch = null;
}

function checkFormationCompleteness() {
    const playMatchBtn = document.getElementById('play-match-btn');
    const allPositionsFilled = Object.values(formation).every(player => player !== null);
    playMatchBtn.disabled = !allPositionsFilled;
}


function getRandomPlayer(teamSquad, type) {
    let eligiblePlayers = [];
    if (type === 'our') {
        eligiblePlayers = Object.values(teamSquad).filter(p => p && !redCardedPlayers.includes(p.uniqueId));
    } else if (type === 'opponent') {
        eligiblePlayers = teamSquad.filter(p => p && !redCardedPlayers.includes(p.uniqueId));
    }
    if (eligiblePlayers.length === 0) return null;
    return eligiblePlayers[Math.floor(Math.random() * eligiblePlayers.length)];
}

function formatRating(rating) {
    return rating.toFixed(1);
}

function updateLiveMatchDisplay() {
    const ourLiveSquadDiv = document.getElementById('our-live-squad');
    const opponentLiveSquadDiv = document.getElementById('opponent-live-squad');
    ourLiveSquadDiv.innerHTML = '<h4>Bizim Takım</h4>';
    opponentLiveSquadDiv.innerHTML = '<h4>Rakip Takım</h4>';

    Object.entries(formation).forEach(([positionKey, player]) => {
        if (player) {
            const playerCard = document.createElement('div');
            playerCard.classList.add('live-player-card');
            if (redCardedPlayers.includes(player.uniqueId)) {
                playerCard.classList.add('red-carded');
            }
            const displayPosition = positionKey.replace(/\d/g, '');
            playerCard.innerHTML = `<img src="${player.imageUrl}" alt="${player.name}"> <span class="player-name">${player.name} (${displayPosition})</span> <span class="player-rating">${formatRating(playerMatchRatings[player.uniqueId] || 6.5)}</span>`;
            ourLiveSquadDiv.appendChild(playerCard);
        }
    });

    opponentTeam.squad.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('live-player-card');
        if (redCardedPlayers.includes(player.uniqueId)) {
            playerCard.classList.add('red-carded');
        }
        playerCard.innerHTML = `<img src="${player.imageUrl}" alt="${player.name}"> <span class="player-name">${player.name} (${player.pos})</span> <span class="player-rating">${formatRating(playerMatchRatings[player.uniqueId] || 6.5)}</span>`;
        opponentLiveSquadDiv.appendChild(playerCard);
    });
}

function initializeMatchPlayers() {
    playerMatchRatings = {};
    Object.values(formation).forEach(player => {
        if (player) playerMatchRatings[player.uniqueId] = 6.5;
    });
    opponentTeam.squad.forEach(player => {
        playerMatchRatings[player.uniqueId] = 6.5;
    });
}

function adjustPlayerRating(uniqueId, adjustment) {
    if (playerMatchRatings[uniqueId] !== undefined) {
        playerMatchRatings[uniqueId] = Math.max(5.0, Math.min(10.0, playerMatchRatings[uniqueId] + adjustment));
    }
}

function generateOpponentSquad() {
    const opponentSquad = [];
    const availablePlayers = [...players];

    let ratingBoost = 0;
    if (currentDivision === 3) ratingBoost = 8;
    else if (currentDivision === 2) ratingBoost = 14;
    else if (currentDivision === 1) ratingBoost = 20;

    const getRandomPlayerByPos = (posType) => {
        if (availablePlayers.length === 0) return null;

        const filteredPlayers = availablePlayers.filter(p => p.pos.includes(posType) ||
            (posType === 'CM' && ['CM', 'CDM', 'CAM'].includes(p.pos)) ||
            (posType === 'ST' && ['ST', 'CF'].includes(p.pos)) ||
            (posType === 'DEF' && ['LB', 'RB', 'CB'].includes(p.pos)) ||
            (posType === 'MID' && ['CM', 'CDM', 'CAM', 'LM', 'RM'].includes(p.pos)) ||
            (posType === 'ATT' && ['LW', 'RW', 'ST', 'CF'].includes(p.pos))
        );

        if (filteredPlayers.length === 0) return null;

        const randomIndex = Math.floor(Math.random() * filteredPlayers.length);
        const selectedPlayerTemplate = filteredPlayers[randomIndex];
        
        const indexInPool = availablePlayers.findIndex(p => p.id === selectedPlayerTemplate.id);
        if(indexInPool > -1) {
            availablePlayers.splice(indexInPool, 1);
        }

        const selectedPlayer = { ...selectedPlayerTemplate };
        selectedPlayer.uniqueId = 'opp_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
        return selectedPlayer;
    };

    const opponentNamesByDivision = {
        5: ["Samsunspor","Prag","Sivasspor","Trabzonspor","Başaksehir","Sevilla","malmö","kopenhag","rangers"],
        4: ["Galatasaray","Beşiktaş","Fenerbahçe","Ajax","Atalanta","Marsilya","PSV","Sporting","Benfica"],
        3: ["Porto","Celta","Aston villa","Lyon","Roma","Real betis","Stuttgart","Freiburg","Bologna","Lille"],
        2: ["Chelsea","Arsenal","Leverkusen","inter","Frankfurt","Newcastle united","Dortmund","Juventus","Napoli"],
        1: ["Real Madrid","Barcelona","Manchester city","PSG","Liverpool","Manchester United"]
    };

    opponentTeam.name = opponentNamesByDivision[currentDivision][Math.floor(Math.random() * opponentNamesByDivision[currentDivision].length)];

    const desiredOpponentPositions = ['GK', 'LB', 'CB', 'CB', 'RB', 'CM', 'CM', 'CM', 'LW', 'ST', 'RW'];
    desiredOpponentPositions.forEach(pos => {
        let player = getRandomPlayerByPos(pos);
        if (player) {
            player.rating = Math.min(99, player.rating + Math.floor(Math.random() * 5) + ratingBoost);
            opponentSquad.push(player);
        }
    });

    while (opponentSquad.length < 11) {
        let placeholderPlayer = {
            id: `opp_fill_${opponentSquad.length}`,
            pos: 'GEN',
            name: `Rakip Oyuncu ${opponentSquad.length + 1}`,
            rating: 65 + ratingBoost,
            imageUrl: 'https://placehold.co/90x90/555/FFF?text=P',
            uniqueId: 'opp_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9)
        };
        opponentSquad.push(placeholderPlayer);
    }
    return opponentSquad;
}


function prepareMatch() {
    document.getElementById('play-match-btn').style.display = 'none';
    const matchSimulationDiv = document.querySelector('.match-simulation');
    matchSimulationDiv.style.display = 'flex';
    document.getElementById('match-start-overlay').classList.remove('hidden');

    const existingEndButton = matchSimulationDiv.querySelector('.match-end-btn');
    if (existingEndButton) {
        existingEndButton.remove();
    }

    ourScore = 0;
    opponentScore = 0;
    matchMinute = 0;
    redCardedPlayers = [];
    yellowCards = {};
    stoppageTimeAnnounced = false;
    finalMatchMinute = 90;

    opponentTeam.squad = generateOpponentSquad();
    initializeMatchPlayers();

    document.getElementById('our-team-name').textContent = team.name;
    document.getElementById('opponent-team-name').textContent = opponentTeam.name;
    document.getElementById('match-score').textContent = `${ourScore}-${opponentScore}`;
    document.getElementById('current-minute').textContent = matchMinute;
    document.getElementById('announcer-feed').innerHTML = '';
    document.getElementById('pause-sub-btn').style.display = 'none';

    updateLiveMatchDisplay();
}

function startMatchSimulation() {
    document.getElementById('match-start-overlay').classList.add('hidden');
    appendAnnouncerText(announcerComments.start(team.name, opponentTeam.name), 'important');
    appendAnnouncerText(announcerComments.atmosphere(), 'info');
    matchInterval = setInterval(simulateMatchEvent, 1500);
}

function appendAnnouncerText(text, className = '') {
    const announcerFeed = document.getElementById('announcer-feed');
    const buffer = 50; 
    const isScrolledToBottom = announcerFeed.scrollHeight - announcerFeed.scrollTop <= announcerFeed.clientHeight + buffer;

    const p = document.createElement('p');
    p.textContent = `[${matchMinute}'] ${text}`;
    if (className) {
        p.classList.add(className);
    }
    announcerFeed.appendChild(p);

    if (isScrolledToBottom) {
        announcerFeed.scrollTop = announcerFeed.scrollHeight;
    }
}

function simulatePass() {
    const passingTeamIsUs = Math.random() < 0.5;
    const teamSquad = passingTeamIsUs ? Object.values(formation) : opponentTeam.squad;
    const actingTeamName = passingTeamIsUs ? team.name : opponentTeam.name;
    let potentialPassers = teamSquad.filter(p => p && p.pos !== 'GK' && !redCardedPlayers.includes(p.uniqueId));
    if (potentialPassers.length < 2) return;
    const passer = potentialPassers[Math.floor(Math.random() * potentialPassers.length)];
    let potentialReceivers = potentialPassers.filter(p => p.uniqueId !== passer.uniqueId);
    if (potentialReceivers.length === 0) return;
    const receiver = potentialReceivers[Math.floor(Math.random() * potentialReceivers.length)];
    const randomCommentFn = announcerComments.pass[Math.floor(Math.random() * announcerComments.pass.length)];
    appendAnnouncerText(randomCommentFn(passer.name, receiver.name, actingTeamName));
    adjustPlayerRating(passer.uniqueId, 0.1);
    adjustPlayerRating(receiver.uniqueId, 0.05);
}

function simulateDribble() {
    const attackingTeamIsUs = Math.random() < 0.5;
    const attackerSquad = attackingTeamIsUs ? Object.values(formation) : opponentTeam.squad;
    const defenderSquad = !attackingTeamIsUs ? Object.values(formation) : opponentTeam.squad;
    const attackerTeamName = attackingTeamIsUs ? team.name : opponentTeam.name;

    let potentialDribblers = attackerSquad.filter(p => p && ['LW', 'RW', 'ST', 'CM'].includes(p.pos) && !redCardedPlayers.includes(p.uniqueId));
    if (potentialDribblers.length === 0) return;
    const dribbler = potentialDribblers[Math.floor(Math.random() * potentialDribblers.length)];

    let potentialDefenders = defenderSquad.filter(p => p && ['LB', 'RB', 'CB', 'CM'].includes(p.pos) && !redCardedPlayers.includes(p.uniqueId));
    if (potentialDefenders.length === 0) return;
    const defender = potentialDefenders[Math.floor(Math.random() * potentialDefenders.length)];

    const successChance = 0.5 + ((dribbler.rating - defender.rating) * 0.02);
    if (Math.random() < successChance) {
        const isInsideBox = Math.random() < 0.4;
        const randomCommentFn = announcerComments.dribbleSuccess[Math.floor(Math.random() * announcerComments.dribbleSuccess.length)];
        appendAnnouncerText(randomCommentFn(dribbler.name, defender.name, attackerTeamName, isInsideBox), 'event');

        adjustPlayerRating(dribbler.uniqueId, 0.3);
        adjustPlayerRating(defender.uniqueId, -0.2);

        if (isInsideBox) {
            setTimeout(() => simulateShot(dribbler, attackingTeamIsUs), 1000);
        }
    } else {
        appendAnnouncerText(`${dribbler.name}, ${defender.name}'ı geçemedi. Savunmadan kritik bir müdahale!`);
        adjustPlayerRating(dribbler.uniqueId, -0.15);
        adjustPlayerRating(defender.uniqueId, 0.25);
    }
}

function simulateCrossAndHeader() {
    const attackingTeamIsUs = Math.random() < 0.5;
    const attackerTeamName = attackingTeamIsUs ? team.name : opponentTeam.name;
    const defenderTeamName = !attackingTeamIsUs ? team.name : opponentTeam.name;
    const attackerSquad = attackingTeamIsUs ? Object.values(formation) : opponentTeam.squad;
    const defenderSquad = !attackingTeamIsUs ? Object.values(formation) : opponentTeam.squad;

    let potentialCrossers = attackerSquad.filter(p => p && ['LW', 'RW', 'LB', 'RB'].includes(p.pos) && !redCardedPlayers.includes(p.uniqueId));
    if (potentialCrossers.length === 0) return;
    const crosser = potentialCrossers[Math.floor(Math.random() * potentialCrossers.length)];

    let potentialHeaders = attackerSquad.filter(p => p && ['ST', 'CM'].includes(p.pos) && !redCardedPlayers.includes(p.uniqueId));
    if (potentialHeaders.length === 0) return;
    const header = potentialHeaders[Math.floor(Math.random() * potentialHeaders.length)];

    const keeper = defenderSquad.find(p => p.pos === 'GK' && !redCardedPlayers.includes(p.uniqueId));
    if (!keeper) return;

    const randomCrossCommentFn = announcerComments.cross[Math.floor(Math.random() * announcerComments.cross.length)];
    appendAnnouncerText(randomCrossCommentFn(crosser.name, attackerTeamName), 'info');
    adjustPlayerRating(crosser.uniqueId, 0.2);

    setTimeout(() => {
        const headerOutcome = Math.random();
        if (headerOutcome < 0.30) {
            if (attackingTeamIsUs) ourScore++;
            else opponentScore++;
            document.getElementById('match-score').textContent = `${ourScore}-${opponentScore}`;
            const randomCommentFn = announcerComments.headerGoal[Math.floor(Math.random() * announcerComments.headerGoal.length)];
            appendAnnouncerText(randomCommentFn(header.name, crosser.name, attackerTeamName), 'goal');
            adjustPlayerRating(header.uniqueId, 1.0);
            adjustPlayerRating(crosser.uniqueId, 0.7);
        } else if (headerOutcome < 0.70) {
            const randomCommentFn = announcerComments.headerSave[Math.floor(Math.random() * announcerComments.headerSave.length)];
            appendAnnouncerText(randomCommentFn(header.name, keeper.name, attackerTeamName, defenderTeamName), 'event');
            adjustPlayerRating(header.uniqueId, 0.25);
            adjustPlayerRating(keeper.uniqueId, 0.4);
        } else {
            const randomCommentFn = announcerComments.headerMiss[Math.floor(Math.random() * announcerComments.headerMiss.length)];
            appendAnnouncerText(randomCommentFn(header.name, attackerTeamName));
            adjustPlayerRating(header.uniqueId, -0.1);
        }
        updateLiveMatchDisplay();
    }, 1200);
}

function simulateShot(directShooter = null, shootingTeamIsUsParam = null) {
    const attackingTeamIsUs = directShooter ? shootingTeamIsUsParam : Math.random() < 0.5;
    const attackerTeamName = attackingTeamIsUs ? team.name : opponentTeam.name;
    const defenderTeamName = !attackingTeamIsUs ? team.name : opponentTeam.name;
    const attackerSquad = attackingTeamIsUs ? Object.values(formation) : opponentTeam.squad;
    const defenderSquad = !attackingTeamIsUs ? Object.values(formation) : opponentTeam.squad;

    let shooter = directShooter;
    if (!shooter) {
        let potentialShooters = attackerSquad.filter(p => p && ['ST', 'LW', 'RW', 'CM'].includes(p.pos) && !redCardedPlayers.includes(p.uniqueId));
        if (potentialShooters.length === 0) return;
        shooter = potentialShooters[Math.floor(Math.random() * potentialShooters.length)];
    }

    const keeper = defenderSquad.find(p => p.pos === 'GK' && !redCardedPlayers.includes(p.uniqueId));
    if (!keeper) return;

    const shotTypeRoll = Math.random();
    let shotType = null;
    if (shotTypeRoll > 0.97) shotType = 'rövaşata';
    else if (shotTypeRoll > 0.85) shotType = 'vole';

    const shotOutcome = Math.random();
    if (shotOutcome < (shotType ? 0.40 : 0.25)) {
        if (attackingTeamIsUs) ourScore++;
        else opponentScore++;
        document.getElementById('match-score').textContent = `${ourScore}-${opponentScore}`;
        const randomGoalCommentFn = announcerComments.goal[Math.floor(Math.random() * announcerComments.goal.length)];
        appendAnnouncerText(randomGoalCommentFn(shooter.name, null, attackerTeamName, shotType), 'goal');
        adjustPlayerRating(shooter.uniqueId, shotType ? 1.5 : 1.0);
    } else if (shotOutcome < 0.65) {
        const randomCommentFn = announcerComments.shotSave[Math.floor(Math.random() * announcerComments.shotSave.length)];
        appendAnnouncerText(randomCommentFn(shooter.name, keeper.name, attackerTeamName, defenderTeamName, shotType), 'event');
        adjustPlayerRating(shooter.uniqueId, 0.15);
        adjustPlayerRating(keeper.uniqueId, 0.4);
    } else {
        const randomCommentFn = announcerComments.shotMiss[Math.floor(Math.random() * announcerComments.shotMiss.length)];
        appendAnnouncerText(randomCommentFn(shooter.name, attackerTeamName, shotType));
        adjustPlayerRating(shooter.uniqueId, -0.1);
    }
}

function simulateMatchEvent() {
    if (matchInterval && matchMinute >= finalMatchMinute) {
        clearInterval(matchInterval);
        matchInterval = null;
        endMatch();
        return;
    }
    matchMinute += Math.floor(Math.random() * 3) + 1;
    if (matchMinute > 90 && !stoppageTimeAnnounced) {
        const addedMinutes = Math.floor(Math.random() * 5) + 1;
        finalMatchMinute = 90 + addedMinutes;
        appendAnnouncerText(announcerComments.stoppageTime(addedMinutes), 'important');
        stoppageTimeAnnounced = true;
    }
    if (matchMinute > finalMatchMinute) matchMinute = finalMatchMinute;
    document.getElementById('current-minute').textContent = matchMinute;

    const eventChance = Math.random();
    if (eventChance < 0.40) {
        simulatePass();
    } else if (eventChance < 0.65) {
        simulateDribble();
    } else if (eventChance < 0.85) {
        simulateShot();
    } else if (eventChance < 0.95) {
        simulateCrossAndHeader();
    } else {
        const actingTeamName = Math.random() < 0.5 ? team.name : opponentTeam.name;
        const commentType = Math.random() < 0.7 ? 'generic' : 'tactical';
        const commentsArray = announcerComments[commentType];
        const randomCommentFn = commentsArray[Math.floor(Math.random() * commentsArray.length)];
        const commentText = randomCommentFn(actingTeamName);
        appendAnnouncerText(commentText);
    }
    updateLiveMatchDisplay();
}

function announceMatchAwards() {
    const allPlayersWithTeams = [];
    Object.values(formation).forEach(p => { if(p) allPlayersWithTeams.push({ ...p, teamName: team.name }); });
    opponentTeam.squad.forEach(p => { if(p) allPlayersWithTeams.push({ ...p, teamName: opponentTeam.name }); });

    const sortedPlayers = allPlayersWithTeams.sort((a, b) => (playerMatchRatings[b.uniqueId] || 0) - (playerMatchRatings[a.uniqueId] || 0));

    if(sortedPlayers.length === 0) return;

    setTimeout(() => {
        const motm = sortedPlayers[0];
        const motmRating = playerMatchRatings[motm.uniqueId];
        appendAnnouncerText(`MAÇIN ADAMI (MOTM): ${motm.name} (${motm.teamName}) - Reyting: ${formatRating(motmRating)}`, 'important');
    }, 1000);

    
}

function endMatch() {
    appendAnnouncerText(announcerComments.end(team.name, opponentTeam.name, ourScore, opponentScore), 'important');
    
    announceMatchAwards();

    divisionSeason.matchesPlayed++;
    if (ourScore > opponentScore) {
        divisionSeason.wins++;
        coins += 500;
        showModal('Galibiyet!', 'Maçı kazandınız ve 500 Resa Coin kazandınız!', null, 'Harika!', true);
    } else if (ourScore === opponentScore) {
        coins += 50;
    } else {
        coins += 25;
    }
    document.getElementById('coin-balance').textContent = coins;

    if (divisionSeason.matchesPlayed >= 10) {
        const hasPromoted = divisionSeason.wins >= 6;

        if (hasPromoted) {
            if (currentDivision === 1) {
                showModal('ŞAMPİYON!', 'Tebrikler! Division 1 kupasını kazandınız! Efsaneler arasına girdiniz! Lig sıfırlanıyor.', () => {
                    currentDivision = 5;
                    divisionSeason = { wins: 0, matchesPlayed: 0 };
                    updateDivisionStatusUI();
                }, 'Efsaneyim!');
                coins += 5000;
                document.getElementById('coin-balance').textContent = coins;

            } else {
                showModal('LİG YÜKSELDİN!', `Tebrikler! ${divisionSeason.wins} galibiyet alarak Division ${currentDivision - 1}'e yükseldiniz!`, () => {
                    currentDivision--;
                    divisionSeason = { wins: 0, matchesPlayed: 0 };
                    updateDivisionStatusUI();
                }, 'Süper!');
                coins += 1000;
                document.getElementById('coin-balance').textContent = coins;
            }
        } else {
            showModal('Sezon Bitti', `Bu sezon ${divisionSeason.wins} galibiyetle ligde kalmayı başardınız. Daha sıkı çalışmalısın!`, () => {
                divisionSeason = { wins: 0, matchesPlayed: 0 };
                updateDivisionStatusUI();
            }, 'Tamam');
        }
    } else {
        updateDivisionStatusUI();
    }

    const matchSimulationDiv = document.querySelector('.match-simulation');
    const endButton = document.createElement('button');
    endButton.textContent = 'Kulübe Dön';
    endButton.classList.add('btn', 'match-end-btn');
    endButton.style.marginTop = '20px';

    endButton.onclick = () => {
        matchSimulationDiv.style.display = 'none';
        const playMatchBtn = document.getElementById('play-match-btn');
        if (playMatchBtn) playMatchBtn.style.display = 'block';
        showTab('club');
    };

    matchSimulationDiv.appendChild(endButton);
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.welcome').classList.add('active');
    updateClubDisplay();
    checkFormationCompleteness();
});