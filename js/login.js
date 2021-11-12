const userNameArr = [];
//const passwordArr = [];

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
