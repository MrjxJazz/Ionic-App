import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonButton,
  IonAlert,
} from "@ionic/react";

const AllActivities: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Actividades</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonCard>
                <img
                  alt="Imagen"
                  src="/assets/images/trabajo.jpg"
                  style={{ width: "500px", height: "380px" }}
                />
                <IonCardHeader>
                  <IonCardTitle>Miercoles 18:00</IonCardTitle>
                  <IonCardSubtitle>Clases Modulo App Hibridas</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Desarrollo de aplicaciones hibridas con IONIC</p>
                  <IonItem lines="none">
                    <IonButton fill="clear">Completar Actividad</IonButton>
                  </IonItem>
                </IonCardContent>
              </IonCard>

              <IonCard>
                <img
                  alt="Imagen"
                  src="/assets/images/relax.jpg"
                  style={{ width: "500px", height: "380px" }}
                />
                <IonCardHeader>
                  <IonCardTitle>Domingo 11:00</IonCardTitle>
                  <IonCardSubtitle>Distraccion</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Tiempo libre para poder descanzar</p>
                  <IonItem lines="none">
                    <IonButton
                      color="success"
                      expand="full"
                      shape="round"
                      id="present-alert"
                    ></IonButton>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default AllActivities;
