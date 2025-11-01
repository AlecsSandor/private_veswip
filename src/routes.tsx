import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { LandingPage } from "./pages/LandingPage";
import { AppsPage } from "./pages/AppsPage";
import ContactPage from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
// import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "/apps", element:
          <AppsPage />
      },
       {
        path: "/contact", element:
          <ContactPage />
      },
      {
        path: "/about", element:
          <AboutPage />
      },
    ],
  },
]);

export default router;
