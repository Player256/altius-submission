document.getElementById("registration").addEventListener("submit",function(event){
    event.preventDefault();

    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    if (userName.length < 3){
        alert("Username must be atleast 3 characters")
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        alert("Please Enter a valid email")
    }

    const passwordRegex = /^(?=.*[a-z])(?=.[A-Z])(?=.[0-9])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if(!passwordRegex.test(password)){
        alert("Password invalid!")
        return;
    }

    alert("Registration successful!")

})

document.getElementById("register").addEventListener("click",function(){
    document.getElementById("registrationFormContainer").style.display = "block";
    document.getElementById("loginFormContainer").style.display = 'none';
    this.classList.add("active");
    document.getElementById("loginTab").remove("active");
})

document.getElementById("loginTab").addEventListener("click",function(){
    document.getElementById("registrationFormContainer").style.display="none";
    document.getElementById("loginFormContainer").style.display="block";
    this.classList.add("active");
    document.getElementById("registerTab").classList.remove("active");
})

document.getElementById("loginFormContainer").addEventListener("submit",function(event){
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = {
        email: "testing@gmail.com",
        hashedPassword: btoa("password123"),
    };

    if(email === storedUser.email && btoa(password) === storedUser.hashedPassword) {
        alert("Login Successfull!")
    }
    else{
        alert("Invalid Credentials")
    }
});

