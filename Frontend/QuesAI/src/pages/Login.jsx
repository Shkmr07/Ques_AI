import Logo from "../assets/QuesLogo 1.png";
import Logo2 from "../assets/Group 22.png"
import Mask from "../assets/Mask group.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../toolkit/reducers/user.slice";

export default function Login() {

  const [form,setForm] = useState({email : "",password: ""})
  const {loading, error} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  function handleChange (e){
    setForm((prev)=>{
      return {...prev,[e.target.name] : e.target.value}
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(login(form))
      .unwrap()
      .then(()=>{
        navigate("/dashboard")
      })
      .catch(err=>console.error("Login Failed",err.message))

  }

  return (
    <section className="flex items-center min-h-screen">
      <div className="w-full min-h-screen pl-20 pt-20 bg-[#904fb0]" style={{backgroundImage : `url(${Mask})`}}>
        <div className="flex items-center">
          <div className="w-40 h-40 ">
            <img src={Logo} alt="QuesAI Logo" />
          </div>
        </div>
        <h1 className="absolute top-40 text-5xl w-sm text-white">Your podcast will no longer be just a hobby.</h1>
        <p className="absolute top-1/2 text-xl w-xs  text-white">Supercharge Your Distribution using our AI assistant!</p>
      </div>

      <div className="w-1/3 min-h-screen bg-slate-200  flex flex-col p-5 ">
        <div className="mt-5  mx-auto w-10 h-10 lg:w-15 lg:h-15 ">
          <img className="w-full object-contain" src={Logo2} alt="QuesAI Logo" />
        </div>
        <h1 className="text-center mx-auto text-xl lg:text-2xl text-purple-700  mt-5">
          Welcome to <strong>Ques.AI</strong>
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col mt-8 gap-3">
          <input
            className="pl-2 pr-4 py-2 bg-white border outline-none focus:border-blue-600 border-slate-400 rounded shadow"
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          <input
            className="pl-2 pr-4 py-2 bg-white border outline-none focus:border-blue-600 border-slate-400 rounded shadow "
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <div className="mt-2 flex justify-between items-center">
            <div className="flex items-center cursor-pointer gap-1 p-1">
              <input className="cursor-pointer"  type="checkbox" />
              <p className="text-sm">Remember me</p>
            </div>
            <Link
              className="text-sm text-purple-700 hover:underline font-semibold"
              to={"#"}
            >
              Forget password?
            </Link>
          </div>
          <input
            className="cursor-pointer transition transform duration-300 ease-in-out mt-3 bg-purple-700 hover:bg-purple-800 hover:scale-105 text-white font-semibold rounded p-2"
            type="submit"
            disabled={loading}
            value={loading?"Logging...":"Login"}
          />
        </form>

        <div className="mt-5 flex items-center gap-2">
          <div className="flex-1 h-px bg-slate-400"></div>
          <p className="font-semibold text-slate-700 ">or</p>
          <div className="flex-1 h-px bg-slate-400"></div>
        </div>

        <div className="mt-5 cursor-pointer border transition transform duration-300 ease-in-out hover:scale-105  shadow border-slate-400 flex items-center  gap-2 bg-white p-2 rounded">
          <div className="max-w-5 max-h-5">
            <img
              className="w-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s"
              alt="Google Logo"
            />
          </div>
          <p className="font-semibold text-sm lg:text-base text-slate-700 ">Continue with Google</p>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          <p className="text-sm">Don't have an account?</p>
          <Link
            className="text-sm text-purple-700 hover:underline font-semibold"
            to={"/signup"}
          >
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
}
