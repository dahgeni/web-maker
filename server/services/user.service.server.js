module.exports = function(app) {
const userModel = require("../models/user/user.model.server");

    //website services and methods
    //get, post, put, delete

    //create user
    app.post("/api/user", createUser);

    //get User By Id
    app.get("/api/user/:uid", findUserById);

    //get user
    app.get("/api/user", findUser);
    //update User
    app.put("/api/user", updateUser);

          
   async function createUser(req, res){
       var user = req.body;
       const data = await userModel.createUser(user);
         res.json(data);
         }
      
      
     async function findUserById(req, res){
     const userId = req.params["uid"];
     const data = await userModel.findUserById(userId);             res.json(data);
         }
     
     async function findUser(req, res) {
       const username = req.query["username"];
       const password = req.query ["password"];
       if(username && password) {
           const data = await
       userModel.findUserByCredentials(username, password); 
           res.json(data);
        return;      
                
     }
        if (username) {
           const data = await userModel.findUserByUsername(username);
            res.json(data);
       return
    }    
}   
            
   async function updateUser(req, res) {
       const user = req.body;
     const uid = user._id;
     const date = await
     userModel.updateUser(uid, user);
        res.json(data);
        return;
    }
};
           
      
