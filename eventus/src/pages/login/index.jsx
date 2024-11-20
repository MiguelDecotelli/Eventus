import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../components/Input";
import { makeRequest } from "../../utils/makeRequest";
import { useUser } from "../../context/UserContext";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const schema = yup.object().shape({
	email: yup
		.string()
		.email("Email inválido")
		.required("O email é obrigatório."),
	password: yup.string().required("A senha é obrigatória."),
});

const validateUser = async (data, setError) => {
	const users = await makeRequest("/users", "GET");
	const user = users.find((user) => user.email === data.email);

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
	} = useForm({
		resolver: yupResolver(schema),
	});

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
		alert("Login Google bem-sucedido:", response);
		const token = response.credential;
		localStorage.setItem("google_token", token);
		const user = { username: "Usuário Google" };
		setUser(user);
		navigate("/");
	};

	// const handleGoogleSuccess = async (response) => {
	// 	const token = response.credential;
	  
	// 	try {
	// 	  const res = await makeRequest("/auth/google", "POST", { token });
	// 	  const { username } = res.data;
	  
	// 	  localStorage.setItem("google_token", token);
	// 	  setUser({ username });
	// 	  navigate("/");
	// 	} catch (error) {
	// 	  console.error("Erro no backend:", error);
	// 	}
	//   };



	const handleGoogleError = () => {
		console.error("Erro ao fazer login com o Google.");
	};

	return (
		<GoogleOAuthProvider clientId="1099112821910-bgpa0st364t55acm9r25btgtavk5mf15.apps.googleusercontent.com">
			<main className="d-flex align-items-center justify-content-center vh-100 custom-gradient">
				<section className="bg text m-auto custom-section row g-0 position-relative">
					<div className="col position-relative w-100 h-100 custom-background-login">
						<div className="position-absolute top-0 start-0 end-0 bottom-0 overlay d-flex flex-row">
							<NavLink to="/" className="p-2 z-2">
								<i className="fa-solid fa-xmark"></i>
							</NavLink>
						</div>
					</div>

					<div className="col">
						<div className="d-flex gap-4 flex-column justify-content-center h-100 p-3 position-relative">
							<Link
								to="/signup"
								className="position-absolute top-0 d-flex justify-content-evenly p-3 z-2 custom-style-left"
							>
								<i className="fa-solid fa-angles-left"></i>Cadastrar
							</Link>

							<form
								className="p-4 d-flex flex-column gap-2"
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
									className="btn mx-4 btn-outline-light mt-4"
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
					</div>
				</section>
			</main>
		</GoogleOAuthProvider>
	);
};
