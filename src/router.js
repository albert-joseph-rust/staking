import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";

import MainLayout from "layouts";
import Homepage from "./pages/Homepage";
import Loading from "components/Loading";

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        // {
        //   path: "/admin",
        //   element: (
        //     <AdminGuard>
        //       <Adminpage />
        //     </AdminGuard>
        //   ),
        // },
        // {
        //   path: "/adminrolepage",
        //   element: (
        //     <Admin2Guard>
        //       <Devpage />
        //     </Admin2Guard>
        //   ),
        // },
      ],
    },
  ]);
}

// IMPORT COMPONENTS