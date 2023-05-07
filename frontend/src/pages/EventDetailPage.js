import React from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Event Id: {params.eventId}</h1>
      <div>EventDetailPage</div>
    </>
  );
};

export default EventDetailPage;
