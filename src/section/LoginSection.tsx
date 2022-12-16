import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { Input } from "../component/Input";

export default function LoginSection() {
  const navigate = useNavigate();
  const onLoginGoogleSuccess = async (credentialResponse: any) => {
    try {
      const userToLoginPayload = {
        google_credential: credentialResponse.credential,
      };
      navigate("/");

      const loginGoogleRequest = await axios.post(
        "http://localhost:8000/google_login",
        userToLoginPayload
      );

      const loginGoogleResponse = loginGoogleRequest.data;

      if (loginGoogleResponse.status) {
        localStorage.setItem("token", loginGoogleResponse.data.token);

        console.log("Berhasil Login Via Google");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mx-5 lg:mx-44 my-3 lg:my-32">
      <div className="bg-dark-blue-01 w-28 h-12"></div>
      <p className="font-bold text-2xl mt-12">Welcome Back!</p>

      <form>
        <div className="mt-8">
          <Input
            label="Email"
            placeholder="Contoh: johndee@gmail.com"
            type="email"
            className="border-2 border-gray-300 my-3 w-full px-3 py-2 rounded-md"
          />
          <Input
            label="Password"
            placeholder="6+ karakter"
            type="password"
            className="border-2 border-gray-300 my-3 w-full px-3 py-2 rounded-md"
          />
          <button className="w-full bg-dark-blue-04 text-white rounded-md py-2 font-bold mt-8">
            Sign in
          </button>

          <div className="my-3">
            <GoogleOAuthProvider clientId="593901582998-qv52v7oos46agdve8868611tpbac9fuc.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={onLoginGoogleSuccess}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </div>
          <p className="mt-3">
            Don't have an account?{" "}
            <Link to={"/register"}>
              <span className="text-dark-blue-04 cursor-pointer hover:font-semibold">
                Sign Up for free
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
