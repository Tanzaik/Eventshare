import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const [form, setForm] = useState({ title: "", description: "", date: "", location: "" });
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/events", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/events");
    } catch (err) {
      alert("Failed to create event");
    }
  };

  return (
    <div>
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="date" type="datetime-local" value={form.date} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;
