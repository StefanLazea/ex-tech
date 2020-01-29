# ex-tech

## cheatsheet

# create method from outside the class
```
enhance - function name  
Widget.prototype.enhance = function (n) {
		
};
```


# Find entity by id
```
	let author = await Author.findById(req.params.id);
```  

# DELELTE /entity using the previous entity
```			
    await author.destroy();
```  

# Update entity
``` 
    await Author.update({
			name: req.body.name,
			email: req.body.email,
			address: req.body.address,
			age: req.body.age
		}, {
			where: {
				id: req.params.id
			}

		}).then((result) => {
			res.status(202).send({ message: "accepted" });
		})
```