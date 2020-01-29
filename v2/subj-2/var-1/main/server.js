const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const mysql = require('mysql2/promise')

const DB_USERNAME = 'stefan'
const DB_PASSWORD = ''

mysql.createConnection({
		user: DB_USERNAME,
		password: DB_PASSWORD
	})
	.then(async(connection) => {
		await connection.query('DROP DATABASE IF EXISTS tw_exam')
		await connection.query('CREATE DATABASE IF NOT EXISTS tw_exam')
	})
	.catch((err) => {
		console.warn(err.stack)
	})

const sequelize = new Sequelize('tw_exam', DB_USERNAME, DB_PASSWORD, {
	dialect: 'mysql',
	logging: false
})

let Author = sequelize.define('author', {
	name: Sequelize.STRING,
	email: Sequelize.STRING,
	address: Sequelize.STRING,
	age: Sequelize.INTEGER
}, {
	timestamps: false
})




const app = express()
app.use(bodyParser.json())

app.get('/create', async(req, res) => {
	try {
		await sequelize.sync({ force: true })
		for (let i = 0; i < 10; i++) {
			let author = new Author({
				name: 'name ' + i,
				email: 'name' + i + '@nowhere.com',
				address: 'some address on ' + i + 'th street',
				age: 30 + i
			})
			await author.save()
		}
		console.warn('CREATED')
		res.status(201).json({ message: 'created' })
	}
	catch (err) {
		console.warn(err.stack)
		res.status(500).json({ message: 'server error' })
	}
})

app.get('/authors', async(req, res) => {
	try {
		let authors = await Author.findAll()
		res.status(200).json(authors)
	}
	catch (err) {
		// console.warn(err.stack)
		res.status(500).json({ message: 'server error' })
	}
})

app.post('/authors', async(req, res) => {
	try {
		let author = new Author(req.body)
		await author.save()
		res.status(201).json({ message: 'created' })
	}
	catch (err) {
		// console.warn(err.stack)
		res.status(500).json({ message: 'server error' })
	}
})

app.put('/authors/:id', async(req, res) => {
	let found = await Author.findById(req.params.id);
	if (found !== null) {
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
	}
	else {
		return res.status(404).send({ message: "not found" });
	}

})

app.delete('/authors/:id', async(req, res) => {
	try {
		let author = await Author.findById(req.params.id);
		if (author) {
			await author.destroy();
			return res.status(202).send({ message: "accepted" });
		}
		else {
			res.status(404).send({ message: "not found" });

		}
	}
	catch (e) {
		return res.status(500).send({ message: "server error" });
	}
})

app.listen(8080)

module.exports = app
