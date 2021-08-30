const express = require('express')
const app = express()
const mysql = require('mysql');
const bodyParser = require('body-parser')
const cors= require('cors')
const Database= require('./db')

app.use(cors())
app.use(bodyParser.json());
//ENREGISTRER DES DONNEES DANS LA BD
app.post('/Enregistrer',(req,res)=>{
    const data = req.body
    const insererSta="INSERT INTO stagiaire(nomSta, prenomSta, telSta, adrSta, finSta, nbrRenouvel, somm, natSta, sexSta, datnaissSta) VALUES ?"
    var values=[
        [
            `${data.nom}`, `${data.prenom}`,`${data.tel}`,`${data.adr}`,`${data.fin}`,`${data.nbr}`,`${data.som}`,`${data.nat}`,`${data.sex}`,`${data.naiss}`
        ]
    ]
    db.postQuery(insererSta, values, res)
   
})
app.post('/MS',(req,res)=>{
    const data1= req.body
    const ms="INSERT INTO ms (codMS, nomMs, prenomMs, telMs, adrMs, fonction, codSec, login, mdp) VALUES?"
    var values=[
        [
            `${data1.codeMS}`,  `${data1.nom}`, `${data1.prenom}`,`${data1.tel}`,`${data1.adr}`,
            `${data1.fonction}`,`${data1.code}`,`${data1.log}`,`${data1.mdp}`
        ]
    ]
    db.postQuery(ms,values, res)
})
//MODIFIER DES DONNEES DANS LA BD
app.put('/modSta/:id',(req,res)=>{
    const data1= req.body
    const data2=req.params.id
    const sta=`UPDATE stagiaire SET nomSta=${data1.nom}, prenomSta=${data1.prenom}, telSta=${data1.tel}, 
    adrSta=${data1.adr}, finSta=${data1.fin}, nbrRenouvel=${data1.nbr}, somm=${data1.som}, natSta=${data1.nat},
    sexSta=${data1.sex}, datnaissSta=${data1.naiss} WHERE idSta=?`
    db.updateQuery(sta,data2, res)
})
app.put('/RenSta/:id',(req,res)=>{
    const id=req.params.id
    const data= req.body
    const RenSta=`UPDATE stagiaire SET finSta= nbrRenouvel+1 WHERE idSta=?`
    db. RenewQuery(RenSta,id,res)
})
app.put('/modMs/:id',(req,res)=>{
    const data1= req.body
    const data2=req.params.id
    const ms=`UPDATE ms SET nomMS=?, prenomMS=?, telMS=?, 
    adrMS=?, fonction=?, codSec= WHERE codMS=?`
    var values =[
        `${data1.nom}`, `${data1.prenom}`,`${data1.tel}`,`${data1.adr}`,`${data1.fonction}`,`${data1.code}`
    ]
    db.updateQuery(ms,data2,data1, res)
  
})

//SUPPRESION DE DONNEES DANS LA BD
app.delete('/supSta/:id',(req,res)=>{
   const data2=req.params.id
   var supSta=`DELETE FROM stagiaire WHERE idSta = ?`
    db.deleteQuery(supSta, data2,res)

})
app.delete('/supMs/:id',(req,res)=>{

    const data2=req.params.id
    var supSta=`DELETE FROM ms WHERE codMS = ?`
     db.deleteQuery(supSta, data2,res)
 
 })
/*RECUPERATION DE DONNEES DANS LA BD*/
app.get('/logMs/:log/:mdp',(req,res)=>{
    const log = req.params.log
    const mdp = req.params.mdp
    var logMs= ` SELECT codMS, nomMS FROM ms WHERE login=? AND mdp=?`
    db.getByParamQuery(logMs,log,mdp,res)
}
    )
app.get('/msSec/:id',(req,res)=>{
    const cod= req.params.id
    var msSec="SELECT * FROM ms WHERE codSec=?"
    db.getByIdQuery(msSec,cod,res)
})

app.get('/section',(req,res)=>{
    var sect="SELECT codSec, libSec FROM section"
    db.getQuery(sect, res)
})
app.get('/MS',(req,res)=>{
    var ms="SELECT codMS, nomMS, prenomMS, telMS, adrMS FROM ms"
    db.getQuery(ms, res)
})
app.get('/stagiaire',(req,res)=>{
    var sta="SELECT * FROM stagiaire"
    db.getQuery(sta, res)
})
app.get('/listeMS',(req,res)=>{
    var sect="SELECT idMS, nomMS FROM ms"
    db.getQuery(sect, res)
})

app.listen(5000,()=>{
    console.log("serveur lancé:port 5000");
    db.connect()
})