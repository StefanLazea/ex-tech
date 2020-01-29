#Subiect 3 (2.5 pts)
#TOPIC: REST

# Dată fiind aplicația `app` completați metodele `POST` și `GET` la adresa `/cars`:

- Dacă se face un request `GET /cars?filter=GT` ar trebui să se returneze o listă filtrată a msșinilor cu un cod de răspuns `200`; (0.5 pts)
- Dacă s-a trimis un request cu un corp gol sau nedefinit, se va returna un json cu următorul format: `{"message": "body is missing"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă din corpul request-ului lipsesc proprietăți se va returna un json cu următorul format: `{"message": "malformed request"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- `Year` trebuie să fie un număr mai mare ca 1860; în caz contrar se va returna un json cu următorul format: `{message: "year should be > 1860"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă mașina trimisă prin corpul request-ului este validă, va fi adăugată și se va returna un răspuns cu  codul `201`. Corpul răspunsului va fi `{"message": "created"}`;(0.5 pts). Dacă se face un request `GET /cars` corpul răspunsului trebuie să conțină 3 `car`, inclusiv cea adăugată anterior; (0.5 pts)
