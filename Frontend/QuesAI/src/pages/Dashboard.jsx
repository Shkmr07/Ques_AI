import QuesLogo from "../assets/QuesLogo 2.png";
import { GoGear } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import Create from "../assets/Group 16.png";
import { CiCirclePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProject } from "../toolkit/reducers/project.slice";
import ProjectModal from "../components/ProjectModal";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, project } = useSelector((state) => state.project);
  const [modal,setModal] = useState(false)

  function handleModal(){
    setModal(true)
  }

  function openPodcast(id){
    navigate(`/podcast/${id}`)
  }

  useEffect(() => {
    dispatch(getProject());
  }, []);

  return (
    <section className="p-10">
      <div className="flex justify-between items-center">
        <div className="max-w-40 max-h-40">
          <img src={QuesLogo} alt="QuesAI Logo" />
        </div>

        <div className="flex items-center gap-5">
          <GoGear className="text-2xl transition transform duration-500 ease-in-out hover:rotate-90" />
          <IoMdNotificationsOutline className="text-3xl transition transform duration-300 ease-in-out hover:rotate-12 " />
        </div>
      </div>

      {project.length === 0 && (
        <div className="mt-5 flex flex-col gap-6 items-center">
          <h1 className="text-3xl text-purple-600 font-semibold ">
            Create a New Project
          </h1>
          <div>
            <img src={Create} alt="Create Project Logo" />
          </div>
          <p className="text-sm max-w-2xl text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
          <div onClick={handleModal} className="flex items-center gap-2 px-4 py-2 transition transform duration-300 ease-in-out hover:scale-105 text-white bg-black rounded">
            <CiCirclePlus className="text-xl" />
            <p className="font-semibold ">Create New Project</p>
          </div>
        </div>
      )}

      {project.length > 0 && (
        <div className="mt-15">
          <div className="flex justify-between">
            <h1 className="text-3xl text-purple-700 font-semibold">Projects</h1>
            <div onClick={handleModal} className="flex items-center gap-2 px-4 py-2 transition transform duration-300 ease-in-out hover:scale-105 text-white bg-black rounded">
              <CiCirclePlus className="text-xl" />
              <p className="font-semibold ">Create New Project</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            {project.map((item, idx) => {
              return (
                <div
                  onClick={()=>openPodcast(item._id)}
                  key={item._id}
                  className="flex transition-transform duration-300 ease-in-out hover:scale-105 items-center gap-2 p-2 bg-white shadow border-slate-300 rounded-xl border"
                >
                  <div className="w-10 h-10 shadow flex justify-center items-center rounded bg-orange-400 font-semibold text-white">
                    <p>{`${item.name.split(" ")[0][0]}${
                      item.name.split(" ").at(-1)[0]
                    }`}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-purple-700 font-semibold text-sm">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500">{item.updatedAt}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {modal && (
        <div className="fixed transition transform duration-300 ease-in-out min-w-full min-h-full flex justify-center items-center backdrop-blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ProjectModal setModal={setModal} />
        </div>
      )}
    </section>
  );
}
