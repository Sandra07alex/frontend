import React, { useState } from "react";

export default function UserForm() {
  const [form, setForm] = useState({ name: "", age: "", place: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "";

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    if (!form.name || !form.age || !form.place) {
      setStatus({ type: "error", msg: "Please fill all fields." });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/saveUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Request failed");

      setStatus({ type: "success", msg: "Saved! id: " + data.id });
      setForm({ name: "", age: "", place: "" });
    } catch (err) {
      setStatus({ type: "error", msg: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "2rem auto", fontFamily: "system-ui" }}>
      <h2>Enter details</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label>Name</label><br />
          <input name="name" value={form.name} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Age</label><br />
          <input name="age" value={form.age} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Place</label><br />
          <input name="place" value={form.place} onChange={handleChange} />
        </div>
        <button type="submit" disabled={loading}>{loading ? "Saving..." : "Save"}</button>
      </form>

      {status && (
        <p style={{ color: status.type === "error" ? "red" : "green" }}>{status.msg}</p>
      )}
    </div>
  );
}
import React, { useState } from "react";

export default function UserForm() {
  const [form, setForm] = useState({ name: "", age: "", place: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "";

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    if (!form.name || !form.age || !form.place) {
      setStatus({ type: "error", msg: "Please fill all fields." });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/saveUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Request failed");

      setStatus({ type: "success", msg: "Saved! id: " + data.id });
      setForm({ name: "", age: "", place: "" });
    } catch (err) {
      setStatus({ type: "error", msg: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "2rem auto", fontFamily: "system-ui" }}>
      <h2>Enter details</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label>Name</label><br />
          <input name="name" value={form.name} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Age</label><br />
          <input name="age" value={form.age} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Place</label><br />
          <input name="place" value={form.place} onChange={handleChange} />
        </div>
        <button type="submit" disabled={loading}>{loading ? "Saving..." : "Save"}</button>
      </form>

      {status && (
        <p style={{ color: status.type === "error" ? "red" : "green" }}>{status.msg}</p>
      )}
    </div>
  );
}
