const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
let dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};
async function connectionCheck() {
  let connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("connection success");
  await connection.endAsync();
}
connectionCheck();
async function adduser(user) {
  let connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `insert into user values(?,?)`;
  await connection.queryAsync(sql, [user.name, user.text]);
  console.log("Recorded");
  await connection.endAsync();
}
let user = {
  name: "Whats going on",
  text: "giving exam",
};
adduser(user);

async function showData() {
  let connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `select * from user`;
  let list = await connection.queryAsync(sql, []);
  console.log(list);
  await connection.endAsync();
  return list;
}
showData();
module.exports = { showData, adduser };
