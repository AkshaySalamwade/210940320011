const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {

host: "localhost",
user: "root",
password: "cdac",
database: "paracticeset",

}

const selectAlluser = async() => {

const connection = mysql.createConnection(dbinfo);

await connection.connectAsync();

let sql = 'select * from message';
const list = await connection.queryAsync(sql);

await connection.endAsync();
return list;

};

const adduser = async (message) => {

const connection = mysql.createConnection(dbinfo);

await connection.connectAsync();


let sql = `INSERT INTO message (username,password,mobile,address) values ("akshay","akshay123","8652678794","navi-mumbai")`;

connection.queryAsync(sql,[message.username, message.password, message.mobile, message.address]);
console.log("Record added");

await connection.endAsync();
};


module.exports = {selectAlluser, adduser};
