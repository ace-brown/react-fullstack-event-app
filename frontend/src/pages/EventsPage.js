import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const [error, setError] = useState();
  const [fetchedEvents, setFetchedEvents] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch("http://localhost:8080/events");

      if (!response.ok) {
        setError("Fetching events failed!");
      } else {
        const jsonData = await response.json();
        setFetchedEvents(jsonData.events);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
};

export default EventsPage;
