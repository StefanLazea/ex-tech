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

# body is missing validation  
```
	if (Object.keys(req.body).length === 0) {
        return res.status(400).send({ "message": "body is missing" });
    }
```  

# find in array with SOME
```
if(app.locals.products.some(el=>
                el.name === product.name && el.category === product.category && el.price === product.price)){
                return res.status(500).send({message: "Product already exists"});
}
```  


# Front-end  
  
- adding a component,  with props  
```			
<RobotForm onAdd={this.add} />
```  
- this.add defined in constructor as  
```
	this.store = new RobotStore()
		this.add = (robot) => {
			this.store.addRobot(robot)
		}
```  

- button for sending   
```
<button type="button" value="add"
    onClick={() => {
        this.props.onAdd(
            {
                name: this.state.name,
                type: this.state.type,
                mass: this.state.mass
            }
        )
}}
></button>
```  

# Add in state array  
```
	constructor() {
        super();
        this.state = {
            products: []
        };
    }

    add = (product) => {
        this.setState({
            products: [...this.state.products, product]
        })
    }
```