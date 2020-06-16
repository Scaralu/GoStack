const express = require('express');
const app = express();

app.get('/projects', (request, response) => {
    return response.json({
        "projects": [
            'Sapphire',
            'GoStack',
            'Projeto 3'
        ]
    });
});

app.post('/projects', (request, response) => {
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

