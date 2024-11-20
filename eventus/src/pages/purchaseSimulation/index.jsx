import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { PurchaseForm } from "../../components/PurchaseForm";

export const PurchaseSimulation = () => {
  const { id } = useParams();
  const { eventos } = useContext(DataContext);

  if (!eventos || eventos.length === 0) {
    return <div>Carregando eventos...</div>;
  }

  const evento = eventos.find(evento => evento.id === String(id));

  if (!evento) {
    return <div>Evento não encontrado.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="purchasePage">
        <PurchaseForm evento={evento} />
      </div>
      <Footer />
    </div>
  );
};
