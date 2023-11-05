import { useState } from 'react';

import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSideBar from './components/ProjectsSideBar';
import SelectedProject from './components/SelectedProject';

import { projectsState } from './types';
import { projectDataProps } from './types';

function App() {
  const [projectsState, setProjectsState] = useState<projectsState>({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSelectProject(projectId: number | undefined) {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }

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

  function handleDeleteProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        project => project.id !== prevState.selectedProjectId
      ),
    }
    ));
  }

  const selectedProject = projectsState.projects.find(
    project => project.id === projectsState.selectedProjectId
  );

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
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
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
