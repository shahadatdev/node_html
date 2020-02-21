const userAndPassword = 'pepito2017,12345';
let username, password;

const separation = userAndPassword.indexOf(`,`);

//......
const userNameSize = 10;
username = userAndPassword.substr(0,userNameSize);
password = userAndPassword.substr(userAndPassword+1);

console.log(`The user ${username} has ${password} as password`);


// we dont know the size

const separation = userAndPassword.indexOf(`,`);
username = userAndPassword.slice(0, separation);

if (separation !=-1)
{
    username = userAndPassword.slice(0, separation);
    password = userAndPassword.slice(separation+1);
}

console.log(`The user ${username} has ${password} as password`);
