import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../component/Input";

export default function RegisterSection() {
  const [name, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API_RegisterMember = (e: any) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
    };
    axios
      .post("http://localhost:8000/register", payload)
      .then((res) => console.log("Ini Response nya : ", res))
      .catch((err) => console.log("Ini Error nya : ", err));
  };

  return (
    <div className="mx-5 lg:mx-44 my-3 lg:my-32">
      <div className="bg-dark-blue-01 w-28 h-12"></div>
      <p className="font-bold text-2xl mt-12">Sign Up</p>

      <form>
        <div className="mt-8">
          <Input
            label="Name*"
            placeholder="Nama Lengkap"
            type="text"
            onchange={(e: any) => setNama(e.target.value)}
            className="border-2 border-gray-300 my-3 w-full px-3 py-2 rounded-md"
          />
          <Input
            label="Email*"
            placeholder="Contoh: johndee@gmail.com"
            type="email"
            onchange={(e: any) => setEmail(e.target.value)}
            className="border-2 border-gray-300 my-3 w-full px-3 py-2 rounded-md"
          />
          <Input
            label="Create Password*"
            placeholder="6+ karakter"
            type="password"
            onchange={(e: any) => setPassword(e.target.value)}
            className="border-2 border-gray-300 my-3 w-full px-3 py-2 rounded-md"
          />
          <button
            onClick={(e) => API_RegisterMember(e)}
            className="w-full bg-dark-blue-04 text-white rounded-md py-2 font-bold mt-8"
          >
            Sign up
          </button>
          <p className="mt-3">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-dark-blue-04 cursor-pointer hover:font-semibold">
                Sign In here
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
