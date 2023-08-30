import express from "express";
import db from './db/index.js';
import { user } from './db/entity/user.entity.js';

const app = express();
const PORT = 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Server UP!');
}); 

app.post('/register', async (req, res) => {
   
        const newUser = new user();
        newUser.userName = req.body.name;
        newUser.password = req.body.password;
         
        newUser.save().then((response) => {
          res.status(201).send('User Created Sccesfuly with ID:'+ response.id); 
        }).catch(error => {
          console.error(error);
          res.status(500).send('Something went wrong');
        });

});

app.use((req, res) => {
    res.status(404).send("You requested something I don't have :(");
});
app.listen(PORT, () => {
    console.log(`App is running and Listening on port ${PORT}`);
    db.initialize();
});


