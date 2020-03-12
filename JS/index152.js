let user = {
    username:null, password:null,
    
    greet: function (username)
    {
        console.log("Hello, I'm user " + username);
    },
    updatePassword: function(password)
    {
        console.log("My password is  " + password);
    },
    updaterUsername: function(username)
    {
        console.log("Hello, I'm  new user " + username);

    }
   
};


user.greet('john');
user.updatePassword('123456');
user.updaterUsername('kamal');



