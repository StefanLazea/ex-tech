# Subiect 2 (2.5 pts)
# Tematica: Javascript

# Avand urmatoarea functie `function applyDiscount(vehicles, discount)`, completati urmatoarele taskuri:

- Functia trebuie sa returneze un Promise; (0.5 pts)
- Daca `discount` nu este numar, functia trebuie sa apeleze `reject` cu `Error` si mesajul `Invalid discount`; (0.5 pts)
- `vehicles` este un vector ce contine elemente cu urmatorul format: `{make: string, price: number}` (Example: [{make: "Audi A5", price: 15000}]). Daca este pasat un vector cu obiecte invalide, se apeleaza `reject` cu `Error` si mesajul `Invalid array format`; (0.5 pts)
- Functia trebuie sa apeleze `reject` cu `string` cu `Discount too big` daca `discount` este mai mare de 50% fata de cel mai mic pret din `vehicles`; (0.5 pts)
- Functia trebuie sa apeleze `resolve` cu un vector ce contine valorule modificate pentru fiecare element din `vehicles`; (0.5 pts)