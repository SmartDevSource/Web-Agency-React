import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudyCase = () => {
  const { name } = useParams();
  const [currentProject, setCurrentProject] = useState(undefined);

  useEffect(() => {
    fetchDatabase().then(data => {
      const project = data.clients.find(client => client.name.toLowerCase() === name.split('-')[0]);
      if (project) {
        setCurrentProject(project.content);
      } else {
        setCurrentProject(undefined);
      }
    });
  }, [name]);

  const fetchDatabase = async () => {
    const response = await fetch('/src/Database/db.json');
    const data = await response.json();
    return data;
  }

  if (!currentProject) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="pagecontent">
      <h1>Projet: {name.split('-')[0]}</h1>
      <p>{currentProject}</p>
    </div>
  );
}

export default StudyCase;
