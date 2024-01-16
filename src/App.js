import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import appStore from "./Utils/appStore";
import Login from "./Components/Login";
import Browse from "./Components/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <Provider store={appStore}>
        <Body />
        <div>
          <RouterProvider router={approuter} />
        </div>
      </Provider>
    </div>
  );
};

export default App;
