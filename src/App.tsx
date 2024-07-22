import { Route } from "react-router-dom";
import {
  IonApp,
  IonPage,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { Home, ChaptersIndex } from "./pages";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./theme/variables.css";

setupIonicReact();

export function App() {
  return (
    <IonApp>
      <IonPage id="app">
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact={true} path="/" component={Home} />
            <Route path="/chapters-index" component={ChaptersIndex} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonPage>
    </IonApp>
  );
}
