import bcrypt from "bcryptjs";
import mysql from 'mysql2';

//create a connection to the mysql database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'jwt_fullstack_web'
});

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userpassword) => {
    return bcrypt.hashSync(userpassword, salt);
}

const createNewUser = (email, userpassword, username) => {
    let hashPassword = hashUserPassword(userpassword);
    connection.query(
        'INSERT INTO users (email, password, username) VALUES (?, ?, ?)',
        [email, hashPassword, username], 
        function(err, results, fields) {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
            }
        }
    );
   
}
 const getUserList=()=>{
        let users = [];
         connection.query(
        'Select * from users ',
        function(err, results, fields) {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
            }
        }
    )};

module.exports = {
    createNewUser,
    getUserList,
}