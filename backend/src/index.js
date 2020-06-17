const express = require('express');
const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {

    const {title, owner} = request.query;

    console.log(title);
    console.log(owner);

    return response.json({
        "projects": [
            'Sapphire',
            'GoStack',
            'Projeto 3'
        ]
    });
});

app.post('/projects', (request, response) => {
    
    const {title, owner} = request.body;

    console.log(title);
    console.log(owner);


    return response.json({
        "projects": [
            'Sapphire',
            'GoStack',
            'Projeto 3',
            'Projeto 4'
        ]
    })
})

app.put('/projects/:id', (request, response) => {
    
    const routeParam = request.params;

    console.log(routeParam);
    
    return response.json({
        "projects": [
            'Sapphire 2.0',
            'GoStack',
            'Projeto 3',
            'Projeto 4'
        ]
    })
})

app.delete('/projects/:id', (request, response) => {
    return response.json({
        "projects": [
            'Sapphire 2.0',
            'GoStack',
            'Projeto 3',
        ]
    })
})

app.listen(3333, () => {
    console.log("🚀 Back-end Started");
}); // -> set port to node.js Example - localhost:3333

