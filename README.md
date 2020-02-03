# ex-tech

## cheatsheet


### Working with objects  
- declare an Object: ``` let result = {}; ```
- looping through an Object 
	```
	const keys = Object.keys(result);
	for (const key of keys) {
	}
	```  
- get the size of an Object  
	```
	const size = Object.keys(result).length;
	```
- returning a Promise  
	``` 
	return new Promise((resolve,reject)=>{ 
	// error
	// reject(new Error("Invalid discount"));      
	}
	```

### Working with arrays

- Check the type of arrays to be "string"  
	```
	function check(dictionary){
		return dictionary.every(item=>typeof item === "string");
	}
	```
	
- given a text separated with spaces, and a dictionary that contains strings. This snippet creates a new array if the current word from the text is also in the dictionary.
	```
	let arr = text.split(" ");
	let result = [];
	arr.forEach(item=>{
		if(dictionary.includes(item) === true){
			result.push(item);
		}

	});
	return result.join(" ");
	```  
	[**Usage here**](https://gist.github.com/StefanLazea/72283ba8099f60b7c360f383a44798ad.js)
	
	
- create a new array with unique elements
	```
	let firstArr = Array.from(new Set(first.filter(x => !second.includes(x))));
	```
	[**Usage here**](https://gist.github.com/StefanLazea/3a7e8a194cff02d1d6b8726ca11e7f29.js)
	
	
- replace certain words as the token '...' with the value from element  
	```
	if (!input.includes('...')) {
		return input;
	} else {
		tokens.forEach(element => {
		    input = input.replace('...', "${" + `${element.tokenName}` + "}");

		});
		return input;
	}
	```  
	[**Usage here**](https://github.com/StefanLazea/webtech-assignment2/blob/master/main/app.js)  
	
- find in array with SOME
	```
	if(app.locals.products.some(el=>
		el.name === product.name && el.category === product.category && el.price === product.price)){
		return res.status(500).send({message: "Product already exists"});
	}
	```  
	
### REST


- find entity by id
```
     let author = await Author.findById(req.params.id);
```  
  
- get all from db  
```
     await Reviews.findAll().then((allReviews) => reviewsFound = allReviews);
```   
  
- delete after findById
```			
    await author.destroy();
```  

- update an entity  
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



# [body validation in post method](https://github.com/StefanLazea/webtech-assignment3/blob/master/main/app.js)
```
	if (Object.keys(req.body).length === 0) {
        return res.status(400).send({ "message": "body is missing" });
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
  - adding a component into another one,  with props  
```			
       <RobotForm onAdd={this.add} />
```  

- declaration of state in constructor of your React class:
```
        this.state = {
            products: []
        };
```

- set state:
```
        this.setState({
            products: [...this.state.products, product]
        })
```

- this.add defined in constructor as a function that use RobotStore for saving 
```
	this.store = new RobotStore();
	this.add = (robot) => {
		this.store.addRobot(robot)
	}
```  

[Similar content regarding state & add component](https://gist.github.com/StefanLazea/cf391e809c8066eee804ff2754a8952b.js)


- onClick the button saves as props an object that is required for add   
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
# [React app, din cursuri](https://github.com/StefanLazea/ex-tech/tree/master/c10/simpleapp/src)  
# Simple save robot, from an component  
[RobotList](https://github.com/StefanLazea/wb-homework-4/blob/master/main/src/components/RobotForm.js)  

- save the props: ```    let { item } = this.props; ```
- handleChange - in order to set the state of an input given a certain event:
```
              handleChange = (evt) => {
                    this.setState({
                        [evt.target.name]: evt.target.value
                    });
              }
```

- in order to show 2 different things in a component; one state is for editing and the other shows the details
   - first init a boolean variable in state:  
       ```
                this.state = {
                     isEditing: false,
                     name: item.name,
                     employees: item.employees,
                     revenue: item.revenue,
                }
       ```
    - than in the render area you can check if the **isEditing**  
       ``` 
    	render() {
		    let { item } = this.props
		    if (this.state.isEditing) {
		       return <div></div>
		    }
		    else {
		      return (
			<div></div>
		      )
		    }
	     } 
	``` 
	
    - add inputs and cancel button to change the state of **isEditing**:  
     
       ```
       return <div>
		<input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} />
		<input type="text" id="employees" name="employees" onChange={this.handleChange} value={this.state.employees} />
		<input type="text" id="revenue" name="revenue" onChange={this.handleChange} value={this.state.revenue} />
		<input type="button" value="save" onClick={this.save} />
		<input type="button" value="cancel" onClick={() => this.setState({
					isEditing: false
				})} />
	   </div>
       ```


[**Complete example here**](https://gist.github.com/StefanLazea/cb2fbd682e93bfb03df6d0709d9a4aa6.js)

```
return (
	<div>
	{ 
	this.state.showDetails === false ?
		this.state.robots.map((e, i) => 
			<div key={i}>
				<Robot item={e} key={i} onSelect={
					()=>{this.onSelect(i)}
				} />
			</div>
		)
	: <RobotDetails item={this.state.robots[this.state.index]}
	onSelect={()=>{this.onSelect(-1)}}
	/>
	}

	</div>
	)
```

[**RobotDetails**](https://github.com/StefanLazea/ex-tech/blob/master/v6/subj-3/var-3/main/src/components/RobotDetails.js)  
```
class RobotDetails extends Component {
    render() {
        let { item } = this.props
        return (
            <div>
                Hello, my name is {item.name}. I am a {item.type} and weigh {item.mass}
      			<button value="cancel" onClick={this.props.onSelect}>Click me</button>
            </div>

        )
    }
}
``` 
[Robot](https://github.com/StefanLazea/ex-tech/blob/master/v6/subj-3/var-3/main/src/components/Robot.js)  

## [Edit robot](https://github.com/StefanLazea/ex-tech/blob/master/v4/subj-3/var-2/main/src/components/Robot.js)
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
