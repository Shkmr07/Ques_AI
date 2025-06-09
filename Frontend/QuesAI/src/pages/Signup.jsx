import { useState } from "react";
import Logo from "../assets/Group 22.png"; // update path as needed
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../toolkit/reducers/user.slice";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { loading, isSignup } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(form))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error("Signup Error", err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="QuesAI Logo" className="h-16 object-contain" />
        </div>
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-4">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Creating Account..." : "Sign up"}
          </button>
        </form>

        <div className="mt-5 flex items-center gap-2">
          <div className="flex-1 h-px bg-slate-300" />
          <span className="text-sm text-slate-500">or</span>
          <div className="flex-1 h-px bg-slate-300" />
        </div>

        <div
          onClick={() => alert("Google Sign-In clicked")}
          className="mt-4 cursor-pointer border hover:scale-105 transition shadow border-slate-400 flex items-center gap-2 bg-white p-2 rounded"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s"
            alt="Google Logo"
            className="w-5 h-5 object-cover"
          />
          <p className="font-semibold text-sm text-slate-700">
            Continue with Google
          </p>
        </div>

        <p className="text-sm text-center text-slate-600 mt-4">
          Already have an account?{" "}
          <Link to={"/"} className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
