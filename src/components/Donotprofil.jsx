import React from "react";

const DonorProfile = () => {
  const donations = [
    {
      title: "Winter Clothes Donation",
      date: "Jan 15, 2024",
      items: 12,
    },
    {
      title: "Summer Clothes Donation",
      date: "Dec 1, 2023",
      items: 8,
    },
    {
      title: "Ramazan Clothes Donation",
      date: "Nov 20, 2023",
      items: 15,
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 mt-6 px-4">
      {/* Donor Info Section */}
      <div className="flex flex-col items-center w-full sm:w-[300px] h-auto bg-slate-50 shadow-lg border border-gray-300 rounded-lg p-6">
        <div className="relative">
          <img
            src="https://via.placeholder.com/150"
            alt="Donor Avatar"
            className="w-20 h-20 rounded-full border-2 border-orange-400"
          />
        </div>

        <div className="text-center mt-4">
          <p className="text-lg font-bold text-gray-800">Ibrahim</p>
          <p className="text-sm text-gray-500">Member since 2023</p>
          <p className="text-sm text-gray-500 flex items-center justify-center mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a7 7 0 00-5.25 11.62l-.7 2.45a1 1 0 001.3 1.3l2.45-.7A7 7 0 1010 3zm0 2a5 5 0 11-4.17 7.64.75.75 0 00-.3-.3l-1.13-.32.32-1.13a.75.75 0 00-.3-.3A5 5 0 0110 5zm0 3a2 2 0 100 4 2 2 0 000-4z"
                clipRule="evenodd"
              />
            </svg>
            Karachi Malir
          </p>
        </div>

        <div className="flex justify-between items-center w-full mt-6 border-t border-gray-200 pt-4">
          <div className="text-center">
            <p className="text-xl font-bold text-orange-500">47</p>
            <p className="text-sm text-gray-600">Donations</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-orange-500">47</p>
            <p className="text-sm text-gray-600">Total Coins</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-orange-500">312</p>
            <p className="text-sm text-gray-600">Items</p>
          </div>
        </div>
      </div>

      {/* Donations Section */}
      <div className="w-full md:w-[500px] lg:w-[800px]">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Donations</h2>
        {donations.map((donation, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
          >
            <div>
              <p className="text-md font-bold text-gray-800">{donation.title}</p>
              <p className="text-sm text-gray-500 flex items-center mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 2a6 6 0 100 12A6 6 0 108 2zM7 8H3a1 1 0 110-2h4a1 1 0 110 2zm6-2a1 1 0 100 2h4a1 1 0 100-2h-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {donation.date}
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-md font-bold text-orange-500">
                {donation.items} items
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorProfile;



