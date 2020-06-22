import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import "./App.css";
import api from "./services/api"

export default function App(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects')
            .then(response => {
                setProjects(response.data);
            })
    }, []);

    //useState retorna array em duas posiçoes:
    //1. a variável com seu valor inicial
    //2. uma função para alterar seu valor

    async function handleAddProject(){      
        const response_async = await api.post('/projects', {
            title: `Projeto Mobile ${Date.now()}`,
            owner: 'Lucca'
        });

        const project = response_async.data;
        setProjects([...projects, project])
    }

    return (
        <>
            <Header title="Projects">
                <ul>
                    {projects.map(project => <li key = {project.id}>{project.title}</li>)}
                </ul>

                <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
            </Header>
        </>
    );
}