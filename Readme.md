CRUD 

1. npm install 
2. Config.json - config for Sequilize and PostgreSQL
3. Migrations - " npx sequelize db:migrate;npx sequelize-cli db:seed:all "   
4.Start server - node app.js
5. app.js - Server that accepts requests: 
   get /show - shows all users                             
   get /user/:id - shows the user by ID
   put /update/:id/:name - edits a user by id
   post /create/:name - creates a user 
   delete /delete/:id - deletes user by ID
