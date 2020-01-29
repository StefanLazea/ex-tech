const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const mysql = require('mysql2/promise')

const DB_USERNAME = 'root'
const DB_PASSWORD = ''

mysql.createConnection({
	user: DB_USERNAME,
	password: DB_PASSWORD
})
	.then(async (connection) => {
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
})

const app = express()
app.use(bodyParser.json())

app.get('/create', async (req, res) => {
	try {
		await sequelize.sync({ force: true })
		for (let i = 0; i < 10; i++) {
			let author = new Author({
				name: 'name ' + i,
				email: 'name' + i + '@nowhere.com',
				address: 'some address on ' + i + 'th street'
			})
			await author.save()
		}
		res.status(201).json({ message: 'created' })
	}
	catch (err) {
		console.warn(err.stack)
		res.status(500).json({ message: 'server error' })
	}
})


app.get('/authors', async (req, res) => {
	// TODO: adăugați funcția pentru cererea listei autorilor
	// ar trebui să trimită clientului lista autorilor
	// ar trebui să permită paginare cu un număr de pagina pageNo și o mărime de pagină pageSize trimiși prin query 
	// TODO: add the function to get all authors
	// should get all authors
	// should allow for pagination with a pageNo and a pageSize possibly sent as query parameters
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

	if (!isNaN(pageNo) && isNaN(pageSize)) {
		let offset = Number(req.query.pageNo);
		let limit = 10;
		await Author.findAll({ limit, offset }).then((authors) => res.status(200).send(authors));
	}

})

app.post('/authors', async (req, res) => {
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

app.listen(8080)

module.exports = app