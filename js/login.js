const userNameArr = [];
const userInformation = [];

function loginButton(){

    const username = document.querySelector("#userNameTextBox").value;
    const password = document.querySelector("#passwordTextBox").value;
    
    const userDetails = {
        username: username,
        password: password
    }
    //userNameArr.push(username);
    //userNameArr.push(password);

    userNameArr.push(userDetails);
    console.log(userNameArr);

}

function createAccountButton(){
    const username = document.querySelector("#userNameCreateTextBox").value;
    const password = document.querySelector("#passwordCreateTextBox").value;
    const email = document.querySelector("#emailCreateTextBox").value;
    const fullName = document.querySelector("#fullNameCreateTextBox").value;

    const signUpDetails = {
        username: username,
        password: password,
        email: email,
        fullName: fullName
    }
    if(username != 0 && password != 0 && email != 0 && fullName != 0){
        userInformation.push(signUpDetails);
        console.log(userInformation);
        return true;
    }
    else{
        alert("Please make sure every detail is filled up.");
        return false;
    }

    
}