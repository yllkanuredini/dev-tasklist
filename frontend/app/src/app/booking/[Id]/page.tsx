import React from "react";
import Link from "next/link";

type ParamsType = {
  Id: number;
};

type BookingParams = {
  params: ParamsType;
};

async function getBookingById(id: number) {
  const res = await fetch(`http://host.docker.internal:5000/booking/${id}`, {
    cache: "no-store",
    mode: "no-cors",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch booking with id: ${id}`);
  }

  return res.json();
}

const Booking = async ({ params }: BookingParams) => {
  const booking = await getBookingById(params.Id);
  
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-200 p-6 rounded-lg shadow-md mt-20">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">
          Booking Dashboard
        </h1>
        <div className="bg-gray-100 p-3 rounded mb-4">
          <p className="text-sm text-black">
            This Booking is with {booking.doctor_name} For {booking.service} and
            it ends on {booking.end_time}
          </p>
        </div>
        <Link href="/">
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            All Bookings
          </button>
        </Link>
      </div>
    </div>
  );
  /*return (
    <div className="flex flex-col items-center mt-8">
      <p className="text-xl">
        This Booking is with {booking.doctor_name} For {booking.service} and it
        ends on {booking.end_time}
      </p>
      <Link href="/">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Go to Home
        </button>
      </Link>
    </div>
  );*/
};

export default Booking;
