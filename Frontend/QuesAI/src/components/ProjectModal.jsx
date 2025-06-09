import  {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../toolkit/reducers/project.slice";

export default function ProjectModal({ setModal }) {
  const [project, setProject] = useState("");
  const [error,setError] = useState(null)
  const {loading} = useSelector(state => state.project)
  const dispatch = useDispatch()

  function handleSubmit (){
    if(project.trim().length === 0){
      return setError("Project field should not be empty!")
    }

    dispatch(createProject(project))
      .unwrap()
      .then(()=>setProject(""))
      .catch(err=>setError(err.message))
      .finally(()=>setModal(false))

  }


  return (
    <div className="w-2xl h-70 rounded-xl bg-white shadow flex flex-col gap-5 p-5">
      <h1 className="text-xl font-semibold ">Create Project</h1>

      <label className="text-lg" htmlFor="project">
        Enter Project Name:
      </label>
      <input
        value={project}
        onChange={(e) => setProject(e.target.value)}
        className="p-2 outline-none border border-slate-300 rounded focus:border-blue-400"
        type="text"
        id="project"
        placeholder="Type here"
      />
      {error && <p className=" text-red-500 text-sm">{error}</p>}
      <div className="flex gap-5 justify-end">
        <button
          className="text-red-500 transition-transform duration-300 ease-in-out hover:scale-105 font-bold tracking-wide"
          onClick={() => setModal(false)}
        >
          Cancel
        </button>
        <button onClick={handleSubmit} className="px-3 py-2 hover:bg-blue-800 hover:scale-105 transition-transform duration-300 ease-in-out text-white font-semibold bg-blue-700 rounded-lg">
          {loading?"Creating...":"Create"}
        </button>
      </div>
    </div>
  );
}
