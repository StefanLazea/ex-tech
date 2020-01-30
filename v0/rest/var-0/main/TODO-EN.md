#Subject 3 (2.5 pts)
#TOPIC: REST

# Having the following application developed using NodeJS, complete the `POST` method on path `/ships` :

- If no request body is present you should return a json with the following format: `{"message": "body is missing"}`. Response status code should be: `400`; (0.5 pts)
- If the request body properties are missing you should return a json with the following format: `{"message": "malformed request"}`. Response status code should be: `400`; (0.5 pts)
- Displacement should be over 1000, otherwise the server should return a message with the following format: `{"message": "displacement should be over 1000"}`. Response status code should be: `400`; (0.5 pts)
- If the ship is valid, it should be added and a response with the code `201` should be returned. The response body should be `{"message": "created"}`;(0.5 pts)
- If a `GET /ships` request is performed subsequently, the body should contain 11 `ships`, including the one previoulsy added; (0.5 pts)