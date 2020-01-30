#Subiect 3 (2.5 pts)
#TOPIC: REST

# Dată fiind aplicația `app` completați metoda `POST` la adresa `/ships`:

- Dacă s-a trimis un request cu un corp gol sau nedefinit, se va returna un json cu următorul format: `{"message": "body is missing"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă din corpul request-ului lipsesc proprietăți se va returna un json cu următorul format: `{"message": "malformed request"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Deplasamentul trebuie sa fie un numar mai mare ca 1000; în caz contrar se va returna un json cu următorul format: `{"message": "displacement should be over 1000"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă nava trimisa prin corpul request-ului este valida, va fi adăugata și se va returna un răspuns cu  codul `201`. Corpul răspunsului va fi `{"message": "created"}`;(0.5 pts)
- Dacă se face un request `GET /ships` corpul răspunsului trebuie să conțină 11 `ships`, inclusiv cea adăugata anterior; (0.5 pts)