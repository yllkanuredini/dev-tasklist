import Link from "next/link";
import BookingList from "./AllBookings";

async function getBookings() {
  const res = await fetch("http://host.docker.internal:5000/api/bookings", {
    cache: "no-store",
    mode: "no-cors",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Home: React.FC = async () => {
  const bookings = await getBookings();

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ffffff]">
      <div className="w-full max-w-md bg-[#dddddd] shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-[#222222] mb-6">
          Booking Dashboard
        </h1>
        <div className="bg-[#ffffff] rounded-lg p-4 mb-6 border border-[#49535a]">
          <p className="text-lg text-[#49535a]">
            Current Bookings:{" "}
            <span className="font-semibold text-[#2a7fba]">
              {bookings.length}
            </span>
          </p>
        </div>
        <BookingList />
        <Link href="addBooking">
          <button className="w-full bg-[#2a7fba] hover:bg-[#49535a] text-[#ffffff] font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2a7fba] focus:ring-opacity-50 mt-6">
            New Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

/*const Home: React.FC = async () => {
  const bookings = await getBookings();

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ffffff]">
      <div className="w-full max-w-md bg-[#dddddd] shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-[#222222] mb-6">Booking Dashboard</h1>
        <div className="bg-[#ffffff] rounded-lg p-4 mb-6 border border-[#49535a]">
          <p className="text-lg text-[#49535a]">
            Current Bookings: <span className="font-semibold text-[#2a7fba]">{bookings.length}</span>
          </p>
        </div>
        <BookingList />
        <Link href="addBooking">
          <button className="w-full bg-[#2a7fba] hover:bg-[#49535a] text-[#ffffff] font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2a7fba] focus:ring-opacity-50 mt-6">
            Make a New Booking
          </button>
        </Link>
      </div>
    </div>
  );
};*/

/*const Home: React.FC = async () => {
  const bookings = await getBookings();

  return (
    <div className="min-h-screen bg-[#f5f7fa] p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-12">
        <h1 className="text-5xl font-bold text-[#2a7fba] mb-10 text-center">Booking Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#e6f3ff] rounded-xl p-8 border-2 border-[#2a7fba] shadow-lg">
            <p className="text-2xl text-[#49535a] mb-4">Current Bookings</p>
            <span className="font-bold text-6xl text-[#2a7fba]">{bookings.length}</span>
          </div>
          <div className="bg-[#e6f3ff] rounded-xl p-8 border-2 border-[#2a7fba] shadow-lg flex items-center justify-center">
            <Link href="addBooking" className="w-full">
              <button className="w-full bg-[#2a7fba] hover:bg-[#1c5a8a] text-white font-bold text-xl py-4 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2a7fba] focus:ring-opacity-50">
                Make a New Booking
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-[#49535a] mb-6">Recent Bookings</h2>
          <BookingList />
        </div>
      </div>
    </div>
  );
};*/

/*const Home: React.FC = async () => {
  const bookings = await getBookings();
  return (
    <div className="flex text-center justify-center items-center h-screen ">
      <div className="w-1/2 border bg-gray-50 shadow-2xl border-gray-300 rounded-lg p-4">
        <h1 className="mt-8 text-xl">Current booking count: {bookings.length}</h1>
        <BookingList />
        <Link href="addBooking">
          <button className="bg-gray-500 hover:bg-gray-600 mt-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Book here</button>
        </Link>
      </div>
    </div>
  );
};*/

export default Home;
