import Button from "./UI/Button";

const ProjectForm = () => {
  return (
    <form action="/" className=" h-screen w-2/3 flex flex-col flex-wrap items-center justify-center ">
      <div className="flex justify-center space-x-4 ">
        <Button label="Cancel" onClick={() => { }} />
        <Button label="Save" onClick={() => { }} />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <label htmlFor="title">TITLE</label>
        <input type="text" id="title" />

        <label htmlFor="description">DESCRIPTION</label>
        <textarea id="description" />

        <label htmlFor="date">DUE DATE</label>
        <input type="date" id="date" />
      </div>
    </form>
  )
}

export default ProjectForm;