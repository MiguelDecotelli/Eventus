import React, { useState } from "react";

export const PurchaseForm = ({ evento }) => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        cpf: "",
        quantidade: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // setFormData({ ...formData, [name]: value });
        setFormData({
            ...formData,
            [name]: name === "quantidade" ? Number(value) : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do Formulário:", formData);
        console.log("Evento Selecionado:", evento);
        console.log(
            `Compra concluída!\n\nEvento: ${evento.title}\nNome: ${formData.nome}\nEmail: ${formData.email}\nCPF: ${formData.cpf}\nQuantidade: ${Number(formData.quantidade)}`
        );
        alert(
            `Compra concluída!\n\nVocê receberá um e-mail com todas as informações referente à sua compra.\n\nEvento: ${evento.title}\n\nDados do comprador:\nNome: ${formData.nome}\nEmail: ${formData.email}\nCPF: ${formData.cpf}\nQuantidade: ${Number(formData.quantidade)}`
        );
    };

    return (
        <div className="purchaseForm">
            <h2 className="formTitle">Comprar Ticket</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="formGroup">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="quantidade">Quantidade:</label>
                    <input
                        type="number"
                        id="quantidade"
                        name="quantidade"
                        value={formData.quantidade}
                        min="1"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="eventButton">
                    Finalizar Compra
                </button>
            </form>
        </div>
    );
};
