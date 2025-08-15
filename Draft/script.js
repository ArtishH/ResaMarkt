const allPlayers = [
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
const customOpponentTeamsData = [
    {
        name: "Real Betis", 
        player_ids: [
           "gjercog_gk", "helziy_lb", "axguerd_cb","mood_ramos_cb", "malik_dan_rb", "eviluded_cm", "cineris_cm", "tris10_m_cm", "luviesta_lw", "smokey3121_st", "dakibo_rw" 
        ]
    },
      {
        name: "Barcelona", 
        player_ids: [
           "3yl9d_GK", "Bloxinhooo_LB", "luukzzy_CB","Zinrall_CB", "EthicasNicomachea_RB", "KosovoovlsSerbia_CM", "arbeloa_CM","trincao1907_cm",  "7rrakk_RW", "Maluzur_lw", "smokey3121_st",
        ]
    },
     {
        name: "Real Madrid", 
        player_ids: [
           "Franksans2222_gk", "ElchuchoPerez_lb", "gingikel_cb", "flaandre-scarlet_cb", "lastdisco_rb",  "ItchyLfc2005_cm","awakenaldo_cm", "MFSHAD_cm","fbskaar_lw","RIAL2TY_st", "iluvrealsyy_rw", 
        ]
    },
    {
        name: "Arsenal", 
        player_ids: [
          "virtco7889_gk","Vurelixs_lb", "ziaderzi_cb","MRDamDan_cb","Vinariyn_rb","nonexistenalcries_cm", "Nazotiy_cm","AitNourii_cm","Synksx_LW","bubblebuttercup112_st","Clinicality_RW", 
        ]
    },
    {
        name: "Atletico Madrid", 
        player_ids: [
          "estce1_gk","zorvean_lb","Spook3d_cb","moshu_q_cb","c3sual_rb","socrattes_cm","MARTINELLI_cm","raulasencioo_cm","lero_me_lw","parlayhunter_st", "fazaldo_rw" 
        ]
    },
    {
        name: "Valencia", 
        player_ids: [
         "Gigo564_gk","KakaViBritannia_lb","IGotNoWifi_cb","NickOlij_cb","c4icedo_rb","tafeljas_cm","UberLeo_cm","theworfer_cm","elchinoshob_lw","aresefgod_st","Jack924833_rw" 
        ]
    },
     {
        name: "Sevilla", 
        player_ids: [
        "Carlorzei_gk","harmoush_lb","Dogesinhoo_cb","MISHIPRAXDYT2_cb", "chilavert_rb", "tizongass_cm", "a9lire_cm","jessnaldo_cm","Crisstobal_lw","KenanYildizz_st", "kentroya_rw"
        ]
    },
     {
        name: "Nottingham Forest", 
        player_ids: [
       "ahmedmomoa_gk","zSameki_lb","PLOKOLOLBROTHERS5_cb","Suleex_cb","Jekowski_rb","n5ves_cm","luczz_cm","nvmcobain_cm", "Hrisowskii_lw","22smok_st","STORMgiannis900_RW"
        ]
    },
    {
        name: "Manchester United",
        player_ids: [
       "vadimkapolyakov_gk","aguzzj_lb","lisandroo_cb","Painshinratensei_cb","CriticalLio_rb","Makelele_cm", "phen5m_cm","humidos_cm", "bonfyz_lw","fivestariscо_st","streetannie_rw"
        ]
    },
     {
        name: "Liverpool",
        player_ids: [
         "Yunami27X_LB","IgorAkinfeev35_cb","Joshlect_cb","ForisHD_rb", "itsslothplayz_cm","asamuiaractioncoco_cm","ProCiba099_009_cm","HasHikOPriMexS_lw","TheAllRounderGod_st","qeintessence_rw"
        ]
    },
    {
        name: "Aston Villa",
        player_ids: [
         "Rayquazathepro_gk","SanTser780_5_lb","CriticalClip_cb","stefiscoco_cb","naim_76_rb","finjoshi_cm","p9eng_cm","rocha90_cm", "A7HARR_lw","IlJake_XI_st","IlLowkeyXI_rw",
        ]
    },
    {
        name: "Chelsea",
        player_ids: [
         "xevero2011_gk","Syqxnzl_lb","irineudosparanue_cb","yuriocean_cb","dabillingham_rb","NavidParsHakhamneshi_cm","Zoomical_cm","danielsxyz_cm","lolololol1264_lw","puyafon_st","ekawcaruso_rw"
        ]
    },
     {
        name: "Bayern Munich",
        player_ids: [
         "clumsythings_gk","sir_aimbot012_LB", "agarnacho_7_cb","ElMorfadorDeChoripan_cb","kovanicic_rb", "coolestwilliam_cm","v9nea_cm","jxzyboi_cm","retenzu_rw","RobertLewandowski38_st","POLSKAFUTBOL"
        ]
    },
    {
        name: "Hertha Berlin", 
        player_ids: [
           "Kylian_McFrappa_gk","aconi5basket_lb","retinzu_cb","NikeBRvip10_cb","Fallenciaga.rb","CreitimDo_Grau123_cm","Martinalkishima_cm","sparkfaded_cm","CXMELEKXC_ST","stjepogame_RW","trovao16_LW"
        ]
    },
    {
        name: "Bayern Leverkusen", 
        player_ids: [
          "Faluzur_GK", "Khojent_lb","Idk_Scout_cb", "Pionieers_cb","IlTony_Kroos_rb", "hjl_cm","7ronaldoo_cm","Gameomg_RBLX_cm","4rkkz_RW","keepupwithmelo_st","wINams_LW"
        ]
    },
    {
        name: "Schalke", 
        player_ids: [
           "Humberto_4268_Gk","bauti38err_Lb","isaque123456677_cb","whitetiger1912_cb","fabrituber720_rb","LimiDantonelli_cm","IDavidLIIII_cm","MO129195_cm","JONHCENA38_Lw","rewriteeyes_st","9Haaaland_rw",
        ]
    },
     {
        name: "FC Heidenheim", 
        player_ids: [
          "Carlosgarvar_gk","egereiz3256_LB","Samueltx_cb","p6k2q_cb","adaptisrogue_rb","Xenizyn_cm","ElJoacooo_cm","SkitlsRogue_CM", "THEREALMOOSEMANNN_LW","Atagyh_ST","juan810j_RW"
        ]
    },
     {
        name: "Dortmund", 
        player_ids: [
          "aydincetinantreman_gk","mete7104_LB","frieztaa_cb","miraç7104_cb","papucraft_43_RB", "babatopcuu_cm","meteturkic_cm", "reiulent_cm","ErdoZor61_LW", "nepzos_ST","smottii_RW"
        ]
    },
     {
        name: "Inter", 
        player_ids: [
          "Behrazy_cm", "k_asane_st", "LucianElCorte_rw", "lukekakuu_cb", "MF7UP_gk", "Mohascred_rb", "mvyuluu_cb", "ruxel_gamerpro_lb", "SebzqRodriguez_lw", "xfibion_cm", "zaketti_cm"
        ]
    },
    {
        name: "Napoli", 
        player_ids: [
          "Behrazy_cm", "k_asane_st", "LucianElCorte_rw", "lukekakuu_cb", "MF7UP_gk", "Mohascred_rb", "mvyuluu_cb", "ruxel_gamerpro_lb", "SebzqRodriguez_lw", "xfibion_cm", "zaketti_cm"
        ]
    },
    
    {
        name: "PSG", 
        player_ids: [
           "44bobz_gk","keepupwithery_LB","ocelowski_cb","Flashlback_cb","lau5da_RB","andaca_cm","livgavemehearts_cm","lucasjbss_cm","dami0710_LW","floveramon_st","freakwizard62_rw"
        ]
    },
     {
        name: "Roma", 
        player_ids: [
          "Adamxseven7_cm", "Cancelooo_lb", "feukmizi_cm", "jakethepig87_cb", "jetixpro_cb", "kittylover29294_st", "merknazer_gk", "p5rloi_cm", "s1akaa_rw", "uziuqq_lw", "veloxedge_rb"
        ]
    },
     {
        name: "Bologna", 
        player_ids: [
         "8gakpo_rw", "axeldisasi_cb", "henker_lb", "ionlysuat_cb", "memo_st", "miljan637_cm", "ohink_cm", "punchlife_rb", "verlaon_lw", "yuri1bertoo_gk", "zertiox_cm"
        ]
    },
    {
        name: "Juventus", 
        player_ids: [
         "asiturkic_lw", "dsacszpro_rw", "jaxovic_cb", "nikdini_cm", "personaje23236_gk", "rebelvax_cm", "swmkaa_cm", "szyluv_rb", "talk2themoney_st", "xfixleox_lb", "zodiacmat_cb"
        ]
    },



   
];

let activePositionElement = null;
let playerAssignments = new Map();
let userSquad = [];
const requiredPlayers = 11;

let offeredPlayerIdsThisDraft = new Set();
let gameStage = 'draft';
let currentTournamentStageIndex = 0;
const tournamentStages = [
    "Eleme Maçı 1", "Eleme Maçı 2", "Eleme Maçı 3", "Eleme Maçı 4", "Son 16 Turu", "Çeyrek Final", "Yarı Final", "Final"
];
let tournamentWins = 0;

let matchInterval;
const matchSpeed = 500;
let currentMinute = 0;
let homeScore = 0;
let awayScore = 0;
const homeTeamName = "Resa";
let awayTeamName = "";
let currentOpponentSquad = [];

let userSquadMatchStats = [];
let opponentSquadMatchStats = [];


let userPlayersOnField = requiredPlayers;
let opponentPlayersOnField = requiredPlayers;


let usedOpponentTeamNames = new Set();

const difficultySettings = {
    'Eleme Maçı 1': { homeGoalMultiplier: 1.2, awayGoalMultiplier: 0.8 },
    'Eleme Maçı 2': { homeGoalMultiplier: 1.2, awayGoalMultiplier: 0.8 },
    'Eleme Maçı 3': { homeGoalMultiplier: 1.2, awayGoalMultiplier: 0.8 },
    'Eleme Maçı 4': { homeGoalMultiplier: 1.2, awayGoalMultiplier: 0.8 },
    'Son 16 Turu': { homeGoalMultiplier: 1.0, awayGoalMultiplier: 1.0 },
    'Çeyrek Final': { homeGoalMultiplier: 0.8, awayGoalMultiplier: 1.2 },
    'Yarı Final': { homeGoalMultiplier: 0.8, awayGoalMultiplier: 1.2 },
    'Final': { homeGoalMultiplier: 0.6, awayGoalMultiplier: 1.4 }
};

const startTournamentBtn = document.getElementById('startTournamentBtn');
const pitchContainer = document.getElementById('pitch-container');
const matchScreen = document.getElementById('matchScreen');
const homeTeamNameEl = document.getElementById('homeTeamName');
const awayTeamNameEl = document.getElementById('awayTeamName');
const scoreDisplayEl = document.getElementById('scoreDisplay');
const matchInfoEl = document.getElementById('matchInfo');
const commentatorBoxEl = document.getElementById('commentatorBox');
const startMatchBtn = document.getElementById('startMatchBtn');
const viewOpponentSquadBtn = document.getElementById('viewOpponentSquadBtn');
const viewStatsBtn = document.getElementById('viewStatsBtn');
const nextMatchBtn = document.getElementById('nextMatchBtn');
const restartTournamentBtn = document.getElementById('restartTournamentBtn');

const playerSelectionModal = document.getElementById('playerSelectionModal');
const playerOptionsContainer = document.getElementById('playerOptions');

const opponentSquadModal = document.getElementById('opponentSquadModal');
const opponentSquadTitle = document.getElementById('opponentSquadTitle');
const opponentPlayersContainer = document.getElementById('opponentPlayersContainer');

const playerStatsModal = document.getElementById('playerStatsModal');
const statsContent = document.getElementById('statsContent');


function createFifaCardHTML(player, className = 'fifa-card', isSelectableCard = false) {
    const onErrorText = encodeURIComponent(player.name.substring(0, Math.min(3, player.name.length)).toUpperCase());

    const cardContent = `
        <div class="fifa-card-rating">${player.rating}</div>
        <div class="fifa-card-pos">${player.pos}</div>
        <img src="${player.imageUrl}" alt="${player.name}" class="fifa-card-image" onerror="this.src='https://placehold.co/90x90/1e2e3d/cbd5e0?text=${onErrorText}'">
        <div class="fifa-card-name">${player.name}</div>
    `;

    if (isSelectableCard) {
        return `
            <div class="${className}" data-player-id="${player.id}">
                <div class="card-inner">
                    <div class="card-back"></div>
                    <div class="card-front">${cardContent}</div>
                </div>
            </div>
        `;
    } else {
        return `<div class="${className}">${cardContent}</div>`;
    }
}


function updateStartTournamentButton() {
    userSquad = Array.from(playerAssignments.values());

    if (userSquad.length >= requiredPlayers) {
        startTournamentBtn.style.display = 'block';
        gameStage = 'tournament_ready';
    } else {
        startTournamentBtn.style.display = 'none';
        gameStage = 'draft';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderFormation();

    const positionElements = document.querySelectorAll('.player-position');
    positionElements.forEach(element => {
        element.addEventListener('click', () => {
            if (gameStage !== 'draft' || element.classList.contains('selected-position')) {
                if (gameStage !== 'draft') {
                    addCommentatorMessage("Maç devam ederken veya turnuva aşamasında kadroya müdahale edemezsiniz.", "info");
                } else if (element.classList.contains('selected-position')) {
                    addCommentatorMessage("Bu pozisyona zaten bir oyuncu atandı. Kadro kilitlendi.", "info");
                }
                return;
            }

            activePositionElement = element;
            const positionType = element.dataset.position;
            showPlayerSelectionModal(positionType);
        });
    });

    startTournamentBtn.addEventListener('click', prepareTournamentMatch);
    startMatchBtn.addEventListener('click', startMatch);
    viewOpponentSquadBtn.addEventListener('click', () => showOpponentSquadModal(currentOpponentSquad));
    viewStatsBtn.addEventListener('click', showPlayerStatsModal);
    nextMatchBtn.addEventListener('click', continueTournament);
    restartTournamentBtn.addEventListener('click', restartGame);
});


function renderFormation() {
    const positionElements = document.querySelectorAll('.player-position');
    positionElements.forEach(posEl => {
        const positionId = posEl.id;
        const positionType = posEl.dataset.position;

        if (playerAssignments.has(positionId)) {
            const player = playerAssignments.get(positionId);
            posEl.innerHTML = createFifaCardHTML(player, 'fifa-card', false) + `<span class="position-name">${positionType}</span>`;
            posEl.classList.add('selected-position');
            posEl.classList.remove('empty-card');
        } else {
            posEl.innerHTML = `<div class="fifa-card-empty"></div><span class="position-name">${positionType}</span>`;
            posEl.classList.add('empty-card');
            posEl.classList.remove('selected-position');
        }
    });
    updateStartTournamentButton();
}


function showPlayerSelectionModal(positionType) {
    playerOptionsContainer.innerHTML = '';

    const assignedPlayerIds = new Set(Array.from(playerAssignments.values()).map(p => p.id));

    const suitablePlayers = allPlayers.filter(player =>
        player.pos.trim().toUpperCase() === positionType.trim().toUpperCase() &&
        !assignedPlayerIds.has(player.id)
    );

    const selectedPlayersForModal = [];
    const numPlayersToOffer = 4;
    const RE_OFFER_CHANCE = 0.15;

    let neverOfferedAndSuitable = suitablePlayers.filter(p => !offeredPlayerIdsThisDraft.has(p.id));

    let previouslyOfferedAndSuitable = suitablePlayers.filter(p => offeredPlayerIdsThisDraft.has(p.id));

    neverOfferedAndSuitable.sort(() => Math.random() - 0.5);
    previouslyOfferedAndSuitable.sort(() => Math.random() - 0.5);

    for (let i = 0; i < numPlayersToOffer; i++) {
        let playerToAdd = null;

       
        if (neverOfferedAndSuitable.length > 0 && Math.random() > RE_OFFER_CHANCE) {
           
            const availableNeverOffered = neverOfferedAndSuitable.filter(p =>
                !selectedPlayersForModal.some(sp => sp.id === p.id)
            );
            if (availableNeverOffered.length > 0) {
                playerToAdd = availableNeverOffered.shift(); 
            }
        }

        
        if (!playerToAdd && previouslyOfferedAndSuitable.length > 0) {
            const availableInPrevOffered = previouslyOfferedAndSuitable.filter(p =>
                !selectedPlayersForModal.some(sp => sp.id === p.id)
            );
            if (availableInPrevOffered.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableInPrevOffered.length);
                playerToAdd = availableInPrevOffered.splice(randomIndex, 1)[0];
            }
        }

       
        if (!playerToAdd && suitablePlayers.length > 0) {
            const remainingSuitable = suitablePlayers.filter(p =>
                !selectedPlayersForModal.some(sp => sp.id === p.id)
            );
            if (remainingSuitable.length > 0) {
                const randomIndex = Math.floor(Math.random() * remainingSuitable.length);
                playerToAdd = remainingSuitable.splice(randomIndex, 1)[0];
            }
        }

        if (playerToAdd) {
            selectedPlayersForModal.push(playerToAdd);
            offeredPlayerIdsThisDraft.add(playerToAdd.id);
        } else {
            break; 
        }
    }

    if (selectedPlayersForModal.length === 0) {
        playerOptionsContainer.innerHTML = '<p class="text-gray-400 text-lg text-center w-full">Bu pozisyon için uygun oyuncu bulunamadı veya tüm uygun oyuncular zaten sunuldu.</p>';
        playerSelectionModal.classList.add('active');
        return;
    }

    selectedPlayersForModal.forEach((player, index) => {
        const playerCardHtml = createFifaCardHTML(player, 'player-selection-card', true);
        playerOptionsContainer.innerHTML += playerCardHtml;
    });

    playerSelectionModal.classList.add('active');

    const playerSelectionCards = playerOptionsContainer.querySelectorAll('.player-selection-card');
    let flippedCount = 0;

    for (let i = 0; i < playerSelectionCards.length; i++) {
        const card = playerSelectionCards[i];
        card.style.pointerEvents = 'none';
        setTimeout(() => {
            card.classList.add('flipped');
            flippedCount++;
            if (flippedCount === playerSelectionCards.length) {
                addCommentatorMessage("Tüm kartlar çevrildi! Şimdi bir oyuncu seçebilirsin.", "info");
                playerSelectionCards.forEach(cardToEnable => {
                    cardToEnable.classList.add('selectable');
                    cardToEnable.style.pointerEvents = 'auto';
                    cardToEnable.addEventListener('click', function selectThisCard() {
                        const selectedPlayerId = this.dataset.playerId;

                        playerSelectionCards.forEach(otherCard => {
                            otherCard.style.pointerEvents = 'none';
                            otherCard.style.opacity = '0.5';
                            otherCard.classList.remove('selectable');
                            otherCard.removeEventListener('click', selectThisCard);
                        });

                        this.style.opacity = '1';
                        this.style.boxShadow = '0 0 12px var(--main-accent-color), 0 0 24px var(--accent-shadow-strong)';

                        selectPlayer(selectedPlayerId, activePositionElement.id, positionType);
                    });
                });
            }
        }, 300 * (i + 1));
    }
}

function closePlayerSelectionModal() {
    playerSelectionModal.classList.remove('active');
}


function selectPlayer(playerId, positionElementId, positionType) {
    const player = allPlayers.find(p => p.id === playerId);
    if (!player) {
        console.error('Hata: Oyuncu bulunamadı:', playerId);
        return;
    }

    const targetPositionElement = document.getElementById(positionElementId);
    if (targetPositionElement) {
        playerAssignments.set(targetPositionElement.id, player);

        targetPositionElement.innerHTML = createFifaCardHTML(player, 'fifa-card', false) + `<span class="position-name">${positionType}</span>`;
        targetPositionElement.classList.add('selected-position');
        targetPositionElement.classList.remove('empty-card');
    } else {
        console.error(`Hedef pozisyon elementi bulunamadı: ${positionElementId}`);
    }

    closePlayerSelectionModal();
    updateStartTournamentButton();
}




function prepareTournamentMatch() {
    gameStage = 'match_start_pending';
    pitchContainer.style.display = 'none';
    startTournamentBtn.style.display = 'none';
    matchScreen.style.display = 'flex';

    startMatchBtn.style.display = 'block';
    viewOpponentSquadBtn.style.display = 'block';
    viewStatsBtn.style.display = 'none';
    nextMatchBtn.style.display = 'none';
    restartTournamentBtn.style.display = 'none';

    homeScore = 0;
    awayScore = 0;
    currentMinute = 0;
    scoreDisplayEl.textContent = '0 - 0';
    homeTeamNameEl.textContent = homeTeamName;
    matchInfoEl.textContent = `Maç: ${tournamentStages[currentTournamentStageIndex]}`;
    commentatorBoxEl.innerHTML = '<p class="commentator-message">Maç Başlamak İçin "Maçı Başlat" Butonuna Basın!</p>';

    currentOpponentSquad = generateOpponentSquad();
    awayTeamNameEl.textContent = awayTeamName;

    
    userPlayersOnField = requiredPlayers;
    opponentPlayersOnField = requiredPlayers;

    initializeMatchStats();
}


function startMatch() {
    gameStage = 'match_in_progress';
    startMatchBtn.style.display = 'none';
    viewOpponentSquadBtn.style.display = 'block';
    viewStatsBtn.style.display = 'block';

    matchInfoEl.textContent = `Dakika: ${currentMinute} - ${tournamentStages[currentTournamentStageIndex]}`;
    addCommentatorMessage("Maç Başladı!", 'info');
    matchInterval = setInterval(() => simulateMinute(), matchSpeed);
}


function continueTournament() {
    currentTournamentStageIndex++;
    if (currentTournamentStageIndex < tournamentStages.length) {
        prepareTournamentMatch();
    } else {
        endTournament(true);
    }
}


function endTournament(wonTournament) {
    clearInterval(matchInterval);
    commentatorBoxEl.scrollTop = commentatorBoxEl.scrollHeight;

    if (wonTournament) {
        addCommentatorMessage("Tebrikler! Muhteşem bir performansla turnuvayı kazandınız!", "goal");
    } else {
        addCommentatorMessage("Maalesef elendiniz. Bir dahaki sefere daha iyi şanslar!", "foul");
    }

    startMatchBtn.style.display = 'none';
    viewOpponentSquadBtn.style.display = 'none';
    viewStatsBtn.style.display = 'none';
    nextMatchBtn.style.display = 'none';
    restartTournamentBtn.style.display = 'block';
    gameStage = 'tournament_over';
}


function restartGame() {
    const allPlayerPositions = document.querySelectorAll('.player-position');
    allPlayerPositions.forEach(posEl => {
        const positionType = posEl.dataset.position;
        posEl.innerHTML = `
            <div class="fifa-card-empty"></div>
            <span class="position-name">${positionType}</span>
        `;
        posEl.classList.remove('selected-position');
        posEl.classList.add('empty-card');
        playerAssignments.delete(posEl.id);
    });

    userSquad = [];
    offeredPlayerIdsThisDraft.clear();
    updateStartTournamentButton();

    matchScreen.style.display = 'none';
    pitchContainer.style.display = 'flex';
    restartTournamentBtn.style.display = 'none';
    gameStage = 'draft';

    commentatorBoxEl.innerHTML = '<p class="commentator-message">Yeni bir turnuva için kadronuzu kurun!</p>';

    homeScore = 0;
    awayScore = 0;
    scoreDisplayEl.textContent = '0 - 0';
    matchInfoEl.textContent = 'Dakika: 0';
    currentTournamentStageIndex = 0;
    tournamentWins = 0;
    usedOpponentTeamNames.clear(); 
}




function getRandomPlayer(squad) {
    if (!squad || squad.length === 0) return { name: "Bilinmeyen Oyuncu", id: "unknown", pos: "N/A" };
    const randomIndex = Math.floor(Math.random() * squad.length);
    return squad[randomIndex];
}


function initializeMatchStats() {
    const currentUserSquad = Array.from(playerAssignments.values());

    userSquadMatchStats = currentUserSquad.map(p => ({
        ...p,
        matchGoals: 0,
        matchAssists: 0,
        matchRating: (p.rating / 10).toFixed(1),
        passesAttempted: 0,
        passesCompleted: 0,
        foulsCommitted: 0,
        offsides: 0,
        yellowCards: 0,
        redCards: 0,
        isOnField: true 
    }));

    opponentSquadMatchStats = currentOpponentSquad.map(p => ({
        ...p,
        matchGoals: 0,
        matchAssists: 0,
        matchRating: (p.rating / 10).toFixed(1),
        passesAttempted: 0,
        passesCompleted: 0,
        foulsCommitted: 0,
        offsides: 0,
        yellowCards: 0,
        redCards: 0,
        isOnField: true 
    }));
}


function generateOpponentSquad() {
    let opponentSquad = [];
    awayTeamName = "Bilinmeyen Rakip";

    if (customOpponentTeamsData.length === 0) {
        console.warn("customOpponentTeamsData boş!");
        awayTeamName = "Boş Takım";
        return [];
    }

    
    let availableTeams = customOpponentTeamsData.filter(team => !usedOpponentTeamNames.has(team.name));

    
    if (availableTeams.length === 0) {
        usedOpponentTeamNames.clear();
        availableTeams = customOpponentTeamsData;
        console.warn("Tüm rakip takımlar kullanıldı, liste sıfırlandı.");
    }

    const randomTeamIndex = Math.floor(Math.random() * availableTeams.length);
    const chosenCustomTeam = availableTeams[randomTeamIndex];
    awayTeamName = chosenCustomTeam.name;
    usedOpponentTeamNames.add(chosenCustomTeam.name); 

    const tempOpponentSquad = [];
    const tempAssignedOpponentIds = new Set();

    for (const playerId of chosenCustomTeam.player_ids) {
        const playerFromAllPlayers = allPlayers.find(p => p.id === playerId);

        if (playerFromAllPlayers) {
            if (!tempAssignedOpponentIds.has(playerFromAllPlayers.id)) {
                tempOpponentSquad.push(playerFromAllPlayers);
                tempAssignedOpponentIds.add(playerFromAllPlayers.id);
            } else {
                console.warn(`Rakip takımın kendi kadrosunda duplicate oyuncu ID: ${playerId}. Yedek aranıyor.`);
                const replacementPlayers = allPlayers.filter(p =>
                    !tempAssignedOpponentIds.has(p.id)
                );
                if (replacementPlayers.length > 0) {
                    const randomReplacement = replacementPlayers[Math.floor(Math.random() * replacementPlayers.length)];
                    tempOpponentSquad.push(randomReplacement);
                    tempAssignedOpponentIds.add(randomReplacement.id);
                } else {
                    console.warn(`Uygun yedek oyuncu bulunamadı. Rakip takım kadrosu eksik kalabilir. (Duplicate in custom team: ${playerFromAllPlayers.name})`);
                }
            }
        } else {
            console.warn(`Rakip takım kadrosunda bulunamayan oyuncu ID: ${playerId} (${chosenCustomTeam.name} takımı için). Genel havuzdan dolduruluyor.`);
            const fallbackReplacementPlayers = allPlayers.filter(p =>
                !tempAssignedOpponentIds.has(p.id)
            );
            if (fallbackReplacementPlayers.length > 0) {
                const randomFillPlayer = fallbackReplacementPlayers[Math.floor(Math.random() * fallbackReplacementPlayers.length)];
                tempOpponentSquad.push(randomFillPlayer);
                tempAssignedOpponentIds.add(randomFillPlayer.id);
            } else {
                console.warn(`Genel havuzda bile uygun oyuncu bulunamadı. Rakip takım kadrosu eksik kalabilir.`);
            }
        }
    }

    while (tempOpponentSquad.length < requiredPlayers) {
        const availablePlayersForFilling = allPlayers.filter(p =>
            !tempAssignedOpponentIds.has(p.id)
        );

        if (availablePlayersForFilling.length > 0) {
            const randomFillPlayer = availablePlayersForFilling[Math.floor(Math.random() * availablePlayersForFilling.length)];
            tempOpponentSquad.push(randomFillPlayer);
            tempAssignedOpponentIds.add(randomFillPlayer.id);
        } else {
            console.warn("Rakip takım için 11 oyuncu doldurulamadı, oyuncu havuzu tükendi.");
            break;
        }
    }

    opponentSquad = tempOpponentSquad.slice(0, requiredPlayers);

    return opponentSquad;
}


function showOpponentSquadModal(squad) {
    opponentSquadTitle.textContent = `Rakip Kadro: ${awayTeamName}`;
    let allOpponentCardsHtml = '';

    if (squad.length === 0) {
        allOpponentCardsHtml = '<p class="text-gray-400 text-lg text-center w-full">Rakip kadrosu henüz oluşturulamadı.</p>';
    } else {
        squad.forEach(player => {
            allOpponentCardsHtml += createFifaCardHTML(player, 'player-selection-card', false);
        });
    }
    opponentPlayersContainer.innerHTML = allOpponentCardsHtml;
    opponentSquadModal.classList.add('active');
}


function closeOpponentSquadModal() {
    opponentSquadModal.classList.remove('active');
}


function showPlayerStatsModal() {
    let statsHtml = '';

    statsHtml += `<h3 class="team-header">${homeTeamName} İstatistikleri</h3>`;
    statsHtml += generateStatsTable(userSquadMatchStats);

    statsHtml += `<h3 class="team-header mt-8">${awayTeamName} İstatistikleri</h3>`;
    statsHtml += generateStatsTable(opponentSquadMatchStats);

    statsContent.innerHTML = statsHtml;
    playerStatsModal.classList.add('active');
}


function closePlayerStatsModal() {
    playerStatsModal.classList.remove('active');
}


function generateStatsTable(squadStats) {
    let tableHtml = `
        <table class="stats-table">
            <thead>
                <tr>
                    <th>Oyuncu</th>
                    <th>Pos</th>
                    <th>Rating</th>
                    <th>Gol</th>
                    <th>Asist</th>
                    <th>Pas %</th>
                    <th>Faul</th>
                    <th>Ofsayt</th>
                    <th>Kartlar</th> 
                </tr>
            </thead>
            <tbody>
    `;

    squadStats.sort((a, b) => parseFloat(b.matchRating) - parseFloat(a.matchRating));
    squadStats.forEach(player => {
        const passPercentage = player.passesAttempted > 0
            ? ((player.passesCompleted / player.passesAttempted) * 100).toFixed(1)
            : '0.0';

        let cardIcons = '';
        if (player.yellowCards > 0) {
            cardIcons += `<span class="card-icon yellow-card-icon">${player.yellowCards}</span>`;
        }
        if (player.redCards > 0) {
            cardIcons += `<span class="card-icon red-card-icon">${player.redCards}</span>`;
        }

        tableHtml += `
            <tr>
                <td>${player.name}</td>
                <td>${player.pos}</td>
                <td>${player.matchRating}</td>
                <td>${player.matchGoals}</td>
                <td>${player.matchAssists}</td>
                <td>%${passPercentage}</td>
                <td>${player.foulsCommitted}</td>
                <td>${player.offsides}</td>
                <td>${cardIcons || '-'}</td>
            </tr>
        `;
    });
    tableHtml += `
            </tbody>
        </table>
    `;
    return tableHtml;
}




function simulateMinute() {
    currentMinute++;
    matchInfoEl.textContent = `Dakika: ${currentMinute} - ${tournamentStages[currentTournamentStageIndex]}`;

    const eventRoll = Math.random();

    const eventThresholdGoalAttempt = 0.05;
    const eventThresholdMinor = 0.55;
    const eventThresholdCard = 0.65;

    const currentStageName = tournamentStages[currentTournamentStageIndex];
    const difficulty = difficultySettings[currentStageName];

    [userSquadMatchStats, opponentSquadMatchStats].forEach(squadStats => {
        squadStats.forEach(player => {
           
            if (player && player.isOnField) {
                if (player.pos !== 'GK') {
                    const passes = Math.floor(Math.random() * 3);
                    player.passesAttempted += passes;
                    player.passesCompleted += Math.round(passes * (0.7 + Math.random() * 0.2));
                } else {
                    const passes = Math.floor(Math.random() * 2);
                    player.passesAttempted += passes;
                    player.passesCompleted += Math.round(passes * (0.5 + Math.random() * 0.3));
                }
            }
        });
    });

    if (eventRoll < eventThresholdGoalAttempt) {
        const homeAdvantageFactor = difficulty.homeGoalMultiplier / (difficulty.homeGoalMultiplier + difficulty.awayGoalMultiplier);

        const isHomeAttempt = Math.random() < homeAdvantageFactor;

        const VAR_CHECK_CHANCE = 0.20;
        const OFFSIDE_VAR_CHANCE = 0.50;

        let goalScored = false;
        let scorer = null;
        let assistPlayer = null;

        const availableUserPlayers = userSquadMatchStats.filter(p => p && p.pos !== 'GK' && p.isOnField);
        const availableOpponentPlayers = opponentSquadMatchStats.filter(p => p && p.pos !== 'GK' && p.isOnField);


        if (isHomeAttempt) {
            scorer = getRandomPlayer(availableUserPlayers);
            if (scorer) {
                homeScore++;
                scorer.matchGoals++;
                scorer.matchRating = Math.min(9.9, parseFloat(scorer.matchRating) + 0.5).toFixed(1);
                goalScored = true;

                const outfieldPlayers = availableUserPlayers.filter(p => p && p.pos !== 'GK' && p.id !== scorer.id);
                if (outfieldPlayers.length > 0 && Math.random() < 0.6) {
                    assistPlayer = getRandomPlayer(outfieldPlayers);
                    if (assistPlayer) {
                        assistPlayer.matchAssists++;
                        assistPlayer.matchRating = Math.min(9.9, parseFloat(assistPlayer.matchRating) + 0.3).toFixed(1);
                    }
                }
            }
        } else {
            scorer = getRandomPlayer(availableOpponentPlayers);
            if (scorer) {
                awayScore++;
                scorer.matchGoals++;
                scorer.matchRating = Math.min(9.9, parseFloat(scorer.matchRating) + 0.5).toFixed(1);
                goalScored = true;

                const outfieldPlayers = availableOpponentPlayers.filter(p => p && p.pos !== 'GK' && p.id !== scorer.id);
                if (outfieldPlayers.length > 0 && Math.random() < 0.6) {
                    assistPlayer = getRandomPlayer(outfieldPlayers);
                    if (assistPlayer) {
                        assistPlayer.matchAssists++;
                        assistPlayer.matchRating = Math.min(9.9, parseFloat(assistPlayer.matchRating) + 0.3).toFixed(1);
                    }
                }
            }
        }

        if (goalScored) {
            scoreDisplayEl.textContent = `${homeScore} - ${awayScore}`;

            if (Math.random() < VAR_CHECK_CHANCE) {
                addCommentatorMessage(`GOL! AMA VAR KONTROLÜ VAR! Hakem kulağında, pozisyon inceleniyor...`, 'info');
                clearInterval(matchInterval);

                setTimeout(() => {
                    if (Math.random() < OFFSIDE_VAR_CHANCE) {
                        if (isHomeAttempt) {
                            homeScore--;
                        } else {
                            awayScore--;
                        }
                        if (scorer) {
                            scorer.matchGoals--;
                            scorer.offsides++;
                            scorer.matchRating = Math.max(5.0, parseFloat(scorer.matchRating) - 0.2).toFixed(1);
                        }
                        if (assistPlayer) {
                            assistPlayer.matchAssists--;
                            assistPlayer.matchRating = Math.max(5.0, parseFloat(assistPlayer.matchRating) - 0.1).toFixed(1);
                        }

                        addCommentatorMessage(`VAR KARARI: HAYIR! GOL İPTAL EDİLDİ! ${scorer ? scorer.name : 'Oyuncu'} OFSAYT POZİSYONUNDAYDI! Futbolcular şaşkın!`, 'offside');
                        scoreDisplayEl.textContent = `${homeScore} - ${awayScore}`;
                        matchInterval = setInterval(() => simulateMinute(), matchSpeed);
                    } else {
                        addCommentatorMessage(`VAR KARARI: GOL GEÇERLİ! OFSAYT YOK! Maç kaldığı yerden devam ediyor.`, 'goal');
                        matchInterval = setInterval(() => simulateMinute(), matchSpeed);
                    }
                    commentatorBoxEl.scrollTop = commentatorBoxEl.scrollHeight;
                }, 3000);
            } else {
                addCommentatorMessage(`${isHomeAttempt ? homeTeamName : awayTeamName} GOOOOOOOL! ${scorer ? scorer.name : 'Oyuncu'} topu ağlara gönderdi! Skor şimdi ${homeScore}-${awayScore}.`, 'goal');
            }
        } else {
            addCommentatorMessage(`${currentMinute}' - ${isHomeAttempt ? homeTeamName : awayTeamName} atağı! Şut dışarı gitti.`, 'info');
        }

    } else if (eventRoll < eventThresholdMinor) {
        handleMinorEvent();
    } else if (eventRoll < eventThresholdCard) {
        handleCardEvent();
    } else {
        if (currentMinute % 10 === 0 && currentMinute <= 80) {
            addCommentatorMessage(`Maçta ${currentMinute}. dakika geride kaldı. Orta sahada mücadele devam ediyor.`);
        }
    }

    [userSquadMatchStats, opponentSquadMatchStats].forEach(squadStats => {
        squadStats.forEach(player => {
           
            if (player && player.isOnField) {
                player.matchRating = Math.max(5.0, parseFloat(player.matchRating) - 0.005).toFixed(1);
            }
        });
    });

    if (currentMinute >= 90) {
        endRegularTime();
    }
    commentatorBoxEl.scrollTop = commentatorBoxEl.scrollHeight;
}


 
 
function handleMinorEvent() {
    const eventTypeRand = Math.random();
    const teamIsHome = Math.random() < 0.5;
    const actingTeamName = teamIsHome ? homeTeamName : awayTeamName;
    const actingTeamSquadStats = teamIsHome ? userSquadMatchStats.filter(p => p.isOnField) : opponentSquadMatchStats.filter(p => p.isOnField); // Filter for players still on field
    const actingPlayer = getRandomPlayer(actingTeamSquadStats);

    if (!actingPlayer) return; 

    const eventMessages = {
        foul: [`${actingTeamName} faul yaptı, hakem düdüğünü çaldı.`, `${actingPlayer.name}'dan sert müdahale.`],
        corner: [`${actingTeamName} korner kullanacak.`, `Köşe vuruşu, ${actingTeamName} için tehlike olabilir.`],
        throwIn: [`${actingTeamName} taç atışını kullanıyor.`, `Oyun taç çizgisi dışına çıktı, ${actingTeamName} kullanacak.`],
        freekick: [`${actingTeamName} için tehlikeli bir serbest vuruş!`, `Ceza sahası dışından serbest vuruş, ${actingTeamName} kullanacak.`]
    };

    let message = "";
    if (eventTypeRand < 0.4) {
        const baseMessage = eventMessages.foul[Math.floor(Math.random() * eventMessages.foul.length)];
        message = baseMessage.includes("sert müdahale.") ? `${actingPlayer.name}'dan sert müdahale.` : `${actingTeamName} faul yaptı, hakem düdüğünü çaldı.`;
        actingPlayer.foulsCommitted++;
        actingPlayer.matchRating = Math.max(5.0, parseFloat(actingPlayer.matchRating) - 0.1).toFixed(1);
        addCommentatorMessage(message, 'foul');
    } else if (eventTypeRand < 0.7) {
        message = eventMessages.corner[Math.floor(Math.random() * eventMessages.corner.length)];
        addCommentatorMessage(message, 'corner');
    } else if (eventTypeRand < 0.9) {
        message = eventMessages.throwIn[Math.floor(Math.random() * eventMessages.throwIn.length)];
        addCommentatorMessage(message, 'info');
    } else {
        if (Math.random() < 0.1 && currentMinute > 20 && currentMinute < 85) {
            handlePenaltyEvent();
        } else {
            message = eventMessages.freekick[Math.floor(Math.random() * eventMessages.freekick.length)];
            addCommentatorMessage(message, 'info');
        }
    }
}


 
function handlePenaltyEvent() {
    const teamIsHome = Math.random() < 0.5;
    const teamNameForCommentary = teamIsHome ? homeTeamName : awayTeamName;
    const actingTeamSquadStats = teamIsHome ? userSquadMatchStats.filter(p => p.isOnField) : opponentSquadMatchStats.filter(p => p.isOnField); 
    const actingPlayer = getRandomPlayer(actingTeamSquadStats);

    if (!actingPlayer) return; 

    addCommentatorMessage(`BÜYÜK KARAR! Hakem penaltı noktasını gösterdi! ${teamNameForCommentary} için penaltı! ${actingPlayer.name} topun başında!`, 'penalty');

    setTimeout(() => {
        const isGoal = Math.random() < 0.75; 
        if (isGoal) {
            if (teamIsHome) {
                homeScore++;
                actingPlayer.matchGoals++;
                actingPlayer.matchRating = Math.min(9.9, parseFloat(actingPlayer.matchRating) + 0.8).toFixed(1);
                addCommentatorMessage(`${homeTeamName} penaltıyı gole çevirdi! ${actingPlayer.name} harika bir vuruş!`, 'goal');
            } else {
                awayScore++;
                actingPlayer.matchGoals++;
                actingPlayer.matchRating = Math.min(9.9, parseFloat(actingPlayer.matchRating) + 0.8).toFixed(1);
                addCommentatorMessage(`${awayTeamName} penaltıyı gole çevirdi! ${actingPlayer.name} hata yapmadı!`, 'goal');
            }
            scoreDisplayEl.textContent = `${homeScore} - ${awayScore}`;
        } else {
            actingPlayer.matchRating = Math.max(5.0, parseFloat(actingPlayer.matchRating) - 0.5).toFixed(1);
            addCommentatorMessage(`Penaltı kaçtı! Kaleci kurtardı veya ${actingPlayer.name} topu auta yolladı!`, 'foul');
        }
        commentatorBoxEl.scrollTop = commentatorBoxEl.scrollHeight;
    }, 500);
}


 
function handleCardEvent() {
    const teamIsHome = Math.random() < 0.5;
    const actingTeamName = teamIsHome ? homeTeamName : awayTeamName;
    const actingTeamSquadStats = teamIsHome ? userSquadMatchStats.filter(p => p.isOnField) : opponentSquadMatchStats.filter(p => p.isOnField); 
    const actingPlayer = getRandomPlayer(actingTeamSquadStats);

    if (!actingPlayer) return; 

    const cardType = Math.random() < 0.8 ? 'yellow' : 'red';

    let message = "";
    if (cardType === 'yellow') {
        actingPlayer.yellowCards++;
        actingPlayer.matchRating = Math.max(5.0, parseFloat(actingPlayer.matchRating) - 0.2).toFixed(1);
        message = `${actingTeamName} oyuncusu ${actingPlayer.name} sarı kart gördü. Dikkatli olması gerekiyor!`;
        addCommentatorMessage(message, 'yellow-card');
    } else {
        actingPlayer.redCards++;
        actingPlayer.matchRating = Math.max(3.0, parseFloat(actingPlayer.matchRating) - 1.0).toFixed(1);
        actingPlayer.isOnField = false; 

        if (teamIsHome) {
            userPlayersOnField--;
            message = `${actingTeamName} oyuncusu ${actingPlayer.name} kırmızı kart gördü! Takım ${userPlayersOnField} kişi kaldı! Bu büyük bir kayıp!`;
        } else {
            opponentPlayersOnField--;
            message = `${actingTeamName} oyuncusu ${actingPlayer.name} kırmızı kart gördü! Takım ${opponentPlayersOnField} kişi kaldı! Bu büyük bir kayıp!`;
        }

        addCommentatorMessage(message, 'red-card');
    }
}


function addCommentatorMessage(message, type = '') {
    const p = document.createElement('p');
    p.textContent = `[Dk.${currentMinute}] ${message}`;
    p.classList.add('commentator-message');
    if (type) {
        p.classList.add(type);
    }
    commentatorBoxEl.appendChild(p);
    commentatorBoxEl.scrollTop = commentatorBoxEl.scrollHeight;
}


function endRegularTime() {
    clearInterval(matchInterval);
    addCommentatorMessage("90 dakika sona erdi!", 'info');

    setTimeout(() => {
        if (homeScore > awayScore) {
            addCommentatorMessage("Maçı kazandınız! Bir üst tura yükseliyorsunuz!", 'goal');
            tournamentWins++;
            nextMatchBtn.textContent = 'Sonraki Maç';
            nextMatchBtn.style.display = 'block';
            startMatchBtn.style.display = 'none';
            viewOpponentSquadBtn.style.display = 'block';
            viewStatsBtn.style.display = 'block';
        } else if (awayScore > homeScore) {
            addCommentatorMessage("Maçı kaybettiniz. Turnuva sona erdi.", 'foul');
            endTournament(false);
        } else {
            addCommentatorMessage("Maç berabere bitti. Penaltı atışlarına gidiyoruz!", 'penalty');
            setTimeout(startPenaltyShootout, 1000);
        }
        commentatorBoxEl.scrollTop = commentatorBoxEl.scrollHeight;
    }, 500);
}


function startPenaltyShootout() {
    addCommentatorMessage("Penaltı Atışları Başlıyor!", 'info');
    let homePenalties = 0;
    let awayPenalties = 0;
    const maxRounds = 5;

    const penaltyOrder = [];
    for (let i = 0; i < maxRounds; i++) {
        penaltyOrder.push('home', 'away');
    }

    let currentPenaltyIndex = 0;

    function takeNextPenalty() {

        const totalPenaltiesTaken = currentPenaltyIndex;
        const penaltiesInInitialRounds = maxRounds * 2;

        if (totalPenaltiesTaken >= penaltiesInInitialRounds && homePenalties === awayPenalties) {

            penaltyOrder.push('home', 'away');
            addCommentatorMessage("Eşitlik devam ediyor, seri penaltılara geçiliyor!", 'info');
        } else if (totalPenaltiesTaken >= penaltiesInInitialRounds && homePenalties !== awayPenalties) {

            decidePenaltyWinner(homePenalties, awayPenalties);
            return;
        }

       
        const currentShooterTeam = penaltyOrder[currentPenaltyIndex];
        const isHomeShooter = currentShooterTeam === 'home';
        const shootingTeamName = isHomeShooter ? homeTeamName : awayTeamName;

        
        const availableShooters = (isHomeShooter ? userSquadMatchStats : opponentSquadMatchStats).filter(p => p.isOnField);

        setTimeout(() => {
            const scores = Math.random() < 0.65; 
            const penaltyTaker = getRandomPlayer(availableShooters);

            if (!penaltyTaker) {
                addCommentatorMessage(`${shootingTeamName} oyuncusu bulunamadı, penaltı kaçırıldı. Skor: ${homePenalties}-${awayPenalties}`, 'foul');

                currentPenaltyIndex++;
                takeNextPenalty();
                return;
            }

            if (scores) {
                if (isHomeShooter) {
                    homePenalties++;
                    penaltyTaker.matchGoals++;
                    penaltyTaker.matchRating = Math.min(9.9, parseFloat(penaltyTaker.matchRating) + 0.8).toFixed(1);
                    addCommentatorMessage(`${homeTeamName} oyuncusu ${penaltyTaker.name} penaltıyı gole çevirdi! Skor: ${homePenalties}-${awayPenalties}`, 'goal');
                } else {
                    awayPenalties++;
                    penaltyTaker.matchGoals++;
                    penaltyTaker.matchRating = Math.min(9.9, parseFloat(penaltyTaker.matchRating) + 0.8).toFixed(1);
                    addCommentatorMessage(`${awayTeamName} oyuncusu ${penaltyTaker.name} penaltıyı gole çevirdi! Skor: ${homePenalties}-${awayPenalties}`, 'goal');
                }
            } else {
                penaltyTaker.matchRating = Math.max(5.0, parseFloat(penaltyTaker.matchRating) - 0.5).toFixed(1);
                addCommentatorMessage(`${shootingTeamName} oyuncusu ${penaltyTaker.name} penaltıyı kaçırdı! Skor: ${homePenalties}-${awayPenalties}`, 'foul');
            }

            commentatorBoxEl.scrollTop = commentatorBoxEl.scrollHeight;
            currentPenaltyIndex++;

            const currentRound = Math.floor(currentPenaltyIndex / 2);
            const remainingPensForNormalRound = (maxRounds - currentRound) * 2;

            let canDetermineWinner = false;
            if (currentPenaltyIndex >= penaltiesInInitialRounds) {
                canDetermineWinner = homePenalties !== awayPenalties;
            } else {
                const homeMaxPossible = homePenalties + (maxRounds - currentRound);
                const awayMaxPossible = awayPenalties + (maxRounds - currentRound);
                canDetermineWinner = (homePenalties > awayMaxPossible || awayPenalties > homeMaxPossible);
            }

            if (canDetermineWinner) {
                decidePenaltyWinner(homePenalties, awayPenalties);
            } else {
                takeNextPenalty();
            }

        }, 500);
    }

    function decidePenaltyWinner(finalHomePenalties, finalAwayPenalties) {
        if (finalHomePenalties > finalAwayPenalties) {
            addCommentatorMessage(`Penaltılar Sonucunda Galip **${homeTeamName}**! Turnuvaya devam ediyorsunuz!`, 'goal');
            tournamentWins++;
            nextMatchBtn.textContent = 'Sonraki Maç';
            nextMatchBtn.style.display = 'block';
            startMatchBtn.style.display = 'none';
            viewOpponentSquadBtn.style.display = 'block';
            viewStatsBtn.style.display = 'block';
        } else {
            addCommentatorMessage(`Penaltı Atışları Sonucunda Maalesef **${awayTeamName}** kazandı. Turnuva sona erdi.`, 'foul');
            endTournament(false);
        }
        commentatorBoxEl.scrollTop = commentatorBoxEl.scrollHeight;
    }

    takeNextPenalty();
}