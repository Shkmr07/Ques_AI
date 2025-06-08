import QuesLogo from "../assets/QuesLogo 2.png";
import { GoGear } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import Create from "../assets/Group 16.png";
import { CiCirclePlus } from "react-icons/ci";

export default function Dashboard() {
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

      <div className="mt-5 flex flex-col gap-6 items-center">
        <h1 className="text-3xl text-purple-600 font-semibold ">
          Create a New Project
        </h1>
        <div>
          <img src={Create} alt="Create Project Logo" />
        </div>
        <p className="text-sm max-w-2xl text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>
        <div className="flex items-center gap-2 px-4 py-2 transition transform duration-300 ease-in-out hover:scale-105 text-white bg-black rounded">
          <CiCirclePlus className="text-xl" />
          <p className="font-semibold ">Create New Project</p>
        </div>
      </div>
    </section>
  );
}
