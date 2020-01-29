#Subject 3 (2.5 pts)
#TOPIC: REST

# Having the following application developed using NodeJS, complete the `POST` method and the `GET` method on path `/cars` :

- If a `GET /cars?filter=GT` request is performed, a filtered list of cars should be returned with a `200` response code; (0.5 pts)
- If no request body is present you should return a json with the following format: `{"message": "body is missing"}`. Response status code should be: `400`; (0.5 pts)
- If the request body properties are missing you should return a json with the following format: `{"message": "malformed request"}`. Response status code should be: `400`; (0.5 pts)
- Year  should be a number greater than `1860`, otherwise return a json with the following format: `{"message": "year should be > 1860"}`. Response status code should be: `400`; (0.5 pts)
- If the `car` is valid, it should be added and a reponse with the code `201` should be returned. The response body should be `{"message": "created"}`; If a `GET /cars` request is performed, the body should contain 3 `car`, including the one previoulsy added; (0.5 pts)