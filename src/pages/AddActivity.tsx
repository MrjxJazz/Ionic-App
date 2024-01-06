import React from "react";
import "../pages/AddActivity.css";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

const AddActivity: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="center-content">
        <IonGrid>
          <IonRow>
            <IonCol className="card-container">
              <IonCard>
                <img
                  alt="Imagen"
                  src="/assets/images/joel.jpg"
                  style={{ width: "500px", height: "380px" }}
                />
                <IonCardHeader>
                  <IonCardTitle>JOEL ALEXANDER </IonCardTitle>
                </IonCardHeader>
              </IonCard>

              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>YUQUILEMA CANENCIA</IonCardTitle>
                </IonCardHeader>
              </IonCard>

              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>1754446704</IonCardTitle>
                </IonCardHeader>
              </IonCard>

              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>0987559557</IonCardTitle>
                </IonCardHeader>
              </IonCard>

              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>
                    En el campo de la programación no cuento con experiencia
                    laboral, actualmente estoy trabajando en servicio técnico.
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>

              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Quito</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AddActivity;
