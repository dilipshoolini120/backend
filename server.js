// import express from "express";
// const Resend = require("resend");
// import  Resend  from "resend";

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const axios = require("axios");

// const resendApiUrl = "https://api.resend.com/v2/email";
const organizationEmail = "info@hirveinternational.com";

const app = express();
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "contactus"
})

app.post('/contact-us', (req,res) => {
    const sql = "INSERT INTO customer_info (`name`,`phone`,`email`,`company`,`message`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
        req.body.company,
        req.body.message
    ]
    db.query(sql, [values], (err)=> {
        if(err){
            return res.json("Error");
        }
        else{
            return res.json("data");
            



            // resend.emails.send({
            //     from: 'onboarding@resend.dev',
            //     to: [adminEmail],
            //     subject: adminSubject,
            //     html: adminText
            // })
            // .then(response=> {
            //     console.log(response);
            //     res.json("Success");
            // })
            // .catch(error =>{
            //     console.error(error);
            //     res.json("Error");
            // });
        }//else ending
    });
});

app.listen(8081,() => {
    console.log('listening!')
});