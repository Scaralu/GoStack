import React, { useState } from 'react';
import Header from './components/Header';

export default function App(){
    const [projects, setProjects] = useState(['desenvolvimento de app', 'Front-end web']);

    //useState retorna array em duas posiçoes:
    //1. a variável com seu valor inicial
    //2. uma função para alterar seu valor

    function handleAddProject(){
        // projects.push(`Novo projeto ${Date.now()}`); -> não respeita a imutabilidade, altera diretamente o valor da variável
        
        setProjects([...projects, `Novo projeto ${Date.now()}`]); //-> Altera de forma indireta.

        console.log(projects);
    }

    return (
        <>
            <Header title="Projeto 1">
                <ul>
                    <li>alou</li>
                    <li>alou2</li>
                </ul>    
            </Header>
            <Header title="Projeto 2"/>

            <Header title="Projects">
                <ul>
                    {projects.map(project => <li key = {project}>{project}</li>)}
                </ul>

                <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
            </Header>
        </>
    );
}