import mysql from 'mysql2';

//create a connection to the mysql database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'jwt_fullstack_web'
});

const handleHelloWorld = (req, res) => {

  return res.render("home.ejs")
}
const handleUserpage=(req, res)=>{
    return res.render("user.ejs")
}
const handleCreatenewUser= (req , res)=>{
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;
connection.query(
  'INSERT INTO users (email, password, username) VALUES (?, ?, ?)',
  [email, password, username], 
  function(err, results, fields){
    console.log(results)
    console.log(fields)
    if(err){
      console.log(err)
    }
    console.log(results);
    
  }
)
return res.send("handleCreateNewUser");

  
}
module.exports = {
  handleHelloWorld,
  handleUserpage,
  handleCreatenewUser
}
