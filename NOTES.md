1. Ladowanie danych
   Dane dodawane sa z pliku channels.js. Zmienilem json na js, bo mialem problem z importowaniem z jsona.
   Dane sa dodawane do kontenera przy pomocy html-podobnego tekstu uzywajac innerHtml

2. CSS
   Posty wyswietlaja sie na stronie w widoku kafelkowym przy uzyciu css grid. Za zmiane wygladu na roznych rozdzielczosciach odpowiada media query.

3. JS
   Kod jest podzielony modulowo. App.js odpowiedzialny jest tylko za wywolanie fukcji odpowiedzialnych za wyrenderowanie produktow i dodanie nasluchowaczy. Reszta logiki znajduje sie w folderze functions.

3.1) loadContent
Pobiera dane z channels.js, dokleja do szablonu HTML i dodaje do kontenera JS na stronie

3.2) addEventListeners
W addEventListeners znajduje sie kod odpowiedzialny za znalezienie odpowiedniego elementu na stronie i dodanie na nim nasluchiwacza. Radio buttony nasluchuja zdarzania change, czyli reaguja w momencie kiedy zmiania swoj status z pustego na zaznaczony. Nie ma potrzeby zeby reagowaly na kazde klikniecie. Przycisk clear czeka na klikniecie, a Input na input.

3.3) sort
W odpowiedzi na konkretny event wywolywana jest funkcja sortujaca z pliku sort.js. Fonkcje te przyjmuja tablice z danymi. Aby nie nadpisac oryginalnej channels, jest ona kopiowana za pomoca spread operatora. Na sklonowanej tablicy wykonywany jest odpowiedni algorytm sortujacy. Po wykonaniu zwracana jest przesortowana tablica. Gotowa tablica zostaje wyrenderowana.

3.4) toImperialNotation oraz inne funkcje pomocnicze
Aby dane byly gotowe do wyswietlenia w notacji imperialnej, a takze gotowe so sortowania, dane sa przeszukiwane za pomoca konkretnego regexu i znalezione elementy sa odpowiednio zmieniane.

3.5) Sortowanie roznaca/malejaca
Probowalem poradzic sobie z tym zadaniem, ale nie do konca mi sie udalo. Sortowanie nie dziala poprawnie.
