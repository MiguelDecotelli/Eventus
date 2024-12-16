import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../assets/components/Input/Input";
import { makeRequest } from "../../utils/makeRequest";

import styles from "./signup.module.css";


const schema = yup.object().shape({
  username: yup.string().required("O usuário é obrigatório."),
  email: yup
    .string()
    .email("Email inválido")
    .required("O email é obrigatório."),
  password: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .required("A senha é obrigatória."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem coincidir")
    .required("A confirmação da senha é obrigatória."),
});

export const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleSignup(data) {
    setLoading(true);

    const { confirmPassword, ...signupData } = data;

    try {
      await makeRequest("/users", "POST", signupData);
      alert("Usuário cadastrado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className={`d-flex align-items-center justify-content-center vh-100 ${styles.customGradient}`}
    >
      <section className={`m-auto ${styles.customSection} row g-0`}>
        <div className="col">
          <div className="d-flex flex-column justify-content-center h-100 p-3">
            <Link
              to="/login"
              className={`position-absolute top-0 d-flex justify-content-evenly p-3 ${styles.customStyleRight}`}
            >
              Entrar <i className="fa-solid fa-angles-right"></i>
            </Link>

            <form
              className={`p-4 d-flex flex-column gap-2 ${styles.form}`}
              onSubmit={handleSubmit(handleSignup)}
            >
              <h3>Cadastre-se</h3>

              <Input
                label="USUÁRIO"
                id="username"
                placeholder="exemplo_usuario"
                {...register("username")}
                error={errors.username?.message}
              />
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
              <Input
                label="CONFIRMAR SENHA"
                id="inputConfirmPassword"
                type="password"
                placeholder="********"
                {...register("confirmPassword")}
                error={errors.confirmPassword?.message}
              />

              <button
                className={`btn btn-outline-light mt-2 ${styles.button}`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Carregando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>

        <div className={`col position-relative w-100 h-100 ${styles.customBackgroundSignup}`}>
          <div
            className={`position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-row-reverse ${styles.overlay}`}
          >
            <NavLink to="/" className="p-2">
              <i className="fa-solid fa-xmark"></i>
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
};
