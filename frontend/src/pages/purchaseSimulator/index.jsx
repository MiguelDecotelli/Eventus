import React, { useContext } from "react"; // Unificada a importação de React e useContext
import { useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { AppLayout } from "../../assets/components/AppLayout/AppLayout";
import { PurchaseForm } from "../../assets/components/PurchaseForm/PurchaseForm";

import styles from "./purchase.module.css";

export const PurchaseSimulation = () => {
  const { id } = useParams();
  const { events } = useContext(DataContext);

  if (!events || events.length === 0) {
    return <div>Loading events...</div>; // Texto traduzido
  }

  const event = events.find((event) => event.id === String(id));

  if (!event) {
    return <div>Event not found.</div>; // Texto traduzido
  }

  return (
    <div>
      <AppLayout>
        <div className={styles.purchasePage}>
          <PurchaseForm event={event} />
        </div>
      </AppLayout>
    </div>
  );
};
