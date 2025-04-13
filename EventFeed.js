import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../redux/eventSlice";

function EventFeed() {
  const dispatch = useDispatch();
  const { all: events, loading } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Event Feed</h2>
      {events.map((event) => (
        <div key={event._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p><strong>When:</strong> {new Date(event.date).toLocaleString()}</p>
          <p><strong>Where:</strong> {event.location}</p>
          <p><strong>By:</strong> {event.createdBy.name}</p>
        </div>
      ))}
    </div>
  );
}

export default EventFeed;
