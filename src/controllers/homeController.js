import userService from '../service/userService'
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);




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
  userService.createNewUser(email,password,username);
  userService.getUserList();
  return res.send("handleCreateNewUser")
}

module.exports = {
  handleHelloWorld,
  handleUserpage,
  handleCreatenewUser
}
