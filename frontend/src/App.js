import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage, {
  loader as eventInfoLoader,
} from "./pages/EventDetailPage";
import { loader as eventsLoader } from "./pages/EventsPage";
import NewEventpage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/ErrorPage";

import Counter from "./components/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            element: <EventDetailPage />,
            loader: eventInfoLoader,
          },
          { path: "new", element: <NewEventpage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
