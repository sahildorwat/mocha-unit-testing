const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: "Page not found."
    })
});

app.get('/users', (req, res)=> {
    const users = [ {name: 'sahil', age:23},
                    {name: 'akshay', age:23},
                    {name: 'aniket', age:23}
                 ]
    res.send(users)
})

app.listen(3000);
module.exports.app = app; 