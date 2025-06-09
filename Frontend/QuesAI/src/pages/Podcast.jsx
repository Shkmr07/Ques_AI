import QuesLogo from "../assets/QuesLogo 2.png";
import { FaPlus } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
import { GoCopy, GoHome } from "react-icons/go";
import { RiVipDiamondLine } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import Img1 from "../assets/image 1.png";
import Img2 from "../assets/image 2.png";
import Img3 from "../assets/uploads.png";
import Cloud from "../assets/cloud_upload.png"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEpisode } from "../toolkit/reducers/episode.slice";

export default function Podcast() {

  const {id} = useParams()
  const dispatch = useDispatch()
  const {loading,episode}= useSelector(state => state.episode)

  useEffect(()=>{
    dispatch(getEpisode(id))
  },[])
  

  


  const productList = [
    { icon: FaPlus, text: "Add your Podcast(s)" },
    { icon: FiEdit2, text: "Create & Repurpose" },
    { icon: GoCopy, text: "Podcast Widget" },
    { icon: RiVipDiamondLine, text: "Upgrade" },
  ];

  const optionList = [
    {
      title: "RSS Feed",
      text: "Lorem ipsum dolor sit.Dolor lorem sit.",
      img: Img1,
    },
    {
      title: "Youtube Video",
      text: "Lorem ipsum dolor sit.Dolor lorem sit.",
      img: Img2,
    },
    {
      title: "Upload Files",
      text: "Lorem ipsum dolor sit.Dolor lorem sit.",
      img: Img3,
    },
  ];

  return (
    <section className="flex min-h-screen ">
      <div className="w-1/3 flex flex-col py-5 pr-5 shadow-lg">
        <div className="w-40 h-12 pl-5">
          <img
            className="w-full object-contain"
            src={QuesLogo}
            alt="QuesAI Logo"
          />
        </div>

        <div className="mt-5 flex flex-col gap-3  pb-10 ">
          {productList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex gap-2 pl-5 text-purple-700 p-1 bg-sky-100 rounded items-center"
              >
                <Icon />
                <p className=" font-semibold">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="flex h-1/2 ml-5 items-end border-b-2 border-t-2 pb-5 border-slate-300">
          <div className="flex items-center gap-2">
            <GoGear />
            <p>Help</p>
          </div>
        </div>

        <div className="flex items-center p-5 gap-2">
          <div className="w-12 h-12 rounded shadow flex justify-center items-center bg-orange-400">
            <p className="text-xl text-white font-semibold">AS</p>
          </div>
          <div className="flex flex-col gap-px">
            <p className="text-sm">Shkmr07</p>
            <p className="text-xs">shkmrsingh@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5 bg-slate-100 px-10 py-5">
        <div className="flex gap-2 items-center text-slate-600">
          <GoHome className="text-xl" />
          <p className="font-semibold">/ sample project</p>
          <p className="font-semibold text-purple-700">/ Add your podcast</p>
        </div>

        <h1 className="text-2xl font-semibold mt-5">Add Podcast</h1>

        <div className="flex flex-wrap items-center mt-5 gap-5">
          {optionList.map((item, idx) => {
            return (
              <div key={idx} className="flex w-64 gap-2 items-center p-5 bg-white shadow-lg border border-slate-300 rounded ">
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="text-sm  text-slate-400">{item.text}</p>
                </div>
                <div className="max-w-15 max-h-15">
                  <img className="w-full object-contain" src={item.img} alt={item.title} />
                </div>
              </div>
            );
          })}


          </div>
          <div className="max-w-[800px] flex flex-col gap-2 justify-center items-center h-80 rounded-xl shadow-lg bg-white">
            <div className="w-15 h-15">
                <img src={Cloud} alt="Cloud Logo" />
            </div>
            <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
            <p className="text-slate-500">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
            <button className="mt-5 py-2 px-4 font-semibold rounded-full border-2 border-purple-600 text-purple-600">Select File</button>
        </div>
      </div>
    </section>
  );
}
