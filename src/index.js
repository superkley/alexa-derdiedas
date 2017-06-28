var Alexa = require('alexa-sdk');
// var config = require('./data/basiswortschatz');

const options = {
    QUESTIONS_PER_QUIZ: 10,
    TITLE: 'Der-Die-Das Quiz'
};

var languageStrings = {
    'de-DE': {
         'translation' : {
             'TITLE'   : "Der-Die-Das Quiz",
             'WELCOME_LAUNCH':"Hallo. Hier ist das %s. Sag 'Üben' oder 'Prüfen' um das Quiz zu starten.",
             'WELCOME_PRACTICE' : 'Die Übung beginnt jetzt. ',
             'WELCOME_QUIZ': '%s Wörter werden abgefragt. Die Prüfung beginnt jetzt. ',
             'HELP_MESSAGE': "Das Quiz hat zwei Modi, 'Üben' und 'Prüfen'. Während des Spiels, kannst du jederzeit 'Abbrechen' rufen, um es vorzeitig zu beenden. Möchtest du jetzt 'Üben' oder 'Prüfen'?"
         }
     }
};

const questionList = [
{ question:"Abend", answer:["der"] },
{ question:"Abfahrt", answer:["die"] },
{ question:"Abflug", answer:["der"] },
{ question:"Absender", answer:["der"] },
{ question:"Adresse", answer:["die"] },
{ question:"Alkohol", answer:["der"] },
{ question:"Alter", answer:["das"] },
{ question:"Ampel", answer:["die"] },
{ question:"Anfang", answer:["der"] },
{ question:"Angebot", answer:["das"] },
{ question:"Angel", answer:["die"] },
{ question:"Angestellte", answer:["die"] },
{ question:"Angler", answer:["der"] },
{ question:"Angst", answer:["die"] },
{ question:"Ankunft", answer:["die"] },
{ question:"Anmeldung", answer:["die"] },
{ question:"Anpfiff", answer:["der"] },
{ question:"Anrede", answer:["die"] },
{ question:"Anrufbeantworter", answer:["der"] },
{ question:"Ansage", answer:["die"] },
{ question:"Anschluss", answer:["der"] },
{ question:"Antwort", answer:["die"] },
{ question:"Anzeige", answer:["die"] },
{ question:"Anzug", answer:["der"] },
{ question:"Apfel", answer:["der"] },
{ question:"Apotheke", answer:["die"] },
{ question:"Appartement", answer:["das"] },
{ question:"Appetit", answer:["der"] },
{ question:"April", answer:["der"] },
{ question:"Arbeit", answer:["die"] },
{ question:"Arbeitsplatz", answer:["der"] },
{ question:"Arm", answer:["der"] },
{ question:"Arzt", answer:["der"] },
{ question:"Ast", answer:["der"] },
{ question:"Aufenthalt", answer:["der"] },
{ question:"Aufgabe", answer:["die"] },
{ question:"Aufzug", answer:["der"] },
{ question:"Auge", answer:["das"] },
{ question:"August", answer:["der"] },
{ question:"Ausbildung", answer:["die"] },
{ question:"Ausflug", answer:["der"] },
{ question:"Ausgang", answer:["der"] },
{ question:"Auskunft", answer:["die"] },
{ question:"Ausland", answer:["das"] },
{ question:"Ausländer", answer:["der"] },
{ question:"Ausländerin", answer:["die"] },
{ question:"Aussage", answer:["die"] },
{ question:"Ausstellung", answer:["die"] },
{ question:"Ausweis", answer:["der"] },
{ question:"Auto", answer:["das"] },
{ question:"Autobahn", answer:["die"] },
{ question:"Automat", answer:["der"] },
{ question:"Baby", answer:["das"] },
{ question:"Bad", answer:["das"] },
{ question:"Bahn", answer:["die"] },
{ question:"Bahnhof", answer:["der"] },
{ question:"Bahnsteig", answer:["der"] },
{ question:"Balkon", answer:["der"] },
{ question:"Ball", answer:["der"] },
{ question:"Banane", answer:["die"] },
{ question:"Bank", answer:["die"] },
{ question:"Batterie", answer:["die"] },
{ question:"Bauch", answer:["der"] },
{ question:"Baum", answer:["der"] },
{ question:"Beamte", answer:["der"] },
{ question:"Beamtin", answer:["die"] },
{ question:"Bein", answer:["das"] },
{ question:"Beispiel", answer:["das"] },
{ question:"Bekannte", answer:["die"] },
{ question:"Benzin", answer:["das"] },
{ question:"Beratung", answer:["die"] },
{ question:"Berg", answer:["der"] },
{ question:"Beruf", answer:["der"] },
{ question:"Berufsschule", answer:["die"] },
{ question:"Besuch", answer:["der"] },
{ question:"Betrag", answer:["der"] },
{ question:"Bett", answer:["das"] },
{ question:"Bewerbung", answer:["die"] },
{ question:"Biene", answer:["die"] },
{ question:"Bier", answer:["das"] },
{ question:"Bild", answer:["das"] },
{ question:"Bildschirm", answer:["der"] },
{ question:"Birne", answer:["die"] },
{ question:"Biss", answer:["der"] },
{ question:"Bitte", answer:["die"] },
{ question:"Blatt", answer:["das"] },
{ question:"Bleistift", answer:["der"] },
{ question:"Blick", answer:["der"] },
{ question:"Blinde", answer:["der"] },
{ question:"Blitz", answer:["der"] },
{ question:"Block", answer:["der"] },
{ question:"Blume", answer:["die"] },
{ question:"Bluse", answer:["die"] },
{ question:"Blut", answer:["das"] },
{ question:"Blüte", answer:["die"] },
{ question:"Boden", answer:["der"] },
{ question:"Bogen", answer:["der"] },
{ question:"Bohne", answer:["die"] },
{ question:"Boot", answer:["das"] },
{ question:"Brand", answer:["der"] },
{ question:"Brief", answer:["der"] },
{ question:"Briefkasten", answer:["der"] },
{ question:"Briefmarke", answer:["die"] },
{ question:"Brieftasche", answer:["die"] },
{ question:"Briefumschlag", answer:["der"] },
{ question:"Brille", answer:["die"] },
{ question:"Brot", answer:["das"] },
{ question:"Bruder", answer:["der"] },
{ question:"Brötchen", answer:["das"] },
{ question:"Brücke", answer:["die"] },
{ question:"Buch", answer:["das"] },
{ question:"Buchstabe", answer:["der"] },
{ question:"Burg", answer:["die"] },
{ question:"Bus", answer:["der"] },
{ question:"Busch", answer:["der"] },
{ question:"Butter", answer:["die"] },
{ question:"Bäcker", answer:["der"] },
{ question:"Bäckerei", answer:["die"] },
{ question:"Bürger", answer:["der"] },
{ question:"Büro", answer:["das"] },
{ question:"CD", answer:["die"] },
{ question:"CD-ROM", answer:["die"] },
{ question:"Café", answer:["das"] },
{ question:"Cent", answer:["der"] },
{ question:"Chef", answer:["der"] },
{ question:"Clown", answer:["der"] },
{ question:"Computer", answer:["der"] },
{ question:"Creme", answer:["die"] },
{ question:"Dach", answer:["das"] },
{ question:"Dame", answer:["die"] },
{ question:"Dank", answer:["der"] },
{ question:"Datum", answer:["das"] },
{ question:"Dauer", answer:["die"] },
{ question:"Decke", answer:["die"] },
{ question:"Deutsche", answer:["der"] },
{ question:"Deutsche", answer:["die"] },
{ question:"Deutschland", answer:["das"] },
{ question:"Dezember", answer:["der"] },
{ question:"Dienstag", answer:["der"] },
{ question:"Ding", answer:["das"] },
{ question:"Disco", answer:["die"] },
{ question:"Doktor", answer:["der"] },
{ question:"Dom", answer:["der"] },
{ question:"Donner", answer:["der"] },
{ question:"Donnerstag", answer:["der"] },
{ question:"Doppelzimmer", answer:["das"] },
{ question:"Dorf", answer:["das"] },
{ question:"Draht", answer:["der"] },
{ question:"Dreck", answer:["der"] },
{ question:"Druck", answer:["der"] },
{ question:"Drucker", answer:["der"] },
{ question:"Dummheit", answer:["die"] },
{ question:"Durchsage", answer:["die"] },
{ question:"Durst", answer:["der"] },
{ question:"Durst", answer:["die"] },
{ question:"Dusche", answer:["die"] },
{ question:"Düne", answer:["die"] },
{ question:"E-Mail", answer:["die"] },
{ question:"Ebbe", answer:["die"] },
{ question:"Ecke", answer:["die"] },
{ question:"Ehefrau", answer:["die"] },
{ question:"Ehemann", answer:["der"] },
{ question:"Ei", answer:["das"] },
{ question:"Eimer", answer:["der"] },
{ question:"Einführung", answer:["die"] },
{ question:"Eingang", answer:["der"] },
{ question:"Einladung", answer:["die"] },
{ question:"Eintritt", answer:["der"] },
{ question:"Einwohner", answer:["der"] },
{ question:"Einzelzimmer", answer:["das"] },
{ question:"Eis", answer:["das"] },
{ question:"Eltern", answer:["die"] },
{ question:"Empfang", answer:["der"] },
{ question:"Empfänger", answer:["der"] },
{ question:"Ende", answer:["das"] },
{ question:"Enkel", answer:["der"] },
{ question:"Ente", answer:["die"] },
{ question:"Entfernung", answer:["die"] },
{ question:"Entschuldigung", answer:["die"] },
{ question:"Entwicklung", answer:["die"] },
{ question:"Erde", answer:["die"] },
{ question:"Erdgeschoss", answer:["das"] },
{ question:"Erfahrung", answer:["die"] },
{ question:"Ergebnis", answer:["das"] },
{ question:"Erlaubnis", answer:["die"] },
{ question:"Erlebnis", answer:["das"] },
{ question:"Ermäßigung", answer:["die"] },
{ question:"Erwachsene", answer:["der"] },
{ question:"Erwartung", answer:["die"] },
{ question:"Erzählung", answer:["die"] },
{ question:"Essen", answer:["das"] },
{ question:"Eule", answer:["die"] },
{ question:"Euro", answer:["der"] },
{ question:"Europa", answer:["das"] },
{ question:"Export", answer:["der"] },
{ question:"Fabrik", answer:["die"] },
{ question:"Fahrer", answer:["der"] },
{ question:"Fahrkarte", answer:["die"] },
{ question:"Fahrplan", answer:["der"] },
{ question:"Fahrrad", answer:["das"] },
{ question:"Fahrt", answer:["die"] },
{ question:"Familie", answer:["die"] },
{ question:"Familienname", answer:["der"] },
{ question:"Familienstand", answer:["der"] },
{ question:"Farbe", answer:["die"] },
{ question:"Fax", answer:["das"] },
{ question:"Februar", answer:["der"] },
{ question:"Fehler", answer:["der"] },
{ question:"Feld", answer:["das"] },
{ question:"Fenster", answer:["das"] },
{ question:"Ferien", answer:["die"] },
{ question:"Fernseher", answer:["der"] },
{ question:"Fernsehgerät", answer:["das"] },
{ question:"Fest", answer:["das"] },
{ question:"Fett", answer:["das"] },
{ question:"Feuchtigkeit", answer:["die"] },
{ question:"Feuer", answer:["das"] },
{ question:"Feuerwehr", answer:["die"] },
{ question:"Feuerzeug", answer:["das"] },
{ question:"Fieber", answer:["das"] },
{ question:"Film", answer:["der"] },
{ question:"Finger", answer:["der"] },
{ question:"Firma", answer:["die"] },
{ question:"Fisch", answer:["der"] },
{ question:"Flasche", answer:["die"] },
{ question:"Fleisch", answer:["das"] },
{ question:"Fleiß", answer:["der"] },
{ question:"Fliege", answer:["die"] },
{ question:"Flughafen", answer:["der"] },
{ question:"Flugzeug", answer:["das"] },
{ question:"Flur", answer:["der"] },
{ question:"Fluss", answer:["der"] },
{ question:"Flut", answer:["die"] },
{ question:"Flügel", answer:["der"] },
{ question:"Flüssigkeit", answer:["die"] },
{ question:"Formular", answer:["das"] },
{ question:"Foto", answer:["das"] },
{ question:"Fotoapparat", answer:["der"] },
{ question:"Frage", answer:["die"] },
{ question:"Frau", answer:["die"] },
{ question:"Freiheit", answer:["die"] },
{ question:"Freitag", answer:["der"] },
{ question:"Freizeit", answer:["die"] },
{ question:"Fremde", answer:["der"] },
{ question:"Freund", answer:["der"] },
{ question:"Freundin", answer:["die"] },
{ question:"Frieden", answer:["der"] },
{ question:"Friseur", answer:["der"] },
{ question:"Frist", answer:["die"] },
{ question:"Frucht", answer:["die"] },
{ question:"Frühjahr", answer:["das"] },
{ question:"Frühling", answer:["der"] },
{ question:"Frühstück", answer:["das"] },
{ question:"Fuchs", answer:["der"] },
{ question:"Fundbüro", answer:["das"] },
{ question:"Fuß", answer:["der"] },
{ question:"Fußball", answer:["der"] },
{ question:"Fußgänger", answer:["der"] },
{ question:"Fähre", answer:["die"] },
{ question:"Führerschein", answer:["der"] },
{ question:"Führung", answer:["die"] },
{ question:"Füller", answer:["der"] },
{ question:"Gabel", answer:["die"] },
{ question:"Garage", answer:["die"] },
{ question:"Garantie", answer:["die"] },
{ question:"Garten", answer:["der"] },
{ question:"Gas", answer:["das"] },
{ question:"Gast", answer:["der"] },
{ question:"Gebiet", answer:["das"] },
{ question:"Geburt", answer:["die"] },
{ question:"Geburtsjahr", answer:["das"] },
{ question:"Geburtsort", answer:["der"] },
{ question:"Geburtstag", answer:["der"] },
{ question:"Gebäude", answer:["das"] },
{ question:"Gebühr", answer:["die"] },
{ question:"Gefahr", answer:["die"] },
{ question:"Gefühl", answer:["das"] },
{ question:"Gegenteil", answer:["das"] },
{ question:"Geheimnis", answer:["das"] },
{ question:"Geld", answer:["das"] },
{ question:"Geldbörse", answer:["die"] },
{ question:"Gemeinde", answer:["die"] },
{ question:"Gemüse", answer:["das"] },
{ question:"Gepäck", answer:["das"] },
{ question:"Gericht", answer:["das"] },
{ question:"Geruch", answer:["der"] },
{ question:"Gesamtschule", answer:["die"] },
{ question:"Geschenk", answer:["das"] },
{ question:"Geschirr", answer:["das"] },
{ question:"Geschwister", answer:["die"] },
{ question:"Geschäft", answer:["das"] },
{ question:"Gesetz", answer:["das"] },
{ question:"Gesicht", answer:["das"] },
{ question:"Gespräch", answer:["das"] },
{ question:"Gesundheit", answer:["die"] },
{ question:"Getränk", answer:["das"] },
{ question:"Gewicht", answer:["das"] },
{ question:"Gewitter", answer:["das"] },
{ question:"Gewächs", answer:["das"] },
{ question:"Glas", answer:["das"] },
{ question:"Gleis", answer:["das"] },
{ question:"Glück", answer:["das"] },
{ question:"Glückwunsch", answer:["der"] },
{ question:"Goethe-Institut", answer:["das"] },
{ question:"Gott", answer:["der"] },
{ question:"Gras", answer:["das"] },
{ question:"Grenze", answer:["die"] },
{ question:"Grippe", answer:["die"] },
{ question:"Großeltern", answer:["die"] },
{ question:"Großmutter", answer:["die"] },
{ question:"Großvater", answer:["der"] },
{ question:"Grundschule", answer:["die"] },
{ question:"Gruppe", answer:["die"] },
{ question:"Gruß", answer:["der"] },
{ question:"Größe", answer:["die"] },
{ question:"Gymnasium", answer:["das"] },
{ question:"Haar", answer:["das"] },
{ question:"Hafen", answer:["der"] },
{ question:"Halbpension", answer:["die"] },
{ question:"Halle", answer:["die"] },
{ question:"Hals", answer:["der"] },
{ question:"Haltestelle", answer:["die"] },
{ question:"Hand", answer:["die"] },
{ question:"Hand", answer:["die"] },
{ question:"Handtuch", answer:["das"] },
{ question:"Handy", answer:["das"] },
{ question:"Hang", answer:["der"] },
{ question:"Hase", answer:["der"] },
{ question:"Haufen", answer:["der"] },
{ question:"Haus", answer:["das"] },
{ question:"Hausaufgabe", answer:["die"] },
{ question:"Hausfrau", answer:["die"] },
{ question:"Haushalt", answer:["der"] },
{ question:"Hausmann", answer:["der"] },
{ question:"Haut", answer:["die"] },
{ question:"Heft", answer:["das"] },
{ question:"Heide", answer:["der"] },
{ question:"Heimat", answer:["die"] },
{ question:"Heizung", answer:["die"] },
{ question:"Held", answer:["der"] },
{ question:"Heldin", answer:["die"] },
{ question:"Hemd", answer:["das"] },
{ question:"Herbst", answer:["der"] },
{ question:"Herd", answer:["der"] },
{ question:"Herr", answer:["der"] },
{ question:"Herstellung", answer:["die"] },
{ question:"Herz", answer:["das"] },
{ question:"Hexe", answer:["die"] },
{ question:"Hilfe", answer:["die"] },
{ question:"Himmel", answer:["der"] },
{ question:"Hitze", answer:["die"] },
{ question:"Hobby", answer:["das"] },
{ question:"Holz", answer:["das"] },
{ question:"Hose", answer:["die"] },
{ question:"Hund", answer:["der"] },
{ question:"Hunger", answer:["der"] },
{ question:"Hähnchen", answer:["das"] },
{ question:"Höhe", answer:["die"] },
{ question:"Höhle", answer:["die"] },
{ question:"Idee", answer:["die"] },
{ question:"Igel", answer:["der"] },
{ question:"Impfung", answer:["die"] },
{ question:"Import", answer:["der"] },
{ question:"Industrie", answer:["die"] },
{ question:"Information", answer:["die"] },
{ question:"Inhalt", answer:["der"] },
{ question:"Interesse", answer:["das"] },
{ question:"Internet", answer:["das"] },
{ question:"Jacke", answer:["die"] },
{ question:"Jahr", answer:["das"] },
{ question:"Januar", answer:["der"] },
{ question:"Job", answer:["der"] },
{ question:"Jugend", answer:["die"] },
{ question:"Jugendherberge", answer:["die"] },
{ question:"Jugendliche", answer:["der"] },
{ question:"Juli", answer:["der"] },
{ question:"Junge", answer:["der"] },
{ question:"Juni", answer:["der"] },
{ question:"Kaffee", answer:["der"] },
{ question:"Kalender", answer:["der"] },
{ question:"Kamera", answer:["die"] },
{ question:"Kamm", answer:["der"] },
{ question:"Kanne", answer:["die"] },
{ question:"Karte", answer:["die"] },
{ question:"Kartoffel", answer:["die"] },
{ question:"Kasse", answer:["die"] },
{ question:"Kassette", answer:["die"] },
{ question:"Kassettenrecorder", answer:["der"] },
{ question:"Kater", answer:["der"] },
{ question:"Katze", answer:["die"] },
{ question:"Keller", answer:["der"] },
{ question:"Kellner", answer:["der"] },
{ question:"Kenntnisse", answer:["die"] },
{ question:"Kennzeichen", answer:["das"] },
{ question:"Kette", answer:["die"] },
{ question:"Kfz", answer:["das"] },
{ question:"Kiefer", answer:["der"] },
{ question:"Kind", answer:["das"] },
{ question:"Kindergarten", answer:["der"] },
{ question:"Kinderwagen", answer:["der"] },
{ question:"Kino", answer:["das"] },
{ question:"Kiosk", answer:["der"] },
{ question:"Kirche", answer:["die"] },
{ question:"Klasse", answer:["die"] },
{ question:"Kleid", answer:["das"] },
{ question:"Kleidung", answer:["die"] },
{ question:"Kneipe", answer:["die"] },
{ question:"Koch", answer:["der"] },
{ question:"Koffer", answer:["der"] },
{ question:"Kollege", answer:["der"] },
{ question:"Kollegin", answer:["die"] },
{ question:"Kompass", answer:["der"] },
{ question:"Konsulat", answer:["das"] },
{ question:"Kontakt", answer:["der"] },
{ question:"Konto", answer:["das"] },
{ question:"Kontrolle", answer:["die"] },
{ question:"Konzert", answer:["das"] },
{ question:"Kopf", answer:["der"] },
{ question:"Kosmetik", answer:["die"] },
{ question:"Kraft", answer:["die"] },
{ question:"Krankenkasse", answer:["die"] },
{ question:"Krankheit", answer:["die"] },
{ question:"Kraut", answer:["das"] },
{ question:"Kredit", answer:["der"] },
{ question:"Kreditkarte", answer:["die"] },
{ question:"Kreis", answer:["der"] },
{ question:"Kreuz", answer:["das"] },
{ question:"Kreuzung", answer:["die"] },
{ question:"Krieg", answer:["der"] },
{ question:"Kuchen", answer:["der"] },
{ question:"Kugal", answer:["die"] },
{ question:"Kugelschreiber", answer:["der"] },
{ question:"Kuh", answer:["die"] },
{ question:"Kunde", answer:["der"] },
{ question:"Kundin", answer:["die"] },
{ question:"Kurs", answer:["der"] },
{ question:"Kuss", answer:["der"] },
{ question:"Käfer", answer:["der"] },
{ question:"Käfig", answer:["der"] },
{ question:"Kälte", answer:["die"] },
{ question:"Käse", answer:["der"] },
{ question:"König", answer:["der"] },
{ question:"Königin", answer:["die"] },
{ question:"Körper", answer:["der"] },
{ question:"Küche", answer:["die"] },
{ question:"Kühlschrank", answer:["der"] },
{ question:"Kündigung", answer:["die"] },
{ question:"Laden", answer:["der"] },
{ question:"Lager", answer:["das"] },
{ question:"Lampe", answer:["die"] },
{ question:"Land", answer:["das"] },
{ question:"Landschaft", answer:["die"] },
{ question:"Laub", answer:["das"] },
{ question:"Leben", answer:["das"] },
{ question:"Lebensmittel", answer:["die"] },
{ question:"Lehre", answer:["die"] },
{ question:"Lehrer", answer:["der"] },
{ question:"Lehrerin", answer:["die"] },
{ question:"Leute", answer:["die"] },
{ question:"Lexikon", answer:["das"] },
{ question:"Licht", answer:["das"] },
{ question:"Lied", answer:["das"] },
{ question:"Liter", answer:["der"] },
{ question:"Lkw", answer:["der"] },
{ question:"Loch", answer:["das"] },
{ question:"Lohn", answer:["der"] },
{ question:"Lokal", answer:["das"] },
{ question:"Luft", answer:["die"] },
{ question:"Lust", answer:["die"] },
{ question:"Lärm", answer:["der"] },
{ question:"Läufer", answer:["der"] },
{ question:"Löffel", answer:["der"] },
{ question:"Lösung", answer:["die"] },
{ question:"Magen", answer:["der"] },
{ question:"Magnet", answer:["der"] },
{ question:"Mai", answer:["der"] },
{ question:"Mal", answer:["das"] },
{ question:"Mama", answer:["die"] },
{ question:"Mann", answer:["der"] },
{ question:"Mannschaft", answer:["die"] },
{ question:"Mantel", answer:["der"] },
{ question:"Markt", answer:["der"] },
{ question:"Maschine", answer:["die"] },
{ question:"Material", answer:["das"] },
{ question:"Maus", answer:["die"] },
{ question:"Maß", answer:["das"] },
{ question:"Mechaniker", answer:["der"] },
{ question:"Medien", answer:["die"] },
{ question:"Medikament", answer:["das"] },
{ question:"Meer", answer:["das"] },
{ question:"Mehrwertsteuer", answer:["die"] },
{ question:"Meinung", answer:["die"] },
{ question:"Menge", answer:["die"] },
{ question:"Mensch", answer:["der"] },
{ question:"Messer", answer:["das"] },
{ question:"Metall", answer:["das"] },
{ question:"Miete", answer:["die"] },
{ question:"Milch", answer:["die"] },
{ question:"Minute", answer:["die"] },
{ question:"Mittag", answer:["der"] },
{ question:"Mitte", answer:["die"] },
{ question:"Mitteilung", answer:["die"] },
{ question:"Mittel", answer:["das"] },
{ question:"Mittelschule", answer:["die"] },
{ question:"Mittwoch", answer:["der"] },
{ question:"Mode", answer:["die"] },
{ question:"Moment", answer:["der"] },
{ question:"Monat", answer:["der"] },
{ question:"Montag", answer:["der"] },
{ question:"Moor", answer:["das"] },
{ question:"Moos", answer:["das"] },
{ question:"Morgen", answer:["der"] },
{ question:"Motor", answer:["der"] },
{ question:"Mund", answer:["der"] },
{ question:"Museum", answer:["das"] },
{ question:"Musik", answer:["die"] },
{ question:"Mutter", answer:["die"] },
{ question:"Mädchen", answer:["das"] },
{ question:"März", answer:["der"] },
{ question:"Möbel", answer:["die"] },
{ question:"Möwe", answer:["die"] },
{ question:"Mühle", answer:["die"] },
{ question:"Müll", answer:["der"] },
{ question:"Mülltonne", answer:["die"] },
{ question:"Nachbar", answer:["der"] },
{ question:"Nachbarin", answer:["die"] },
{ question:"Nachmittag", answer:["der"] },
{ question:"Nachrichten", answer:["die"] },
{ question:"Nacht", answer:["die"] },
{ question:"Nahrung", answer:["die"] },
{ question:"Naht", answer:["die"] },
{ question:"Name", answer:["der"] },
{ question:"Nase", answer:["die"] },
{ question:"Natur", answer:["die"] },
{ question:"Nebel", answer:["der"] },
{ question:"Norden", answer:["der"] },
{ question:"Notarzt", answer:["der"] },
{ question:"Note", answer:["die"] },
{ question:"Notfall", answer:["der"] },
{ question:"Notiz", answer:["die"] },
{ question:"November", answer:["der"] },
{ question:"Nudel", answer:["die"] },
{ question:"Nummer", answer:["die"] },
{ question:"Nuss", answer:["die"] },
{ question:"Nutzen", answer:["der"] },
{ question:"Nähe", answer:["die"] },
{ question:"Ober", answer:["der"] },
{ question:"Obst", answer:["das"] },
{ question:"Ohr", answer:["das"] },
{ question:"Oktober", answer:["der"] },
{ question:"Oma", answer:["die"] },
{ question:"Onkel", answer:["der"] },
{ question:"Opa", answer:["der"] },
{ question:"Operation", answer:["die"] },
{ question:"Orange", answer:["die"] },
{ question:"Ordnung", answer:["die"] },
{ question:"Ort", answer:["der"] },
{ question:"Osten", answer:["der"] },
{ question:"Ostern", answer:["die"] },
{ question:"Paket", answer:["das"] },
{ question:"Panne", answer:["die"] },
{ question:"Papa", answer:["der"] },
{ question:"Papier", answer:["das"] },
{ question:"Papiere", answer:["die"] },
{ question:"Parfüm", answer:["das"] },
{ question:"Park", answer:["der"] },
{ question:"Partner", answer:["der"] },
{ question:"Partnerin", answer:["die"] },
{ question:"Party", answer:["die"] },
{ question:"Pass", answer:["der"] },
{ question:"Pause", answer:["die"] },
{ question:"Pension", answer:["die"] },
{ question:"Pfeife", answer:["die"] },
{ question:"Pferd", answer:["das"] },
{ question:"Pfund", answer:["das"] },
{ question:"Pilz", answer:["der"] },
{ question:"Pizza", answer:["die"] },
{ question:"Pkw", answer:["der"] },
{ question:"Plan", answer:["der"] },
{ question:"Plastik", answer:["das"] },
{ question:"Platz", answer:["der"] },
{ question:"Polizei", answer:["die"] },
{ question:"Pommes", answer:["die"] },
{ question:"Pommes frites", answer:["die"] },
{ question:"Portion", answer:["die"] },
{ question:"Post", answer:["die"] },
{ question:"Postleitzahl", answer:["die"] },
{ question:"Praktikum", answer:["das"] },
{ question:"Praxis", answer:["die"] },
{ question:"Preis", answer:["der"] },
{ question:"Problem", answer:["das"] },
{ question:"Produkt", answer:["das"] },
{ question:"Programm", answer:["das"] },
{ question:"Prospekt", answer:["der"] },
{ question:"Prüfung", answer:["die"] },
{ question:"Pullover", answer:["der"] },
{ question:"Puppe", answer:["die"] },
{ question:"Päckchen", answer:["das"] },
{ question:"Quadrat", answer:["das"] },
{ question:"Qual", answer:["die"] },
{ question:"Qualität", answer:["die"] },
{ question:"Quelle", answer:["die"] },
{ question:"Quittung", answer:["die"] },
{ question:"Rabatt", answer:["der"] },
{ question:"Radio", answer:["das"] },
{ question:"Rasen", answer:["der"] },
{ question:"Rathaus", answer:["das"] },
{ question:"Raucher", answer:["der"] },
{ question:"Raucherin", answer:["die"] },
{ question:"Raum", answer:["der"] },
{ question:"Raupe", answer:["die"] },
{ question:"Realschule", answer:["die"] },
{ question:"Rechnung", answer:["die"] },
{ question:"Regen", answer:["der"] },
{ question:"Reh", answer:["das"] },
{ question:"Reifen", answer:["der"] },
{ question:"Reinigung", answer:["die"] },
{ question:"Reis", answer:["der"] },
{ question:"Reise", answer:["die"] },
{ question:"Reisebüro", answer:["das"] },
{ question:"Reiseführer", answer:["der"] },
{ question:"Reparatur", answer:["die"] },
{ question:"Restaurant", answer:["das"] },
{ question:"Rezept", answer:["das"] },
{ question:"Rezeption", answer:["die"] },
{ question:"Rind", answer:["das"] },
{ question:"Rock", answer:["der"] },
{ question:"Rose", answer:["die"] },
{ question:"Ruhe", answer:["die"] },
{ question:"Rundgang", answer:["der"] },
{ question:"Rätsel", answer:["das"] },
{ question:"Rücken", answer:["der"] },
{ question:"S-Bahn", answer:["die"] },
{ question:"Sache", answer:["die"] },
{ question:"Saft", answer:["der"] },
{ question:"Salat", answer:["der"] },
{ question:"Salz", answer:["das"] },
{ question:"Sammlung", answer:["die"] },
{ question:"Samstag", answer:["der"] },
{ question:"Sand", answer:["der"] },
{ question:"Satz", answer:["der"] },
{ question:"Schaf", answer:["das"] },
{ question:"Schall", answer:["der"] },
{ question:"Schalter", answer:["der"] },
{ question:"Schatten", answer:["der"] },
{ question:"Scheckkarte", answer:["die"] },
{ question:"Schere", answer:["die"] },
{ question:"Schiff", answer:["das"] },
{ question:"Schild", answer:["das"] },
{ question:"Schinken", answer:["der"] },
{ question:"Schirm", answer:["der"] },
{ question:"Schloss", answer:["das"] },
{ question:"Schluss", answer:["der"] },
{ question:"Schlüssel", answer:["der"] },
{ question:"Schmerzen", answer:["die"] },
{ question:"Schmetterling", answer:["der"] },
{ question:"Schmutz", answer:["der"] },
{ question:"Schnee", answer:["der"] },
{ question:"Schnupfen", answer:["der"] },
{ question:"Schokolade", answer:["die"] },
{ question:"Schrank", answer:["der"] },
{ question:"Schreck", answer:["der"] },
{ question:"Schuh", answer:["der"] },
{ question:"Schule", answer:["die"] },
{ question:"Schutz", answer:["der"] },
{ question:"Schwamm", answer:["der"] },
{ question:"Schwein", answer:["das"] },
{ question:"Schwester", answer:["die"] },
{ question:"Schwierigkeit", answer:["die"] },
{ question:"Schwimmbad", answer:["das"] },
{ question:"Schärfe", answer:["die"] },
{ question:"Schüler", answer:["der"] },
{ question:"Schülerin", answer:["die"] },
{ question:"See", answer:["der"] },
{ question:"Segel", answer:["das"] },
{ question:"Sehenswürdigkeit", answer:["die"] },
{ question:"Seife", answer:["die"] },
{ question:"Sekretärin", answer:["die"] },
{ question:"Sekunde", answer:["die"] },
{ question:"Sendung", answer:["die"] },
{ question:"Senioren", answer:["die"] },
{ question:"September", answer:["der"] },
{ question:"Service", answer:["der"] },
{ question:"Sessel", answer:["der"] },
{ question:"Skizze", answer:["die"] },
{ question:"Sofa", answer:["das"] },
{ question:"Sohn", answer:["der"] },
{ question:"Sommer", answer:["der"] },
{ question:"Sonderangebot", answer:["das"] },
{ question:"Sonnabend", answer:["der"] },
{ question:"Sonne", answer:["die"] },
{ question:"Sonntag", answer:["der"] },
{ question:"Sorge", answer:["die"] },
{ question:"Spaziergang", answer:["der"] },
{ question:"Spaß", answer:["der"] },
{ question:"Speisekarte", answer:["die"] },
{ question:"Spiegel", answer:["der"] },
{ question:"Spiel", answer:["das"] },
{ question:"Spielplatz", answer:["der"] },
{ question:"Spitze", answer:["die"] },
{ question:"Sport", answer:["der"] },
{ question:"Sprache", answer:["die"] },
{ question:"Sprachenschule", answer:["die"] },
{ question:"Sprechstunde", answer:["die"] },
{ question:"Spülmaschine", answer:["die"] },
{ question:"Stadt", answer:["die"] },
{ question:"Stamm", answer:["der"] },
{ question:"Standesamt", answer:["das"] },
{ question:"Stange", answer:["die"] },
{ question:"Stempel", answer:["der"] },
{ question:"Steuer", answer:["die"] },
{ question:"Stiel", answer:["der"] },
{ question:"Stift", answer:["der"] },
{ question:"Stirn", answer:["die"] },
{ question:"Stock", answer:["der"] },
{ question:"Stoff", answer:["der"] },
{ question:"Strand", answer:["der"] },
{ question:"Strauch", answer:["der"] },
{ question:"Strauß", answer:["der"] },
{ question:"Straße", answer:["die"] },
{ question:"Straßenbahn", answer:["die"] },
{ question:"Streichholz", answer:["das"] },
{ question:"Streit", answer:["der"] },
{ question:"Strom", answer:["der"] },
{ question:"Student", answer:["der"] },
{ question:"Studentin", answer:["die"] },
{ question:"Studium", answer:["das"] },
{ question:"Stuhl", answer:["der"] },
{ question:"Stunde", answer:["die"] },
{ question:"Sturm", answer:["der"] },
{ question:"Stängel", answer:["der"] },
{ question:"Stück", answer:["das"] },
{ question:"Supermarkt", answer:["der"] },
{ question:"Suppe", answer:["die"] },
{ question:"Süden", answer:["der"] },
{ question:"Süßigkeit", answer:["die"] },
{ question:"Tag", answer:["der"] },
{ question:"Tankstelle", answer:["die"] },
{ question:"Tante", answer:["die"] },
{ question:"Tasche", answer:["die"] },
{ question:"Tasse", answer:["die"] },
{ question:"Taste", answer:["die"] },
{ question:"Taxi", answer:["das"] },
{ question:"Technik", answer:["die"] },
{ question:"Teddy", answer:["der"] },
{ question:"Tee", answer:["der"] },
{ question:"Teil", answer:["das"] },
{ question:"Telefon", answer:["das"] },
{ question:"Telefonbuch", answer:["das"] },
{ question:"Teller", answer:["der"] },
{ question:"Temperatur", answer:["die"] },
{ question:"Teppich", answer:["der"] },
{ question:"Termin", answer:["der"] },
{ question:"Test", answer:["der"] },
{ question:"Text", answer:["der"] },
{ question:"Theater", answer:["das"] },
{ question:"Thema", answer:["das"] },
{ question:"Thermometer", answer:["das"] },
{ question:"Ticket", answer:["das"] },
{ question:"Tiefe", answer:["die"] },
{ question:"Tier", answer:["das"] },
{ question:"Tiger", answer:["der"] },
{ question:"Tipp", answer:["der"] },
{ question:"Tisch", answer:["der"] },
{ question:"Tochter", answer:["die"] },
{ question:"Toilette", answer:["die"] },
{ question:"Tomate", answer:["die"] },
{ question:"Topf", answer:["der"] },
{ question:"Tourist", answer:["der"] },
{ question:"Traum", answer:["der"] },
{ question:"Treppe", answer:["die"] },
{ question:"Trinkgeld", answer:["das"] },
{ question:"Träne", answer:["die"] },
{ question:"Turm", answer:["der"] },
{ question:"Tür", answer:["die"] },
{ question:"Tüte", answer:["die"] },
{ question:"U-Bahn", answer:["die"] },
{ question:"Uhr", answer:["die"] },
{ question:"Unfall", answer:["der"] },
{ question:"Universität", answer:["die"] },
{ question:"Unterkunft", answer:["die"] },
{ question:"Unterricht", answer:["der"] },
{ question:"Unterschied", answer:["der"] },
{ question:"Unterschrift", answer:["die"] },
{ question:"Untersuchung", answer:["die"] },
{ question:"Urlaub", answer:["der"] },
{ question:"Vase", answer:["die"] },
{ question:"Vater", answer:["der"] },
{ question:"Verbindung", answer:["die"] },
{ question:"Verbot", answer:["das"] },
{ question:"Verbrennung", answer:["die"] },
{ question:"Verein", answer:["der"] },
{ question:"Verkehr", answer:["der"] },
{ question:"Verkäufer", answer:["der"] },
{ question:"Verkäuferin", answer:["die"] },
{ question:"Verletzung", answer:["die"] },
{ question:"Vermieter", answer:["der"] },
{ question:"Verpackung", answer:["die"] },
{ question:"Verschmutzung", answer:["die"] },
{ question:"Versicherung", answer:["die"] },
{ question:"Verspätung", answer:["die"] },
{ question:"Vertrag", answer:["der"] },
{ question:"Video", answer:["das"] },
{ question:"Vogel", answer:["der"] },
{ question:"Volksschule", answer:["die"] },
{ question:"Vorfahrt", answer:["die"] },
{ question:"Vormittag", answer:["der"] },
{ question:"Vorname", answer:["der"] },
{ question:"Vorsicht", answer:["die"] },
{ question:"Vorwahl", answer:["die"] },
{ question:"Wagen", answer:["der"] },
{ question:"Wahl", answer:["die"] },
{ question:"Wald", answer:["der"] },
{ question:"Wasser", answer:["das"] },
{ question:"Wecker", answer:["der"] },
{ question:"Weg", answer:["der"] },
{ question:"Weihnachten", answer:["das"] },
{ question:"Wein", answer:["der"] },
{ question:"Welt", answer:["die"] },
{ question:"Werkstatt", answer:["die"] },
{ question:"Werkzeug", answer:["das"] },
{ question:"Westen", answer:["der"] },
{ question:"Wetter", answer:["das"] },
{ question:"Wiederhören", answer:["das"] },
{ question:"Wiedersehen", answer:["das"] },
{ question:"Wiese", answer:["die"] },
{ question:"Wind", answer:["der"] },
{ question:"Winter", answer:["der"] },
{ question:"Wirtschaft", answer:["die"] },
{ question:"Wissen", answer:["das"] },
{ question:"Woche", answer:["die"] },
{ question:"Wochenende", answer:["das"] },
{ question:"Wochentag", answer:["der"] },
{ question:"Wohnung", answer:["die"] },
{ question:"Wolf", answer:["der"] },
{ question:"Wolke", answer:["die"] },
{ question:"Wort", answer:["das"] },
{ question:"Wunsch", answer:["der"] },
{ question:"Wurst", answer:["die"] },
{ question:"Wurzel", answer:["die"] },
{ question:"Wärme", answer:["die"] },
{ question:"Wäsche", answer:["die"] },
{ question:"Zahl", answer:["die"] },
{ question:"Zahn", answer:["der"] },
{ question:"Zeh", answer:["der"] },
{ question:"Zeichen", answer:["das"] },
{ question:"Zeichnung", answer:["die"] },
{ question:"Zeit", answer:["die"] },
{ question:"Zeitschrift", answer:["die"] },
{ question:"Zeitung", answer:["die"] },
{ question:"Zentrum", answer:["das"] },
{ question:"Zettel", answer:["der"] },
{ question:"Zeugnis", answer:["das"] },
{ question:"Ziege", answer:["die"] },
{ question:"Ziel", answer:["das"] },
{ question:"Zigarette", answer:["die"] },
{ question:"Zimmer", answer:["das"] },
{ question:"Zitrone", answer:["die"] },
{ question:"Zoll", answer:["der"] },
{ question:"Zucker", answer:["der"] },
{ question:"Zug", answer:["der"] },
{ question:"Zukunft", answer:["die"] },
{ question:"Zwiebel", answer:["die"] },
{ question:"Ärger", answer:["der"] },
{ question:"Ärztin", answer:["die"] },
{ question:"Öl", answer:["das"] },
{ question:"Übernachtung", answer:["die"] }
];

const questionIndex = Array.apply(null, {length: questionList.length}).map(Number.call, Number)

exports.handler = function(event, context, callback) {
    console.log("> export handlers");
    var alexa = Alexa.handler(event, context);

    alexa.resources = languageStrings;

    alexa.appId = 'amzn1.ask.skill.c1e44add-0ef1-4dee-8fa8-50ec82a44d73';

    alexa.registerHandlers(
          newSessionHandlers
        , startSessionHandlers
        , practiceHandlers
        , quizHandlers
        , recapPracticeHandlers
        , recapQuizHandlers
        , scoreHandlers

    );
    alexa.execute();
    console.log("> alexa executed");
};


var states = {
    START:           "_START",
    PRACTICE:        "_PRACTICE",
    QUIZ:            "_QUIZ",
    RECAP_PRACTICE:  "_RECAP_PRACTICE",
    RECAP_QUIZ:      "_RECAP_QUIZ",
};

var newSessionHandlers = {
    'NewSession': function() {
        console.log("> start new session");
        this.handler.state = states.START;
        this.emitWithState('NewSession');
    }
};

var startSessionHandlers = Alexa.CreateStateHandler(states.START, {
    'NewSession': function() {
        console.log("start> start new session");
        this.attributes['correctCount'] = 0;
        this.attributes['wrongCount'] = 0;
        this.attributes['wrongList'] = [];
        this.attributes['oldWrongList'] = [];
        this.attributes['seed'] = randomSeed();
        this.attributes['practice'] = true; 
        this.emit(':ask', this.t("WELCOME_LAUNCH", this.t("TITLE") ), 'Üben oder Prüfen?');
    },
    "PracticeIntent": function() {
        console.log("start> practice intent");
        this.handler.state = states.PRACTICE;
        this.emitWithState('StartPractice');
    },
    "QuizIntent": function() {
        console.log("start> quiz intent");
        this.handler.state = states.QUIZ;
        this.emitWithState('StartQuiz');
    },
    "AMAZON.HelpIntent": function() {
        console.log("start> help intent");
        this.emit(':ask', this.t("HELP_MESSAGE", questionList.length, options.QUESTIONS_PER_QUIZ), 'Üben oder Prüfen?');
    },
    "AMAZON.CancelIntent": function() {
        console.log("start> cancel intent");
        this.emit(':tell', "Bis zum nächsten Mal!");
    },
    "AMAZON.StopIntent": function() {
        console.log("start> stop intent");
        this.emit(':tell', "Bis zum nächsten Mal!");
    },
    'Unhandled': function() {  // if we get any intents other than the above
        console.log("start> unhandled");
        this.emit(':ask', 'Ich habe dich nicht verstanden! Üben oder Prüfen?', 'Üben oder Prüfen?');
    }    
});

var practiceHandlers = Alexa.CreateStateHandler(states.PRACTICE, {
    'NewSession': function () {
        console.log("practice> new session");
        this.emit('NewSession'); // Uses the handler in newSessionHandlers
    },
    'StartPractice': function() {  // Yes, I want to start the practice
        console.log("practice> start practice");
        var say = '';
        this.attributes['currentQuestionIndex'] = 0;
        this.attributes['seed'] = randomSeed();
        this.attributes['practice'] = true; 
        if (this.attributes['wrongList'].length > 0) {  // we have taken the practice already and need to repeat
            console.log("practice> wrong list: ", this.attributes['wrongList']);
            this.attributes['oldWrongList'] = this.attributes['wrongList'].slice(0);
            say = 'Wiederhole ' + this.attributes['wrongList'].length + ' Wörter aus der vorherigen Übung. Übung beginnt jetzt. ';            
            this.attributes['wrongList'] = [];
            this.attributes['wrongCount'] = 0;
            this.attributes['correctCount'] = 0;
            console.log("practice> wrong list: ", this.attributes['wrongList']);
        } else {
            say = this.t("WELCOME_PRACTICE", questionList.length);
            this.attributes['oldWrongList'] = [];
            this.attributes['wrongList'] = [];
            this.attributes['wrongCount'] = 0;
            this.attributes['correctCount'] = 0;
        }
        var questions = getQuestionList(this.attributes);
        say += 'Welchen Artikel hat das Wort  ' + questionList[questions[0]].question + '?';
        this.emit(':ask',  say, say);
    },
    'AnswerIntent': function() {
        console.log("practice> answer intent");
        var myState = '';

        if ( !this.event.request.intent.slots.article || this.event.request.intent.slots.article.value === '') {
            this.emitWithState('AMAZON.HelpIntent');  // emitWithState = local version of this handler
        } else {
            myState = this.event.request.intent.slots.article.value;
            this.emit('rateAnswer', myState, (say) => {
                var currentQuestionIndex = this.attributes['currentQuestionIndex'];
                var questions = getQuestionList(this.attributes);
                if (currentQuestionIndex < questions.length) {  // MORE QUESTIONS
                    say = say +  ' Nächstes Wort.    "' + questionList[questions[currentQuestionIndex]].question + '".   Der, Die oder Das?';
                    this.emit(':ask', say, 'Der, Die oder Das?');
                } else {   // YOU ARE DONE
                    this.handler.state = states.RECAP_PRACTICE;
                    this.emitWithState('RecapSession', say);
                }

            });
        }

    },
    'AMAZON.CancelIntent': function () {
        console.log("practice> cancel intent");
        this.handler.state = states.RECAP_PRACTICE;
        this.emitWithState('RecapSession', '');
    },    
    'AMAZON.StopIntent': function () {
        console.log("practice> stop intent");
        this.emit(':tell', 'Bis zum nächsten Mal!' );
    },
    'AMAZON.HelpIntent': function () {  // practice help
        console.log("practice> help intent");
        this.emitWithState('Unhandled');
    },
    'Unhandled': function() {  // if we get any intents other than the above
        console.log("practice> unhandled");
        var currentQuestionIndex = this.attributes['currentQuestionIndex'];
        var questions = getQuestionList(this.attributes);
        this.emit(':ask', questionList[questions[currentQuestionIndex]].question + '. Der, Die oder Das?', 'Der, Die oder Das?');
    }
});


var quizHandlers = Alexa.CreateStateHandler(states.QUIZ, {
    'NewSession': function () {
        console.log("quiz> new session");
        this.emit('NewSession'); // Uses the handler in newSessionHandlers
    },
    'StartQuiz': function () {
        console.log("quiz> start quiz");
        var say = this.t("WELCOME_QUIZ", options.QUESTIONS_PER_QUIZ);

        this.attributes['currentQuestionIndex'] = 0;
        this.attributes['wrongList'] = [];
        this.attributes['wrongCount'] = 0;
        this.attributes['correctCount'] = 0;
        this.attributes['seed'] = randomSeed();
        this.attributes['practice'] = false; 
        var questions = getQuestionList(this.attributes);
        say += 'Welchen Artikel hat das Wort  ' + questionList[questions[0]].question + '?';
        this.emit(':ask', say, 'Der, Die oder Das?');

    },
    'AnswerIntent': function() {
        console.log("quiz> answer intent");
        var myState = '';

        if ( !this.event.request.intent.slots.article || this.event.request.intent.slots.article.value == '') {
            this.emitWithState('Unhandled');  // emitWithState = local version of this handler

        } else {
            myState = this.event.request.intent.slots.article.value;

            this.emit('rateAnswer', myState, (say) => {
                var currentQuestionIndex = this.attributes['currentQuestionIndex'];
                // TODO
                var questions = getQuestionList(this.attributes);        
                if (currentQuestionIndex < questions.length) {  // MORE QUESTIONS
                    say = say +  ' Nächstes Wort.  ' + questionList[questions[currentQuestionIndex]].question + '? ';
                    this.emit(':ask', say);
                } else {   // YOU ARE DONE
                    this.handler.state = states.RECAP_QUIZ;
                    this.emitWithState('RecapSession', say);
                }

            });
        }
    },
    'AMAZON.CancelIntent': function () {
        console.log("quiz> cancel intent");
        this.handler.state = states.RECAP_QUIZ;
        this.emitWithState('RecapSession', '');
    },
    'AMAZON.StopIntent': function() {
        console.log("quiz> stop intent");
        this.emit(':tell', 'Bis zum nächsten Mal!');
    },
    'Unhandled': function() {
        console.log("quiz> unhandled");
        var currentQuestionIndex = this.attributes['currentQuestionIndex'];
        var questions = getQuestionList(this.attributes);
        this.emit(':ask', questionList[questions[currentQuestionIndex]].question + '. Der, Die oder Das?', 'Der, Die oder Das?');
    }
});

var recapPracticeHandlers = Alexa.CreateStateHandler(states.RECAP_PRACTICE, {
    'NewSession': function () {
        console.log("repractice> new session");
        this.emit('NewSession'); // Uses the handler in newSessionHandlers
    },
    'RecapSession': function (say) {  // append final results to previous answer result
        console.log("repractice> recap session");
        var questions = getQuestionList(this.attributes);        
        say = say + ' Übung beendet. Du hast '
            + this.attributes['correctCount']
            + ' von '
            + questions.length + ' richtig. ';

        if (this.attributes['wrongCount'] == 0) {
            say += '  Möchtest du einen weiteren Versuch starten? ';
            this.emit(':ask', say, say);
        } else {
            say = say   +  ' Die falsch beantworteten Wörtern werden in deiner Alexa APP angezeigt. ';
            say += ' Möchtest du sie nochmal wiederholen? ';

            var cardText = '';
            var wrongList = this.attributes['wrongList'];
            for (var i = 0; i < wrongList.length; i++) {
                // show the first acceptable answer
                cardText += '\n\n' + questionList[wrongList[i]].answer[0] + ' ' + questionList[wrongList[i]].question;
            }

            this.emit(':askWithCard', say, 'Sag Ja, um einen neuen Versuch zu starten.', 'Bitte Merken', cardText);
        }

    },
    'AMAZON.YesIntent': function () {
        console.log("repractice> yes intent");
        this.handler.state = states.PRACTICE;
        this.emitWithState('StartPractice');
    },
    'AMAZON.NoIntent': function () {  //
        console.log("repractice> no intent");
        var say = 'Sag "Beenden" um das Quiz zu beenden oder sag "Üben" oder "Prüfen", um ein neues Spiel zu starten!';
        this.handler.state = states.START;
        this.emit(':ask', say, say);
    },
    'Unhandled': function() {
        console.log("repractice> unhandled");
        this.emit(':ask', 'Ich habe dich nicht verstanden! Sag bitte noch einmal.', 'Sag Ja, um einen neuen Versuch zu starten.');
    }
});

var recapQuizHandlers = Alexa.CreateStateHandler(states.RECAP_QUIZ, {
    // 'NewSession': function () {
    //     this.emit('NewSession'); // Uses the handler in newSessionHandlers
    // },
    'RecapSession': function (say) {  // append final results to previous answer result
        console.log("requiz> recap session");
        // TODO
        var questions = getQuestionList(this.attributes);
        
        var scoreSummary = '';
        scoreSummary += ' Du hast '
            + this.attributes['correctCount']
            + ' von '
            + questions.length
            + ' richtig. ';

        say =  say + ' Quiz abgeschlossen. Das Ergebnis kannst du auch in deiner Alexa App anschauen.';


        if (questions.length - this.attributes['correctCount'] == 0) {
            say += ' Hervoragend! Du hast alle Artikeln richtig beantwortet. Möchtest du eine neue Runde starten? ';
        } else {
            say += ' Möchtest du nochmal versuchen? ';
        }
        this.emit(':askWithCard',
            say,
            'Sag Ja, um einen neuen Versuch zu starten.',
            options.TITLE + ' Ergebnis',
            scoreSummary);
    },

    'AMAZON.YesIntent': function () {
        console.log("requiz> yes intent");
        this.handler.state = states.QUIZ;
        this.emitWithState('StartQuiz');
    },
    'AMAZON.NoIntent': function () {  //
        console.log("requiz> no intent");
        var say = 'Sag "Stop" um das Quiz zu beenden oder sag "Üben" oder "Prüfen", um ein neues Spiel zu starten!';
        this.handler.state = states.START;
        this.emit(':ask', say, say);
    },
    'Unhandled': function() {
        console.log("requiz> unhandled");
        this.emit(':ask', 'Ich habe dich leider nicht verstanden! Sag bitte noch einmal.', 'Sag Ja, um einen neuen Versuch zu starten.');
    }
});


var scoreHandlers = {
    'rateAnswer': function (stateGuess, callback) {
        console.log("> start rate answer");
        var questions = getQuestionList(this.attributes);        
        var currentQuestionIndex = this.attributes['currentQuestionIndex'];
        var globalIndex = questions[currentQuestionIndex];
        var currentQuestion = questionList[globalIndex];
        if (currentQuestion.answer.indexOf(stateGuess) >= 0 ) {
            this.attributes['correctCount'] += 1;
            say =  stateGuess + ' ' + currentQuestion.question + ' ist   korrekt! ';
        } else {
            this.attributes['wrongCount'] += 1;
            var wrongList = this.attributes['wrongList'];
            wrongList.push(globalIndex);
            this.attributes['wrongList'] = wrongList;
            say =  'Leider falsch! Das Wort '
                + currentQuestion.question
                + ' hat den Artikel  '
                + currentQuestion.answer[0] + '. ' + currentQuestion.answer[0] + ' ' + currentQuestion.question + '. ';

        }
        currentQuestionIndex += 1;
        this.attributes['currentQuestionIndex'] = currentQuestionIndex;

        callback(say);
        console.log("> end rate answer");
    },


};

Math.seededRandom = function(max, min) {
    max = max || 1;
    min = min || 0;
    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    var rnd = Math.seed / 233280;
    return min + rnd * (max - min);
}

function randomSeed(min, max) {
    max = max || 999999;
    min = min || 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeArray(myArray, seed, recordCount) { // Fisher-Yates shuffle
    Math.seed = seed || 42;
    var sliceLimit = myArray.length;
    if (recordCount) {
        sliceLimit = recordCount;
    }
    var m = myArray.length, t, i;

    console.log("> randomize array of length " + myArray.length
                 +" with seed " + seed + " and return " + sliceLimit + " elements");

    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.seededRandom() * m--);
        // And swap it with the current element.
        t = myArray[m];
        myArray[m] = myArray[i];
        myArray[i] = t;
        // console.log("> swap " + i + " with " + m);
    }
    return myArray.slice(0, sliceLimit);
}

function getQuestionList(attributes) {
    var isPractice = attributes['practice'];
    var wrongList = attributes['oldWrongList'];
    var seed = attributes['seed'];
    var list = [];
    if (isPractice) {
        if (wrongList.length > 0) {
            list = randomizeArray(wrongList.slice(0), seed);  // only practice those answered wrong
        } else {
            list = randomizeArray(questionIndex.slice(0), seed);
        }
    } else {
        list = randomizeArray(questionIndex.slice(0), seed, options.QUESTIONS_PER_QUIZ);
    }
    // console.log("> generated list: ", list)
    return list;
}