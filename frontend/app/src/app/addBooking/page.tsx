"use client";
import React, { useState } from "react";
import Link from "next/link";

const BookingForm = () => {
  const [service, setService] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://host.docker.internal:5000/api/bookings", {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service: service,
          doctor_name: doctorName,
          start_time: startTime,
          end_time: endTime,
          date: date,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to book an appointment");
      }
      setMessage("Appointment done successfully");
      window.location.href = "/";
    } catch (error) {
      console.error("Error submitting booking:", error);
      setMessage("Failed");
    }
  };
  
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-1/4 border bg-gray-200 shadow-2xl border-gray-300 rounded-lg p-4">
        <h1 className="mt-8 text-center text-xl text-black">
          Book Appointment
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="text-black">
            Service:
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              //placeholder="Service"
              required
            />
          </label>
          <br />
          <br />
          <label className="text-black">
            Doctor Name:
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              type="text"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              //placeholder="Doctor Name"
              required
            />
          </label>
          <br />
          <br />
          <label className="text-black">
            Start Time:
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              type="time"
              value={startTime}
              onChange={(e) => {
                console.log("Start Time: ", e.target.value);
                setStartTime(e.target.value);
              }}
              required
            />
          </label>
          <br />
          <br />
          <label className="text-black">
            End Time:
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          <label className="text-black">
            Date:
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            type="submit"
          >
            Book your appointment
          </button>
          <br />
          <br />
          <Link href="/">
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              All Bookings
            </button>
            <br />
          </Link>
        </form>
        {message && <p className="text-black">{message}</p>}
      </div>
    </div>
  );
  /*return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-1/4 border bg-gray-50 shadow-2xl border-gray-300 rounded-lg p-4">
        <h1 className="mt-8 text-center  text-xl">Book Appointment</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Service:
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Doctor Name:
            <input
              className=" w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              //placeholder="Name"
              required
            />
          </label>
          <br />
          <label>
            Start Time:
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="time"
              value={startTime}
              onChange={(e) => {
                console.log("Start Time: ", e.target.value);
                setStartTime(e.target.value);
              }}
              required
            />
          </label>
          <br />
          <label>
            End Time:
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Date:
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <br />
          <button
            className="bg-gray-500 hover:bg-gray-600 mt-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" 
          >
            Submit Booking
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );*/
};

export default BookingForm;
