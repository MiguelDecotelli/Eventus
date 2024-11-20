import { Navbar } from "../../components/Navbar";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Footer } from "../../components/Footer";

export const Contact = () => {

	const EmailSent = () => {
		alert("Email enviado com sucesso. Em breve entraremos em contato")
	}

	return (
		<div className="container-contact">
			<Navbar />
			<div className="row max-w-2xl mx-auto gap-5 p-5 d-flex flex-column contact-box">

				<div className="d-flex flex-wrap justify-content-around gap-3 mb-4 w-100">
					<div
						className="card rounded-2 d-flex align-items-center justify-content-center p-3 custom-card"
						style={{ width: "280px", height: "100px" }}
					>
						<i className="fa-regular fa-envelope mb-2 custom-icon"></i>
						<span>eventusmaisprati@gmail.com</span>
					</div>
					<div
						className="card rounded-2 d-flex align-items-center justify-content-center p-3 custom-card"
						style={{ width: "280px", height: "100px" }}
					>
						<i className="fa-solid fa-phone mb-2 custom-icon"></i>
						<span>(51) 1234-5678</span>
					</div>
					<div
						className="card rounded-2 d-flex align-items-center justify-content-center p-3 custom-card"
						style={{ width: "280px", height: "100px" }}
					>
						<i className="fa-solid fa-location-dot mb-2 custom-icon"></i>
						<span>Rua Exemplo, 123</span>
					</div>
				</div>

				<div className="row d-flex mx-auto">
					<div className="col-12 col-md-6 col-lg-6">
						<form onSubmit={EmailSent} className="p-4 d-flex flex-column px-2">
							<Input label="NOME" id="name" placeholder="Seu nome" />
							<Input
								label="EMAIL"
								id="email"
								type="email"
								placeholder="Seu email"
							/>
							<TextArea
								label="MENSAGEM"
								id="message"
								placeholder="Sua mensagem"
							/>
							<button className="btn btn-outline-light mt-4" type="submit">
								Enviar
							</button>
						</form>
					</div>

					<div className="col-12 col-md-6 col-lg-6 p-4">
						<iframe
							title="Localização Fixa"
							className="w-100 h-100 px-2"
							style={{ border: "0" }}
							src="https://www.openstreetmap.org/export/embed.html?bbox=-46.63534832096004%2C-23.551981945330334%2C-46.62978935241702%2C-23.549335598499232&amp;layer=mapnik&amp;marker=-23.55052%2C-46.633308"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};