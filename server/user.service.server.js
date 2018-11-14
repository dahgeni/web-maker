module.exports = function(app) {

    //website services and methods
    //get, post, put, delete

    //create user
    app.post("/api/user", createUser);

    //get User By Id
    app.get("/api/user/:uid", findUserById);

    //get user
    app.get("/api/user", findUser);
    //update User
    app.put("/api/user/:uid", updateUser);


    users = [

        {_id: "123", 
        username: "alice",
        password: "alice", 
        firstName: "Alice", 
        lastName: "Wonder", 
        email: "alice@gmail.com"
     },

     {   
         _id: "234", 
         username:"bob", 
         password: "bob",
         firstName: "Bob", 
         lastName: "Marley",
         email: "bob@whatever.com"},

     {
         _id: "345",
         username: "charly",
         password: "charly",
         firstName: "Charly",
         lastName: "Garcia", 
         email: "charly@hotmail.com"},
     {
            _id: "456",
         username: "shiyu",
         password: "shiyu",
         firstName: "Shiyu",
         lastName: "Wang",
         email: "swang@ulem.org"}

        ];
   function createUser(req, res){
       var user = req.body;
       user._id = Math.random().toString();
      user.push();
      res.json(user);
   }
  function findUserById(req, res){
     const userId = req.params["uid"];
     let user;
   for (let x = 0; x < this.users.length; x++) {
   if (this.users[x]._id === userId) { 
         user = users[x]; 
       }
    }  
     res.json(user);
   }
   function findUser(rq, res) {
       const username = req.query['username'];
       const password = req.query ["password"];

       if(username && password) {
           let user; 
           for(let i=0; i<users.length; i++)
            if(
           users[i].username === username && users[i].password === password
            ) {
              user = users[i];            
             }
      
   
       res.json(user);
       return;
   }
        if (username){
            let user;
         for(let i =0; i<users.length; i++) 

        
           if(users[i].username === username) {
                 user =users[i];

                }
            }
            res.json(user)
            return;
       
    }
    function selectUser(uid) {
        const oldUser = this.finduserById(user._id);
        const index = this.users.indexof(oldUser);
    }
    function updateUser(req, res) {
       const user = req.body;
       const oldUser = findUserbyId(user._id);
       const index = users.indexOf(oldUser);
       this.users[index] = users;
       res.json(user);
    }
           
      
};