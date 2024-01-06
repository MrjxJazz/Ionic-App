import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
//import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import AllActivities from "./pages/AllActivity";
import AddActivity from "./pages/AddActivity";
import { bodyOutline, documentTextOutline } from "ionicons/icons";
//import ActivitiesContextProvider from "./data/ActivitiesContextProvider";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="start" contentId="AppM1">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem
                routerLink="/all-activities"
                routerDirection="none"
                lines="none"
              >
                <IonIcon color="medium" slot="start" icon={bodyOutline} />
                <IonLabel>Ver Actividades</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem
                routerLink="/add-activity"
                routerDirection="none"
                lines="none"
              >
                <IonIcon
                  color="medium"
                  slot="start"
                  icon={documentTextOutline}
                />
                <IonLabel>Mi perfil</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="AppM1">
        <Route path="/all-activities" component={AllActivities} exact />
        <Route path="/add-activity" component={AddActivity} exact />
        <Redirect to="/all-activities" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
