import MainPage from "./pages/MainPage.jsx";
import ListPage from "./pages/ListPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppStyles = {
      mainContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            flexDirection: "column",
      }
}

const router = createBrowserRouter([
      {
            path: "/",
            element: <MainPage />,
      },
      {
            path: "/list",
            element: <ListPage />,
      },
      {
            path: "/detail",
            element: <DetailPage />,
      },
]);

function App() {
      return (
            <div style={AppStyles.mainContainer}>
                  <RouterProvider router={router} />
            </div>
      );
}

export default App;
