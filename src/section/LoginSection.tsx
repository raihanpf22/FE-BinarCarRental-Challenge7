import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { Link, useNavigate, Navigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IAuth } from "../interfaces/IAuth";
import {} from "react-redux";
import { getUser } from "../slice/authSlice";
import { useAppDispatch, useAppSelector } from "../app/hook";

export default function LoginSection() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Contoh manggil state redux (state bisa dipanggil di body aja)
  //  const { name, email, token } = useAppSelector((state) => state.auth);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("* Harap masukan input berupa email")
      .required("* Harap masukan email"),
    password: Yup.string().required("* Harap masukan password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuth>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IAuth) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:8000/login", payload)
      .then((res) => {
        if (res.data.statusCode !== 200) {
          const setData: IAuth = {
            name: res.data.data.name,
            email: res.data.data.email,
            role: res.data.data.role,
          };
          localStorage.setItem("user_token", JSON.stringify(setData));
          dispatch(getUser(setData));
          const { name, email, token } = useAppSelector((state) => state.auth);
          // navigate("/find_car");
        } else {
          console.log("Ini Errornya tidak 200 : ", res.data.message);
        }
      })
      .catch((err) => console.log("Ini Errornya : ", err));
  };

  const onLoginGoogleSuccess = async (credentialResponse: any) => {
    try {
      const userToLoginPayload = {
        credential: credentialResponse.credential,
      };
      console.log("seblum axios");

      const loginGoogleRequest = await axios.post(
        "http://localhost:8000/google_login",
        userToLoginPayload
      );
      console.log(loginGoogleRequest, "Seduah axioas");

      const loginGoogleResponse = loginGoogleRequest.data;
      // navigate("/");

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
      <p className="font-bold text-2xl mt-12">Welcome Back!,</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8">
          <p>Email</p>
          <input
            {...register("email")}
            placeholder="Contoh: johndee@gmail.com"
            type="email"
            className="border-2 border-gray-300 my-3 w-full px-3 py-2 rounded-md"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
          <p>Password</p>
          <input
            {...register("password")}
            placeholder="6+ karakter"
            type="password"
            className="border-2 border-gray-300 my-3 w-full px-3 py-2 rounded-md"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
          <button
            type="submit"
            className="w-full bg-dark-blue-04 text-white rounded-md py-2 font-bold mt-8"
          >
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
