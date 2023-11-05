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
    tasks: [],
  });

  function handleAddTask(text: string) {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        task: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  // filtering the tasks array for only passing selected projects task not the whole array
  const selectedProjectTasks = projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId);

  function handleDeleteTask(id: number) {
    setProjectsState(prevState => ({
      ...prevState,
      tasks: prevState.tasks.filter(
        task => task.id !== id
      ),
    }
    ));
  }

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

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      tasks={selectedProjectTasks}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
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
