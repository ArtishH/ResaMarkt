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
let currentlyDraggedElement = null;

let ourScore = 0, opponentScore = 0, matchMinute = 0, matchInterval = null;
let opponentTeam = { name: '', squad: [], substitutionsMade: 0 };
let redCardedPlayers = [], injuredPlayers = [];
let yellowCards = {}, playerMatchRatings = {};
let stoppageTimeAnnounced = false, finalMatchMinute = 90, substitutionsRemaining = 5;
let selectedPlayerToSubOut = null, selectedPlayerToSubIn = null;

const players = [
     { id: "smokey3121_st", pos: "ST", name: "Smokey3121", rating: 87, imageUrl: "https://i.hizliresim.com/fru06o2.png" },
    { id: "dannyvoetballer_st", pos: "ST", name: "dannyvoetballer", rating: 89, imageUrl: "https://i.hizliresim.com/l9jggfg.png" },
      { id: "dakibo_rw", pos: 'RW', name: "dakibo", rating: 84, imageUrl: "https://i.hizliresim.com/f68r8oo.png" },
      { id: "7rrakk_RW", pos: "RW", name: "7rrakk", rating: 72, imageUrl: "https://i.hizliresim.com/j4w7rrb.png" },
      { id: "luviesta_lw", pos: "LW", name: "luviesta", rating: 84, imageUrl: "https://i.hizliresim.com/dp8b1bv.png" },
      { id: "Maluzur_lw", pos: "LW", name: "Maluzur", rating: 93, imageUrl: "https://i.hizliresim.com/7x451ln.png" },
      { id: "RIAL2TY_st", pos: "ST", name: "RIAL2TY", rating: 83, imageUrl: "https://i.hizliresim.com/5pvhtux.png" },
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
{ id: "miraç7104_cb", pos: "CB", name: "miraç7104", rating: 68, imageUrl: "https://i.hizliresim.com/1lvk6o4.png" },
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
{ id: "omriglazer_cb", pos: "CB", name: "omriglazer", rating: 72, imageUrl: "https://i.hizliresim.com/dlsqmto.png" },
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
{ id: "talk2themoney_st", pos: "ST", name: "talk2themoney", rating: 79, imageUrl: "" },
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
];

const announcerComments = {
    start: (ourTeam, oppTeam) => `Maç başlıyor! ${ourTeam} ile ${oppTeam} arasındaki bu mücadeleyi sabırsızlıkla bekliyoruz!`,
    atmosphere: () => `Taraftarlar stadı doldurmuş durumda, atmosfer ÇOK İYİ! Her iki takım da ısınmayı tamamladı.`,
    generic: [
        (teamName) => `${teamName} orta sahada topu kontrol ediyor, oyun kurma çabasındalar.`,
        (teamName) => `Hızlı bir hücum denemesi, ancak ${teamName} savunması son anda kritik bir müdahale ile topu uzaklaştırdı.`,
        (teamName) => `${teamName} oyuncuları paslaşmalarla rakip savunma hattını delmeye çalışıyor, sabırlı bir oyun sergileniyor.`,
        (teamName) => {
            const gk = teamName === team.name ? (formation.GK ? formation.GK.name : "kaleci") : (opponentTeam.squad.find(p => p.pos === 'GK') ? opponentTeam.squad.find(p => p.pos === 'GK').name : "kaleci");
            return `${teamName}'den şut! ${gk} harika bir refleksle topu kornere çeldi, büyük tehlikeyi önledi.`;
        },
    ],
    goal: [ (scorerName, assisterName, teamName) => assisterName ? `İşte gol! ${assisterName} (${teamName}) harika bir pas çıkardı, ${scorerName} topu ağlara gönderiyor! Ne gol ama!` : `Muhteşem bir gol! ${scorerName} (${teamName}) fileleri havalandırıyor! Kaleci çaresiz kaldı!` ],
};

function showModal(title, message, confirmCallback = null, buttonText = 'Kapat', autoClose = false) {
    const modal = document.getElementById('message-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalCloseBtn = document.querySelector('#message-modal .modal-close-btn');
    modalTitle.textContent = title;
    modalMessage.innerHTML = message;
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

function renderSellUI() {
    const container = document.getElementById('sell-list-container');
    container.innerHTML = '';
    const uniqueIdsInFormation = Object.values(formation).filter(p => p).map(p => p.uniqueId);
    const sellablePlayers = squad.filter(p => !uniqueIdsInFormation.includes(p.uniqueId));
    if (sellablePlayers.length === 0) {
        container.innerHTML = '<p style="color: var(--text-gray); text-align: center;">Satılabilecek oyuncu bulunamadı.<br>(Tüm oyuncularınız kadroda olabilir.)</p>';
        return;
    }
    sellablePlayers.forEach(player => {
        const sellPrice = player.rating * 10;
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('list-item-group');
        itemDiv.innerHTML = `
            <div class="list-item-info">
                <img src="${player.imageUrl}" alt="${player.name}">
                <div class="list-item-details">
                    <h4>${player.name} (${player.rating})</h4>
                    <p>Satış Değeri: ${sellPrice} Resa Coin</p>
                </div>
            </div>
            <button class="btn action-btn" onclick="sellPlayer('${player.uniqueId}')">Sat</button>
        `;
        container.appendChild(itemDiv);
    });
}

function sellPlayer(uniqueId) {
    const playerIndex = squad.findIndex(p => p.uniqueId === uniqueId);
    if (playerIndex === -1) {
        showModal('Hata', 'Satılacak oyuncu bulunamadı.', null, 'Kapat', true);
        return;
    }
    const playerToSell = squad[playerIndex];
    const sellPrice = playerToSell.rating * 10;
    coins += sellPrice;
    document.getElementById('coin-balance').textContent = coins;
    squad.splice(playerIndex, 1);
    showModal('Başarılı!', `${playerToSell.name}, ${sellPrice} Resa Coin karşılığında satıldı!`, null, 'Kapat', true);
    renderSellUI();
    updateClubDisplay();
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
            groupDiv.classList.add('list-item-group');
            groupDiv.innerHTML = `
                <div class="list-item-info">
                    <img src="${playerInfo.imageUrl}" alt="${playerInfo.name}">
                    <div class="list-item-details">
                        <h4>${playerInfo.name} (${playerInfo.pos})</h4>
                        <p>Uygun Kopya: ${availableToMerge.length}<br>Maliyet: 100 Resa Coin</p>
                    </div>
                </div>
                <button class="btn action-btn" onclick="mergePlayers('${playerId}')">Birleştir</button>
            `;
            container.appendChild(groupDiv);
        }
    }
    if (!mergeableGroupsFound) {
        container.innerHTML = '<p style="color: var(--text-gray); text-align: center;">Birleştirilecek uygun oyuncu bulunamadı.</p>';
    }
}

function mergePlayers(playerId) {
    if (coins < 100) {
        showModal('Yetersiz Bakiye', 'Oyuncu birleştirmek için 100 Resa Coin gereklidir.', null, 'Kapat', true);
        return;
    }
    const uniqueIdsInFormation = Object.values(formation).filter(p => p).map(p => p.uniqueId);
    const availableDuplicates = squad.filter(p => p.id === playerId && !uniqueIdsInFormation.includes(p.uniqueId));
    if (availableDuplicates.length < 2) {
        showModal('Hata', 'Bu oyuncuyu birleştirmek için en az 2 uygun (kadroda olmayan) kopyaya ihtiyacınız var.', null, 'Kapat', true);
        return;
    }
    coins -= 100;
    document.getElementById('coin-balance').textContent = coins;
    const playerToUpgrade = availableDuplicates[0];
    const playerToRemove = availableDuplicates[1];
    playerToUpgrade.rating += 2;
    const indexToRemove = squad.findIndex(p => p.uniqueId === playerToRemove.uniqueId);
    if (indexToRemove > -1) {
        squad.splice(indexToRemove, 1);
    }
    showModal('Başarılı!', `${playerToUpgrade.name} 100 coin karşılığında birleştirildi! Yeni reytingi: <b>${playerToUpgrade.rating}</b>`, null, 'Kapat', true);
    renderMergeUI();
    updateClubDisplay();
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
}

function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
    if (tabId === 'club') {
        const activeSubTab = document.querySelector('.sub-tab.active').getAttribute('onclick').match(/'([^']+)'/)[1];
        showSubTab(activeSubTab || 'squad');
    }
    checkFormationCompleteness();
}

function showSubTab(subTabId) {
    document.querySelectorAll('.sub-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.sub-tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector(`.sub-tab[onclick="showSubTab('${subTabId}')"]`).classList.add('active');
    document.getElementById(subTabId).classList.add('active');
    if (subTabId === 'squad') updateClubDisplay();
    else if (subTabId === 'player-merge') renderMergeUI();
    else if (subTabId === 'player-sell') renderSellUI();
}

function buyPack(cost, packType) {
    if (coins < cost) {
        showModal('Yetersiz Bakiye', 'Yetersiz Resa Coin!', null, 'Kapat', true);
        return;
    }
    let possiblePlayers;
    if (packType === 'basic') {
        possiblePlayers = players.filter(p => p.rating >= 60 && p.rating <= 79);
    } else if (packType === 'premium') {
        possiblePlayers = players.filter(p => p.rating >= 80);
    } else {
        possiblePlayers = players;
    }
    if (possiblePlayers.length === 0) {
        showModal('Hata', 'Bu paketten verilecek uygun oyuncu bulunamadı.', null, 'Kapat', true);
        return;
    }
    coins -= cost;
    document.getElementById('coin-balance').textContent = coins;
    const newPlayers = [];
    for (let i = 0; i < 5; i++) {
        const randomPlayer = { ...possiblePlayers[Math.floor(Math.random() * possiblePlayers.length)] };
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
        <button class="close-reveal-btn" onclick="closeCardReveal()">Kapat</button>
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
            <div class="pack" onclick="buyPack(300, 'basic')">
                <img src="https://placehold.co/150x200/5A9BD6/0A0A0E?text=Basic+Pack" alt="Basic Pack">
                <p>Basic Pack (60-79 OVR) <br> 300 Resa Coin</p>
            </div>
            <div class="pack" onclick="buyPack(750, 'premium')">
                <img src="https://placehold.co/150x200/FFD700/0A0A0E?text=Premium+Pack" alt="Premium Pack">
                <p>Premium Pack (80+ OVR) <br> 750 Resa Coin</p>
            </div>
        </div>
    `;
    updateClubDisplay();
    checkFormationCompleteness();
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
            playerItem.innerHTML = `<img src="${player.imageUrl}" style="width: 60px; height: 60px; border-radius: 50%; border: 2px solid var(--main-accent-color); object-fit: cover;"> <p>${player.name} (${player.pos}, ${player.rating})</p>`;
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
            posEl.innerHTML = `<div class="fifa-card" data-position-id="${posKey}" data-player-unique-id="${playerInFormation.uniqueId}" data-player-id="${playerInFormation.id}" draggable="true"> <div class="fifa-card-rating">${playerInFormation.rating}</div> <div class="fifa-card-pos">${playerInFormation.pos}</div> <img class="fifa-card-image" src="${playerInFormation.imageUrl}" alt="${playerInFormation.name}"> <div class="fifa-card-name">${playerInFormation.name}</div> </div> <span class="position-name">${posEl.dataset.position}</span>`;
            posEl.classList.add('selected-position');
            posEl.classList.remove('empty-card'); 
        } else {
            posEl.innerHTML = `<div class="fifa-card-empty" data-position-id="${posKey}"></div> <span class="position-name">${posEl.dataset.position}</span>`;
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
    return Object.values(formation).some(p => p && p.id === playerIdToCheck);
}

function initializeDragAndDrop() {
    const draggables = document.querySelectorAll('.player-item, .fifa-card[draggable="true"]');
    const dropzones = document.querySelectorAll('.player-position');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', handleDragStart);
        draggable.addEventListener('dragend', handleDragEnd);
    });

    dropzones.forEach(dropzone => {
        dropzone.addEventListener('dragover', handleDragOver);
        dropzone.addEventListener('dragleave', handleDragLeave);
        dropzone.addEventListener('drop', handleDrop);
    });
}

function handleDragStart(e) {
    currentlyDraggedElement = e.target.closest('.player-item, .fifa-card');
    currentlyDraggedElement.classList.add('dragging');
    setTimeout(() => {
        currentlyDraggedElement.style.opacity = '0.5';
    }, 0);
}

function handleDragEnd(e) {
    if(currentlyDraggedElement) {
        currentlyDraggedElement.classList.remove('dragging');
        currentlyDraggedElement.style.opacity = '1';
        currentlyDraggedElement = null;
    }
    document.querySelectorAll('.dropzone-highlight').forEach(el => el.classList.remove('dropzone-highlight'));
}

function handleDragOver(e) {
    e.preventDefault();
    const dropzone = e.target.closest('.player-position');
    if (dropzone) {
        dropzone.classList.add('dropzone-highlight');
    }
}

function handleDragLeave(e) {
    const dropzone = e.target.closest('.player-position');
    if (dropzone) {
        dropzone.classList.remove('dropzone-highlight');
    }
}

function handleDrop(e) {
    e.preventDefault();
    const dropzone = e.target.closest('.player-position');
    if (!dropzone || !currentlyDraggedElement) return;

    dropzone.classList.remove('dropzone-highlight');
    const targetPosId = dropzone.id.replace('-pos', '').toUpperCase();
    const playerUniqueId = currentlyDraggedElement.dataset.playerUniqueId;
    const player = squad.find(p => p.uniqueId === playerUniqueId);

    if (!player) return;

    const sourcePosId = currentlyDraggedElement.dataset.positionId;
    const playerInTargetPos = formation[targetPosId];
    
    if (sourcePosId) {
        formation[sourcePosId] = playerInTargetPos ? playerInTargetPos : null;
    }

    formation[targetPosId] = player;
    updateClubDisplay();
}

function initializeContextMenu() {
    const contextMenu = document.getElementById('context-menu');
    document.addEventListener('contextmenu', e => {
        const card = e.target.closest('.fifa-card[draggable="true"]');
        if (card) {
            e.preventDefault();
            selectedPositionFromPitch = card.dataset.positionId;
            contextMenu.style.top = `${e.pageY}px`;
            contextMenu.style.left = `${e.pageX}px`;
            contextMenu.style.display = 'flex';
        }
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.context-menu')) {
            contextMenu.style.display = 'none';
        }
    });
}

function startPlayerMove() {
    isMovingPlayer = true;
    const contextMenu = document.getElementById('context-menu');
    contextMenu.style.display = 'none';
    highlightDroppablePositions();
}

function removePlayer() {
    const contextMenu = document.getElementById('context-menu');
    contextMenu.style.display = 'none';
    if (selectedPositionFromPitch) {
        formation[selectedPositionFromPitch] = null;
        updateClubDisplay();
    }
    selectedPositionFromPitch = null;
}

function highlightDroppablePositions() {
    document.querySelectorAll('.player-position').forEach(pos => {
        pos.classList.add('move-target-highlight');
        pos.onclick = () => movePlayerToNewPosition(pos.id.replace('-pos', '').toUpperCase());
    });
}

function removeHighlightFromDroppablePositions() {
    document.querySelectorAll('.player-position').forEach(pos => {
        pos.classList.remove('move-target-highlight');
        pos.onclick = null;
    });
}

function movePlayerToNewPosition(targetPositionId) {
    if (!isMovingPlayer || !selectedPositionFromPitch) return;

    const playerToMove = formation[selectedPositionFromPitch];
    const playerInTarget = formation[targetPositionId];

    formation[targetPositionId] = playerToMove;
    formation[selectedPositionFromPitch] = playerInTarget ? playerInTarget : null;

    cancelPlayerMove();
}

function cancelPlayerMove() {
    isMovingPlayer = false;
    selectedPositionFromPitch = null;
    removeHighlightFromDroppablePositions();
    updateClubDisplay();
}

function checkFormationCompleteness() {
    const playMatchBtn = document.getElementById('play-match-btn');
    const isComplete = Object.values(formation).every(player => player !== null);
    playMatchBtn.disabled = !isComplete;
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.welcome').classList.add('active');
    updateClubDisplay();
    checkFormationCompleteness();
});