import { Link, NavLink } from "react-router-dom";
import ImgLogo from "../img/logo-w.png";
import { useUser } from "../context/UserContext";

export function Navbar() {
	const { user, logout } = useUser();

	return (
		<nav className="navbar navbar-expand-lg bg container">
			<div className="container-fluid py-2">
				<NavLink className="navbar-brand" to="/">
					<img src={ImgLogo} width={40} />
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarScroll">
					<ul
						className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll text-center"
						style={{ "--bs-scroll-height": "100px" }}
					>
						<li className="nav-item">
							<Link className="nav-link text navColor" to="/nextEvents">
								Proximos eventos
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text navColor" to="/news">
								Novidades
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text navColor" to="/history">
								Histórico
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text navColor" to="/contact">
								Contato
							</Link>
						</li>
					</ul>
					<form className="search-form p-2 justify-content-center" role="search">
						<input
							className="form-control search-navBar"
							type="search"
							placeholder="O que você procura?"
							aria-label="Search"
						/>
						<button className="btn btn-outline-light" type="submit">
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</form>
					{user ? (
						<div className="p-2 d-flex justify-content-center align-items-center gap-2">
							<span>Olá, {user}!</span>

							<button type="button" onClick={logout} className="btn btn-light">
								Sair
							</button>
						</div>
					) : (
						<div className="p-2 d-flex justify-content-center gap-2">
							<button type="button" className="btn btn-outline-light signupColor">
								<NavLink to="/signup">Cadastrar</NavLink>
							</button>

							<button type="button" className="btn btn-light loginColor">
								<NavLink to="/login">Entrar</NavLink>
							</button>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
