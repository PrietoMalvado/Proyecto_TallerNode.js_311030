window.onload = init;

function init() {
    if(!localStorage.getItem('token')){

        document.querySelector('.btn-primary').addEventListener('click', login);
    }else{
        window.location.href = "CRUD.html";
    }

}

//::::::::::::::::::::::: Login usuario :::::::::::::::::::::::

function login() {
    var mail = document.getElementById('input-mail').value;
    var password = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data: {
            user_mail: mail,
            user_password: password
        }
    }).then(function(res){
        if(res.data.code === 200){
            const expira = new Date().getTime() + (60 * 60 *  1000); // asignamos 1 de hora de expiracion
            localStorage.setItem('token', res.data.message); // guardamos el token
            localStorage.setItem("expiraToken", expira) // guardamos el tiempo de expiracion
            window.location.href = "CRUD.html";
            limpiarDatos();
        } else {
            alert("Usuario y/o contraseña incorrectos ");
            limpiarDatos();
        }
    }).catch(function(err){
        console.log(err);
    });
}

//:::::::::::::::::::::::: Limpiar datos de campos input:::::::::::::::::::::::

function limpiarDatos(){
    document.getElementById('input-mail').value = '';
    document.getElementById('input-password').value = '';
}