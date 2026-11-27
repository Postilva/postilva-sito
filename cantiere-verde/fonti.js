/* Dati di base con le fonti ufficiali: non modificare a mano. */
/* Cantiere verde · dati (aggiornati al 23/11/2026). Ogni affermazione rimanda a una fonte di FONTI. */
var AGG = "23 novembre 2026";
var PP = "https://partecipazione.regione.puglia.it/uploads/decidim/attachment/file/";
var CG = "https://commissari.gov.it/media/";

/* tipo: atto = atto ufficiale; ente = pubblicazione ufficiale di un ente (comunicato, presentazione, elenco); perc = documento del percorso partecipativo (non è un atto) */
var FONTI = {
  schede1: { tipo: "perc", ente: "Percorso partecipativo Mar Piccolo (UniBa, NAPS LAB)", t: "Schede di intervento INT-01 … INT-06", d: "26/03/2026", u: PP + "6384/Schede_Intervento.pdf" },
  schede2: { tipo: "perc", ente: "Percorso partecipativo Mar Piccolo (UniBa, NAPS LAB)", t: "Schede di intervento INT-07 … INT-11", d: "30/04/2026", u: PP + "6486/Schede_Intervento_INT07-INT11.pdf" },
  comune: { tipo: "ente", ente: "Comune di Taranto", t: "Gli interventi elaborati e promossi dall'amministrazione comunale (presentazione al percorso)", d: "marzo 2026", u: PP + "6381/GIORNO_Presentazione_progetti_ComuneTA_marzo_2026_partecipazione_Mar_Piccolo.pdf" },
  casola: { tipo: "perc", ente: "Università di Bari, Dipartimento Jonico", t: "Nuovi approcci partecipativi per la valorizzazione del Mar Piccolo (apertura)", d: "16/03/2026", u: PP + "6382/CASOLA_Nuovi-approcci-partecipativi-per-la-valorizzazione-del-Mar-Piccolo.pdf" },
  riass16: { tipo: "perc", ente: "Percorso partecipativo Mar Piccolo (NAPS LAB)", t: "Scheda riassuntiva del terzo incontro", d: "16/04/2026", u: PP + "6388/Scheda_riassuntiva_Incontro_16_04_2026.pdf" },
  tav8: { tipo: "perc", ente: "Percorso partecipativo Mar Piccolo (NAPS LAB)", t: "Report del tavolo 8: bonifiche, accesso ai dati, rilancio d'impresa", d: "24/06/2026", u: PP + "6490/Report_Tavolo8_MarPiccolo_24-06-2026_con_mappe.pdf" },
  mase26: { tipo: "ente", ente: "Ministero dell'Ambiente (MASE)", t: "Il procedimento di bonifica nei SIN (presentazione al tavolo 8)", d: "24/06/2026", u: PP + "6491/Presentazione_MASE.pdf" },
  sintesi: { tipo: "perc", ente: "Percorso partecipativo Mar Piccolo", t: "Documento di sintesi e raccomandazioni (settimo incontro)", d: "26/05/2026", u: "" },
  jtf: { tipo: "ente", ente: "Programma nazionale JTF", t: "Elenco delle procedure dell'Organismo intermedio Regione Puglia, jtf.gov.it", d: "letto il 23/11/2026", u: "https://www.jtf.gov.it/procedure" },
  cds: { tipo: "ente", ente: "Commissario straordinario bonifiche Taranto", t: "Comitato di sorveglianza JTF a Taranto: rimodulazione per bonifiche e Mar Piccolo (comunicato)", d: "04/12/2025", u: CG + "gpffmesn/1_comunicato-stampa_bonifiche-e-riqualificazione-ambientale-jtf-condiviso.pdf" },
  carta: { tipo: "ente", ente: "Percorso partecipativo, Dipartimento Jonico UniBa", t: "La Carta del Mar Piccolo: per una governance sostenibile e partecipata", d: "07/04/2025", u: CG + "foifbbvt/carta-del-mar-piccolo-def-07042025.pdf" },
  cartacom: { tipo: "ente", ente: "Commissario straordinario bonifiche Taranto", t: "Consegnata la Carta del Mar Piccolo al Commissario (comunicato)", d: "04/04/2025", u: CG + "x0xnqach/comunicato-stampa-3_4_25.pdf" },
  prot: { tipo: "ente", ente: "Commissario straordinario bonifiche Taranto", t: "Protocollo d'intesa tra Comune di Taranto e Commissario (comunicato)", d: "26/02/2026", u: CG + "mznbkqsi/comunicato-stampa_accordo-comune-commissario.pdf" },
  cis26: { tipo: "ente", ente: "Commissario straordinario bonifiche Taranto", t: "Mar Piccolo: approvato nel monitoraggio del CIS un intervento da mezzo milione per relitti e rifiuti (comunicato)", d: "26/06/2026", u: CG + "va3mk5yi/comunicato-mar-piccolo-coste-e-arenili.pdf" },
  dec43: { tipo: "ente", ente: "Commissario straordinario bonifiche Taranto", t: "Avvio delle misure di prevenzione su coste, arenili e fondali del Mar Piccolo, decreto commissariale n. 43/2026 (comunicato)", d: "07/08/2026", u: CG + "2fjpqsuu/2_comunicato-post-avvio-misure_20260807_last.pdf" },
  cufa: { tipo: "ente", ente: "Commissario straordinario bonifiche Taranto", t: "Accordo quadro con il Comando unità forestali dei Carabinieri per le Filiere verdi (comunicato)", d: "data da verificare", u: CG + "2gan5nrm/6_post-comunicato-stampa-con-cufa.pdf" },
  mit1: { tipo: "ente", ente: "Commissario straordinario bonifiche Taranto", t: "Decontaminazione dei mitili: risultati preliminari (comunicato)", d: "06/02/2026", u: CG + "1jdb2gue/comunicato-decontaminazione.pdf" },
  mit2: { tipo: "ente", ente: "Commissario straordinario bonifiche Taranto", t: "Presentati i risultati finali del progetto sui tassi di decontaminazione dei mitili (comunicato)", d: "06/07/2026", u: CG + "vtlbrzfv/2_decontaminazione-post-conferenza-stampa.pdf" },
  mit3: { tipo: "ente", ente: "Commissario straordinario bonifiche Taranto", t: "Confronto con gli assessori regionali sugli esiti della decontaminazione (comunicato)", d: "07/09/2026", u: CG + "xxeavpmk/riunione-in-regione-per-decontaminazione.pdf" },
  tamb: { tipo: "ente", ente: "Commissario straordinario bonifiche Taranto", t: "Tamburi: via ai lavori di caratterizzazione dell'impianto «Atleti Azzurri d'Italia» (comunicato)", d: "17/10/2025", u: CG + "oinp0na3/comunicato-stampa-tamburi.pdf" },
  coes: { tipo: "ente", ente: "Commissario straordinario bonifiche Taranto", t: "Firmato l'Accordo per la coesione: fondi FSC per il SIN di Taranto (comunicato)", d: "10/11/2025", u: CG + "y2jhp10m/comunicato-accordo-per-la-coesione-taranto.pdf" },
  insed: { tipo: "ente", ente: "Commissario straordinario bonifiche Taranto", t: "S'insedia la struttura del Commissario per le bonifiche (comunicato)", d: "12/03/2025", u: CG + "gfijtjgt/2_comunicato-stampa-12_3_25.pdf" },
  cis25: { tipo: "ente", ente: "Commissario straordinario bonifiche Taranto", t: "Riavviato il Contratto istituzionale di sviluppo di Taranto (comunicato)", d: "20/06/2025", u: CG + "beclgd2h/comunicato-stampa_cis_20_6_25.pdf" },
  azi: { tipo: "ente", ente: "MASE e Commissario straordinario", t: "Supporto alle imprese per caratterizzazione e bonifica in aree private (comunicato)", d: "20/05/2026", u: CG + "h3bhx3lh/comunicato-supporto-aziende.pdf" },
  dm449: { tipo: "atto", ente: "Ministro dell'Ambiente e della Sicurezza energetica", t: "Decreto n. 449 del 20/12/2024: nuova perimetrazione del SIN di Taranto (Gazzetta Ufficiale n. 10 del 14/01/2025)", d: "20/12/2024", u: CG + "vvjjcrzx/24-449_dec-ministro-taranto.pdf" },
  rel23: { tipo: "atto", ente: "Commissario straordinario bonifiche Taranto", t: "Relazione acquisita dalla Commissione Ambiente della Camera", d: "29/09/2023", u: "https://documenti.camera.it/leg19/documentiAcquisiti/COM05/Progettodilegge/leg19.com05.Progettodilegge.Altro.PUBBLICO.ideGes.26863.16-01-2024-10-27-10.315.pdf" },
  rel18: { tipo: "atto", ente: "Commissario straordinario bonifiche Taranto", t: "Relazione sintetica", d: "dicembre 2018", u: "https://www.camera.it/application/xmanager/projects/leg18/attachments/upload_file_doc_acquisiti/pdfs/000/000/520/RELAZIONE_dicembre_2018.pdf" },
  inch22: { tipo: "atto", ente: "Commissione parlamentare d'inchiesta sul ciclo dei rifiuti", t: "Relazione finale sulle bonifiche ex Ilva e aree contermini (Doc. XXIII n. 33)", d: "15/09/2022", u: "https://www.parlamento.it/service/PDF/PDFServer/BGT/1360826.pdf" },
  ciscs: { tipo: "ente", ente: "CIS Taranto centro storico (Ministero della Cultura)", t: "Cronoprogramma procedurale degli interventi, stato al 28/02/2025", d: "28/02/2025", u: "https://programmazionestrategica.cultura.gov.it/wp-content/uploads/2020/04/CIS-Taranto-centro-storico-Cronoprogramma-procedurale-degli-interventi-al-28.02.25.pdf" },
  cc18: { tipo: "atto", ente: "Comune di Taranto, Consiglio comunale", t: "Resoconto della seduta di question time", d: "18/02/2026", u: "https://comune.taranto.it/s3/7152/allegati/03-18022026-qt.pdf" },
  dgr981: { tipo: "atto", ente: "Regione Puglia, Giunta", t: "Deliberazione n. 981 dell'8/7/2024: FSC 2021-2027 e priorità nei SIN (BURP n. 67/2024)", d: "08/07/2024", u: CG + "e0tj43m2/del_981_2024.pdf" },
  remar: { tipo: "atto", ente: "Comune di Taranto", t: "Progetto definitivo «Mar Piccolo» (DEF021): relazione tecnica e relazione botanico-vegetazionale", d: "data non letta", u: "https://old.comune.taranto.it/attachments/article/5166/TARANTO_DEF021_Mar%20Piccolo_Relaz%20Tecn%20illust.pdf" },
  ad38: { tipo: "atto", ente: "Regione Puglia, Dipartimento Ambiente", t: "Atto dirigenziale n. 38 del 13/03/2026: Filiere verdi, ammissione a finanziamento, schema di disciplinare, impegni di spesa 2026-2029 (CUP J41J26000640006)", d: "13/03/2026", u: "https://www.regione.puglia.it/documents/44781/10115101/009_DIR_2026_00038_VIN_A_I_VIA_.pdf/317dd1f7-dd19-ff32-3c94-633702401c57?t=1777382642620" },
  ad38n: { tipo: "ente", ente: "Regione Puglia, Dipartimento Ambiente", t: "Procedura Filiere Verdi: ammissione a finanziamento (aree a terra 22.976.046 €, aree a mare 10.659.480 €)", d: "16/03/2026", u: "https://www.regione.puglia.it/web/ambiente/-/procedura-filiere-verdi-azione-2.3.-ammissione-a-finanziamento-approvazione-schema-di-disciplinare-accertamento-in-entrata-e-registrazione-impegno-di-spesa" },
  fvpress: { tipo: "ente", ente: "Regione Puglia, Press Regione", t: "Taranto, al via il progetto «Filiere Verdi»: aree della Marina Militare, dei Carabinieri forestali e del Demanio", d: "16/03/2026", u: "https://www.regione.puglia.it/web/press-regione/-/taranto-al-via-il-progetto-filiere-verdi-23-milioni-per-il-risanamento-ecologico" },
  dd75: { tipo: "atto", ente: "Regione Puglia, Dipartimento Ambiente", t: "Determinazione n. 75 del 30/07/2025: avvio della procedura negoziale Filiere verdi (BURP n. 65 del 13/08/2025)", d: "30/07/2025", u: "https://www.regione.puglia.it/documents/44781/9652890/DET_75_30_7_2025.pdf/66c8b418-4972-c737-4b49-3de8bc4b9893?t=1755086307841" },
  dd118: { tipo: "atto", ente: "Regione Puglia, Dipartimento Ambiente", t: "Determinazione n. 118 del 7/08/2026: avvio della procedura Sea Hub, 55.203.555,90 € prenotati (Comune 42 milioni, Commissario 13,2 milioni)", d: "07/08/2026", u: "https://www.regione.puglia.it/documents/44781/12219033/009_DIR_2026_00118_DeterminaPUB.pdf/52522b66-ae4f-d3c8-7c9c-5dd6e7ac0f47?t=1788795668369" },
  sh55: { tipo: "ente", ente: "Regione Puglia, Press Regione", t: "La Giunta porta a 55,2 milioni il Sea Hub: 42 milioni al Comune, 13,2 al Commissario per l'Arco Nord", d: "21/07/2026", u: "https://www.regione.puglia.it/web/press-regione/-/ambiente-la-giunta-porta-a-55-2-milioni-di-euro-lo-stanziamento-per-il-progetto-di-riqualificazione-delle-coste-tarantine-sea-hub-inserito-nel-just-transition-fund" },
  dd145: { tipo: "atto", ente: "Regione Puglia, Sezione Paesaggio", t: "Determinazione dirigenziale n. 145 del 22/09/2025: ricognizione della proposta Green Belt", d: "22/09/2025", u: "https://progetti.jtf.gov.it/storage/procedures/23/documents/m20TKY8psnm9kOZOjcWnj6hobXlgDiSgE5fxbKZg.pdf" },
  gbchiusa: { tipo: "ente", ente: "Regione Puglia", t: "JTF Taranto: chiusa la procedura negoziale Green Belt, gli otto parchi ammessi con gli importi", d: "29/05/2026", u: "https://www.regione.puglia.it/web/territorio-mobilita-e-infrastrutture/-/jtf-taranto-chiusa-la-procedura-negoziale-green-belt" },
  gb68: { tipo: "ente", ente: "Programma nazionale JTF", t: "Scheda progetto: Green Belt, Parco naturalistico del fiume Galeso", d: "letto il 23/11/2026", u: "https://www.jtf.gov.it/progetti/68/" },
  gb69: { tipo: "ente", ente: "Programma nazionale JTF", t: "Scheda progetto: Green Belt, Parco della Rimembranza", d: "letto il 23/11/2026", u: "https://www.jtf.gov.it/progetti/69/" },
  foresta: { tipo: "ente", ente: "Programma nazionale JTF", t: "Operazione «Foresta Urbana Nord-CIS» (azione 2.3, CUP J41J26000640006): 6.850.945 € ammessi, 3.407.693,23 € certificati alla UE", d: "letto il 23/11/2026", u: "https://www.jtf.gov.it/procedura/?id=3fa9d9de-57d9-455c-b446-6ed45b94faf4" },
  decipcei: { tipo: "atto", ente: "Autorità di gestione PN JTF (Dipartimento politiche di coesione)", t: "Decreto del 6/08/2026 sul progetto idrogeno: target di spesa al 31/12/2026, quota Taranto e spesa certificata", d: "06/08/2026", u: "https://www.jtf.gov.it/wp-content/uploads/2026/11/Decreto_di_approvazione_IPCEI_06_08_2026_v2.docx1_.pdf" },
  det220: { tipo: "atto", ente: "Regione Puglia, Comunicazione istituzionale", t: "Determinazione n. 220 del 28/05/2026 (richiama la dotazione JTF della Provincia di Taranto: 795.610.021 €)", d: "28/05/2026", u: "https://trasparenza.regione.puglia.it/sites/default/files/2026-06/142_DIR_2026_00220_DeterminaPUB_pdf.pdf" },
  reg1060: { tipo: "atto", ente: "Unione europea", t: "Regolamento (UE) 2021/1060, art. 63: le spese sono ammissibili se pagate entro il 31 dicembre 2029", d: "24/06/2021", u: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32021R1060" }
};

/* Segnalazioni di stampa: non sono fonti. Dicono dove cercare l'atto vero. */
var STAMPA = [
  { d: "16/03/2026", t: "Filiere verdi: «22.976.046 euro autorizzati» dalla Regione, altri 10,6 milioni per gli specchi d'acqua.", f: "PugliaLive", u: "https://www.puglialive.net/taranto-al-via-il-progetto-filiere-verdi-23-milioni-per-il-risanamento-ecologico", cerca: "Confermato dall'atto dirigenziale n. 38/2026 della Regione" },
  { d: "24/04/2026", t: "Filiere verdi: 33 milioni su 90 ettari di aree pubbliche.", f: "Il Sole 24 Ore", u: "https://en.ilsole24ore.com/art/taranto-just-transition-fundora-accelerates-away-first-tenders-AIbfETTC", cerca: "Gli atti danno 22,98 milioni a terra e 3,06 a mare: il dato «33 milioni» è superato" },
  { d: "15/07/2026", t: "Firmati i disciplinari tra Regione e soggetti attuatori per Filiere verdi e Green Belt; bando Sogesid previsto a settembre.", f: "Corriere di Taranto", u: "https://www.corriereditaranto.it/2026/07/15/jtf-firmati-i-disciplinari-di-filiere-verdi-e-green-belt/", cerca: "Disciplinari (G2)" },
  { d: "25/07/2026", t: "Sea Hub: 55.203.555,90 euro, di cui 13,2 milioni al Commissario per l'Arco Nord.", f: "CosmoPolis", u: "https://www.cosmopolis.media/primo-piano/sea-hub-confermati-oltre-55-milioni-di-euro-per-il-rilancio-sostenibile-del-sistema-mare-taranto/segreteria-di-redazione/", cerca: "Confermato dalla DGR 1009/2026 e dalla determinazione n. 118/2026" },
  { d: "12/12/2025", t: "Protocollo tra Agenzia spaziale italiana e commissari per le bonifiche (Taranto e Terra dei Fuochi).", f: "ANSA", u: "https://www.ansa.it/sito/notizie/cronaca/2025/12/12/tecnologie-spaziali-per-taranto-e-terra-dei-fuochi-intesa-asi-e-commissari_687c19bb-ebbb-4a80-9ed9-ff543700a7a3.html", cerca: "Testo del protocollo ASI (11.3)" },
  { d: "16/03/2026", t: "Presentato il protocollo tra Commissario e Guardia di Finanza. La scheda del percorso lo dà firmato il 13/03/2025.", f: "TarantoToday", u: "https://www.tarantotoday.it/ambiente/taranto-intesa-guardia-finanza-commissario-bonifiche-droni-satelliti-16-03-2026.html", cerca: "Testo dell'accordo (11.2)" },
  { d: "11/10/2026", t: "Via del Redda: caratterizzazione validata da ARPA, conferenza dei servizi sull'analisi di rischio con termine al 28/10.", f: "Corriere di Taranto", u: "https://www.corriereditaranto.it/2026/10/11/campo-sportivo-ai-tamburi-conferenza-di-servizi-e-poi-la-gara/", cerca: "Esiti della caratterizzazione (10.1)" }
];

/* ------------------------------------------------------------------ interventi */
var INT = [
{
  id: "int-01", n: "01", nome: "Parco naturalistico del fiume Galeso", sotto: "Green Belt · un parco di circa 20 ettari alla foce del Galeso",
  chi: "comune", fondi: "jtf", fase: ["ocra", "Ammesso, da progettare"], tavolo: "t3",
  lede: ["Ha 13,78 milioni ammessi dal JTF (maggio 2026), ma ad aprile 2026 era ancora in fase pre-progettuale e non risulta spesa.", "gbchiusa"],
  breve: [["Soldi", "13.778.650,98 € ammessi (JTF, Green Belt)"], ["Chi", "Comune di Taranto"], ["Dove", "Foce del Galeso, sponda nord del primo seno"], ["Superficie", "Circa 20 ettari"]],
  che: [
    ["È uno degli otto interventi della Green Belt finanziati dal JTF: circa 230 ettari di verde in tutta la città, nell'azione 2.3 del Piano territoriale.", "comune"],
    ["Il parco occupa la foce del Galeso, tra la ferrovia e la costa del primo seno: forestazione, zone umide, percorsi e un laboratorio di educazione ambientale.", "comune"],
    ["La Green Belt prevede anche pulizia e messa in sicurezza delle aree prima delle indagini e del progetto.", "comune"]
  ],
  finora: [["Il 22 settembre 2025 la Regione avvia la procedura Green Belt (determinazione n. 145); il Comune presenta la proposta entro il 21 novembre 2025.", "dd145"], ["Il 26 marzo 2026 il Comune presenta il parco al percorso partecipativo.", "schede1"], ["Il 29 maggio 2026 la Regione chiude la procedura negoziale: il parco del Galeso ha 13.778.650,98 euro, il più grande degli otto parchi dopo il Parco Mar Grande.", "gbchiusa"]],
  manca: [["Il progetto, il responsabile del procedimento e il CUP: sulla scheda del JTF sono «non disponibili».", "gb68"], ["Le analisi dei suoli e delle acque alla foce.", ""]],
  adesso: [["Al 23 novembre 2026 la scheda del JTF dà «non disponibile» sia l'importo giuridicamente vincolante sia quello erogato.", "gb68"]],
  soldi: ["13.778.650,98 euro ammessi dal JTF: è il 16% degli 84,09 milioni della Green Belt.", "gbchiusa"],
  cv: ["Prevede nuova forestazione, zone umide e piante rifugio per impollinatori: è il filone 3A fatto con fondi pubblici.", "Il laboratorio di educazione ambientale e la gestione condivisa sono lo spazio naturale del filone 3B.", "Il progetto è ancora da scrivere: una proposta del tavolo su specie e gestione può entrare nella co-progettazione."],
  crono: [
    ["2025-04-07", "La Carta del Mar Piccolo indica tra le priorità la rigenerazione delle aree costiere.", "carta"],
    ["2025-09-22", "La Regione avvia la procedura Green Belt (determinazione n. 145).", "dd145"],
    ["2025-11-21", "Scadenza per la proposta del Comune.", "dd145", "scadenza"],
    ["2026-02-18", "Il Consiglio comunale approva all'unanimità una mozione sul Galeso e sulla «Rotta dei Due Mari».", "cc18"],
    ["2026-03-26", "Il Comune presenta il parco: circa 20 ettari, procedura negoziale in corso.", "schede1"],
    ["2026-04-16", "Scheda riassuntiva del percorso: fase pre-progettuale.", "riass16"],
    ["2026-05-29", "Chiusa la procedura negoziale: 13.778.650,98 euro al parco del Galeso.", "gbchiusa"],
    ["2026-11-23", "Sul sito del JTF impegni ed erogazioni «non disponibili».", "gb68"]
  ],
  img: [["galeso-dettaglio.jpg", "Dettaglio del parco naturalistico del fiume Galeso: forestazione, zone umide, percorsi.", "comune"], ["galeso-rimembranza.jpg", "Il parco del Galeso e il Parco della Rimembranza, con il percorso ciclopedonale che li unisce.", "comune"]],
  richieste: ["G1", "G2", "G15", "01.2", "01.3", "01.4"]
},
{
  id: "int-02", n: "02", nome: "Parco della Rimembranza", sotto: "Green Belt · la fascia verde lungo la costa di Punta Penna",
  chi: "comune", fondi: "jtf", fase: ["rosso", "Ammesso, area sotto sequestro"], tavolo: "t3",
  lede: ["Ha 9,84 milioni ammessi dal JTF, ma è bloccato da un sequestro: ad aprile 2026 l'area era ancora sotto sequestro, con l'accesso autorizzato solo per togliere i rifiuti.", "riass16"],
  breve: [["Soldi", "9.835.198,62 € ammessi (JTF, Green Belt)"], ["Chi", "Comune di Taranto"], ["Dove", "Sponda est del primo seno, fino al ponte di Punta Penna"], ["Superficie", "Non indicata"]],
  che: [
    ["È la riqualificazione del parco lungo la costa est del primo seno, dentro la Green Belt finanziata dal JTF.", "comune"],
    ["Un percorso ciclopedonale lo collega al parco del Galeso.", "comune"]
  ],
  finora: [["Il 26 marzo 2026 il Comune presenta l'intervento: procedura negoziale in corso.", "schede1"], ["Il 16 aprile 2026 il Comune riferisce che i magistrati hanno autorizzato l'accesso per iniziare a rimuovere i rifiuti; l'area resta formalmente sotto sequestro.", "riass16"], ["Il 29 maggio 2026 la Regione ammette il parco con 9.835.198,62 euro.", "gbchiusa"]],
  manca: [["Il dissequestro, la rimozione dei rifiuti, la superficie esatta e il progetto.", "schede1"]],
  adesso: [["Sul sito del JTF impegni ed erogazioni sono «non disponibili» al 23 novembre 2026. Non abbiamo trovato atti successivi ad aprile 2026 sul sequestro.", "gb69"]],
  soldi: ["9.835.198,62 euro ammessi dal JTF dentro la Green Belt.", "gbchiusa"],
  cv: ["È il caso tipico di «parco da rivalorizzare» del filone 3B, ma oggi l'area è sotto sequestro.", "Regola del tavolo: niente spazio senza permesso. Una giornata di cura è possibile solo dopo il dissequestro e insieme al Comune."],
  crono: [
    ["2025-09-22", "La Regione avvia la procedura Green Belt.", "dd145"],
    ["2026-03-26", "Il Comune presenta il parco al percorso: procedura negoziale in corso.", "schede1"],
    ["2026-04-16", "Area ancora sotto sequestro; autorizzato l'accesso per rimuovere i rifiuti.", "riass16"],
    ["2026-05-29", "Ammessi 9.835.198,62 euro.", "gbchiusa"]
  ],
  img: [["galeso-rimembranza.jpg", "Il Parco della Rimembranza è la fascia verde lungo la costa est, fino al ponte di Punta Penna.", "comune"]],
  richieste: ["G1", "02.1", "02.2", "02.3"]
},
{
  id: "int-03", n: "03", nome: "Sea Hub", sotto: "Quattro aree attrezzate per la mitilicoltura e la rinaturalizzazione delle coste",
  chi: "comune", fondi: "jtf", fase: ["rosso", "Procedura avviata"], tavolo: "t4",
  lede: ["Soldi stanziati, progetti non ancora ammessi: le proposte di Comune e Commissario erano attese entro il 30 settembre 2026, l'esito non è pubblicato.", "dd118"],
  breve: [["Soldi", "55.203.555,90 € prenotati: 42 milioni al Comune, 13,2 al Commissario"], ["Chi", "Comune di Taranto; Arco Nord con il Commissario"], ["Dove", "Primo e secondo seno; Mar Grande"], ["Superficie", "Mercato ittico 2,76 ha · Pamunto-Sabbione 13 ha · Cimino-Manganecchia 2,5 ha · Arco Nord 9 ha"]],
  che: [
    ["Riqualifica le coste del Mar Grande e del Mar Piccolo e riorganizza il sistema produttivo legato al mare, a partire dalla mitilicoltura.", "comune"],
    ["Quattro aree: Mercato ittico (2,76 ha), PIP Pamunto-Sabbione sul Mar Grande (13 ha), attracchi di Cimino-Manganecchia (2,5 ha), Arco Nord del secondo seno (9 ha).", "comune"],
    ["L'Arco Nord ha una scheda a parte: lo segue il Commissario (INT-07).", "schede2"]
  ],
  finora: [["Nel 2025 la Regione assegna al Sea Hub 24 milioni.", "dd118"], ["Il 4 dicembre 2025 il Comitato di sorveglianza del JTF aumenta il Sea Hub di 24 milioni e toglie 22 milioni all'azione sulle coste (2.3.4).", "cds"], ["Il 21 luglio 2026 la Giunta lo porta a 55.203.555,90 euro: 42 milioni al Comune per tre cluster, 13,2 milioni al Commissario per l'Arco Nord. La differenza viene dalle Filiere verdi.", "sh55"], ["Il 7 agosto 2026 la Regione avvia la procedura: proposte entro il 30 settembre 2026.", "dd118"]],
  manca: [["Gli importi per ciascuno dei tre cluster del Comune e il piano per gli operatori degli attracchi da rimuovere.", "dd118"]],
  adesso: [["Al 23 novembre 2026 il sito del JTF dà le operazioni selezionate «non disponibili»: nessun progetto ammesso pubblicato.", "jtf"]],
  soldi: ["55.203.555,90 euro prenotati dalla Regione per il 2026-2029: 42.000.000 al Comune, 13.203.555,90 al Commissario.", "dd118"],
  cv: ["Riguarda attracchi e mitilicoltura: è materia del Tavolo 4 (restituire il mare) più che del Cantiere verde.", "Punto di contatto: la rinaturalizzazione delle sponde del secondo seno."],
  crono: [
    ["2025-03-31", "La Giunta assegna al Sea Hub 24 milioni (DGR 400/2025).", "dd118"],
    ["2025-12-04", "Comitato di sorveglianza JTF: Sea Hub +24 milioni, azione 2.3.4 −22 milioni.", "cds"],
    ["2025-12-15", "La Commissione europea approva la modifica del programma.", "schede1", "mese"],
    ["2026-03-26", "Il Comune presenta i quattro cluster: fase pre-negoziale.", "schede1"],
    ["2026-04-16", "Il Cluster 4 (Arco Nord) è ancora da definire tra Comune e Commissario.", "riass16"],
    ["2026-07-21", "La Giunta porta il Sea Hub a 55,2 milioni (DGR 1009/2026).", "sh55"],
    ["2026-08-07", "Avvio della procedura negoziale (determinazione n. 118).", "dd118"],
    ["2026-09-30", "Scadenza per le proposte di Comune e Commissario.", "dd118", "scadenza"],
    ["2026-11-23", "Nessun progetto ammesso sul sito del JTF.", "jtf"]
  ],
  img: [["seahub-cluster.jpg", "Le quattro aree del Sea Hub con superfici e trasformazioni previste.", "comune"]],
  richieste: ["G14", "G2", "03.1", "03.3", "03.4", "G15"]
},
{
  id: "int-04", n: "04", nome: "Lungomare terrazzato dei Tamburi", sotto: "Piazze terrazzate e un ponte ciclopedonale verso il Mar Piccolo",
  chi: "comune", fondi: "altri", fase: ["ocra", "Progetto definitivo"], tavolo: "t4",
  lede: ["In progettazione definitiva a marzo 2026, finanziato dal CIS di Taranto e non dal JTF.", "schede1"],
  breve: [["Soldi", "Quota del Masterplan Tamburi (CIS), non indicata"], ["Chi", "Comune di Taranto"], ["Dove", "Fronte dei Tamburi sul primo seno"], ["Superficie", "Fascia lungo il quartiere"]],
  che: [["Piazze terrazzate al livello del quartiere e un ponte per pedoni e biciclette: il primo collegamento tra i Tamburi e il Mar Piccolo.", "schede1"], ["È un intervento della Green Belt già finanziato con altri fondi.", "comune"]],
  finora: [["Il 26 marzo 2026 il Comune lo dà in progettazione definitiva.", "schede1"], ["Il 16 aprile 2026 la scheda riassuntiva lo indica «in implementazione».", "riass16"]],
  manca: [["Gli atti di gara e il quadro economico: non li abbiamo trovati online.", ""]],
  adesso: [["Non abbiamo trovato atti pubblicati dopo aprile 2026.", ""]],
  soldi: ["Quota del Masterplan Tamburi nel CIS di Taranto; l'importo non è indicato.", "schede1"],
  cv: ["Opera di quartiere, vicina al Tavolo 4. Per il Cantiere verde conta un punto: il progetto del BRT tocca alberi nella stessa zona.", "Il verde lungo la discesa verso la costa può usare le specie scelte con il filone 3A."],
  crono: [
    ["2026-03-26", "Il Comune presenta il progetto: progettazione definitiva.", "schede1"],
    ["2026-04-16", "Scheda riassuntiva: «in implementazione».", "riass16"]
  ],
  img: [["lungomare-tamburi.jpg", "Pianta e sezioni del lungomare terrazzato: piazze, verde e ponte ciclopedonale.", "comune"]],
  richieste: ["04.1", "04.2", "04.3"]
},
{
  id: "int-05", n: "05", nome: "REMAR Piccolo", sotto: "Corridoio verde sull'ex ferrovia Circummarpiccolo, da Cimino alla Palude La Vela",
  chi: "comune", fondi: "altri", fase: ["verde", "Cantiere in corso"], tavolo: "t3",
  lede: ["Cantiere in corso a marzo 2026: è l'unico intervento verde già nei lavori.", "schede1"],
  breve: [["Soldi", "Direzione Ambiente del Comune; importo non indicato"], ["Chi", "Comune di Taranto, Direzione Ambiente"], ["Dove", "Cimino, ex ferrovia, Palude La Vela"], ["Superficie", "Tracciato lineare in cinque aree"]],
  che: [
    ["Cinque aree: parcheggio di Cimino, ingresso del corridoio verde con velostazione, centro di educazione ambientale nella pineta, corridoio verde sull'ex ferrovia, innesto verde.", "comune"],
    ["La pineta si estende verso un bosco planiziale; un rudere viene riusato.", "comune"]
  ],
  finora: [["Il 26 marzo 2026 il Comune lo dà come cantiere in corso.", "schede1"], ["Sul vecchio sito del Comune sono pubblicate le relazioni del progetto definitivo «Mar Piccolo» (DEF021).", "remar"]],
  manca: [["Il quadro economico, la fonte di finanziamento e il cronoprogramma aggiornato.", "schede1"]],
  adesso: [["Il 16 aprile 2026 la scheda riassuntiva lo dà «avanzato».", "riass16"]],
  soldi: ["Direzione Ambiente del Comune di Taranto; importo non indicato.", "schede1"],
  cv: ["È l'unico intervento verde con il cantiere aperto: si può andare a vedere e documentare che cosa viene piantato.", "La pineta che diventa bosco planiziale e il rudere riusato sono esempi concreti per i filoni 3A e 3B.", "Coincide con un'idea del Tavolo 4: recuperare la ferrovia del Mar Piccolo come percorso ciclopedonale."],
  crono: [
    ["2026-03-26", "Il Comune presenta il progetto: cantiere in corso.", "schede1"],
    ["2026-04-16", "Scheda riassuntiva: «avanzato».", "riass16"]
  ],
  img: [["remar-piccolo.jpg", "Il progetto REMAR Piccolo: le cinque aree tra Cimino e la Palude La Vela.", "comune"]],
  richieste: ["05.1", "05.2", "05.3"]
},
{
  id: "int-06", n: "06", nome: "Waterfront della Città Vecchia, terzo lotto", sotto: "Promenade e tre nuovi pontili sul primo seno",
  chi: "comune", fondi: "altri", fase: ["ocra", "Progetto definitivo"], tavolo: "t4",
  lede: ["In progettazione definitiva, ma dipende da un'altra opera: senza la pulizia dei fondali il terzo lotto non parte.", "schede1"],
  breve: [["Soldi", "CIS Taranto (delibera CIPE 10/2018); importo non indicato"], ["Chi", "Comune di Taranto"], ["Dove", "Waterfront nord della Città Vecchia"], ["Superficie", "Area del mercato ittico e dei moli"]],
  che: [["Riqualifica il waterfront nord della Città Vecchia con tre nuovi pontili e sposta i pescherecci al mercato ittico.", "schede1"], ["Il CIS del centro storico contiene un intervento «Riqualificazione e rinaturalizzazione del waterfront Mar Piccolo» da 6 milioni (CUP E55C15000090001). I documenti non dicono se è lo stesso terzo lotto.", "ciscs"]],
  finora: [["Al 28 febbraio 2025 l'intervento CIS sul waterfront Mar Piccolo è «in progettazione», con inizio lavori previsto il 1° giugno 2026.", "ciscs"], ["Il 26 giugno 2026 il monitoraggio del CIS approva 500.000 euro per togliere relitti e rifiuti da coste e fondali del Mar Piccolo.", "cis26"], ["Il 7 agosto 2026 partono le misure di prevenzione su coste e fondali (decreto commissariale n. 43/2026): 250.000 euro per la parte a terra, pari importo per la parte a mare.", "dec43"]],
  manca: [["La conferma che la pulizia dei fondali basta a sbloccare il terzo lotto, e il quadro economico del lotto.", ""]],
  adesso: [["Non abbiamo trovato atti di gara del terzo lotto.", ""]],
  soldi: ["CIS Taranto; per il waterfront Mar Piccolo del CIS centro storico: 6.000.000 euro.", "ciscs"],
  cv: ["Opera di waterfront, vicina al Tavolo 4 (fronte mare e lidi urbani). Non ha contenuti verdi rilevanti."],
  crono: [
    ["2025-02-28", "CIS centro storico: waterfront Mar Piccolo «in progettazione», 6 milioni.", "ciscs"],
    ["2026-03-26", "Il Comune presenta il terzo lotto: progettazione definitiva.", "schede1"],
    ["2026-06-26", "Approvati 500.000 euro per relitti e rifiuti del Mar Piccolo.", "cis26"],
    ["2026-08-07", "Avvio delle misure su coste e fondali (decreto n. 43/2026).", "dec43"]
  ],
  img: [["waterfront-terzo-lotto.jpg", "Il terzo lotto del waterfront: promenade e tre nuovi pontili.", "comune"]],
  richieste: ["06.1", "06.2"]
},
{
  id: "int-07", n: "07", nome: "Arco Nord del secondo seno", sotto: "Sea Hub, Cluster 4: togliere moli abusivi, baracche e rifiuti da 3 km di sponda",
  chi: "commissario", fondi: "jtf", fase: ["rosso", "Da progettare"], tavolo: "t3",
  lede: ["Ha 13,2 milioni prenotati, ma più di metà è messa sul 2029, l'ultimo anno in cui la spesa europea è ammessa.", "dd118"],
  breve: [["Soldi", "13.203.555,90 € prenotati (JTF, Sea Hub)"], ["Chi", "Commissario, d'intesa con il Comune"], ["Dove", "Dalla foce del Cervaro lungo la S.P. 78"], ["Superficie", "Circa 9 ettari, circa 3 km di sponda"]],
  che: [
    ["Demolire moli informali in cemento e baracche in lamiera, togliere i rifiuti, recuperare le spiagge e la macchia mediterranea.", "schede2"],
    ["Ipotesi: passerella, percorsi pedonali, illuminazione regolata per la fauna, percorso storico dal Santuario dei Marinai con il MArTA, birdwatching.", "schede2"]
  ],
  finora: [["Il 26 febbraio 2026 Comune e Commissario firmano un protocollo d'intesa.", "prot"], ["Il 20 maggio 2026 il Commissario propone di spostare 7.603.555,90 euro dalle Filiere verdi a mare all'Arco Nord, che passa da 5,6 a 13,2 milioni.", "dd118"], ["Il 26 giugno 2026 il monitoraggio del CIS indica l'Arco Nord come intervento da candidare al Sea Hub.", "cis26"], ["Il 21 luglio 2026 la Giunta approva: 13.203.555,90 euro al Commissario.", "sh55"], ["Il 7 agosto 2026 partono la procedura Sea Hub e le misure di prevenzione su coste e fondali.", "dd118"]],
  manca: [["Il progetto, le caratterizzazioni della sponda e il piano per gli operatori oggi presenti.", "schede2"]],
  adesso: [["Proposta attesa entro il 30 settembre 2026; al 23 novembre il sito del JTF non riporta progetti ammessi.", "jtf"]],
  soldi: ["13.203.555,90 euro prenotati: 1.320.500 nel 2026, 1.960.000 nel 2027 e nel 2028, 7.963.055,90 nel 2029.", "dd118"],
  cv: ["Ripristinare la macchia mediterranea su 3 km di costa richiede la conoscenza delle specie che il tavolo raccoglie nel filone 3A.", "La scheda delle Filiere verdi lo indica come possibile «laboratorio aperto del biorisanamento».", "Quasi tutto è ancora ipotesi: va presentato così."],
  crono: [
    ["2025-12-04", "Il Comitato di sorveglianza JTF rafforza il Sea Hub, da negoziare con Comune e struttura commissariale.", "cds"],
    ["2026-02-26", "Protocollo d'intesa tra Comune e Commissario.", "prot"],
    ["2026-03-26", "Il Comune presenta il Cluster 4: 9 ettari.", "schede1"],
    ["2026-04-16", "Il Cluster 4 è ancora da definire tra Comune e Commissario.", "riass16"],
    ["2026-04-30", "Il Commissario lo presenta: fase pre-progettuale.", "schede2"],
    ["2026-05-20", "Il Commissario chiede 7,6 milioni in più, tolti alle Filiere verdi a mare.", "dd118"],
    ["2026-06-26", "L'Arco Nord va candidato al JTF nella procedura Sea Hub.", "cis26"],
    ["2026-07-21", "La Giunta assegna 13.203.555,90 euro al Commissario.", "sh55"],
    ["2026-08-07", "Avvio della procedura Sea Hub e delle misure su coste e fondali.", "dd118"],
    ["2026-09-30", "Scadenza per la proposta del Commissario.", "dd118", "scadenza"]
  ],
  img: [["seahub-cluster.jpg", "L'Arco Nord è il quarto cluster del Sea Hub, sulla sponda nord del secondo seno.", "comune"]],
  richieste: ["G14", "G3", "07.2", "07.3", "07.4"]
},
{
  id: "int-08", n: "08", nome: "Filiere verdi", sotto: "Bonificare suoli pubblici con le piante e usarle per nuove filiere",
  chi: "commissario", fondi: "jtf", fase: ["ocra", "Ammesso a terra, fermo a mare"], tavolo: "t3",
  lede: ["Ammesso a marzo 2026 per 22,98 milioni sulle aree a terra. La parte a mare è ferma: nessuno ha ancora individuato chi ha inquinato i sedimenti.", "ad38"],
  breve: [["Soldi", "22.976.046 € ammessi e impegnati a terra; 3.055.924,10 € a mare, sospesi"], ["Chi", "Commissario con Carabinieri forestali e ARIF"], ["Dove", "Aree pubbliche da individuare; sito pilota a Le Leggiadrezze"], ["Superficie", "Non indicata"]],
  che: [
    ["Bonificare suoli contaminati di aree pubbliche con piante che assorbono i metalli, e usarle per filiere: bioedilizia, tessile, biocarburanti.", "schede2"],
    ["Piante: pioppo, paulownia, canapa, ricino, colza. Sito pilota: l'area ARIF «Le Leggiadrezze», sponda nord del primo seno.", "schede2"],
    ["Un accordo quadro con il Comando unità forestali dei Carabinieri mette a disposizione terreni demaniali del Reparto Biodiversità di Martina Franca.", "cufa"],
    ["Aree a terra: della Marina Militare, dei Carabinieri forestali e del Demanio. Aree a mare: bonifica dei sedimenti del Mar Piccolo.", "fvpress"]
  ],
  finora: [["Il 30 luglio 2025 la Regione avvia la procedura (determinazione n. 75); il Commissario presenta la proposta il 22 settembre 2025.", "dd75"], ["Il 13 marzo 2026 la Regione ammette 22.976.046 euro per le aree a terra e li impegna sugli anni 2026-2029. Gli altri 10.659.480 euro per i sedimenti del Mar Piccolo restano sospesi.", "ad38"], ["Motivo della sospensione: per la bonifica a mare non è verificato il principio «chi inquina paga», perché l'autorità competente non ha avviato la ricerca del responsabile della contaminazione.", "ad38"], ["A maggio-giugno 2026 la parte a mare scende a 3.055.924,10 euro: 7.603.555,90 passano all'Arco Nord del Sea Hub.", "dd118"]],
  manca: [["Gli accordi con i proprietari delle aree a terra (condizione dell'ammissione), l'elenco delle aree con gli ettari, le analisi dei suoli.", "ad38"], ["Il quadro esigenziale, atteso entro il 20 settembre 2026.", "schede2"]],
  adesso: [["Sul sito del JTF la procedura Filiere verdi non ha operazioni selezionate. Lo stesso CUP (J41J26000640006) compare in un'operazione chiamata «Foresta Urbana Nord-CIS», intestata al Comune, con 3.407.693,23 euro già certificati alla UE: va chiarito a cosa corrispondono.", "foresta"]],
  soldi: ["22.976.046 euro impegnati: 12.781.500,01 nel 2026, 3.531.730,27 nel 2027 e nel 2028, 3.131.085,45 nel 2029. Parte a mare: 3.055.924,10 euro, sospesi.", "ad38"],
  cv: ["È lo stesso progetto pilota del tavolo, fatto dal Commissario con fondi JTF: il tavolo deve agganciarsi qui.", "Specie in comune: canapa e pioppo. Il tavolo aggiunge girasole, senape indiana, salice e vetiver.", "Regole del tavolo: niente rese senza analisi sul campo, biomassa analizzata prima di ogni uso."],
  crono: [
    ["2025-07-30", "La Regione avvia la procedura Filiere verdi (determinazione n. 75).", "dd75"],
    ["2025-09-22", "Il Commissario presenta la proposta.", "ad38"],
    ["2026-03-13", "Ammessi 22.976.046 euro a terra; la parte a mare resta sospesa.", "ad38"],
    ["2026-04-30", "Il Commissario la presenta al percorso: gare in avvio con i Carabinieri forestali.", "schede2"],
    ["2026-05-20", "Il Commissario propone di spostare 7,6 milioni della parte a mare all'Arco Nord.", "dd118"],
    ["2026-09-20", "Scadenza per il quadro esigenziale e la documentazione.", "schede2", "scadenza"],
    ["2026-11-23", "Sul sito del JTF 3,41 milioni certificati con lo stesso CUP, sotto un altro nome.", "foresta"]
  ],
  img: [],
  richieste: ["G12", "G13", "G16", "08.8", "08.1", "08.3", "08.4", "08.5", "08.6", "08.7", "G2"]
},
{
  id: "int-09", n: "09", nome: "Mitilicoltura sostenibile", sotto: "Decontaminare le cozze spostandole tra i mari, studiarne la resistenza al caldo",
  chi: "commissario", fondi: "altri", fase: ["verde", "Studio concluso"], tavolo: "t3",
  lede: ["Lo studio sulla decontaminazione si è concluso a giugno 2026: diossine e PCB si azzerano tra 30 e 48 giorni dal trasferimento.", "mit2"],
  breve: [["Soldi", "Commissario e CIS; importi non indicati"], ["Chi", "Commissario con ARPA, ASL, CNR-IRSA, Capitaneria"], ["Dove", "Primo seno, Mar Grande"], ["Superficie", "Campi di mitili"]],
  che: [
    ["Lo studio misura quanto in fretta le cozze si ripuliscono se spostate dal primo seno al Mar Grande.", "mit1"],
    ["Il progetto MITICA (legge regionale 42/2024, CNR e CoNISMa) studia la resistenza dei mitili al caldo dopo la moria nei due seni.", "mit3"]
  ],
  finora: [["Lo studio parte nel 2024: il comunicato di febbraio dice settembre, quello di luglio novembre.", "mit2"], ["A giugno 2025 vengono rubate alcune reste; i lotti vengono sostituiti.", "mit1"], ["Il 6 luglio 2026 i risultati finali: azzeramento tra 30 e 48 giorni, protezione sotto i 28 °C.", "mit2"]],
  manca: [["La revisione dell'ordinanza regionale n. 1989/2011 sui tempi di trasferimento.", "mit3"]],
  adesso: [["Il 7 settembre 2026 gli assessori regionali avviano un tavolo tecnico per aggiornare l'ordinanza.", "mit3"]],
  soldi: ["Finanziato dal Commissario e dal CIS; importi non indicati.", "mit2"],
  cv: ["Riguarda il mare, non il suolo. Tocca il Cantiere verde per la filiera delle alghe citata nel verbale del tavolo."],
  crono: [
    ["2011-01-01", "Ordinanza regionale n. 1989/2011 sui mitili del primo seno.", "mit1", "anno"],
    ["2024-11-01", "Parte lo studio sulla decontaminazione dei lotti di mitili.", "mit2", "mese"],
    ["2025-06-15", "Furto di reste; lotti sostituiti.", "mit1", "mese"],
    ["2026-02-06", "Risultati preliminari positivi.", "mit1"],
    ["2026-04-30", "Il Commissario lo presenta al percorso: progetti in fase avanzata.", "schede2"],
    ["2026-06-30", "Fine dello studio.", "mit2"],
    ["2026-07-06", "Risultati finali: diossine e PCB a zero tra 30 e 48 giorni.", "mit2"],
    ["2026-09-07", "Incontro in Regione: tavolo tecnico per aggiornare l'ordinanza.", "mit3"]
  ],
  img: [],
  richieste: ["09.1", "09.2", "09.3"]
},
{
  id: "int-10", n: "10", nome: "Bonifiche a terra: Tamburi e Statte", sotto: "Impianto Atleti Azzurri d'Italia, cimitero San Brunone, area PIP di Statte",
  chi: "commissario", fondi: "altri", fase: ["ocra", "In corso"], tavolo: "t1",
  lede: ["Tre siti in tre situazioni: caratterizzazione partita ai Tamburi, gara da rifare a San Brunone, 89,9 milioni FSC per Statte.", "coes"],
  breve: [["Soldi", "PIP Statte: 89,9 milioni FSC; altri importi non indicati"], ["Chi", "Commissario con MASE, ARPA, Università di Bari"], ["Dove", "Tamburi e Statte (fuori mappa)"], ["Superficie", "Atleti Azzurri: circa 70.000 m²"]],
  che: [
    ["Impianto sportivo «Atleti Azzurri d'Italia»: circa 70.000 m² tra via Deledda e la ferrovia.", "tamb"],
    ["Cimitero San Brunone: progetto di bonifica da 13.917.491,35 euro approvato in conferenza dei servizi nel 2017 e nel 2018.", "rel18"],
    ["Area PIP di Statte: ex cava riempita di rifiuti industriali nei primi anni Novanta, che contamina suolo e falda.", "rel23"]
  ],
  finora: [["San Brunone: gara 2018 aggiudicata nel 2019, annullata nel 2021 dopo un parere ANAC; il TAR di Lecce respinge il ricorso (sentenza n. 1754 del 2/12/2021).", "rel23"], ["Il 20 ottobre 2025 si consegnano i lavori di caratterizzazione dell'impianto Atleti Azzurri.", "tamb"], ["Il 10 novembre 2025 l'Accordo per la coesione assegna 89.900.000 euro FSC all'area PIP di Statte.", "coes"]],
  manca: [["I risultati della caratterizzazione, il nuovo bando per San Brunone, il cronoprogramma di Statte.", "schede2"]],
  adesso: [["Ad aprile 2026: caratterizzazione in corso, contenzioso di San Brunone in chiusura, Statte secondo il nuovo cronoprogramma.", "schede2"]],
  soldi: ["PIP Statte: 89.900.000 euro FSC. San Brunone: progetto da 13,9 milioni (2018).", "coes"],
  cv: ["È materia del Tavolo 1 (Osservatorio bonifiche). Al Cantiere verde serve come fonte: le analisi dei suoli dicono dove e che cosa si può piantare.", "Per i dettagli ci sono le schede B8, B9 e B10 dell'Osservatorio delle bonifiche."],
  vedi: [["B8 Cimitero San Brunone", "https://bonifiche.postilva.it/r/cimitero-san-brunone.html"], ["B9 Impianto Atleti Azzurri", "https://bonifiche.postilva.it/r/atleti-azzurri-tamburi.html"], ["B10 PIP Statte", "https://bonifiche.postilva.it/r/pip-statte.html"]],
  crono: [
    ["2016-02-12", "San Brunone: analisi di rischio approvata dalla Regione (determina n. 8).", "rel18"],
    ["2018-12-01", "San Brunone: progetto da 13,9 milioni approvato in conferenza dei servizi (2017 e 2018).", "rel18", "anno"],
    ["2021-12-02", "Gara di San Brunone annullata dopo il parere ANAC; il TAR respinge il ricorso.", "rel23"],
    ["2022-07-12", "La Commissione parlamentare d'inchiesta visita San Brunone, il PIP di Statte e il Mar Piccolo.", "inch22"],
    ["2023-09-29", "Statte: servono caratterizzazioni integrative.", "rel23"],
    ["2025-10-20", "Partono i lavori di caratterizzazione dell'impianto Atleti Azzurri.", "tamb"],
    ["2025-11-10", "Accordo per la coesione: 89,9 milioni FSC per il PIP di Statte.", "coes"],
    ["2026-04-30", "Il Commissario presenta i tre siti al percorso.", "schede2"],
    ["2026-05-20", "MASE e Commissario aprono il supporto alle imprese per le caratterizzazioni.", "azi"]
  ],
  img: [],
  richieste: ["G5", "10.1", "10.2", "10.3", "G17"]
},
{
  id: "int-11", n: "11", nome: "Monitoraggio integrato del territorio", sotto: "Guardia di Finanza contro gli scarichi abusivi e satelliti dell'Agenzia spaziale",
  chi: "commissario", fondi: "altri", fase: ["ocra", "Accordo firmato"], tavolo: "t1",
  lede: ["Accordo firmato, risultati non pubblici: la scheda dà l'accordo con la Guardia di Finanza firmato il 13 marzo 2025.", "schede2"],
  breve: [["Soldi", "Non indicati; proposta di una quota in ogni progetto JTF"], ["Chi", "Commissario, Guardia di Finanza, Agenzia spaziale italiana"], ["Dove", "Tutto il bacino del Mar Piccolo"], ["Superficie", "Tutto il bacino"]],
  che: [["Una rete permanente contro scarichi abusivi, attracchi informali e abusi edilizi: più di 90 scarichi censiti.", "schede2"], ["Satelliti COSMO-SkyMed, PRISMA e IRIDE; un tavolo mensile con il Commissario unico e il Commissario della Terra dei Fuochi.", "schede2"]],
  finora: [["13 marzo 2025: accordo con la Guardia di Finanza, secondo la scheda.", "schede2"], ["30 aprile 2026: fase operativa annunciata «a brevissimo».", "schede2"]],
  manca: [["Il testo dell'accordo, l'elenco degli scarichi, gli esiti dei controlli.", ""]],
  adesso: [["Non abbiamo trovato atti ufficiali sui risultati. Due notizie di stampa da verificare sono nell'Archivio.", ""]],
  soldi: ["Non indicati. Proposta: un «onere di sicurezza» dentro ogni progetto JTF.", "schede2"],
  cv: ["È materia del Tavolo 1. Al Cantiere verde serve come fonte: scarichi censiti e immagini satellitari aiutano a scegliere le aree."],
  crono: [
    ["2025-03-13", "Accordo con la Guardia di Finanza (data della scheda).", "schede2"],
    ["2026-04-30", "Il Commissario presenta la rete di monitoraggio al percorso.", "schede2"]
  ],
  img: [],
  richieste: ["11.1", "11.2", "11.3"]
}
];

/* aree sulla mappa: poligoni [lon, lat] o linee; "ind" = disegno indicativo */
var AREE = {
  "int-01": [{ k: "poly", nome: "Parco del Galeso (perimetro dalla tavola del Comune)", c: [[17.2405, 40.5005], [17.2425, 40.5036], [17.245, 40.5033], [17.2468, 40.5018], [17.246, 40.501], [17.254, 40.5011], [17.2538, 40.5004], [17.2515, 40.4999], [17.2468, 40.4988], [17.2421, 40.497], [17.2392, 40.4952], [17.2384, 40.4957], [17.2418, 40.498], [17.244, 40.4997]] }],
  "int-02": [{ k: "poly", nome: "Parco della Rimembranza (perimetro dalla tavola del Comune)", c: [[17.267, 40.4963], [17.2663, 40.4934], [17.2657, 40.4905], [17.267, 40.4876], [17.2679, 40.4847], [17.2688, 40.4818], [17.2695, 40.4805], [17.27, 40.4791], [17.2705, 40.4791], [17.27, 40.4805], [17.2693, 40.4818], [17.2684, 40.4847], [17.2675, 40.4876], [17.2662, 40.4905], [17.2668, 40.4934], [17.2675, 40.4963]] }],
  "int-03": [
    { k: "poly", nome: "Cluster 1 · Mercato ittico (posizione indicativa)", c: [[17.2283, 40.4797], [17.2307, 40.4792], [17.2305, 40.4782], [17.2281, 40.4787]] },
    { k: "poly", nome: "Cluster 3 · Cimino-Manganecchia (posizione indicativa)", c: [[17.2952, 40.4706], [17.2994, 40.4708], [17.2996, 40.4690], [17.2955, 40.4686]] },
    { k: "poly", nome: "Cluster 4 · Arco Nord (vedi INT-07)", c: [[17.296, 40.5013], [17.3, 40.5016], [17.305, 40.5014], [17.31, 40.5009], [17.314, 40.5002], [17.318, 40.4986], [17.321, 40.4966], [17.3235, 40.4946], [17.32385, 40.495], [17.32135, 40.497], [17.31835, 40.499], [17.314, 40.5006], [17.31, 40.5013], [17.305, 40.5018], [17.3, 40.502], [17.296, 40.5017]] }
  ],
  "int-04": [{ k: "poly", nome: "Lungomare terrazzato (tracciato indicativo)", c: [[17.2278, 40.4856], [17.2315, 40.4889], [17.2353, 40.4924], [17.236, 40.4918], [17.2323, 40.4882], [17.2285, 40.4849]] }],
  "int-05": [
    { k: "poly", nome: "Pineta e centro di educazione ambientale di Cimino", c: [[17.2996, 40.4702], [17.3040, 40.4702], [17.3040, 40.4672], [17.2996, 40.4670]] },
    { k: "line", nome: "Corridoio verde sull'ex ferrovia (tracciato indicativo)", c: [[17.3003, 40.4662], [17.3080, 40.4672], [17.3160, 40.4683], [17.3240, 40.4692], [17.3293, 40.4700]] }
  ],
  "int-06": [{ k: "poly", nome: "Waterfront nord della Città Vecchia (indicativo)", c: [[17.2276, 40.4798], [17.2310, 40.4790], [17.2340, 40.4772], [17.2362, 40.4752], [17.2355, 40.4744], [17.2333, 40.4762], [17.2305, 40.4779], [17.2278, 40.4788]] }],
  "int-07": [{ k: "poly", nome: "Arco Nord: circa 3 km di sponda dalla foce del Cervaro", c: [[17.296, 40.5013], [17.3, 40.5016], [17.305, 40.5014], [17.31, 40.5009], [17.314, 40.5002], [17.318, 40.4986], [17.321, 40.4966], [17.3235, 40.4946], [17.32385, 40.495], [17.32135, 40.497], [17.31835, 40.499], [17.314, 40.5006], [17.31, 40.5013], [17.305, 40.5018], [17.3, 40.502], [17.296, 40.5017]] }],
  "int-08": [{ k: "circle", nome: "Sito pilota ARIF «Le Leggiadrezze» (posizione indicativa)", c: [17.2481, 40.4999], r: 140 }],
  "int-09": [
    { k: "poly", nome: "Campi di mitili, primo seno (indicativo)", c: [[17.2385, 40.4930], [17.2470, 40.4965], [17.2480, 40.4945], [17.2400, 40.4912]] },
    { k: "poly", nome: "Campi di mitili, primo seno est (indicativo)", c: [[17.2585, 40.4930], [17.2625, 40.4935], [17.2630, 40.4830], [17.2595, 40.4825]] },
    { k: "poly", nome: "Campi di mitili, secondo seno (indicativo)", c: [[17.2860, 40.4960], [17.3100, 40.4965], [17.3110, 40.4860], [17.2860, 40.4855]] },
    { k: "poly", nome: "Campi di mitili, secondo seno sud (indicativo)", c: [[17.2820, 40.4785], [17.3000, 40.4790], [17.3000, 40.4745], [17.2820, 40.4742]] }
  ],
  "int-10": [
    { k: "poly", nome: "Impianto «Atleti Azzurri d'Italia», circa 70.000 m² (indicativo)", c: [[17.2324, 40.4980], [17.2354, 40.4984], [17.2358, 40.4957], [17.2328, 40.4953]] },
    { k: "poly", nome: "Cimitero San Brunone (perimetro OpenStreetMap)", c: [[17.220265, 40.489227], [17.219524, 40.4905], [17.218977, 40.491218], [17.217808, 40.491683], [17.217185, 40.491969], [17.215952, 40.492425], [17.217926, 40.493511], [17.220222, 40.493821], [17.221348, 40.494098], [17.221992, 40.494449], [17.223258, 40.489659], [17.22049, 40.489284]] }
  ],
  "int-11": [{ k: "bacino", nome: "Tutto il bacino del Mar Piccolo" }]
};

/* Documenti da trovare e da chiedere: esito della ricerca online del 23/11/2026 */
var AC = "Accesso civico generalizzato", AI = "Accesso alle informazioni ambientali", RD = "Richiesta diretta", CO = "Consultazione online";
var ESITI = {
  trovato: ["verde", "Trovato online"],
  parziale: ["ocra", "Trovato in parte"],
  dovrebbe: ["blu", "Dovrebbe essere online"],
  richiedere: ["rosso", "Da richiedere"]
};
/* [codice, documento, chi lo ha, strumento, priorità, esito, nota, fonti trovate, interventi] */
var RICHIESTE = [
  ["G1", "Atti di ammissione al JTF di Green Belt, Sea Hub e Filiere verdi, con importi", "Regione Puglia, Organismo intermedio JTF", AC, "alta", "parziale", "Trovati: atto n. 38/2026 (Filiere verdi), determinazioni n. 75/2025, 145/2025 e 118/2026. Manca l'atto con cui la Regione ammette gli otto parchi della Green Belt: c'è solo la notizia della chiusura (29/05/2026). Sea Hub: proposte attese entro il 30/09/2026, ammissione non ancora pubblicata.", ["ad38", "dd75", "dd145", "dd118", "gbchiusa"], ["01", "02", "03", "07", "08"]],
  ["G2", "Disciplinari firmati tra Regione e soggetti attuatori (Comune, Commissario)", "Regione Puglia", AC, "alta", "parziale", "Lo schema per le Filiere verdi è l'allegato A dell'atto n. 38/2026, non pubblicato insieme all'atto. I disciplinari firmati non sono online.", ["ad38"], ["01", "02", "03", "07", "08"]],
  ["G3", "Protocollo d'intesa tra Comune e Commissario (anche sul Cluster 4 «Arco Nord»)", "Comune di Taranto, Commissario", AC, "alta", "parziale", "C'è il comunicato del 26/02/2026; il testo del protocollo non è online.", ["prot"], ["03", "07"]],
  ["G4", "Versioni definitive delle schede e report finale del percorso partecipativo", "Università di Bari, Dipartimento Jonico", RD, "alta", "parziale", "Schede, report del tavolo 8 e presentazioni sono su PugliaPartecipa. Il documento di sintesi c'è solo nell'archivio di Postilva; il report finale non è online.", ["schede1", "schede2", "riass16", "tav8"], ["tutti"]],
  ["G5", "Ultima relazione periodica del Commissario straordinario", "Commissario, Camera dei deputati", AC, "alta", "richiedere", "L'ultima trovata è del 29/09/2023. Sul sito commissari.gov.it ci sono comunicati e piani, non relazioni recenti.", ["rel23"], ["07", "08", "09", "10", "11"]],
  ["G6", "CUP, impegni e pagamenti di ogni operazione", "OpenCoesione, jtf.gov.it", CO, "alta", "parziale", "Le schede progetto del JTF hanno gli importi ammessi ma danno «non disponibile» per impegni giuridicamente vincolanti, erogazioni e CUP. Filiere verdi: CUP J41J26000640006 nell'atto n. 38/2026.", ["gb68", "gb69", "ad38", "ciscs"], ["tutti"]],
  ["G7", "Elenco delle procedure JTF aggiornato", "jtf.gov.it", CO, "alta", "trovato", "Consultato il 23/11/2026. Il controllo automatico settimanale lo rilegge e segnala le differenze.", ["jtf"], ["01", "02", "03", "07", "08"]],
  ["G8", "Verbali del Comitato di sorveglianza del Programma JTF", "Autorità di gestione JTF", CO, "media", "dovrebbe", "Il regolamento europeo chiede di pubblicare i documenti condivisi con il Comitato. Online abbiamo trovato solo il comunicato del 4/12/2025.", ["cds"], ["03", "07"]],
  ["G9", "Testo della Carta del Mar Piccolo", "Dipartimento Jonico UniBa", CO, "media", "trovato", "Versione definitiva del 7/04/2025 sul sito del Commissario.", ["carta", "cartacom"], ["tutti"]],
  ["G10", "Decreto MASE 449/2024 sul perimetro del SIN, con la cartografia", "Ministero dell'Ambiente", CO, "media", "trovato", "Testo sul sito del Commissario; esclude sette aree portuali e industriali, nessuna del Mar Piccolo.", ["dm449"], ["tutti"]],
  ["G11", "Accesso alla banca dati documentale dei SIN (visualizzatore GIS)", "Ministero dell'Ambiente", RD, "media", "parziale", "Il MASE l'ha citata al tavolo 8 (24/06/2026) senza dare l'indirizzo.", ["tav8", "mase26"], ["01", "07", "08", "10"]],
  ["G12", "Chiarimento sull'operazione «Foresta Urbana Nord-CIS» (CUP J41J26000640006): a quale spesa corrispondono i 3.407.693,23 euro certificati", "Autorità di gestione JTF, Regione Puglia", AC, "alta", "richiedere", "Sul sito del JTF l'operazione è intestata al Comune ma ha il CUP delle Filiere verdi del Commissario.", ["foresta", "ad38"], ["08"]],
  ["G13", "Stato del procedimento per individuare il responsabile della contaminazione dei sedimenti del Mar Piccolo (art. 244 d.lgs. 152/2006)", "Provincia di Taranto", AI, "alta", "richiedere", "Per la Regione il procedimento non è stato avviato (atto n. 38/2026): senza, la bonifica a mare delle Filiere verdi resta sospesa.", ["ad38"], ["08"]],
  ["G14", "Proposte presentate per il Sea Hub entro il 30/09/2026 ed esito dell'istruttoria", "Regione Puglia", AC, "alta", "richiedere", "", ["dd118"], ["03", "07"]],
  ["G16", "Stato dei lavori, pagamenti e cronoprogramma della bonifica del Mar Piccolo, I e II stralcio (CUP J56J14000460001), e rapporto con la riga da 21 milioni sui sedimenti", "Commissario", AC, "alta", "richiedere", "Su OpenCoesione: 55 milioni, 5.585.794,01 euro pagati, ultimo pagamento nel 2023. Una seconda riga da 21 milioni ha lo stesso CUP e zero pagamenti.", ["ocmp", "ocsed"], ["tutti"]],
  ["G17", "Messa in sicurezza della falda dell'area PIP di Statte: stato dei 36,6 milioni FSC 2007-2013 e rapporto con gli 89,9 milioni dell'Accordo per la coesione", "Commissario, Regione Puglia", AC, "media", "richiedere", "Su OpenCoesione: fine prevista il 15/10/2017, nessun pagamento registrato.", ["ocmisp", "coes"], ["10"]],
  ["G15", "Spesa certificata e prevista al 31/12/2026 per ogni operazione del Mar Piccolo", "Regione Puglia, Organismo intermedio JTF", AC, "alta", "richiedere", "Per Taranto il target di spesa al 31/12/2026 è 281,19 milioni; a giugno-agosto 2026 la Regione ne prevedeva 122,29 (decreto dell'Autorità di gestione del 6/08/2026).", ["decipcei"], ["01", "02", "03", "07", "08"]],
  ["01.1", "Importo assegnato al parco del Galeso", "Regione Puglia, Comune", AC, "alta", "trovato", "13.778.650,98 euro (Regione, 29/05/2026; scheda JTF n. 68).", ["gbchiusa", "gb68"], ["01"]],
  ["01.2", "Analisi di suoli, sedimenti e acque alla foce del Galeso", "ARPA Puglia, Commissario", AI, "alta", "richiedere", "", [], ["01"]],
  ["01.3", "Elaborati di progetto con specie vegetali e criteri di scelta", "Comune di Taranto", AC, "media", "parziale", "C'è solo la tavola della presentazione di marzo 2026.", ["comune"], ["01"]],
  ["01.4", "Stato dell'edificio per il laboratorio di educazione ambientale e modello di gestione", "Comune di Taranto", AC, "bassa", "richiedere", "", [], ["01"]],
  ["02.1", "Stato del sequestro e della rimozione dei rifiuti", "Comune di Taranto", AC, "alta", "parziale", "La scheda riassuntiva del 16/04/2026 dice che l'area resta sotto sequestro. Gli atti giudiziari possono non essere accessibili.", ["riass16"], ["02"]],
  ["02.2", "Atti sulla cessione delle aree della Marina Militare vicine al parco", "Comune di Taranto, Marina Militare", AC, "media", "richiedere", "", [], ["02"]],
  ["02.3", "Planimetria e superficie dell'area", "Comune di Taranto", AC, "media", "parziale", "Perimetro nella tavola del Comune, superficie non indicata.", ["comune"], ["02"]],
  ["03.1", "Importi dei tre cluster del Comune nel Sea Hub", "Comune di Taranto, Regione Puglia", AC, "alta", "parziale", "Il totale dei tre cluster è 42 milioni (determinazione n. 118/2026); la divisione per cluster non è pubblica.", ["dd118", "comune"], ["03"]],
  ["03.2", "Atto di avvio della procedura negoziale Sea Hub", "Regione Puglia", AC, "alta", "trovato", "Determinazione n. 118 del 7/08/2026: proposte entro il 30/09/2026.", ["dd118"], ["03"]],
  ["03.3", "Piano di ricollocazione degli operatori degli attracchi", "Comune di Taranto", AC, "alta", "richiedere", "", [], ["03", "07"]],
  ["03.4", "Modello di gestione e manutenzione di approdi e centri servizi", "Comune di Taranto", AC, "media", "richiedere", "", [], ["03"]],
  ["04.1", "Verbale della conferenza dei servizi e atti di gara del lungomare", "Comune di Taranto", AC, "alta", "dovrebbe", "Bandi ed esiti di gara vanno pubblicati in Amministrazione trasparente; non trovati.", [], ["04"]],
  ["04.2", "Quadro economico del lungomare terrazzato", "Comune di Taranto", AC, "media", "richiedere", "", [], ["04"]],
  ["04.3", "Alberi toccati dal progetto BRT nell'area e compensazioni", "Comune di Taranto", AC, "media", "richiedere", "", [], ["04"]],
  ["05.1", "Quadro economico e fonte di finanziamento di REMAR Piccolo", "Comune di Taranto, Direzione Ambiente", AC, "alta", "parziale", "Sul vecchio sito del Comune ci sono le relazioni del progetto definitivo «Mar Piccolo» (DEF021); non siamo riusciti ad aprirle.", ["remar"], ["05"]],
  ["05.2", "Stato dei lavori e cronoprogramma aggiornato", "Comune di Taranto, Direzione Ambiente", AC, "media", "richiedere", "", [], ["05"]],
  ["05.3", "Specie messe a dimora e piano di manutenzione", "Comune di Taranto, Direzione Ambiente", AC, "media", "parziale", "Probabilmente nella relazione botanico-vegetazionale del progetto definitivo, da leggere.", ["remar"], ["05"]],
  ["06.1", "Cronoprogramma della pulizia di coste e fondali del primo seno", "Commissario", AC, "alta", "parziale", "Comunicati del 26/06 e del 7/08/2026; il decreto n. 43/2026 non è online.", ["cis26", "dec43"], ["06", "07"]],
  ["06.2", "Quadro economico del terzo lotto del waterfront", "Comune di Taranto", AC, "media", "parziale", "Nel CIS centro storico c'è un waterfront Mar Piccolo da 6 milioni (da via Nuova al piazzale Democrate, inizio lavori 1/12/2026): va chiesto se è lo stesso terzo lotto.", ["ciscs", "ocwf"], ["06"]],
  ["07.1", "Quota del Sea Hub per l'Arco Nord e atto che la assegna", "Regione Puglia, Commissario", AC, "alta", "trovato", "13.203.555,90 euro al Commissario (DGR 1009 del 21/07/2026, determinazione n. 118/2026).", ["sh55", "dd118"], ["07"]],
  ["07.2", "Caratterizzazioni e analisi ambientali della sponda", "Commissario, ARPA Puglia", AI, "alta", "richiedere", "", [], ["07"]],
  ["07.3", "Censimento di strutture e operatori presenti", "Comune di Taranto, Commissario", AC, "alta", "richiedere", "", [], ["07"]],
  ["07.4", "Quadro esigenziale o progetto, con cronoprogramma", "Commissario", AC, "media", "richiedere", "", [], ["07"]],
  ["08.1", "Quadro esigenziale e documentazione (consegna prevista entro il 20/9/2026)", "Commissario", AC, "alta", "richiedere", "", [], ["08"]],
  ["08.2", "Quadro economico dettagliato delle Filiere verdi", "Regione Puglia, Commissario", AC, "alta", "parziale", "Gli atti danno i totali (22.976.046 a terra, 10.659.480 poi 3.055.924,10 a mare) e gli impegni per anno, non le voci di spesa.", ["ad38", "dd118"], ["08"]],
  ["08.3", "Elenco delle aree a terra scelte, con ettari e proprietari", "Commissario", AC, "alta", "parziale", "La Regione cita aree della Marina Militare, dei Carabinieri forestali e del Demanio, senza elenco né superfici.", ["fvpress", "cufa"], ["08"]],
  ["08.4", "Analisi dei suoli di ogni area", "Commissario, ARPA Puglia", AI, "alta", "richiedere", "", [], ["08"]],
  ["08.5", "Protocollo di analisi e gestione della biomassa raccolta", "Commissario, ARPA Puglia", AI, "media", "richiedere", "", [], ["08"]],
  ["08.6", "Convenzioni operative e gare con i Carabinieri forestali", "Commissario, Carabinieri forestali", AC, "media", "parziale", "C'è il comunicato sull'accordo quadro, con una data da verificare.", ["cufa"], ["08"]],
  ["08.7", "Recupero della serra ARIF di Le Leggiadrezze e accesso per associazioni", "ARIF, Commissario", RD, "media", "richiedere", "", [], ["08"]],
  ["08.8", "Accordi attuativi con Marina Militare, Carabinieri forestali e Demanio per l'uso delle aree a terra", "Commissario", AC, "alta", "richiedere", "L'atto n. 38/2026 li pone come condizione dell'ammissione.", ["ad38"], ["08"]],
  ["09.1", "Relazione finale sulla decontaminazione dei lotti di mitili", "ARPA Puglia, CNR-IRSA, ASL Taranto", AI, "media", "parziale", "Risultati nel comunicato del 6/07/2026; la relazione non è online.", ["mit2"], ["09"]],
  ["09.2", "Ordinanza regionale n. 1989/2011 e sua revisione", "Regione Puglia", AC, "media", "dovrebbe", "Un'ordinanza regionale dovrebbe essere pubblicata; non l'abbiamo trovata. La revisione è in discussione da settembre 2026.", ["mit3"], ["09"]],
  ["09.3", "Coltivazione della lattuga di mare: prova o pratica", "CNR, Commissario", RD, "bassa", "richiedere", "", [], ["09"]],
  ["10.1", "Risultati della caratterizzazione dell'impianto Atleti Azzurri e analisi di rischio", "ARPA Puglia, Regione Puglia", AI, "alta", "richiedere", "Lavori partiti il 20/10/2025; esiti non pubblicati.", ["tamb"], ["10"]],
  ["10.2", "Stato del contenzioso e nuova gara per il cimitero San Brunone", "Commissario", AC, "media", "parziale", "Storia fino al 2021 nella relazione del 2023; nessun nuovo bando trovato. OpenCoesione: 12.512.450,45 euro, 21.417,72 pagati, fine prevista 2020.", ["rel23", "rel18", "ocbrun"], ["10"]],
  ["10.3", "Cronoprogramma dell'area PIP di Statte trasmesso al MASE", "Commissario, MASE", AC, "media", "parziale", "Finanziamento FSC di 89,9 milioni nel comunicato del 10/11/2025; cronoprogramma non pubblico.", ["coes"], ["10"]],
  ["11.1", "Elenco e posizione degli scarichi censiti nel bacino", "Commissario, ARPA Puglia", AI, "alta", "richiedere", "", [], ["11"]],
  ["11.2", "Accordo con la Guardia di Finanza e atti della fase operativa", "Commissario, Guardia di Finanza", AC, "media", "richiedere", "La data va chiarita: 13/03/2025 nella scheda, presentazione a marzo 2026 sulla stampa.", [], ["11"]],
  ["11.3", "Protocollo con l'Agenzia spaziale italiana e accesso ai dati satellitari", "Agenzia spaziale italiana, Commissario", RD, "bassa", "richiedere", "Solo notizie di stampa del dicembre 2025.", [], ["11"]]
];
var INTERNI = [
  ["P1", "Verbale del Tavolo 3 con data e presenti", "Tavolo 3, Cantiere verde"],
  ["P2", "Elenco dei contatti del tavolo, con ente e ruolo", "Tavolo 3"],
  ["P3", "Registro delle richieste inviate: data, ente, protocollo, scadenza della risposta", "Chi invia dalla PEC di Postilva (in questa pagina, sezione Richieste)"],
  ["P4", "Copia di ogni risposta ricevuta, archiviata con il codice della richiesta", "Chi segue il registro"]
];
/* Cronistoria generale del Mar Piccolo */
var CRONO_GEN = [
  ["2000-01-10", "Nasce il Sito di interesse nazionale di Taranto: 4.383 ettari a terra e 7.005 a mare.", "inch22"],
  ["2012-07-26", "Protocollo d'intesa per Taranto: 336,7 milioni per bonifiche e riqualificazione.", "inch22"],
  ["2024-07-08", "La Regione fissa le priorità FSC per i SIN pugliesi.", "dgr981"],
  ["2024-12-20", "Decreto MASE n. 449: nuovo perimetro del SIN. Nessuna area del Mar Piccolo esce.", "dm449"],
  ["2025-03-17", "S'insedia la struttura del Commissario Uricchio.", "insed"],
  ["2025-04-04", "La Carta del Mar Piccolo viene consegnata al Commissario.", "cartacom"],
  ["2025-06-20", "Riparte il Contratto istituzionale di sviluppo di Taranto, con le bonifiche al centro.", "cis25"],
  ["2025-11-10", "Accordo per la coesione: 97 milioni FSC al SIN di Taranto.", "coes"],
  ["2025-03-31", "La Giunta regionale prende atto del Piano esecutivo JTF per Taranto (DGR 400/2025).", "ad38"],
  ["2025-12-04", "Il Comitato di sorveglianza JTF sposta 24 milioni sul Sea Hub.", "cds"],
  ["2026-02-26", "Protocollo d'intesa tra Comune e Commissario.", "prot"],
  ["2026-03-16", "Primo incontro del percorso partecipativo sul Mar Piccolo.", "casola"],
  ["2026-03-26", "Il Comune presenta i suoi sei interventi.", "schede1"],
  ["2026-04-30", "Il Commissario presenta i suoi cinque interventi.", "schede2"],
  ["2026-06-24", "Tavolo con le imprese su bonifiche e accesso ai dati.", "tav8"],
  ["2026-03-13", "Filiere verdi ammesse: 22,98 milioni a terra, parte a mare sospesa.", "ad38"],
  ["2026-05-29", "Green Belt: chiusa la procedura, otto parchi ammessi per 84,09 milioni.", "gbchiusa"],
  ["2026-07-21", "Sea Hub portato a 55,2 milioni.", "sh55"],
  ["2026-08-06", "L'Autorità di gestione JTF: a Taranto spesa certificata e prevista nel 2026 per 122,29 milioni contro un target di 281,19.", "decipcei"],
  ["2026-08-07", "Partono la procedura Sea Hub e le misure su coste e fondali del Mar Piccolo.", "dd118"],
  ["2026-11-23", "Sul sito del JTF nessuna spesa certificata per Green Belt, Sea Hub e Filiere verdi.", "jtf"]
];

/* Soldi, promesse, domande. Solo cifre da atti o pubblicazioni ufficiali (FONTI). null = non pubblicato. */

/* Il contesto JTF di Taranto */
var CONTESTO = {
  dotazione: [795610021.00, "det220"],
  target2026: [281192099.13, "decipcei"],
  certificato2026: [25160576.30, "decipcei"],
  previsto2026: [97131931.46, "decipcei"],
  fineSpesa: ["2029-12-31", "reg1060"]
};

/* Le tappe dei soldi, in ordine */
var TAPPE = [
  ["previsto", "Previsto", "La cifra messa in bilancio o assegnata a un'opera."],
  ["ammesso", "Ammesso", "L'ente che paga ha approvato il progetto per quella cifra."],
  ["impegnato", "Impegnato", "C'è un impegno di spesa registrato in bilancio."],
  ["avviato", "Lavori o gare", "Gara, affidamento o attività sul campo partite, secondo un atto."],
  ["speso", "Speso", "Pagato o certificato alla UE, secondo un dato pubblico."]
];

/* Operazioni. Ogni cifra ha la sua fonte. segnali: chiavi di SEGNALI. */
var OPERAZIONI = [
  { id: "op-galeso", int: "int-01", nome: "Parco naturalistico del fiume Galeso", fondo: "JTF 2.3.1 Green Belt", chi: "comune", mp: true,
    previsto: [13778650.98, "gbchiusa"], ammesso: [13778650.98, "gb68"], impegnato: [null, "gb68"], avviato: [null, ""], speso: [null, "gb68"],
    stato: "Ammesso a maggio 2026. Progetto da fare.", segnali: ["nonspeso"], ric: ["G15", "01.3"] },
  { id: "op-rimembranza", int: "int-02", nome: "Parco della Rimembranza", fondo: "JTF 2.3.1 Green Belt", chi: "comune", mp: true,
    previsto: [9835198.62, "gbchiusa"], ammesso: [9835198.62, "gb69"], impegnato: [null, "gb69"], avviato: [null, ""], speso: [null, "gb69"],
    stato: "Ammesso a maggio 2026. Area sotto sequestro ad aprile 2026.", segnali: ["bloccato", "nonspeso"], ric: ["02.1", "G15"] },
  { id: "op-seahub", int: "int-03", nome: "Sea Hub, tre cluster del Comune", fondo: "JTF 2.3.2 Sea Hub", chi: "comune", mp: true,
    previsto: [42000000, "dd118"], ammesso: [null, "jtf"], impegnato: [null, ""], avviato: [null, ""], speso: [null, "jtf"],
    prenot: [[2026, 4250000], [2027, 13500000], [2028, 13500000], [2029, 10750000]], prenotF: "dd118",
    stato: "Proposte attese entro il 30/09/2026. Nessun progetto ammesso pubblicato.", segnali: ["scaduta"], ric: ["G14", "03.1"] },
  { id: "op-arconord", int: "int-07", nome: "Arco Nord del secondo seno (Sea Hub, cluster 4)", fondo: "JTF 2.3.2 Sea Hub", chi: "commissario", mp: true,
    previsto: [13203555.90, "dd118"], ammesso: [null, "jtf"], impegnato: [null, ""], avviato: [null, ""], speso: [null, "jtf"],
    prenot: [[2026, 1320500], [2027, 1960000], [2028, 1960000], [2029, 7963055.90]], prenotF: "dd118",
    stato: "Proposta attesa entro il 30/09/2026. Il 60% dei soldi è messo sul 2029.", segnali: ["scaduta", "finecorsa"], ric: ["G14", "07.4"] },
  { id: "op-fvterra", int: "int-08", nome: "Filiere verdi, aree a terra", fondo: "JTF 2.3.3 Filiere verdi", chi: "commissario", mp: false,
    previsto: [22976046, "ad38"], ammesso: [22976046, "ad38"], impegnato: [22976046, "ad38"], avviato: [null, ""], speso: [null, "jtf"],
    prenot: [[2026, 12781500.01], [2027, 3531730.27], [2028, 3531730.27], [2029, 3131085.45]], prenotF: "ad38", prenotTipo: "impegni",
    stato: "Ammesso e impegnato a marzo 2026. Condizione: accordi con i proprietari delle aree.", segnali: ["condizione", "nonspeso", "cup"], ric: ["08.8", "G12", "08.1"] },
  { id: "op-fvmare", int: "int-08", nome: "Filiere verdi, bonifica dei sedimenti del Mar Piccolo", fondo: "JTF 2.3.3 Filiere verdi", chi: "commissario", mp: true,
    previsto: [3055924.10, "dd118"], ammesso: [null, "ad38"], impegnato: [null, ""], avviato: [null, ""], speso: [null, ""],
    prima: [10659480, "ad38"],
    stato: "Sospesa: manca la ricerca del responsabile della contaminazione. Scesa da 10,66 a 3,06 milioni.", segnali: ["bloccato", "tagliato"], ric: ["G13"] },
  { id: "op-waterfront", int: "int-06", nome: "Waterfront Mar Piccolo (CIS centro storico)", fondo: "CIS Taranto centro storico", chi: "comune", mp: true,
    previsto: [6000000, "ciscs"], ammesso: [6000000, "ocwf"], impegnato: [null, ""], avviato: [null, ""], speso: [124065.22, "ocwf"],
    stato: "Il CIS dava l'inizio dei lavori al 1° giugno 2026. OpenCoesione (dati al 31/08/2026) lo sposta al 1° dicembre 2026, con fine al 31/12/2027. Pagati 124.065,22 euro, tutti nel 2023.", segnali: ["scaduta"], ric: ["06.2"] },
  { id: "op-relitti", int: "int-06", nome: "Relitti e rifiuti su coste e fondali", fondo: "CIS Taranto e decreto commissariale n. 43/2026", chi: "commissario", mp: true,
    previsto: [500000, "cis26"], ammesso: [500000, "cis26"], impegnato: [null, ""], avviato: [500000, "dec43"], speso: [null, ""],
    stato: "Misure avviate il 7 agosto 2026: 250.000 euro a terra e 250.000 a mare.", segnali: [], ric: ["06.1"] },
  { id: "op-statte", int: "int-10", nome: "Bonifica dell'area PIP di Statte", fondo: "FSC, Accordo per la coesione", chi: "commissario", mp: false,
    previsto: [89900000, "coes"], ammesso: [89900000, "coes"], impegnato: [null, ""], avviato: [null, ""], speso: [null, ""],
    stato: "Assegnati a novembre 2025. Cronoprogramma non pubblico.", segnali: [], ric: ["10.3"] },
  { id: "op-brunone", int: "int-10", nome: "Bonifica del cimitero San Brunone", fondo: "Progetto approvato nel 2018", chi: "commissario", mp: false,
    previsto: [12512450.45, "ocbrun"], ammesso: [12512450.45, "ocbrun"], impegnato: [null, ""], avviato: [null, "rel23"], speso: [21417.72, "ocbrun"],
    stato: "Progetto da 13.917.491,35 euro approvato nel 2018; gara annullata nel 2021. Su OpenCoesione (dati al 31/08/2026) costa 12.512.450,45 euro, è «in corso» con fine prevista il 1° giugno 2020 e ha 21.417,72 euro pagati, tutti nel 2023.", segnali: ["bloccato"], ric: ["10.2"] }
];
/* Operazioni senza cifre pubbliche */
var SENZA_CIFRE = [
  ["int-04", "Lungomare terrazzato dei Tamburi", "Quota del Masterplan Tamburi (CIS), non pubblicata", "04.2"],
  ["int-05", "REMAR Piccolo", "Direzione Ambiente del Comune, importo non pubblicato", "05.1"],
  ["int-09", "Mitilicoltura sostenibile", "Commissario e CIS, importi non pubblicati", "09.1"],
  ["int-10", "Caratterizzazione impianto Atleti Azzurri", "Commissario, importo non pubblicato", "10.1"],
  ["int-11", "Monitoraggio integrato", "Non indicati", "11.2"]
];
/* Altre cifre utili, fuori dal Mar Piccolo o da chiarire */
var ALTRE = [
  ["Altri sei parchi della Green Belt (Mura Greche, Mar Grande, Piero Angela, Taranto 2, San Vito, Tre Terre)", 60474481.57, "gbchiusa", "Ammessi a maggio 2026 insieme a Galeso e Rimembranza: in tutto 84,09 milioni."],
  ["Operazione «Foresta Urbana Nord-CIS» sul sito del JTF", 6850945.00, "foresta", "Stesso CUP delle Filiere verdi, intestata al Comune: 3.407.693,23 euro già certificati alla UE. È l'unica spesa certificata dell'azione 2.3. Da chiarire (richiesta G12)."]
];
var SEGNALI = {
  bloccato: ["rosso", "Fermo", "Un ostacolo scritto negli atti blocca l'opera."],
  scaduta: ["ocra", "Data superata", "Una data promessa è passata senza atti che la confermino."],
  finecorsa: ["blu", "Soldi a fine corsa", "Più di metà dei soldi è messa sul 2029, l'ultimo anno utile."],
  nonspeso: ["", "Spesa non pubblicata", "Il sito del JTF dà «non disponibile» per impegni ed erogazioni."],
  condizione: ["ocra", "Con condizione", "L'ammissione dipende da un passaggio non ancora documentato."],
  tagliato: ["rosso", "Ridotto", "La cifra è stata ridotta e spostata su un'altra opera."],
  cup: ["blu", "Da chiarire", "Dati diversi tra due siti ufficiali."]
};

/* Dove si sono spostati i soldi */
var MOVIMENTI = [
  ["2025-03-31", "Il Piano esecutivo JTF per Taranto assegna 24 milioni al Sea Hub.", "+24", "dd118"],
  ["2025-12-04", "Il Comitato di sorveglianza aggiunge 24 milioni al Sea Hub e ne toglie 22 all'azione sulle coste del Mar Grande e del Mar Piccolo (2.3.4), che oggi non compare tra le procedure sul sito del JTF.", "±", "cds"],
  ["2026-03-13", "Filiere verdi: 22.976.046 euro ammessi a terra; 10.659.480 euro a mare sospesi.", "", "ad38"],
  ["2026-05-20", "Il Commissario propone di togliere 7.603.555,90 euro alla bonifica a mare delle Filiere verdi e darli all'Arco Nord.", "−7,6", "dd118"],
  ["2026-05-29", "Green Belt: otto parchi ammessi per 84,09 milioni; 23,61 milioni vanno a Galeso e Rimembranza.", "", "gbchiusa"],
  ["2026-06-24", "La parte a mare delle Filiere verdi scende a 3.055.924,10 euro (determinazione n. 91/2026).", "−7,6", "dd118"],
  ["2026-07-21", "Il Sea Hub sale a 55.203.555,90 euro: 42 milioni al Comune, 13,2 al Commissario (DGR 1009/2026).", "+7,6", "sh55"],
  ["2026-08-06", "L'Autorità di gestione nota che Taranto è lontana dal target di spesa 2026 e assegna 482,4 milioni a un progetto sull'idrogeno, citando il rischio di perdere una quota dei fondi.", "", "decipcei"]
];

/* Promesso e fatto. stato: fatto | attesa (si calcola: scaduta se la data è passata e non c'è prova) */
var PROMESSE = [
  { id: "p-gb", int: "int-01", data: "2025-11-21", cosa: "Il Comune presenta alla Regione la proposta Green Belt.", chi: "Comune di Taranto", f: "dd145", fatto: ["Procedura chiusa il 29/05/2026, otto parchi ammessi.", "gbchiusa"] },
  { id: "p-fvamm", int: "int-08", data: "2025-09-30", cosa: "Il Commissario presenta la proposta Filiere verdi.", chi: "Commissario", f: "dd75", fatto: ["Proposta presentata il 22/09/2025, ammessa il 13/03/2026.", "ad38"] },
  { id: "p-wf", int: "int-06", data: "2026-06-01", cosa: "Inizio dei lavori del waterfront Mar Piccolo (CIS centro storico).", chi: "Comune di Taranto", f: "ciscs", nota: "Rinviato: OpenCoesione ora indica il 1° dicembre 2026." },
  { id: "p-wf2", int: "int-06", data: "2026-12-01", cosa: "Nuova data di inizio dei lavori del waterfront Mar Piccolo.", chi: "Comune di Taranto", f: "ocwf" },
  { id: "p-wf3", int: "int-06", data: "2027-12-31", cosa: "Fine dei lavori del waterfront Mar Piccolo.", chi: "Comune di Taranto", f: "ocwf" },
  { id: "p-brun", int: "int-10", data: "2020-06-01", cosa: "Fine della bonifica delle aree non pavimentate del cimitero San Brunone.", chi: "Commissario", f: "ocbrun", nota: "Pagati 21.417,72 euro su 12.512.450,45." },
  { id: "p-sed", int: null, data: "2021-12-31", cosa: "Fine degli interventi sui sedimenti contaminati del Mar Piccolo (21 milioni FSC).", chi: "Commissario", f: "ocsed", nota: "Nessun pagamento registrato." },
  { id: "p-misp", int: "int-10", data: "2017-10-15", cosa: "Fine della messa in sicurezza permanente della falda dell'area PIP di Statte (36,6 milioni FSC).", chi: "Commissario", f: "ocmisp", nota: "Nessun pagamento registrato." },
  { id: "p-for", int: null, data: "2024-06-24", cosa: "Fine della «foresta urbana» di fitorimedio ai Tamburi, zona nord.", chi: "Comune di Taranto", f: "ocfor", nota: "Poi portata nel JTF: 2.247.116,93 euro pagati, 3.407.693,23 certificati." },
  { id: "p-gdf", int: "int-11", data: "2026-04-30", cosa: "Fase operativa del monitoraggio con la Guardia di Finanza, annunciata «a brevissimo».", chi: "Commissario", f: "schede2" },
  { id: "p-fvqe", int: "int-08", data: "2026-09-20", cosa: "Consegna del quadro esigenziale delle Filiere verdi.", chi: "Commissario", f: "schede2" },
  { id: "p-sh", int: "int-03", data: "2026-09-30", cosa: "Comune e Commissario presentano le proposte del Sea Hub (anche Arco Nord).", chi: "Comune di Taranto, Commissario", f: "dd118", nota: "Le proposte possono essere state presentate senza essere pubblicate: serve l'esito dell'istruttoria (G14)." },
  { id: "p-target", int: null, data: "2026-12-31", cosa: "Target di spesa JTF per Taranto: 281,19 milioni entro fine 2026. Previsti 122,29.", chi: "Regione Puglia, Autorità di gestione", f: "decipcei" },
  { id: "p-fine", int: null, data: "2029-12-31", cosa: "Ultimo giorno per pagare spese ammissibili ai fondi europei 2021-2027.", chi: "Tutti i beneficiari", f: "reg1060" },
  { id: "p-resp", int: "int-08", data: null, cosa: "Avviare la ricerca del responsabile della contaminazione dei sedimenti del Mar Piccolo: senza, la bonifica a mare resta sospesa.", chi: "Autorità competente (Provincia di Taranto, secondo la giurisprudenza citata dalla Regione)", f: "ad38", nota: "Non avviata al 13/03/2026." },
  { id: "p-accordi", int: "int-08", data: null, cosa: "Firmare gli accordi con i proprietari delle aree a terra (Marina Militare, Carabinieri forestali, Demanio).", chi: "Commissario", f: "ad38" },
  { id: "p-disc", int: "int-08", data: null, cosa: "Firmare il disciplinare tra Regione e Commissario per le Filiere verdi.", chi: "Regione Puglia, Commissario", f: "ad38", nota: "La stampa lo dà firmato a luglio 2026; l'atto non è online." },
  { id: "p-mit", int: "int-09", data: null, cosa: "Aggiornare l'ordinanza regionale n. 1989/2011 sui tempi di trasferimento dei mitili.", chi: "Regione Puglia", f: "mit3", nota: "Tavolo tecnico avviato il 7/09/2026." },
  { id: "p-rim", int: "int-02", data: null, cosa: "Dissequestro dell'area e rimozione dei rifiuti del Parco della Rimembranza.", chi: "Comune di Taranto", f: "riass16" }
];

/* Domande proposte da Postilva per i tavoli (non sono domande raccolte tra i cittadini) */
var DOMANDE = {
  "int-01": [["Comune", "Il parco ha 13.778.650,98 euro ammessi a maggio 2026. Chi è il responsabile del procedimento e quando parte la gara per la progettazione?"], ["Comune, ARPA", "Prima di progettare boschi e zone umide sono state fatte analisi di suoli e acque alla foce del Galeso? Dove sono pubblicate?"], ["Comune", "Come possono le associazioni partecipare alla scelta delle specie e alla gestione del laboratorio ambientale?"]],
  "int-02": [["Comune", "A che punto è il sequestro? La rimozione dei rifiuti si paga con i 9.835.198,62 euro del JTF o con altri fondi?"], ["Comune", "Qual è la superficie esatta del parco e quale parte appartiene alla Marina Militare?"], ["Comune", "Quando sarà pubblicato il progetto?"]],
  "int-03": [["Comune", "Il Comune ha presentato le proposte dei tre cluster entro il 30 settembre 2026? Come sono divisi i 42 milioni tra Mercato ittico, Pamunto-Sabbione e Cimino-Manganecchia?"], ["Comune", "Dove andranno gli operatori degli attracchi da rimuovere, e chi li ha consultati?"], ["Comune", "Chi gestirà approdi e centri servizi dopo i lavori, e a quali costi per i mitilicoltori?"]],
  "int-04": [["Comune", "Quanto costa il lungomare e quale quota del Masterplan Tamburi lo finanzia?"], ["Comune", "Quando si fa la gara?"], ["Comune", "Quali alberi tocca il BRT in quella zona e come vengono compensati?"]],
  "int-05": [["Comune", "Quanto costa REMAR Piccolo, chi lo finanzia e quando finiscono i lavori?"], ["Comune", "Quali specie sono state piantate e chi le cura dopo il collaudo?"], ["Comune", "Si può organizzare una visita al cantiere con il tavolo?"]],
  "int-06": [["Comune", "Il CIS prevedeva l'inizio dei lavori del waterfront il 1° giugno 2026: sono partiti? Se no, qual è la nuova data?"], ["Comune", "I 6 milioni del CIS «waterfront Mar Piccolo» sono lo stesso terzo lotto presentato a marzo?"], ["Commissario", "Quanta parte della pulizia di coste e fondali (500.000 euro, decreto n. 43/2026) è conclusa?"]],
  "int-07": [["Commissario", "Dei 13.203.555,90 euro, 7.963.055,90 sono messi sul 2029, l'ultimo anno in cui la spesa è ammessa. Quale cronoprogramma garantisce di spenderli in tempo?"], ["Commissario, Comune", "Quante persone e strutture ci sono oggi sulla sponda, e qual è il piano per loro?"], ["Commissario", "Sono state fatte caratterizzazioni della sponda? Dove sono pubblicate?"]],
  "int-08": [["Commissario, Regione", "Il sito del JTF riporta 3.407.693,23 euro certificati su un'operazione «Foresta Urbana Nord-CIS» con lo stesso CUP delle Filiere verdi. A quale spesa corrispondono?"], ["Commissario", "Sono firmati gli accordi con Marina Militare, Carabinieri forestali e Demanio? Quali aree e quanti ettari?"], ["Provincia di Taranto", "È stato avviato il procedimento per individuare il responsabile della contaminazione dei sedimenti, che serve a sbloccare la bonifica a mare?"]],
  "int-09": [["ARPA, CNR, ASL", "Quando sarà pubblicata la relazione finale sulla decontaminazione dei mitili?"], ["Regione", "Entro quando sarà aggiornata l'ordinanza n. 1989/2011?"], ["Commissario", "Quanto è costato lo studio e con quali fondi?"]],
  "int-10": [["Commissario, ARPA", "Quando saranno pubblicati gli esiti della caratterizzazione dell'impianto Atleti Azzurri?"], ["Commissario", "San Brunone: quando la nuova gara? Il progetto da 13,9 milioni del 2018 è ancora valido?"], ["Commissario", "Qual è il cronoprogramma per spendere gli 89,9 milioni FSC dell'area PIP di Statte?"]],
  "int-11": [["Commissario", "La fase operativa con la Guardia di Finanza è partita? Da quando?"], ["Commissario, ARPA", "Quanti degli oltre 90 scarichi censiti sono stati controllati o chiusi?"], ["Commissario", "Le immagini satellitari saranno condivise con ARPA e con i cittadini?"]]
};

/* ---- OpenCoesione (dati al 31/08/2026) e procedure JTF lette il 23/11/2026 ---- */
var OC = "https://opencoesione.gov.it/it/dati/progetti/";
FONTI.occomm = { tipo: "ente", ente: "OpenCoesione (Dipartimento politiche di coesione)", t: "Soggetto: Commissario straordinario per gli interventi urgenti di bonifica di Taranto. 14 progetti, 142,3 milioni di costo pubblico, 14,4 milioni pagati", d: "dati al 31/08/2026", u: "https://opencoesione.gov.it/it/dati/soggetti/commissario-straordinario-per-gli-interventi-urgenti-di-bonifica-di-taranto-90221090732/" };
FONTI.ocmp = { tipo: "ente", ente: "OpenCoesione", t: "Progetto: Interventi di bonifica, ambientalizzazione e riqualificazione del bacino del Mar Piccolo, I e II stralcio (CUP J56J14000460001)", d: "dati al 31/08/2026", u: OC + "1mattmdgsta_23_0014/" };
FONTI.ocsed = { tipo: "ente", ente: "OpenCoesione", t: "Progetto: Interventi di bonifica e/o MISE dei sedimenti contaminati del Mar Piccolo (CUP J56J14000460001)", d: "dati al 31/08/2026", u: OC + "7pufc2600003/" };
FONTI.ocmisp = { tipo: "ente", ente: "OpenCoesione", t: "Progetto: Messa in sicurezza permanente della falda profonda dell'area PIP di Statte (CUP J73J12001570001)", d: "dati al 31/08/2026", u: OC + "7pufc2600002/" };
FONTI.ocbrun = { tipo: "ente", ente: "OpenCoesione", t: "Progetto: Bonifica aree non pavimentate Cimitero San Brunone (CUP J54G16000010001)", d: "dati al 31/08/2026", u: OC + "1mattmdgsta_23_0001/" };
FONTI.ocwf = { tipo: "ente", ente: "OpenCoesione", t: "Progetto: Waterfront Mar Piccolo, riqualificazione e rinaturalizzazione da via Nuova al piazzale Democrate (CUP E55C15000090001)", d: "dati al 31/08/2026", u: OC + "1misefsc-cistaranto4/" };
FONTI.ocfor = { tipo: "ente", ente: "OpenCoesione", t: "Progetto: Quartiere Tamburi, foresta urbana di fitorimedio, zona nord (CUP E57B05000020001), Piano città", d: "dati al 31/12/2022", u: OC + "1mtra1ta-02/" };
FONTI.ocforj = { tipo: "ente", ente: "OpenCoesione", t: "Progetto: foresta urbana zona nord acquisita al PN JTF come operazione coerente, azione 2.3 (CUP E57B05000020001)", d: "dati al 31/12/2025", u: OC + "e57b05000020001-jtfta23forestanord/" };
FONTI.jtfproc = { tipo: "ente", ente: "Programma nazionale JTF", t: "Elenco delle procedure: valore, ammesso a finanziamento, certificato alla UE", d: "letto il 23/11/2026", u: "https://www.jtf.gov.it/procedure/" };

/* I soldi più vecchi: progetti del Commissario e del Comune sul Mar Piccolo e dintorni, con i pagamenti registrati */
var STORICI = [
  { nome: "Bonifica del bacino del Mar Piccolo, I e II stralcio", chi: "commissario", fondo: "FSC", costo: 55000000, pagato: 5585794.01, ultimo: "2023", fine: null, stato: "In corso", f: "ocmp", int: null,
    nota: "Bioremediation, capping e asportazione selettiva dei sedimenti nel primo seno, su 30.000 m² previsti. Pagamenti: 2,23 milioni nel 2021, 2,11 nel 2022, 1,25 nel 2023, poi più nulla.", ric: "G16" },
  { nome: "Bonifica o messa in sicurezza dei sedimenti del Mar Piccolo", chi: "commissario", fondo: "FSC 2007-2013", costo: 21000000, pagato: 0, ultimo: null, fine: "2021-12-31", stato: "In corso", f: "ocsed", int: null,
    nota: "Ha lo stesso CUP della riga sopra: probabilmente è una parte dei 55 milioni, non una somma in più. Da chiarire.", ric: "G16", parte: true },
  { nome: "Messa in sicurezza della falda dell'area PIP di Statte", chi: "commissario", fondo: "FSC 2007-2013", costo: 36600000, pagato: 0, ultimo: null, fine: "2017-10-15", stato: "In corso", f: "ocmisp", int: "int-10",
    nota: "Non è chiaro se gli 89,9 milioni FSC dell'Accordo per la coesione (2025) sostituiscono o si aggiungono a questa cifra.", ric: "G17" },
  { nome: "Bonifica del cimitero San Brunone", chi: "commissario", fondo: "Fondo di rotazione e FSC", costo: 12512450.45, pagato: 21417.72, ultimo: "2023", fine: "2020-06-01", stato: "In corso", f: "ocbrun", int: "int-10",
    nota: "Circa 1,2 ettari di campi di inumazione interdetti al pubblico.", ric: "10.2" },
  { nome: "Foresta urbana di fitorimedio ai Tamburi, zona nord", chi: "comune", fondo: "Piano città, poi JTF", costo: 6850945.60, pagato: 430258.42, ultimo: "2022", fine: "2024-06-24", stato: "In corso", f: "ocfor", int: "int-08",
    nota: "Nel 2025 entra nel JTF come «operazione coerente»: lì risultano 2.247.116,93 euro pagati e 3.407.693,23 certificati alla UE. È l'unica spesa certificata dell'azione 2.3.", ric: "G12" },
  { nome: "Waterfront Mar Piccolo, da via Nuova al piazzale Democrate", chi: "comune", fondo: "FSC 2014-2020 (CIS centro storico)", costo: 6000000, pagato: 124065.22, ultimo: "2023", fine: "2027-12-31", stato: "In corso", f: "ocwf", int: "int-06",
    nota: "Inizio dei lavori previsto il 1° dicembre 2026.", ric: "06.2" }
];
var COMMISSARIO_OC = { costo: 142312863, pagato: 14400877.34, progetti: 14, f: "occomm" };

/* Il JTF di Taranto sul Mar Piccolo: le procedure dell'azione 2.3 (jtf.gov.it, letto il 23/11/2026) */
var PROCEDURE_23 = [
  ["Green Belt (2.3.1)", 84088815.87, 84088815.87, null],
  ["Sea Hub (2.3.2)", 55203555.90, null, null],
  ["Filiere verdi (2.3.3)", 26031970.45, null, null],
  ["Foresta urbana nord (operazione coerente)", 6850945.00, 6850945.00, 3407693.23]
];

/* Anomalie: dati diversi tra fonti ufficiali */
var ANOMALIE = [
  ["Filiere verdi: 26,03 o 33,64 milioni?", "Sul sito del JTF la procedura vale 26.031.970,45 euro. La Regione l'ha avviata e ammessa su 33.635.526,35 euro (22.976.046 a terra e 10.659.480 a mare).", ["jtfproc", "ad38"], "G12"],
  ["Un CUP per due opere", "Il CUP J41J26000640006 è quello delle Filiere verdi nell'atto della Regione, ma sul sito del JTF è assegnato alla «Foresta Urbana Nord-CIS», intestata al Comune e non al Commissario.", ["foresta", "ad38"], "G12"],
  ["Lavori finiti sulla carta, soldi non pagati", "Tre progetti di bonifica del Commissario hanno la data di fine già passata (2017, 2020, 2021) e risultano «in corso» con pagamenti a zero o quasi.", ["ocmisp", "ocbrun", "ocsed"], "G16"],
  ["Bonifica del Mar Piccolo ferma al 2023", "Dei 55 milioni per i primi due stralci sono stati pagati 5,59 milioni (10%). L'ultimo pagamento registrato è del 2023.", ["ocmp"], "G16"]
];

/* Cantiere verde · Taranto. Interventi del verde fuori dal Mar Piccolo: gli altri sei parchi della Green Belt
   e la foresta urbana dei Tamburi. Posizioni ricavate dalla tavola del Comune (marzo 2026): sono indicative. */

var JP = "https://www.jtf.gov.it/progetti/";
FONTI.gb70 = { tipo: "ente", ente: "Programma nazionale JTF", t: "Scheda progetto: Green Belt, Parco Piero Angela e aree verdi del quartiere Paolo VI", d: "letto il 23/11/2026", u: JP + "70/" };
FONTI.gb71 = { tipo: "ente", ente: "Programma nazionale JTF", t: "Scheda progetto: Green Belt, Parco archeologico delle Mura Greche", d: "letto il 23/11/2026", u: JP + "71/" };
FONTI.gb72 = { tipo: "ente", ente: "Programma nazionale JTF", t: "Scheda progetto: Green Belt, Parco urbano attrezzato di Taranto 2", d: "letto il 23/11/2026", u: JP + "72/" };
FONTI.gb73 = { tipo: "ente", ente: "Programma nazionale JTF", t: "Scheda progetto: Green Belt, Parco Mar Grande", d: "letto il 23/11/2026", u: JP + "73/" };
FONTI.gb74 = { tipo: "ente", ente: "Programma nazionale JTF", t: "Scheda progetto: Green Belt, Parco costiero di San Vito", d: "letto il 23/11/2026", u: JP + "74/" };
FONTI.gb75 = { tipo: "ente", ente: "Programma nazionale JTF", t: "Scheda progetto: Green Belt, Parco lineare costiero delle Tre Terre", d: "letto il 23/11/2026", u: JP + "75/" };

function parcoGB(n, nome, sotto, euro, fonte, dove, nota) {
  var e = euro.toLocaleString("it-IT", { minimumFractionDigits: 2 });
  return {
    id: "int-" + n, n: n, nome: nome, sotto: "Green Belt · " + sotto, chi: "comune", fondi: "jtf", fase: ["ocra", "Ammesso, da progettare"], gruppo: "greenbelt",
    lede: ["Ha " + e + " euro ammessi dal JTF a maggio 2026. Sul sito del programma progetto, date e spesa sono «non disponibili».", "gbchiusa"],
    breve: [["Soldi", e + " € ammessi (JTF, Green Belt)"], ["Chi", "Comune di Taranto"], ["Dove", dove], ["Superficie", "Non indicata nelle fonti"]],
    che: [["È uno degli otto interventi della Green Belt: circa 230 ettari di verde in tutta la città, finanziati dall'azione 2.3 del JTF.", "comune"], ["Il Comune lo descrive come «" + nota + "».", "comune"]],
    finora: [["Il 22 settembre 2025 la Regione avvia la procedura Green Belt (determinazione n. 145).", "dd145"], ["Il 29 maggio 2026 la Regione chiude la procedura: l'intervento è ammesso per " + e + " euro.", "gbchiusa"]],
    manca: [["Progetto, responsabile del procedimento, CUP e date di inizio e fine: sulla scheda del JTF risultano «non disponibili».", fonte]],
    adesso: [["Al 23 novembre 2026 nessuna spesa pubblicata.", fonte]],
    soldi: [e + " euro ammessi dal JTF, azione 2.3, procedura Green Belt.", "gbchiusa"],
    cv: [], img: [["greenbelt-mappa.jpg", "La Green Belt nella tavola del Comune: gli otto interventi JTF (cerchi rossi) e quelli già finanziati (cerchi verdi).", "comune"]],
    crono: [["2025-09-22", "La Regione avvia la procedura Green Belt.", "dd145"], ["2026-03-26", "Il Comune presenta la Green Belt al percorso partecipativo.", "comune"], ["2026-05-29", "Procedura chiusa: ammessi " + e + " euro.", "gbchiusa"]],
    richieste: ["G1", "G15"]
  };
}
INT.push(
  parcoGB("12", "Parco Piero Angela e verde di Paolo VI", "l'ex Parco del Mirto nel quartiere Paolo VI", 8275167.41, "gb70", "Quartiere Paolo VI", "riqualificazione del Parco Piero Angela (ex Parco del Mirto, quartiere Paolo VI)"),
  parcoGB("13", "Parco archeologico delle Mura Greche", "rinaturalizzare il parco delle mura greche", 6079870.82, "gb71", "Città nuova, a sud del secondo seno", "rinaturalizzazione e valorizzazione del Parco archeologico delle Mura Greche"),
  parcoGB("14", "Parco urbano attrezzato di Taranto 2", "un nuovo parco nel quartiere Taranto 2", 9892136.06, "gb72", "Quartiere Taranto 2", "realizzazione del Parco urbano attrezzato di Taranto 2"),
  parcoGB("15", "Parco Mar Grande", "il parco più grande della Green Belt, sulla costa del Mar Grande", 19453725.25, "gb73", "Costa del Mar Grande", "realizzazione del Parco Mar Grande"),
  parcoGB("16", "Parco costiero di San Vito", "un parco sulla costa di San Vito", 3634675.88, "gb74", "San Vito", "realizzazione del Parco costiero di San Vito"),
  parcoGB("17", "Parco lineare costiero delle Tre Terre", "un parco lineare lungo la costa sud", 13138906.15, "gb75", "Costa tra San Vito, Lama e Talsano", "realizzazione del Parco lineare costiero delle Tre Terre")
);
INT.push({
  id: "int-18", n: "18", nome: "Foresta urbana dei Tamburi, zona nord", sotto: "Alberi per assorbire gli inquinanti nel quartiere più esposto all'ex Ilva", chi: "comune", fondi: "jtf", fase: ["verde", "Lavori in corso, spesa certificata"], gruppo: "verde",
  lede: ["È l'unica opera del verde con soldi già certificati alla UE: 3.407.693,23 euro su 6.850.945.", "foresta"],
  breve: [["Soldi", "6.850.945 € (JTF, operazione coerente)"], ["Chi", "Comune di Taranto"], ["Dove", "Quartiere Tamburi, zona nord"], ["Superficie", "Non indicata nelle fonti"]],
  che: [["Una foresta urbana di fitorimedio: alberi e arbusti piantati per trattenere polveri e inquinanti vicino alle case dei Tamburi.", "ocfor"], ["Il Comune la indica tra gli interventi della Green Belt già finanziati e in corso di realizzazione.", "comune"]],
  finora: [["Nasce con il Piano città (fondi di coesione 2007-2013): 430.258,42 euro pagati tra il 2018 e il 2022, fine prevista il 24 giugno 2024.", "ocfor"], ["Nel 2025 entra nel Programma JTF come «operazione coerente»: 2.247.116,93 euro pagati, 3.407.693,23 certificati alla UE.", "ocforj"]],
  manca: [["Lo stato dei lavori e la data di fine aggiornata.", ""], ["Sul sito del JTF l'operazione ha lo stesso CUP delle Filiere verdi del Commissario: va chiarito.", "foresta"]],
  adesso: [["Al 23 novembre 2026 risulta «in corso».", "ocforj"]],
  soldi: ["6.850.945 euro; 3.407.693,23 certificati alla UE.", "foresta"],
  cv: [], img: [], richieste: ["G12"],
  crono: [["2018-01-01", "Primi pagamenti con il Piano città.", "ocfor", "anno"], ["2024-06-24", "Fine dei lavori prevista dal Piano città.", "ocfor"], ["2025-12-31", "L'opera è nel Programma JTF: 3.407.693,23 euro certificati.", "foresta", "anno"]]
});

/* Altri interventi del verde che il Comune dà «già dotati di finanziamento ed in corso di realizzazione» (tavola di marzo 2026).
   Le fonti non danno importi né stato: sono luoghi da andare a vedere. */
var ALTRI_VERDI = [
  ["Foresta urbana dei Tamburi, zona sud", [17.2229, 40.4849]],
  ["Waterfront dei giardini", [17.2337, 40.4734]],
  ["Rinaturalizzazione di piazzale Liberazione", [17.2730, 40.5158]],
  ["Parco della campagna produttiva, Paolo VI", [17.2665, 40.5128]],
  ["Parco dei XX Giochi del Mediterraneo", [17.2707, 40.4466]],
  ["Parco della Salina Piccola", [17.2739, 40.4394]]
];

AREE["int-12"] = [{ k: "circle", nome: "Parco Piero Angela (posizione indicativa)", c: [17.2732, 40.5236], r: 260 }];
AREE["int-13"] = [{ k: "circle", nome: "Parco delle Mura Greche (posizione indicativa)", c: [17.2777, 40.4606], r: 260 }];
AREE["int-14"] = [{ k: "circle", nome: "Parco di Taranto 2 (posizione indicativa)", c: [17.2658, 40.4348], r: 300 }];
AREE["int-15"] = [{ k: "line", nome: "Parco Mar Grande, lungo la costa (tracciato indicativo)", c: [[17.2470, 40.4440], [17.2430, 40.4330], [17.2392, 40.4201], [17.2300, 40.4160]] }];
AREE["int-16"] = [{ k: "circle", nome: "Parco costiero di San Vito (posizione indicativa)", c: [17.2081, 40.4134], r: 300 }];
AREE["int-17"] = [{ k: "line", nome: "Parco lineare delle Tre Terre (tracciato indicativo)", c: [[17.2066, 40.4089], [17.2250, 40.4010], [17.2451, 40.3976], [17.2747, 40.3910]] }];
AREE["int-18"] = [{ k: "circle", nome: "Foresta urbana Tamburi nord (posizione indicativa)", c: [17.2220, 40.4903], r: 180 }];

/* Soldi delle opere aggiunte */
[["12", 8275167.41, "gb70"], ["13", 6079870.82, "gb71"], ["14", 9892136.06, "gb72"], ["15", 19453725.25, "gb73"], ["16", 3634675.88, "gb74"], ["17", 13138906.15, "gb75"]].forEach(function (p) {
  var x = INT.filter(function (i) { return i.id === "int-" + p[0]; })[0];
  OPERAZIONI.push({ id: "op-gb" + p[0], int: x.id, nome: x.nome, fondo: "JTF 2.3.1 Green Belt", chi: "comune",
    previsto: [p[1], "gbchiusa"], ammesso: [p[1], "gbchiusa"], impegnato: [null, p[2]], avviato: [null, ""], speso: [null, p[2]],
    stato: "Ammesso a maggio 2026. Progetto da fare.", segnali: ["nonspeso"], ric: ["G15"] });
});
OPERAZIONI.push({ id: "op-foresta", int: "int-18", nome: "Foresta urbana dei Tamburi, zona nord", fondo: "JTF 2.3 (operazione coerente)", chi: "comune",
  previsto: [6850945, "foresta"], ammesso: [6850945, "foresta"], impegnato: [null, ""], avviato: [6850945, "ocforj"], speso: [2247116.93, "ocforj"],
  stato: "In corso. 3.407.693,23 euro certificati alla UE.", segnali: ["cup"], ric: ["G12"] });
