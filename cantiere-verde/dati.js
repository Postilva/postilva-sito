/* ===================================================================================
   CANTIERE VERDE · DATI DA AGGIORNARE
   Questo è l'unico file da modificare dopo ogni sopralluogo o nuova proposta.
   Si apre con un editor di testo. Dopo la modifica si ricarica il file sul sito.
   Regole: date nel formato "AAAA-MM-GG"; testi tra virgolette doppie; virgola tra un elemento e l'altro.
   =================================================================================== */

var CONFIG = {
  aggiornato: "2026-11-24",                 /* data dell'ultimo aggiornamento della pagina */
  emailProposte: "postilvaofficial@gmail.com",/* dove arrivano le proposte dei cittadini */
  moduloEsterno: ""                          /* se usate un modulo online (es. Google Moduli), incollate qui il link */
};

/* SOPRALLUOGHI: cosa abbiamo visto sul posto.
   int: codice dell'intervento ("int-05"). lavori: "non iniziati" | "in corso" | "fermi" | "conclusi".
   cartello: "sì" | "no" | "sì, senza importo o date". accesso: "aperto" | "chiuso" | "parziale".
   foto: nome del file nella cartella img/campo/ (facoltativo).
   Esempio:
   { int: "int-05", data: "2026-12-06", chi: "Tavolo 3", lavori: "in corso", cartello: "sì",
     accesso: "parziale", rifiuti: "no", nota: "Tre operai al lavoro sul tratto di Cimino.", foto: "remar-2026-12-06.jpg" },
*/
var SOPRALLUOGHI = [
];

/* SPAZI PROPOSTI: luoghi da rivalorizzare, segnalati dai cittadini o dal tavolo.
   stato: "segnalata" | "vista" | "discussa" | "portata".
   canale: da dove è arrivata ("modulo", "email", "incontro del 12/12/2026", "tavolo").
   vicino: codice di un intervento vicino, se c'è ("int-01").
   lng, lat: posizione (si leggono nella mail della proposta).
   Esempio:
   { id: "S-001", nome: "Ex campo di bocce di via ...", dove: "Quartiere ...", lng: 17.25, lat: 40.47,
     cosa: "Orto di quartiere e alberi da ombra.", data: "2026-12-10", canale: "modulo", stato: "segnalata",
     esito: "", vicino: "" },
*/
var SPAZI = [
];
