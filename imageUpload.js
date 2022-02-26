const aws = require('aws-sdk');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const uuid = require('uuid').v4;
const path = require('path');
const mysql = require('mysql');

const app = express();

require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = process.env.JAWSDB_URL
	? new Sequelize(process.env.JAWSDB_URL)
	: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
		host: 'localhost',
		dialect: 'mysql',
		dialectOptions: {
			decimalNumbers: true,
		},
	});
module.exports = sequelize;

//function create(table) {
//	var sql = 'CREATE TABLE ' + table;
//	con.query(sql, (err, results) => printQuery(err, results));
//}

//function insert(table, values) {
//	var sql = 'INSERT INTO ' + table + ' VALUES ?';
//	con.query(sql, [values], (err, results) => printQuery(err, results));
//}

const s3 = new aws.S3({ apiVersion: '2006-03-01' });

const upload = multer({
	storage: multerS3({
		s3,
		acl: 'public-read',
		bucket: 'leg-it-bucket1',
		metadata: (req, file, cb) => {
			cb(null, { fieldName: file.fieldname });
		},
		key: (req, file, cb) => {
			const ext = path.extname(file.originalname);
			cb(null, `${uuid()}${ext}`);
		}
	})
});

app.use(express.static('public'))

app.post('/upload', upload.single('appImage'), (req, res) => {
	const imageCollection = req.app.locals.imageCollection;
	const uploadedFile = req.file.location;
	imageCollection.insert({ filePath: uploadedFile })
		.then(result => {
			return res.json({ status: 'OK', ...result });
		})
});

app.get('/images', (req, res) => {
	const imageCollection = req.app.locals.imageCollection;
	imageCollection.find({})
		.toArray()
		.then(images => {
			const paths = images.map(({ filePath }) => ({ filePath }));
			res.json(paths);
		});
});
sequelize.sync().then(() => {
	app.listen(3001, () => console.log('App listening on 3001'));
});
 
//app.listen(3001, () => console.log('App listening on 3001'));      
