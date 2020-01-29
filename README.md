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

# Pagination  
```
	let pageNo = Number(req.query.pageNo);
	let pageSize = Number(req.query.pageSize);

	if (isNaN(pageNo) && isNaN(pageSize)) {
		return await Author.findAll().then((authors) => res.status(200).send(authors));
	}

	if (!isNaN(pageNo) && !isNaN(pageSize)) {
		let offset = Number(req.query.pageNo) * Number(pageSize);
		let limit = Number(req.query.pageSize);
		await Author.findAll({ limit, offset }).then((authors) => res.status(200).send(authors));
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

# [Edit robot]()
```
if (!this.state.isEditing) {
			return (
				<div>
					Hello, my name is {item.name}. I am a {item.type} and weigh {item.mass}
					<input type="button" value="edit" onClick={() => this.setState({
						isEditing: true
					})} />
				</div>
			)
		} else {
			return <div>
				<input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} />
				<input type="text" id="type" name="type" onChange={this.handleChange} value={this.state.type} />
				<input type="text" id="mass" name="mass" onChange={this.handleChange} value={this.state.mass} />
				<input type="button" value="save" onClick={this.save} />
				<input type="button" value="cancel" onClick={() => this.setState({
					isEditing: false
				})} />
			</div>
		}
```