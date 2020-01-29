#Subiect 3 (2.5 pts)
#TOPIC: REST

# Dată fiind aplicația `app` completați metoda `GET` la adresa `/students` și metoda `DELETE` la adresa `/students/:id`:

- Dacă se face un request `GET /students` ar trebui să se returneze o listă completă a studenților cu un cod de răspuns `200`; (0.5 pts)
- Dacă se face un request `GET /students?filter=etc` ar trebui să se returneze o listă filtrată a studenților cu un cod de răspuns `200`; (0.5 pts)
- Un student inexistent nu poate fi șters. Dacă se cere ștergerea unui student inexistent se va returna un mesaj cu formatul: `{"message": "not found"}`. Codul de răspuns va fi: `404`; (0.5 pts)
- Dacă studentul există, va fi șters și se va returna un răspuns cu  codul `202`. Corpul răspunsului va fi `{"message": "accepted"}`;(0.5 pts)
- Dacă se face un request `GET /students` corpul răspunsului trebuie să conțină 9 `students`, și să nu conțină studentul șters anterior; (0.5 pts)