import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
  } else {
    const respData = await response.json();
    return respData.events;
  }
};
