# Website van Gido — Informatica Havo 4B

Een eenvoudige website voor Domein C, gemaakt met HTML, CSS en een beetje JavaScript. De site kan direct door GitHub Pages worden geserveerd; er is geen buildstap of installatie van pakketten nodig.

## Bestanden

- `index.html`: homepage met informatie over mij en mijn hobby's.
- `invoer.html`: invoer, verwerking en uitvoer.
- `binair.html`: bits, bytes, een oefening en Binary Bonanza.
- `kleurmodellen.html`: RGB, CMYK en een kleurenmixer.
- `compressie.html`: bitmap, vector, compressie, geluid en opslagruimte.
- `ai.html`: AI en Gemini op mijn Google Pixel.
- `stylesheet.css`: gedeelde opmaak, met Nederlandse comments.
- `script.js`: de twee interactieve oefeningen, met Nederlandse comments.
- `assets/`: eigen SVG-illustraties en een digitale ontwerpschets.
- `inleveren/`: ontwerpdocument en videoscript als Word-bestand en Markdown.

De bestaande bestanden `spel.html`, `puzzle.html`, `makreel.html` en `makreel` zijn behouden.

## Lokaal bekijken

Start in de map van deze repository:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open de site in een lokale browser op poort 8000. Stop de server met Ctrl+C. Voor de YouTube-video's heb je internettoegang nodig.

## Controleren

Met Node kun je de berekeningen voor binair en RGB controleren:

```sh
node --test tests/site.test.cjs
```

De zes nieuwe pagina's zijn ook lokaal gecontroleerd in Chromium op 1280, 768, 390 en 320 pixels breed. Het menu, afbeeldingen, toetsenbordbediening en beide oefeningen zijn gecontroleerd. De externe video's en websites konden in deze cloudomgeving niet worden geopend door het netwerkbeleid; afspelen en actuele videolengtes zijn niet bevestigd.

## Nog persoonlijk afmaken

Vul op de AI-pagina één echt voorbeeld in van je eigen gebruik en wat je hebt geleerd. Eigen foto's en extra informatie over jezelf kun je later toevoegen. Controleer de voorgestelde websitebeoordelingen in het ontwerpdocument of vervang ze door je eigen zes websites. Voeg je eigen papieren schets toe. Bekijk de zes video's en pas de uitleg erbij aan als dat nodig is; speel een paar levels van Binary Bonanza. Neem daarna je uitlegvideo van maximaal vijf minuten op.

De videokeuzes en YouTube-ID's zijn gecontroleerd aan de hand van de officiële Code.org-bronbestanden. De RGB-video staat ook in het aangeleverde lesmateriaal. De compressievideo gaat over tekstcompressie, niet over alle afbeeldingsformaten.

- [Officiële Code.org video-ID's](https://github.com/code-dot-org/code-dot-org/blob/staging/dashboard/config/videos.csv)
- [Officiële Code.org videotitels](https://github.com/code-dot-org/code-dot-org/blob/staging/dashboard/config/locales/data/en.yml)

## Publicatie

GitHub Pages kan deze bestanden direct publiceren vanuit de branch `main` en de map `/(root)`. Controleer in GitHub bij **Settings → Pages** of **Deploy from a branch** met deze instellingen is gekozen. Controleer daarna of `https://gidosluiter.github.io/` de nieuwste versie toont; een succesvolle push bevestigt nog niet dat de deployment klaar is.
