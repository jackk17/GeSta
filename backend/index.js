const express = require('express')
const app = express()
const mysql = require('mysql');
const bodyParser = require('body-parser')
const cors= require('cors')
const Database= require('./db')

app.use(cors())
app.use(bodyParser.json());
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
    const ms="INSERT INTO ms (codMS, nomMs, prenomMs, telMs, adrMs, fonction, codSec) VALUES?"
    var values=[
        [
            `${data1.codeMS}`,  `${data1.nom}`, `${data1.prenom}`,`${data1.tel}`,`${data1.adr}`,`${data1.fonction}`,`${data1.code}`
        ]
    ]
    db.postQuery(ms,values, res)
})
app.get('/listeMS',(req,res)=>{
    var sect="SELECT idMS, nomMS FROM ms"
    db.getQuery(sect, res)
})
app.delete('/supSta/:id',(req,res)=>{

   const data2=req.params.id
   var supSta=`DELETE FROM stagiaire WHERE idSta = ?`
    db.deleteQuery(supSta, data2,res)

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
    var sta="SELECT idSta, nomSta, prenomSta, telSta, adrSta FROM stagiaire"
    db.getQuery(sta, res)
})

app.listen(5000,()=>{
    console.log("serveur lancé:port 5000");
    db.connect()
})