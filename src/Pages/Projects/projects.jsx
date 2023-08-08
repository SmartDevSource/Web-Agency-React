import { useState, useEffect } from 'react';
import '../page.css';
import { Link, Routes, Route } from 'react-router-dom';
import StudyCase from '../StudyCase/studycase';

const Projects = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchDatabase().then(data => {
      setClients(data.clients);
    });
  }, []);

  const fetchDatabase = async () => {
    const response = await fetch('/src/Database/db.json');
    const data = await response.json();
    return data;
  };

  return (
    <div className='pagecontent fadein'>
      <h1>Nos travaux</h1>
      <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
      
      <p className='paragraph'>
        Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.
      </p>

      {clients.map((client, index) => (
        <Link key={index} to={`/projects/${client.name.toLowerCase()}-study-case`} className='link'> {client.name} </Link>
      ))}

      <Routes>
        <Route path=':name' element={<StudyCase />} />
      </Routes>
    </div>
  );
}

export default Projects;
