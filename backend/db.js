const mysql = require('mysql');

class Database{
    constructor(){
        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database:"dbgessta"
          });
    }
    
    connect(){
        this.con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
          });
    }
    postQuery(sql, values, res){
        this.con.query(sql, [values], function(err, result){
            if(err) throw err;
            res.send("stagiaire bien enregistré")
        });
    } 
    deleteQuery(sql,id,res){
        this.con.query(sql,[id], function(err,result){
            if(err) throw err;
            res.send("stagiaire bien supprime")
        });
    }
    getQuery(sql, res){
        this.con.query(sql, function(err, result){
            if(err) throw err;
            console.log(result)
            res.send(result)
        });
    }
    
}
db = new Database()
module.exports.db