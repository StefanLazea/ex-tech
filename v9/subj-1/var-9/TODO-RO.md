# Subiect 2 (2.5 pts)
# TOPIC: Javascript

# Avand urmatoarea functie `function applyBlackFriday(products, discount)` unde:
- `products` un vector de obiecte cu urmatorul format {name: string, price: number};
- `discount` un numar ce reprezinta discount-ul ce va fi aplicat preturilor produselor.
- Functia trebuie sa returneze un vector cu preturile reduse pentru toate produsele.

# Completati urmatoarele cerinte:

- Functia trebuie sa returneze un promise; (0.5 pts)
- `discount` trebuie sa fie un numar, in caz contrar apelati `reject` in promise cu `Error` si mesajul `Invalid discount`; (0.5 pts)
- `discount` trebuie sa fie mai mare ca 0 si mai mic egal cu 10, in caz contrar apelati `reject` in promise cu `Error` si mesajul `Discount not applicable`; (0.5 pts)
- `products` trebuie sa contina produse cu formatul specificat, in caz contrar se va apela `reject` cu `Error` si mesajul `Invalid array format`; (0.5 pts)
Un produs: {name: string, price: number}
- Functia trebuie sa returneze un vector cu preturile reduse pentru toate produsele; (0.5 pts)