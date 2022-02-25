const express = require('express');
const { db, sequelize } = require('./database/connect');
const mysql = require('mysql2/promise');
const app = express();



app.use(express.json());

//Initialize Database
async function initializeDatabase() {
    const connection = await mysql.createConnection({ 
        host: db.host,
        port: db.port,
        user: db.user,
        password: db.password,
    });
    await connection.query(`CREATE DATABASE IF NOT EXISTS express_project;`);
    
    
}

initializeDatabase();

const user = require('./routes/user');
app.use('/api/user',user);

// initialize();
// async function initialize() {
//     // create db if it doesn't already exist

//     // const connection = await mysql.createConnection({ 
//     //     host: database.db.host,
//     //     port: database.db.port, 
//     //     user: database.db.user,
//     //     password: database.db.password ,
//     // });
//     // await connection.query(`CREATE DATABASE IF NOT EXISTS express_project;`);

//     // var nu = userLoad.user.build({
//     //     username:"test",
//     //     password: "P@ssw0rd",
//     //     name: "lol"
//     // });
//     // // console.log(nu.password);
//     // var model = User.Init(database.sequelize);
//     // var nu = model.build({
//     //         username:"test",
//     //         password: "P@ssw0rd",
//     //         name: "lol"
//     // });
//     // await User.create(nu);
//     // console.log(nu.ToString());
// // User.in
//     // init models and add them to the exported db object
//     // db.User = require('../users/user.model')(sequelize);
    
//     // sync all models with database
//     // await database.sequelize.sync();
// }


//app.listen
app.listen(5000,()=>{
    console.log("Server is listening on port 5000");
});