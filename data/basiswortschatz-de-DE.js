
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

