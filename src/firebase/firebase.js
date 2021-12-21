// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const config = require("../config/config")
const admin = require("firebase-admin");


// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(config.firebase.certConfig)
});

const auth = admin.auth();

module.exports = {
  admin: admin,
  auth: auth,
};