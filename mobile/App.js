import { StackNavigator } from "react-navigation";

import { Home } from "./components";
import { Countdown } from "./components";
import { Processing } from "./components";
import { Preview } from "./components";
import { Retrieve } from "./components";
import { NoPermissions } from "./components";
import { Error } from "./components";

import { Events } from "./components";
import { cameraPermissions } from "./components";

const App = StackNavigator(
  {
    CameraPermissions: { screen: cameraPermissions },
    Home: { screen: Events }
    // Events: { screen: Events }
    // Home: { screen: Home },
    // Countdown: { screen: Countdown },
    // Processing: { screen: Processing },
    // Preview: { screen: Preview },
    // Retrieve: { screen: Retrieve },
    // Error: { screen: Error },
    // NoPermissions: { screen: NoPermissions }
  },
  {
    initialRouteName: "CameraPermissions",
    headerMode: "none",
    swipeEnabled: false,
    portraitOnlyMode: true
  }
);

export default App;
