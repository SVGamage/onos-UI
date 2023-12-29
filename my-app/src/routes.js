import Homepage from "./containers/Homepage/Homepage";
import QueueForm from "./containers/QueueForm/QueueForm";
import Vswitch from "./containers/Vswitch/Vswitch";
import LoginScreen from "./loginScreen/LoginScreen";
import GetDevices from "./containers/GetDevices/GetDevices";
import GetDevice from "./containers/GetDevice/GetDevice";
import GetPorts from "./containers/GetPorts/GetPorts";
import GetPort from "./containers/GetPort/GetPort";
import Flows from "./containers/Flows/Flows";
import AddFlow from "./containers/Flows/AddFlow";
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
    path: "/devices",
    element: <GetDevices />,
  },
  {
    id: 6,
    path: "/device/:id",
    element: <GetDevice />,
  },
  {
    id: 7,
    path: "/ports",
    element: <GetPorts />,
  },
  {
    id: 8,
    path: "/port/:id",
    element: <GetPort />,
  },
  {
    id: 9,
    path: "/flows",
    element: <Flows />,
  },
  {
    id: 10,
    path: "/flow/add",
    element: <AddFlow />,
  }

];

export default routes;
