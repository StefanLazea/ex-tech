#Subject 3 (2.5 pts)
#TOPIC: REST

# Having the following application developed using NodeJS, complete the `GET` method on path `/students` and the `DELETE` method on path `/students/:id` :

- If a `GET /students` request is performed, a full list of students should be returned with a `200` response code; (0.5 pts)
- If a `GET /students?filter=etc` request is performed, a filtered list of students should be returned with a `200` response code; (0.5 pts)
- Only an existing student can be deleted. Otherwise, the response should be : `{message: "not found"}`. Response status code should be: `404`; (0.5 pts)
- If the student exists, it should be deleted and a reponse with the code `202` should be returned. The response body should be `{"message": "accepted"}`; (0.5 pts)
- If a `GET /students` request is performed, the body should contain 9 `students`, and should not contain the one previoulsy deleted; (0.5 pts)