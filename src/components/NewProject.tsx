import logo from "../assets";
import Button from "./UI/Button";

const NewProject = () => {
  return (
    <section className="flex flex-col m-auto text-center">
      <img
        src={logo}
        width={120}
        height={120}
        className="mx-auto my-8"
      />
      <div className="flex flex-col gap-5 items-center">
        <h2 className="font-bold text-3xl text-stone-800 mb-4">No Project Selected</h2>
        <p className="text-slate-800 text-xl">Select a project or get started with a new one</p>
        <Button label="Create New Project" onClick={() => { }} />
      </div>
    </section>
  )
}

export default NewProject;
