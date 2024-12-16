import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import { Input } from "../../assets/components/Input/Input";
import { makeRequest } from "../../utils/makeRequest";
import { useUser } from "../../contexts/UserContext";

import loginBackground from "/signup.png";
import styles from "./login.module.css";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("O email é obrigatório."),
  password: yup.string().required("A senha é obrigatória."),
});

const validateUser = async (data, setError) => {
  const users = await makeRequest("/users", "GET");
  const user = users.find((u) => u.email === data.email);

  if (!user) {
    setError("email", { type: "manual", message: "Email não encontrado" });
    return false;
  }

  if (user.password !== data.password) {
    setError("password", { type: "manual", message: "Senha incorreta" });
    return false;
  }

  return user.username;
};

export const Login = () => {
  const { setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function handleLogin(data) {
    setLoading(true);

    const user = await validateUser(data, setError);

    if (!user) {
      setLoading(false);
      return;
    }

    const token = btoa(`${data.email}:${new Date().getTime()}`);
    localStorage.setItem("token", token);
    setUser(user);
    navigate("/");
  }

  const handleGoogleSuccess = (response) => {
    if (!response || !response.credential) {
      alert("Erro ao autenticar com o Google. Tente novamente.");
      return;
    }
    const token = response.credential;
    localStorage.setItem("google_token", token);

    const user = { username: "Usuário Google" };
    setUser(user);
    navigate("/");
  };

  const handleGoogleError = () => {
    alert("Ocorreu um problema ao tentar logar com o Google. Tente novamente.");
  };

  return (
    <GoogleOAuthProvider clientId="1099112821910-bgpa0st364t55acm9r25btgtavk5mf15.apps.googleusercontent.com">
      <main className={`${styles.container} d-flex align-items-center justify-content-center vh-100`}>
        <section className={`${styles.section} bg text m-auto row g-0`}>
          <div
            className={`col ${styles.background}`}
            style={{
              background: `url(${loginBackground}) no-repeat center center`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="col d-flex flex-column justify-content-center h-100 p-3">
            <form
              className={`${styles.form} p-4`}
              onSubmit={handleSubmit(handleLogin)}
            >
              <h3>Conecte-se</h3>
              <Input
                label="EMAIL"
                id="inputEmail"
                type="email"
                placeholder="exemplo@email.com"
                {...register("email")}
                error={errors.email?.message}
              />
              <Input
                label="SENHA"
                id="inputPassword"
                type="password"
                placeholder="********"
                {...register("password")}
                error={errors.password?.message}
              />

              <div className="d-flex justify-content-between">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember"
                  />
                  <label className="form-check-label small" htmlFor="remember">
                    Lembrar de mim.
                  </label>
                </div>
                <Link to="#" className="link-secondary small">
                  Esqueceu a senha?
                </Link>
              </div>

              <button
                className="btn btn-outline-light mt-4"
                type="submit"
                disabled={loading}
              >
                {loading ? "Carregando..." : "Entrar"}
              </button>
            </form>

            <div className="d-grid text-center col-6 mx-auto">
              <p>OU</p>
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                theme="outline"
                size="large"
                shape="circle"
              />
            </div>
          </div>
        </section>
      </main>
    </GoogleOAuthProvider>
  );
};
