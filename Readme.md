CRUD 


Config.json - config for Sequilize and PostgreSQL
Migrations - " npx sequelize db:migrate;npx sequelize-cli db:seed:all "   
Start server - node app.js
app.js - Server that accepts requests: 
get /show - shows all users                             
get /user/:id - shows the user by ID
put /update/:id/:name - edits a user by id
post /create/:name - creates a user 
delete /:id - deletes user by ID
