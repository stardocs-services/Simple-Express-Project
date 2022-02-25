const {Sequelize} = require('sequelize');
const userModel = require('../../models/user');


function GetAll(UserName, Email){
  
  // if(UserName === "" && Email === ""){
  //   return 
  // };
  return UserName;
    // var result = user.findAll({
    //     where: {
    //       UserName: UserName,
    //       Email: Email
    //     }
    //   });
    // return result
}



module.exports = {
  GetAll,
}