import Homepage from "./containers/Homepage/Homepage";
import QueueForm from "./containers/QueueForm/QueueForm";
import Vswitch from "./containers/Vswitch/Vswitch";
import LoginScreen from "./loginScreen/LoginScreen";
import GetDevices from "./containers/GetDevices/GetDevices";

const routes = [
  {
    id: 1,
    path: "/",
    element: <LoginScreen />,
  },
  {
    id: 2,
    path: "/home",
    element: <Homepage />,
  },
  {
    id: 3,
    path: "/vswitch",
    element: <Vswitch />,
  },
  {
    id: 4,
    path: "/queueform",
    element: <QueueForm />,
  },
  {
    id: 5,
    path: "/getDevices",
    element: <GetDevices />,
  }
];

export default routes;
