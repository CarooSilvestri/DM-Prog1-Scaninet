
function verify_db(userPw){

    let dbDict = {
        "Patito" : "Hola123",
        "Gatito" : "Adios321"
    };

    if(userPw[0] in dbDict){
        if(userPw[1] == dbDict[userPw[0]])
            return true;
    }
    return false;
}

function get_data() {

    let userPw = [];
    userPw[0] = document.getElementById("user").value;
    userPw[1] = document.getElementById("password").value;

    return userPw;
}

function validate() {

    let userPw = get_data();
    if (!verify_db(userPw)){
        window.alert("Algo malio sal");
        event.preventDefault();
        return;
    }

}