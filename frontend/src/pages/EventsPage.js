import { Link } from "react-router-dom";

import EventsList from "../components/EventsList";
import EventsNavigation from "../components/EventsNavigation";

const DUMMMY_EVENTS = [
  {
    image:
      "https://images.unsplash.com/photo-1683217617813-9c77d57028f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "Mountain",
    title: "Mountain area",
    date: new Date("04/08/2023"),
    description: "A cool mountain",
    id: 1,
  },
  {
    image:
      "https://images.unsplash.com/photo-1683350919521-b1f8e0733ef6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
    alt: "Trian",
    title: "Train",
    date: new Date("03/02/2022"),
    description: "A train among the trees",
    id: 2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1683237340069-7b8b21c87fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80",
    alt: "Church",
    title: "St John Church",
    date: new Date("01/06/2023"),
    description: "A church in England",
    id: 3,
  },
];

const EventsPage = () => {
  return (
    <>
      <EventsNavigation />
      <EventsList events={DUMMMY_EVENTS} />;
    </>
  );
};

export default EventsPage;
