window.onload = function() {//comprobamos al verificacion del token y expireToken
    if(!verificarSesion()) return;
        init();
};
let empleados = []; //lista para empleados, la iniciamos.
// ::::::::::::::::::::::: Funcion de inicializacion :::::::::::::::::::::::
function init(){

    axios.defaults.headers.common["Authorization"] = 
        "Bearer " + localStorage.getItem("token");
    
    cargarEmpleados();
    
    document.getElementById("btn-guardar").addEventListener("click", guardarEmpleado);
    document.getElementById("btn-cancelar").addEventListener("click", resetForm);
    document.getElementById("buscador").addEventListener("keyup", filtrarNombre);
    document.getElementById("btn-logout").addEventListener("click", logout);
}

//::::::::::::::::::::::: Funcion para cargar los empleados :::::::::::::::::::::::

function cargarEmpleados(){
    axios.get("http://localhost:3000/method")
        .then(res =>{
            empleados = res.data.message;
            mostrarTabla(empleados);
        })
        .catch(err => console.error(err));
}

//::::::::::::::::::::::: Mostrar empleados en la tabla :::::::::::::::::::::::

function mostrarTabla(lista){
    const tbody = document.getElementById("tabla-empleados");
    tbody.innerHTML = "";

    lista.forEach(emp => {
        let row = `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.nombre} ${emp.apellidos}</td>
            <td>${emp.telefono}</td>
            <td>${emp.correo}</td>
            <td>${emp.direccion}</td>
            <td>
                <button class="btn btn-sm btn-warning" onclick="editar(${emp.id})">Editar</button>
                <button class="btn btn-sm btn-danger" onclick="eliminar(${emp.id})">Eliminar</button>
            </td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

//::::::::::::::::::::::: Busqueda por nombre :::::::::::::::::::::::

function filtrarNombre() {
    let texto = document.getElementById("buscador").value.toLowerCase();
    let filtrados = empleados.filter(e =>
        e.nombre.toLowerCase().includes(texto)
    );
    mostrarTabla(filtrados);
}

//::::::::::::::::::::::: Guardar/editar empleado :::::::::::::::::::::::

function guardarEmpleado() {
    let id = document.getElementById("empleado-id").value;

    let data = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        telefono: document.getElementById("telefono").value,
        correo: document.getElementById("correo").value,
        direccion: document.getElementById("direccion").value
    };

    if (id) {
        axios.put(`http://localhost:3000/method/${id}`, data)
            .then(() => {
                resetForm();
                cargarEmpleados();
            })
            .catch(err => console.error(err));
    } else {
        axios.post("http://localhost:3000/method", data)
            .then(() => {
                resetForm();
                cargarEmpleados();
            })
            .catch(err => console.error(err));
    }
}

//::::::::::::::::::::::: editar empleado :::::::::::::::::::::::

function editar(id) {
    let emp = empleados.find(e => e.id == id);

    document.getElementById("empleado-id").value = emp.id;
    document.getElementById("nombre").value = emp.nombre;
    document.getElementById("apellidos").value = emp.apellidos;
    document.getElementById("telefono").value = emp.telefono;
    document.getElementById("correo").value = emp.correo;
    document.getElementById("direccion").value = emp.direccion;

    document.getElementById("form-title").innerText = "Editar Empleado";
    document.getElementById("btn-cancelar").classList.remove("d-none");
}

//::::::::::::::::::::::: Eliminar empleado :::::::::::::::::::::::

function eliminar(id) {
    if (!confirm("¿Estás seguro de eliminar este empleado?")) return;
    axios.delete(`http://localhost:3000/method/${id}`)
        .then(() => cargarEmpleados())
        .catch(err => console.error(err));
}

//::::::::::::::::::::::: Resetear formulario :::::::::::::::::::::::

function resetForm() {
    document.getElementById("empleado-id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("direccion").value = "";

    document.getElementById("form-title").innerText = "Crear Empleado";
    document.getElementById("btn-cancelar").classList.add("d-none");
}

//::::::::::::::::::::::: Cerrar sesion :::::::::::::::::::::::

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiraToken");
    window.location.href = "login.html";
}

//::::::::::::::::::::::: Verificar sesion :::::::::::::::::::::::

function verificarSesion() {
    const token = localStorage.getItem("token");
    const expiraToken = localStorage.getItem("expiraToken");
    if (!token || !expiraToken) {
        logout();
        return false;
    }
    if (Date.now() > expiraToken) {
        logout();
        alert("Sesión expirada. Por favor, inicia sesión de nuevo.");
        return false;
    }
    return token;
}

