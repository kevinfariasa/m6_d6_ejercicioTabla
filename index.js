const express = require("express");
const { create } = require("express-handlebars");

//instancia de express.
const app = express();

//crear instancia de handlebars
const hbs = create({
    partialsDir: ["views/partials/"],
});

//configuramos express-handlebars como motor de plantilla del proyecto para renderizar vistas
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

//establecemos el directorio public en modo público.
app.use(express.static("public"));

//publicamos carpeta dist de boostrap
app.use(
    "/bootstrap",
    express.static(__dirname + "/node_modules/bootstrap/dist/")
);

//indicamos el puerto por el cual nuestro servidor escuchará las peticiones
const PORT = 3000;
app.listen(
    PORT,
    console.log("Servidor escuchando en http://localhost:" + PORT)
);

//RUTAS DE VISTAS
app.get(["/", "/home"], (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/products", (req, res) => {
    res.render("products", {
        productos: ["Pera", "Manzana", "Sandia", "Naranja", "Melón"],
    });
});

app.get("/users", (req, res) => {
    res.render("users", {
        usuarios: ["Carlos", "Mauricio", "María", "Juana"],
    });
});

app.get("/users2", (req, res) =>{
    res.render("users2",{
        usuarios2: [
            {
                id: 1,
                nombre: "Darold",
                apellido: "Trench",
                email: "darold@mail.com",
                telefono: "987654321"
            },
            {
                id: 2, 
                nombre: "Paloma", 
                apellido: "Schultze", 
                email: "paloma@mail.com", 
                telefono: "123456789"
            },
            {
                id: 3, 
                nombre: "Carlos", 
                apellido: "Arancibia", 
                email: "carlos@mail.com", 
                telefono: "123789456"
            },
            {
                id: 4,
                nombre: "Jazmin",
                apellido: "Salvador",
                email: "jaz@mail.com",
                telefono: "654789123",
            },
            {
                id: 5,
                nombre: "Kevin",
                apellido: "Farías",
                email: "kevin@mail.com",
                telefono: "789654321"
            },            
        ]
        
    })
})

