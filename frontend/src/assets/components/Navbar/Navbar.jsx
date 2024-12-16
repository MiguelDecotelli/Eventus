import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"


export const Navbar = ({ user, logout }) => {

	return (
		<nav className="navbar navbar-expand-lg bg container">
			<div className="container-fluid py-2">
				<NavLink className="navbar-brand" to="/">
					<img className={styles.logo} src="/logo_white.png" />
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarScroll">
					<ul
						className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll text-center"
						style={{ "--bs-scroll-height": "100px" }}
					>
						<li className="nav-item">
							<Link className={`nav-link text ${styles.navColor}`} to="/events">
								Proximos eventos
							</Link>
						</li>
						<li className="nav-item">
							<Link className={`nav-link text ${styles.navColor}`} to="/news">
								Novidades
							</Link>
						</li>
						<li className="nav-item">
							<Link className={`nav-link text ${styles.navColor}`} to="/history">
								Histórico
							</Link>
						</li>
						<li className="nav-item">
							<Link className={`nav-link text ${styles.navColor}`} to="/contact">
								Contato
							</Link>
						</li>
					</ul>
					<form
						className={`p-2 justify-content-center ${styles.formSearch}`}
						role="search"
					>
						<input
							className={`form-control ${styles.searchBox}`}
							type="search"
							placeholder="O que você procura?"
							aria-label="Search"
						/>
						<div className={`${styles.buttonContainer}`}>
							<button className="btn btn-outline-light searchButton" type="submit">
								<i className="fa-solid fa-magnifying-glass"></i>
							</button>
						</div>
					</form>

					<div className="p-2 d-flex justify-content-center align-items-center gap-2">
						{user ? (
							<>
								<span>Olá, {user}!</span>
								<button
									type="button"
									onClick={logout}
									className="btn btn-light"
								>
									Sair
								</button>
							</>
						) : (
							<>
								<button type="button" className={`btn btn-outline-light ${styles.signup}`}>
									<NavLink to="/signup">Cadastrar</NavLink>
								</button>
								<button type="button" className={`btn btn-light ${styles.login}`}>
									<NavLink to="/login">Entrar</NavLink>
								</button>
							</>
						)}
					</div>

				</div>


			</div>
		</nav>

	);
}
