const Express = require('express');
const app = new Express();

/*
 * Aqui iniciamos los middleware
 * Con esto va a parsear la API REST, lo básico.
 * "json" parsea la petición como un json.
 * "urlencoded" transforma los parametros y los querystrings.
 */
app.use(Express.json());
app.use(Express.urlencoded());

/*
 * Aqui importamos las rutas (importamos del archivo) mediante un middleware.
 */
app.use(require('./src/routes.js'));

/*
 * Aqui iniciamos el Listen para iniciar el servidor.
 */
app.listen(3000, () =>{
    console.log('El gatito nació.')
})