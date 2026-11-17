AAA, WIEM! — system publikacji bez zmieniania index.html

1. Wgraj ZAWARTOŚĆ tego ZIP do głównego katalogu repozytorium GitHub.
   Najłatwiej użyć GitHub Desktop, aby nadpisać istniejące pliki.
   Koniecznie zachowaj foldery .github, content, scripts, images oraz plik .pages.yml.
2. GitHub: Settings > Actions > General > Workflow permissions:
   zaznacz Read and write permissions, Save.
3. GitHub: Actions > Publikuj artykuły AAA WIEM > Run workflow > Run workflow.
   Poczekaj na zielony znacznik. GitHub Pages opublikuje zmiany.
4. Otwórz https://pagescms.org i zaloguj się przez GitHub.
   Wybierz repozytorium tkrzyzanowskaawiem-del/aaa-wiem.
5. W panelu Artykuły kliknij New, wypełnij pola i zapisz.
   GitHub Actions wygeneruje nową stronę HTML i odświeży listę artykułów.

WAŻNE:
- Nigdy nie trzeba zmieniać index.html, aby dodać artykuł.
- Nie kasuj ręcznie wygenerowanych plików HTML.
- W polu slug wpisuj np. dlaczego-pada-deszcz (bez .html).
- Wyróżniony artykuł: najlepiej tylko jeden z featured=true.
- Panel CMS jest zewnętrzną usługą i wymaga autoryzacji konta GitHub.
- Przy pierwszym uruchomieniu sprawdź uprawnienia GitHub Actions i Pages.
- Zdjęcia z dotychczasowych artykułów są ilustracyjne.
