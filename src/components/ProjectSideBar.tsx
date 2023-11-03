import Button from "./UI/Button";

function ProjectSideBar() {
  return (
    <aside className="h-[95%] mt-[5%] w-1/3 bg-stone-900 rounded-tr-lg" >
      <div className="flex flex-col items-center my-8">
        <h2 className="text-5xl text-white my-4">YOUR PROJECTS</h2>
        <Button label="+ Add New" onClick={() => { }} />
      </div>
    </aside>
  );
}

export default ProjectSideBar;
