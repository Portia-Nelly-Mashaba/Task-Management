import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyCSW0oY9NUipCJW_iT-Y4vzMG_LM-TJRWc",
  authDomain: "task-management-6ff00.firebaseapp.com",
  projectId: "task-management-6ff00",
  storageBucket: "task-management-6ff00.appspot.com",
  messagingSenderId: "850734392587",
  appId: "1:850734392587:web:22951d81e404e3d63aee0e",
  measurementId: "G-L38JB5PE3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth()



const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit");

const signupEmailinput = document.getElementById("email-signup");
const signupPasswordinput = document.getElementById("password-signup");
const confirmSignupEmailinput = document.getElementById("confirm-email-signup");
const confirmSignupPasswordinput = document.getElementById("confirm-password-signup");
const createaccbtn = document.getElementById("create-acct-btn");


const signupBtn = document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

createaccbtn.addEventListener("click", () => {
  var isVerified = true;

  signupEmail = signupEmailinput.value;
  confirmSignupEmail = confirmSignupEmailinput.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordinput.value;
  confirmSignUpPassword = confirmSignupPasswordinput.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }
  createUserWithEmailAndPassword(auth, signupEmail, signupPassword).then(() =>{
    window.alert("Success! Account Created");
    window.location = "./createTask.html";
  }).catch((error) => {
    const errorMessage = error.message
    window.alert(errorMessage)
  });

});
submitBtn.addEventListener("click", function() {
  email = emailInput.value;
  password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password).then(() => {
    window.alert("Success! Welcome Back");
    window.location = "./createTask.html";
  }).catch((error) => {
    const errorMessage = error.message
    window.alert(errorMessage)
  });

});


signupBtn.addEventListener("click", () =>{
    main.style.display = "none";
    createacct.style.display = "block";
});


returnBtn.addEventListener("click", function(){
    main.style.display = "block";
    createacct.style.display = "none";
})