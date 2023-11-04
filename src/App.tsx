import { useState } from 'react';

import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSideBar from './components/ProjectsSideBar';

import { projectsState } from './types';
import { projectDataProps } from './types';

function App() {
  const [projectsState, setProjectsState] = useState<projectsState>({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleAddProject(projectData: projectDataProps) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };

    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    //...
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
      />
      {content}
    </main>
  );
}

export default App;
