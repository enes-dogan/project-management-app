import NewProject from "./components/NewProject";
import ProjectForm from "./components/ProjectForm";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  return (
    <main className="bg-neutral-200 h-screen w-screen flex justify-between">
      <ProjectSideBar />
      <NewProject />
      {/* <ProjectForm /> */}
    </main>
  );
}

export default App;
