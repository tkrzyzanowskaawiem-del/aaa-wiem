
const data = [
["Mona Lisa","Leonardo da Vinci","ok. 1503–1519","Renesans","Luwr, Paryż","Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg"],
["Gwiaździsta noc","Vincent van Gogh","1889","Postimpresjonizm","MoMA, Nowy Jork","Van Gogh - Starry Night - Google Art Project.jpg"],
["Krzyk","Edvard Munch","1893","Ekspresjonizm","Muzeum Narodowe, Oslo","The Scream.jpg"],
["Dziewczyna z perłą","Johannes Vermeer","ok. 1665","Barok","Mauritshuis, Haga","Girl with a Pearl Earring.jpg"],
["Narodziny Wenus","Sandro Botticelli","ok. 1485","Renesans","Uffizi, Florencja","Sandro Botticelli - La nascita di Venere - Google Art Project - edited.jpg"],
["Pocałunek","Gustav Klimt","1907–1908","Secesja","Belvedere, Wiedeń","Gustav Klimt 016.jpg"],
["Stworzenie Adama","Michał Anioł","ok. 1511","Renesans","Kaplica Sykstyńska, Watykan","Michelangelo - Creation of Adam (cropped).jpg"],
["Ostatnia Wieczerza","Leonardo da Vinci","ok. 1495–1498","Renesans","Santa Maria delle Grazie, Mediolan","Leonardo da Vinci - The Last Supper high res.jpg"],
["Szkoła Ateńska","Rafael Santi","1509–1511","Renesans","Muzea Watykańskie","La scuola di Atene.jpg"],
["Wolność wiodąca lud na barykady","Eugène Delacroix","1830","Romantyzm","Luwr, Paryż","Eugène Delacroix - La liberté guidant le peuple.jpg"],
["Tratwa Meduzy","Théodore Géricault","1818–1819","Romantyzm","Luwr, Paryż","JEAN LOUIS THÉODORE GÉRICAULT - La Balsa de la Medusa (Museo del Louvre, 1818-19).jpg"],
["Impresja, wschód słońca","Claude Monet","1872","Impresjonizm","Musée Marmottan Monet, Paryż","Claude Monet, Impression, soleil levant.jpg"],
["Nenufary","Claude Monet","ok. 1916","Impresjonizm","Różne kolekcje","Claude Monet - Water Lilies - 1906, Ryerson.jpg"],
["Bal w Moulin de la Galette","Auguste Renoir","1876","Impresjonizm","Musée d’Orsay, Paryż","Auguste Renoir - Dance at Le Moulin de la Galette - Google Art Project.jpg"],
["Śniadanie wioślarzy","Auguste Renoir","1880–1881","Impresjonizm","Phillips Collection, Waszyngton","Pierre-Auguste Renoir - Luncheon of the Boating Party - Google Art Project.jpg"],
["Wielka fala w Kanagawie","Katsushika Hokusai","ok. 1831","Ukiyo-e","Różne kolekcje","Great Wave off Kanagawa2.jpg"],
["Trwałość pamięci","Salvador Dalí","1931","Surrealizm","MoMA, Nowy Jork","The Persistence of Memory.jpg"],
["Guernica","Pablo Picasso","1937","Kubizm","Museo Reina Sofía, Madryt","PicassoGuernica.jpg"],
["Panny z Awinionu","Pablo Picasso","1907","Proto-kubizm","MoMA, Nowy Jork","Les Demoiselles d'Avignon.jpg"],
["Nocne marki","Edward Hopper","1942","Realizm amerykański","Art Institute of Chicago","Nighthawks by Edward Hopper 1942.jpg"],
["Amerykański gotyk","Grant Wood","1930","Regionalizm","Art Institute of Chicago","Grant Wood - American Gothic - Google Art Project.jpg"],
["Syn człowieczy","René Magritte","1964","Surrealizm","Kolekcja prywatna","Magritte The Son of Man.jpg"],
["Ogród rozkoszy ziemskich","Hieronim Bosch","ok. 1490–1510","Malarstwo niderlandzkie","Prado, Madryt","The Garden of Earthly Delights by Hieronymus Bosch.jpg"],
["Wieża Babel","Pieter Bruegel starszy","1563","Renesans północny","Kunsthistorisches Museum, Wiedeń","Pieter Bruegel the Elder - The Tower of Babel (Vienna) - Google Art Project.jpg"],
["Myśliwi na śniegu","Pieter Bruegel starszy","1565","Renesans północny","Kunsthistorisches Museum, Wiedeń","Pieter Bruegel the Elder - Hunters in the Snow (Winter) - Google Art Project 2.jpg"],
["Las Meninas","Diego Velázquez","1656","Barok","Prado, Madryt","Las Meninas 01.jpg"],
["Dziewczyna czytająca list przy otwartym oknie","Johannes Vermeer","ok. 1657–1659","Barok","Gemäldegalerie Alte Meister, Drezno","Jan Vermeer van Delft 003.jpg"],
["Nocna straż","Rembrandt","1642","Barok","Rijksmuseum, Amsterdam","The Nightwatch by Rembrandt.jpg"],
["Burza na Jeziorze Galilejskim","Rembrandt","1633","Barok","Dzieło skradzione","Rembrandt Christ in the Storm on the Lake of Galilee.jpg"],
["Wędrowiec nad morzem mgły","Caspar David Friedrich","ok. 1818","Romantyzm","Hamburger Kunsthalle","Caspar David Friedrich - Wanderer above the sea of fog.jpg"],
["Pocałunek","Francesco Hayez","1859","Romantyzm","Pinacoteca di Brera, Mediolan","Francesco Hayez 008.jpg"],
["Narodziny Chrystusa","Georges de La Tour","ok. 1640","Barok","Musée des Beaux-Arts, Rennes","Georges de La Tour - The Newborn Child - WGA12355.jpg"],
["Bitwa pod Grunwaldem","Jan Matejko","1878","Historyzm","Muzeum Narodowe w Warszawie","Jan Matejko, Bitwa pod Grunwaldem.jpg"],
["Stańczyk","Jan Matejko","1862","Historyzm","Muzeum Narodowe w Warszawie","Jan Matejko, Stańczyk.jpg"],
["Rejtan – Upadek Polski","Jan Matejko","1866","Historyzm","Zamek Królewski w Warszawie","Jan Matejko-Rejtan (Upadek Polski).jpg"],
["Bociany","Józef Chełmoński","1900","Realizm","Muzeum Narodowe w Warszawie","Józef Chełmoński - Bociany - 01 (MP 561 MNW).jpg"],
["Babie lato","Józef Chełmoński","1875","Realizm","Muzeum Narodowe w Warszawie","Józef Chełmoński - Babie lato.jpg"],
["Dziwny ogród","Józef Mehoffer","1903","Młoda Polska","Muzeum Narodowe w Warszawie","Józef Mehoffer - Dziwny ogród.jpg"],
["Śpiący Staś","Stanisław Wyspiański","1904","Młoda Polska","Muzeum Narodowe w Krakowie","Stanisław Wyspiański - Śpiący Staś.jpg"],
["Macierzyństwo","Stanisław Wyspiański","1905","Młoda Polska","Muzeum Narodowe w Krakowie","Stanisław Wyspiański - Macierzyństwo.jpg"],
["Dziewczynka z chryzantemami","Olga Boznańska","1894","Modernizm","Muzeum Narodowe w Krakowie","Boznańska Girl with chrysanthemums.jpg"],
["Szał uniesień","Władysław Podkowiński","1894","Symbolizm","Muzeum Narodowe w Krakowie","Władysław Podkowiński - Szał uniesień.jpg"]
];

const descriptions = [
"Portret Lisy Gherardini zasłynął z tajemniczego uśmiechu i techniki sfumato. Kradzież z Luwru w 1911 roku jeszcze bardziej rozsławiła dzieło.",
"Van Gogh stworzył tę ekspresyjną wizję nocnego nieba podczas pobytu w Saint-Rémy.",
"Munch przedstawił niepokój i lęk, wykorzystując falujące linie i intensywne barwy.",
"To prawdopodobnie tronie, czyli studium twarzy i kostiumu, a nie tradycyjny portret.",
"Botticelli przedstawił boginię Wenus przybywającą na brzeg na muszli.",
"Jedno z najważniejszych dzieł złotego okresu Klimta, łączące intymność i dekoracyjność.",
"Fragment fresku z Kaplicy Sykstyńskiej przedstawia niemal stykające się dłonie Boga i Adama.",
"Leonardo ukazał reakcje apostołów na zapowiedź zdrady podczas Ostatniej Wieczerzy.",
"Rafael wyobraził sobie spotkanie wielkich filozofów starożytności, w tym Platona i Arystotelesa.",
"Alegoria rewolucji lipcowej 1830 roku. Wolność przedstawiona została jako kobieta z francuską flagą.",
"Monumentalne przedstawienie rozbitków po katastrofie francuskiej fregaty Méduse.",
"Obraz, od którego tytułu pochodzi nazwa impresjonizmu, przedstawia port o wschodzie słońca.",
"Monet wielokrotnie malował swój ogród w Giverny, badając światło i odbicia na wodzie.",
"Scena paryskiej zabawy pokazuje życie towarzyskie i zmienność światła.",
"Spotkanie przyjaciół nad Sekwaną łączy portret grupowy z atmosferą letniego popołudnia.",
"Japoński drzeworyt przedstawia potężną falę, łodzie i odległą górę Fudżi.",
"Miękkie zegary stały się symbolem surrealizmu i niezwykłego podejścia Dalego do czasu.",
"Monumentalne dzieło Picassa jest protestem przeciwko przemocy wojennej.",
"Przełomowy obraz Picassa zakwestionował tradycyjne przedstawianie ludzkiego ciała.",
"Nocny bar i samotne postacie tworzą jeden z najbardziej rozpoznawalnych obrazów amerykańskiego miasta.",
"Portret dwóch postaci przed wiejskim domem stał się ikoną kultury amerykańskiej.",
"Postać w meloniku z twarzą zasłoniętą jabłkiem prowokuje pytania o widzialność i tajemnicę.",
"Fantastyczny tryptyk Boscha pełen jest symboli, niezwykłych stworzeń i moralnych zagadek.",
"Bruegel przedstawił biblijną opowieść o ludzkiej pysze jako ogromne przedsięwzięcie budowlane.",
"Zimowy pejzaż pokazuje myśliwych wracających do wioski i życie mieszkańców doliny.",
"Velázquez namalował infantkę, dworzan i samego siebie, tworząc zagadkę dotyczącą spojrzenia widza.",
"Vermeer ukazał kobietę czytającą list w cichym, rozświetlonym wnętrzu.",
"Rembrandt zamienił portret grupowy straży miejskiej w dynamiczną scenę pełną ruchu.",
"Dramatyczny obraz Rembrandta został skradziony w 1990 roku z muzeum w Bostonie.",
"Samotna postać stojąca nad morzem mgły stała się symbolem romantycznej refleksji nad naturą.",
"Romantyczna scena pocałunku jest również interpretowana w kontekście zjednoczenia Włoch.",
"Georges de La Tour stworzył kameralną scenę, w której światło świecy buduje atmosferę skupienia.",
"Matejko przedstawił monumentalną wizję bitwy z 1410 roku, pełną historycznych postaci.",
"Zamyślony błazen królewski symbolizuje troskę o los państwa mimo trwającej zabawy.",
"Dramatyczna wizja protestu Tadeusza Rejtana wobec decyzji związanych z rozbiorem Polski.",
"Ojciec i syn obserwują bociany na polskiej wsi. Obraz łączy codzienność z pięknem natury.",
"Dziewczyna odpoczywa na łące, obserwując unoszące się nitki babiego lata.",
"Baśniowy ogród Mehoffera pełen jest światła, roślin i niezwykłych symboli.",
"Pastelowy portret śpiącego dziecka pokazuje wrażliwość Wyspiańskiego jako portrecisty.",
"Wyspiański przedstawił intymną scenę matki karmiącej dziecko w otoczeniu dziewczynek.",
"Nastrojowy portret dziewczynki trzymającej kwiaty, namalowany w przygaszonych barwach.",
"Ekspresyjna scena kobiety na wspiętym koniu należy do najbardziej znanych dzieł polskiego symbolizmu."
];

const gallery = document.querySelector("#gallery");
const dialog = document.querySelector("#artDialog");

const commons = file =>
  "https://commons.wikimedia.org/wiki/Special:FilePath/" +
  encodeURIComponent(file) + "?width=900";

const searchLink = art =>
  "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=" +
  encodeURIComponent(art.title + " " + art.artist);

const artworks = data.map((row, i) => ({
  title: row[0],
  artist: row[1],
  year: row[2],
  period: row[3],
  museum: row[4],
  file: row[5],
  history: descriptions[i],
  detail: "Przyjrzyj się kompozycji, kolorom i sposobowi prowadzenia wzroku przez artystę.",
  image: commons(row[5]),
  source: searchLink({title:row[0], artist:row[1]})
}));

// Wyszukiwanie zamiennego zdjęcia tylko po błędzie oryginalnego adresu.
async function findReplacement(art) {
  const terms = [art.artist, art.title].filter(Boolean);
  const query = terms.join(" ");
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: query,
    gsrnamespace: "6",
    gsrlimit: "15",
    prop: "imageinfo",
    iiprop: "url",
    iiurlwidth: "900",
    format: "json",
    origin: "*"
  });

  const response = await fetch(
    "https://commons.wikimedia.org/w/api.php?" + params
  );
  if (!response.ok) throw new Error("Brak odpowiedzi Commons");

  const result = await response.json();
  const pages = Object.values(result.query?.pages || {});

  const normalize = s => s.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ");

  const artistWords = normalize(art.artist)
    .split(" ").filter(w => w.length > 3);

  const titleWords = normalize(art.title)
    .split(" ").filter(w => w.length > 4);

  const candidates = pages.filter(p => {
    const name = normalize(p.title || "");
    const matchesArtist = artistWords.some(w => name.includes(w));
    const matchesTitle = titleWords.some(w => name.includes(w));
    return matchesArtist && matchesTitle &&
      p.imageinfo?.[0]?.thumburl;
  });

  // Brak pewnego dopasowania = brak automatycznej podmiany.
  if (candidates.length !== 1) return null;

  return candidates[0].imageinfo[0].thumburl;
}

function missingImage(img, art) {
  img.style.display = "none";
  const holder = img.parentElement;
  if (holder.querySelector(".art-missing")) return;

  const note = document.createElement("span");
  note.className = "art-missing";
  note.style.cssText =
    "display:flex;align-items:center;justify-content:center;" +
    "min-height:180px;padding:24px;text-align:center;" +
    "font-size:13px;line-height:1.6;color:#665b52;";
  note.textContent = "Reprodukcja niedostępna — kliknij, aby poznać historię dzieła";
  holder.appendChild(note);
}

async function loadImage(img, art) {
  img.onerror = async () => {
    img.onerror = null;
    try {
      const replacement = await findReplacement(art);
      if (replacement) {
        art.image = replacement;
        img.onerror = () => missingImage(img, art);
        img.src = replacement;
      } else {
        missingImage(img, art);
      }
    } catch {
      missingImage(img, art);
    }
  };
}

function openArt(art) {
  const modalImage = document.querySelector("#modalImage");
  modalImage.style.display = "";
  modalImage.src = art.image;
  modalImage.alt = art.title + " — " + art.artist;
  modalImage.onerror = () => {
    modalImage.style.display = "none";
  };

  document.querySelector("#modalCategory").textContent =
    art.period + " / " + art.year;
  document.querySelector("#modalTitle").textContent = art.title;
  document.querySelector("#modalArtist").textContent = art.artist;
  document.querySelector("#modalHistory").textContent = art.history;
  document.querySelector("#modalDetail").textContent = art.detail;
  document.querySelector("#modalMuseum").textContent =
    "Gdzie zobaczysz oryginał: " + art.museum;
  document.querySelector("#modalSource").href = art.source;
  dialog.showModal();
}

gallery.innerHTML = "";

artworks.forEach(art => {
  const button = document.createElement("button");
  button.className = "art-card";
  button.type = "button";
  button.setAttribute("aria-label", "Otwórz opis: " + art.title);

  const frame = document.createElement("span");
  frame.className = "art-frame";

  const img = document.createElement("img");
  img.loading = "lazy";
  img.src = art.image;
  img.alt = art.title + " — " + art.artist;
  loadImage(img, art);

  const hint = document.createElement("span");
  hint.className = "hover-hint";
  hint.textContent = "Poznaj historię ↗";

  frame.append(img, hint);

  const meta = document.createElement("span");
  meta.className = "art-meta";

  const info = document.createElement("span");
  const title = document.createElement("strong");
  title.textContent = art.title;
  const author = document.createElement("small");
  author.textContent = art.artist + " · " + art.year;

  info.append(title, author);
  meta.append(info);
  button.append(frame, meta);

  button.addEventListener("click", () => openArt(art));
  gallery.appendChild(button);
});

document.querySelector("#closeDialog")
  .addEventListener("click", () => dialog.close());

dialog.addEventListener("click", e => {
  if (e.target === dialog) dialog.close();
});
