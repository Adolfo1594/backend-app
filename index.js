//Incocación de la libreria express
const  express = require('express');
//Invoncación de la librería moongose para conexión a base de datos de mongodb
const mongoose = require('mongoose');


// Importar las rutas de la colección review
const reviewWine = require('./routes/wine.route');


//inicialización de la aplicación basada en express
const app = express();
app.use(express.json());

// Determinación del puerto
//Tareas CRUD
// C - Create (Crear, agregar) ---> post
// R - Read (Leer o recuperar) ---> get
// U - Update (Actualizar) -------> put
// D - Delete (borrar o eliminar)-> delete

// Endpoint por defecto
app.get('/',(req, res) => {
    res.send('Bienvenido a mi servidor de APIs');
});


//Endpoints de la colección reviews
app.use('/api/wine',reviewWine);


// Definiendo la conexión a la base de datos a trtavés de mongoose
// La conexión de tipo de datos es de tipo promesa

mongoose.connect('mongodb+srv://maduni:practica01@clustermadp1.kskdj.mongodb.net/')
.then( () => {
    //realiza tareas una vez la promesa sea exitosa
    console.log('Conectado a la base de datos de manera exitosa');
    app.listen(3000, () => {
    console.log('Servidor respondiendo en el puerto 3000');
    });
})

.catch(() => console.log('Ocurrio un problema al conectarse a la base de datos'))

