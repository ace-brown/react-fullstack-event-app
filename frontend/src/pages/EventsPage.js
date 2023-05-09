import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;

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
    throw { message: "Data fetching was not successful!" };
  } else {
    const respData = await response.json();
    return respData;
  }
};
