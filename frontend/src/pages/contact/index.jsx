import { AppLayout } from "../../assets/components/AppLayout/AppLayout";
import { Input } from "../../assets/components/Input/Input";
import { TextArea } from "../../assets/components/TextArea/TextArea";
import styles from "./contact.module.css";

export const Contact = () => {
    const EmailSent = (e) => {
        e.preventDefault();
        alert("Email enviado com sucesso. Em breve entraremos em contato.");
    };

    return (
        <div className={styles.containerContact}>
            <AppLayout>
                <div className={`row mx-auto gap-5 p-5 d-flex flex-column ${styles.contactBox}`}>
                    <div className={`d-flex flex-wrap justify-content-around gap-3 mb-4 ${styles.cardGroup}`}>
                        <div className={styles.card}>
                            <i className={`fa-regular fa-envelope mb-2 ${styles.icon}`}></i>
                            <span>eventusmaisprati@gmail.com</span>
                        </div>
                        <div className={styles.card}>
                            <i className={`fa-solid fa-phone mb-2 ${styles.icon}`}></i>
                            <span>(51) 1234-5678</span>
                        </div>
                        <div className={styles.card}>
                            <i className={`fa-solid fa-location-dot mb-2 ${styles.icon}`}></i>
                            <span>Rua Exemplo, 123</span>
                        </div>
                    </div>

                    <div className="row mx-auto">
                        <div className="col-12 col-md-6">
                            <form onSubmit={EmailSent} className={`p-4 d-flex flex-column ${styles.form}`}>
                                <Input label="NOME" id="name" placeholder="Seu nome" />
                                <Input label="EMAIL" id="email" type="email" placeholder="Seu email" />
                                <TextArea label="MENSAGEM" id="message" placeholder="Sua mensagem" />
                                <button className={`btn btn-outline-light mt-4 ${styles.button}`} type="submit">
                                    Enviar
                                </button>
                            </form>
                        </div>

                        <div className="col-12 col-md-6 p-4">
                            <iframe
                                title="Localização Fixa"
                                className={`w-100 h-100 ${styles.map}`}
                                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.63534832096004%2C-23.551981945330334%2C-46.62978935241702%2C-23.549335598499232&amp;layer=mapnik&amp;marker=-23.55052%2C-46.633308"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </div>
    );
};
