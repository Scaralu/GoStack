const express = require('express');
const {uuid} = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

function validateProjectId(request, response, next){
    const {id} = request.params;

    if(!isUuid (id)){
        return response.status(400).json({
            error: 'Invalid project Id'
        })
    }
    
    return next;
}

function logRequests(request, response, next){
    const {method, url} = request;
    const logLabel = `[${method.toUpperCase()} ${url}]`

    console.time(logRequests);

    next();

    console.timeEnd(logRequests);
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId)

app.get('/projects', logRequests, (request, response) => {
    const {title} = request.query;
    const results = title 
        ? projects.filter(project => project.title.includes(title))
        : projects; 
    
    return response.json(results);
});

app.post('/projects', logRequests, (request, response) => {
    
    const {title, owner} = request.body;
    const project = {id: uuid(), title, owner};

    projects.push(project); 

    return response.json(project);
})

app.put('/projects/:id', (request, response) => {
    
    const { id } = request.params;
    const {title, owner} = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);
    
    if(projectIndex < 0){
        return response.status(400).json({
            error : "projectNotFound"
        })
    }

    const project = {
        id,
        title,
        owner
    };

    projects[projectIndex] = project;

    return response.json(project);
})

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);
    if(projectIndex < 0){
        return response.status(400).json({
            error : "projectNotFound"
        })
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
})

app.listen(3333, () => {
    console.log("🚀 Back-end Started");
}); // -> set port to node.js Example - localhost:3333

