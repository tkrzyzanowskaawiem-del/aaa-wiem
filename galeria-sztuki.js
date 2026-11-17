
const data = [
  ["Mona Lisa","Leonardo da Vinci","ok. 1503–1519","Renesans","Luwr, Paryż","Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg","Portret Lisy Gherardini słynie z tajemniczego uśmiechu i techniki sfumato. Kradzież z Luwru w 1911 roku jeszcze bardziej rozsławiła obraz.","Zwróć uwagę na subtelne przejścia światła i cienia."],
  ["Gwiaździsta noc","Vincent van Gogh","1889","Postimpresjonizm","MoMA, Nowy Jork","Van Gogh - Starry Night - Google Art Project.jpg","Van Gogh namalował ten obraz podczas pobytu w Saint-Rémy. Wirujące niebo jest ekspresyjną wizją artysty, a nie dokładnym zapisem krajobrazu.","Cyprys łączy ziemię z niebem."],
  ["Krzyk","Edvard Munch","1893","Ekspresjonizm","Muzeum Narodowe, Oslo","The Scream.jpg","Jedno z najsłynniejszych przedstawień ludzkiego lęku. Munch stworzył kilka wersji tego motywu.","Falujące linie sprawiają, że cały krajobraz wydaje się niespokojny."],
  ["Dziewczyna z perłą","Johannes Vermeer","ok. 1665","Barok","Mauritshuis, Haga","Girl with a Pearl Earring.jpg","To prawdopodobnie tronie, czyli studium twarzy i kostiumu, a nie tradycyjny portret konkretnej osoby.","Światło na kolczyku przyciąga wzrok."],
  ["Narodziny Wenus","Sandro Botticelli","ok. 1485","Renesans","Uffizi, Florencja","Sandro Botticelli - La nascita di Venere - Google Art Project - edited.jpg","Bogini Wenus przybywa na brzeg na muszli. Obraz nawiązuje do antycznej mitologii i renesansowych ideałów piękna.","Przyjrzyj się rytmowi włosów, tkanin i fal."],
  ["Pocałunek","Gustav Klimt","1907–1908","Secesja","Belvedere, Wiedeń","Gustav Klimt 016.jpg","Jedno z najważniejszych dzieł złotego okresu Klimta. Łączy intymność z dekoracyjnymi wzorami.","Geometryczne i kwiatowe ornamenty tworzą kontrast."],
  ["Stworzenie Adama","Michał Anioł","ok. 1511","Renesans","Kaplica Sykstyńska, Watykan","Michelangelo - Creation of Adam (cropped).jpg","Fragment fresku przedstawiający Boga i Adama, których dłonie niemal się dotykają.","Niewielka przestrzeń między palcami buduje napięcie."],
  ["Ostatnia Wieczerza","Leonardo da Vinci","ok. 1495–1498","Renesans","Santa Maria delle Grazie, Mediolan","Leonardo da Vinci - The Last Supper high res.jpg","Scena reakcji apostołów na słowa Jezusa o zdradzie. Leonardo mistrzowsko połączył emocje i perspektywę.","Linie kompozycji prowadzą wzrok do Chrystusa."],
  ["Szkoła Ateńska","Rafael Santi","1509–1511","Renesans","Muzea Watykańskie","La scuola di Atene.jpg","Fresk ukazuje wyobrażone spotkanie wielkich filozofów starożytności.","W centrum znajdują się Platon i Arystoteles."],
  ["Wolność wiodąca lud na barykady","Eugène Delacroix","1830","Romantyzm","Luwr, Paryż","Eugène Delacroix - La liberté guidant le peuple.jpg","Alegoria rewolucji lipcowej we Francji. Wolność przyjmuje postać kobiety niosącej trójkolorową flagę.","Obraz łączy realistyczną walkę z symbolem."],
  ["Tratwa Meduzy","Théodore Géricault","1818–1819","Romantyzm","Luwr, Paryż","JEAN LOUIS THÉODORE GÉRICAULT - La Balsa de la Medusa (Museo del Louvre, 1818-19).jpg","Monumentalne przedstawienie rozbitków po katastrofie francuskiej fregaty.","Zauważ kontrast rozpaczy i nadziei."],
  ["Impresja, wschód słońca","Claude Monet","1872","Impresjonizm","Musée Marmottan Monet, Paryż","Claude Monet, Impression, soleil levant.jpg","Od tytułu tego obrazu pochodzi nazwa impresjonizmu.","Pomarańczowe słońce wyróżnia się na tle chłodnych błękitów."],
  ["Nenufary","Claude Monet","ok. 1916","Impresjonizm","Różne kolekcje","Claude Monet - Water Lilies - 1906, Ryerson.jpg","Monet przez lata malował staw w swoim ogrodzie w Giverny, badając zmienność światła i odbić.","Granica między wodą a odbiciem niemal zanika."],
  ["Bal w Moulin de la Galette","Auguste Renoir","1876","Impresjonizm","Musée d’Orsay, Paryż","Auguste Renoir - Dance at Le Moulin de la Galette - Google Art Project.jpg","Scena niedzielnego spotkania paryżan pokazuje codzienność nowoczesnego miasta.","Plamy światła przechodzą przez liście drzew."],
  ["Śniadanie wioślarzy","Auguste Renoir","1880–1881","Impresjonizm","Phillips Collection, Waszyngton","Pierre-Auguste Renoir - Luncheon of the Boating Party - Google Art Project.jpg","Towarzyskie spotkanie nad Sekwaną oddaje atmosferę beztroskiego popołudnia.","Postacie tworzą swobodną, ale przemyślaną kompozycję."],
  ["Wielka fala w Kanagawie","Katsushika Hokusai","ok. 1831","Ukiyo-e","Różne kolekcje","Great Wave off Kanagawa2.jpg","Japoński drzeworyt ukazuje potężną falę, łodzie i odległą górę Fudżi.","Mała góra w tle kontrastuje z ogromem fali."],
  ["Trwałość pamięci","Salvador Dalí","1931","Surrealizm","MoMA, Nowy Jork","The Persistence of Memory.jpg","Miękkie zegary stały się jednym z najbardziej rozpoznawalnych motywów surrealizmu.","Znane przedmioty tracą tu swoje zwykłe właściwości."],
  ["Guernica","Pablo Picasso","1937","Kubizm","Museo Reina Sofía, Madryt","PicassoGuernica.jpg","Monumentalny antywojenny obraz powstał po bombardowaniu baskijskiego miasta Guernica.","Czerń, biel i rozbite formy wzmacniają dramatyzm."],
  ["Panny z Awinionu","Pablo Picasso","1907","Proto-kubizm","MoMA, Nowy Jork","Les Demoiselles d'Avignon.jpg","Przełomowe dzieło, które zakwestionowało tradycyjne przedstawianie ludzkiej postaci.","Twarze i ciała są zbudowane z ostrych płaszczyzn."],
  ["Nocne marki","Edward Hopper","1942","Realizm amerykański","Art Institute of Chicago","Nighthawks by Edward Hopper 1942.jpg","Samotne postacie w nocnym barze stały się symbolem wielkomiejskiej izolacji.","Światło wnętrza kontrastuje z pustą ulicą."],
  ["Amerykański gotyk","Grant Wood","1930","Regionalizm","Art Institute of Chicago","Grant Wood - American Gothic - Google Art Project.jpg","Portret dwóch postaci przed domem z gotyckim oknem stał się ikoną amerykańskiej kultury.","Widły powtarzają pionowe linie kompozycji."],
  ["Syn człowieczy","René Magritte","1964","Surrealizm","Kolekcja prywatna","Magritte The Son of Man.jpg","Postać w meloniku ma twarz zasłoniętą zielonym jabłkiem.","Obraz pyta o to, co widoczne, a co ukryte."],
  ["Ogród rozkoszy ziemskich","Hieronim Bosch","ok. 1490–1510","Malarstwo niderlandzkie","Prado, Madryt","Hieronymus Bosch - The Garden of Earthly Delights - The Garden of Earthly Delights.jpg","Tryptyk pełen fantastycznych postaci, symboli i niepokojących scen.","Każdy fragment obrazu skrywa osobną opowieść."],
  ["Wieża Babel","Pieter Bruegel starszy","1563","Renesans północny","Kunsthistorisches Museum, Wiedeń","Pieter Bruegel the Elder - The Tower of Babel (Vienna) - Google Art Project.jpg","Biblijna historia ludzkiej pychy została przedstawiona jako ogromna budowla.","Zauważ maleńkie postacie robotników."],
  ["Myśliwi na śniegu","Pieter Bruegel starszy","1565","Renesans północny","Kunsthistorisches Museum, Wiedeń","Pieter Bruegel the Elder - Hunters in the Snow (Winter) - Google Art Project 2.jpg","Zimowy pejzaż pokazuje codzienne życie wsi i rozległy krajobraz.","Wzrok wędruje od myśliwych ku dolinie."],
  ["Las Meninas","Diego Velázquez","1656","Barok","Prado, Madryt","Las Meninas 01.jpg","Obraz przedstawia infantkę Małgorzatę i jej otoczenie, ale także samego malarza.","Lustro w tle komplikuje pytanie o to, kto jest obserwatorem."],
  ["Dziewczyna czytająca list przy otwartym oknie","Johannes Vermeer","ok. 1657–1659","Barok","Gemäldegalerie Alte Meister, Drezno","Jan Vermeer van Delft 003.jpg","Cicha scena domowa ukazuje kobietę pogrążoną w lekturze listu.","Odbicie w szybie dodaje scenie intymności."],
  ["Nocna straż","Rembrandt","1642","Barok","Rijksmuseum, Amsterdam","The Nightwatch by Rembrandt.jpg","Portret grupowy straży miejskiej zamieniony w dynamiczną scenę pełną ruchu.","Światło kieruje uwagę ku najważniejszym postaciom."],
  ["Burza na Jeziorze Galilejskim","Rembrandt","1633","Barok","Dzieło skradzione","Rembrandt Christ in the Storm on the Lake of Galilee.jpg","Dramatyczna scena biblijna. Obraz skradziono z muzeum Isabella Stewart Gardner w 1990 roku.","Ukośna kompozycja wzmacnia wrażenie sztormu."],
  ["Wędrowiec nad morzem mgły","Caspar David Friedrich","ok. 1818","Romantyzm","Hamburger Kunsthalle","Caspar David Friedrich - Wanderer above the sea of fog.jpg","Samotny człowiek patrzy na góry skryte we mgle.","Postać odwrócona plecami zaprasza widza do wspólnego patrzenia."],
  ["Pocałunek","Francesco Hayez","1859","Romantyzm","Pinacoteca di Brera, Mediolan","Francesco Hayez 008.jpg","Romantyczna scena miłosna interpretowana także w kontekście włoskiego zjednoczenia.","Gest pożegnania nadaje scenie napięcie."],
  ["Narodziny Chrystusa","Georges de La Tour","ok. 1640","Barok","Musée des Beaux-Arts, Rennes","Georges de La Tour - The Newborn Child - WGA12355.jpg","Kameralna scena rozświetlona świecą pokazuje mistrzostwo operowania światłocieniem.","Światło tworzy atmosferę skupienia."],
  ["Bitwa pod Grunwaldem","Jan Matejko","1878","Historyzm","Muzeum Narodowe w Warszawie","Jan Matejko, Bitwa pod Grunwaldem.jpg","Monumentalna wizja zwycięstwa wojsk polsko-litewskich nad zakonem krzyżackim w 1410 roku.","Matejko umieścił w jednej scenie wiele historycznych postaci."],
  ["Stańczyk","Jan Matejko","1862","Historyzm","Muzeum Narodowe w Warszawie","Jan Matejko, Stańczyk.jpg","Zamyślony błazen królewski kontrastuje z uczestnikami dworskiej zabawy.","Samotność Stańczyka symbolizuje troskę o los państwa."],
  ["Rejtan – Upadek Polski","Jan Matejko","1866","Historyzm","Zamek Królewski w Warszawie","Jan Matejko-Rejtan (Upadek Polski).jpg","Dramatyczna wizja sprzeciwu Tadeusza Rejtana wobec rozbiorowych decyzji sejmu.","Gest Rejtana jest centrum emocjonalnym obrazu."],
  ["Bociany","Józef Chełmoński","1900","Realizm","Muzeum Narodowe w Warszawie","Józef Chełmoński - Bociany.jpg","Ojciec i syn obserwują bociany na polskiej wsi.","Codzienna scena staje się opowieścią o więzi człowieka z naturą."],
  ["Babie lato","Józef Chełmoński","1875","Realizm","Muzeum Narodowe w Warszawie","Józef Chełmoński - Babie lato.jpg","Dziewczyna leży na łące i obserwuje unoszące się nitki babiego lata.","Prosta scena oddaje spokój i przestrzeń krajobrazu."],
  ["Dziwny ogród","Józef Mehoffer","1903","Młoda Polska","Muzeum Narodowe w Warszawie","Józef Mehoffer - Dziwny ogród.jpg","Baśniowy ogród pełen światła i symbolicznych szczegółów.","Ogromna ważka przyciąga uwagę i nadaje scenie niezwykłość."],
  ["Śpiący Staś","Stanisław Wyspiański","1904","Młoda Polska","Muzeum Narodowe w Krakowie","Stanisław Wyspiański - Śpiący Staś.jpg","Intymny pastelowy portret dziecka, przykład wrażliwości Wyspiańskiego jako portrecisty.","Delikatne linie i kolory podkreślają spokojny nastrój."],
  ["Macierzyństwo","Stanisław Wyspiański","1905","Młoda Polska","Muzeum Narodowe w Krakowie","Stanisław Wyspiański - Macierzyństwo.jpg","Pastel ukazujący matkę karmiącą dziecko i przyglądające się dziewczynki.","Kompozycja skupia się na bliskości i codzienności."],
  ["Dziewczynka z chryzantemami","Olga Boznańska","1894","Modernizm","Muzeum Narodowe w Krakowie","Olga Boznańska - Dziewczynka z chryzantemami.jpg","Nastrojowy portret młodej dziewczynki trzymającej kwiaty.","Przygaszone barwy budują atmosferę melancholii."],
  ["Szał uniesień","Władysław Podkowiński","1894","Symbolizm","Muzeum Narodowe w Krakowie","Władysław Podkowiński - Szał uniesień.jpg","Ekspresyjna scena kobiety na wspiętym koniu, jeden z najbardziej dyskutowanych polskich obrazów XIX wieku.","Ruch konia i ciemne tło potęgują dramatyzm."]
];

const artworks = data.map(([title, artist, year, period, museum, file, history, detail]) => ({
  title, artist, year, period, museum, file, history, detail,
  source: "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=" +
    encodeURIComponent(title + " " + artist)
}));

const commons = file =>
  "https://commons.wikimedia.org/wiki/Special:FilePath/" +
  encodeURIComponent(file) + "?width=900";

const gallery = document.querySelector("#gallery");
gallery.innerHTML = "";

artworks.forEach(art => {
  const b = document.createElement("button");
  b.className = "art-card";
  b.type = "button";
  b.setAttribute("aria-label", "Otwórz opis obrazu " + art.title);

  b.innerHTML = `
    <span class="art-frame">
      
<img loading="lazy"
     src="${commons(art.file)}"
     alt="${art.title} — ${art.artist}"
     onerror="this.onerror=null;this.style.display='none';this.parentElement.classList.add('missing-art');">

      <span class="hover-hint">Poznaj historię <span aria-hidden="true">↗</span></span>
    </span>
    <span class="art-meta">
      <span>
        <strong>${art.title}</strong>
        <small>${art.artist} · ${art.year}</small>
      </span>
    </span>
  `;

  b.addEventListener("click", () => openArt(art));
  gallery.appendChild(b);
});

const dialog = document.querySelector("#artDialog");

function openArt(a) {
  document.querySelector("#modalImage").src = commons(a.file);
  document.querySelector("#modalImage").alt = a.title + " — " + a.artist;
  document.querySelector("#modalCategory").textContent = a.period + " / " + a.year;
  document.querySelector("#modalTitle").textContent = a.title;
  document.querySelector("#modalArtist").textContent = a.artist;
  document.querySelector("#modalHistory").textContent = a.history;
  document.querySelector("#modalDetail").textContent = a.detail;
  document.querySelector("#modalMuseum").textContent = "Gdzie zobaczysz oryginał: " + a.museum;
  document.querySelector("#modalSource").href = a.source;
  dialog.showModal();
}

document.querySelector("#closeDialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => {
  if (e.target === dialog) dialog.close();
});
