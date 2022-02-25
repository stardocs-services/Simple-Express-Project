const userData = require('../../../data/userdata/userdata');

const GetAll = (req,res)=>{
    var username = req.query.username;
    var email = req.query.email;
    var result = userData.GetAll(username, email);
    res.status(200).json({
        success: true,
        data: result
    });
};

module.exports = {
    GetAll,
}