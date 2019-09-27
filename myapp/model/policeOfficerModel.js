'user strict';
var sql = require('./db.js');

//Bike object constructor
var PoliceOfficer = function(policeOfficer){
    this.login = policeOfficer.login;
    this.passwd = policeOfficer.passwd;
    this.email = policeOfficer.email;
};
PoliceOfficer.authenticate = function (policeOfficer, result) {  
    console.log("policeOfficer: ", policeOfficer);  
        sql.query("Select * from policeOfficers where login = ? and  passwd = ?", [policeOfficer.login, policeOfficer.passwd], function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res);
                    result(null, res);
                }
            });           
};



module.exports= PoliceOfficer;