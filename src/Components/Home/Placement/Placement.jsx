import React, { useState, useEffect } from 'react';

const PlacementDrivesGrid = () => {
  const [drives, setDrives] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Sample data for placement drives
  const placementData = [
    {
      id: 1,
      company: "CIPHERSCHOOLS",
      batch: "Batch 2025",
      stream: "CSE/IT/CAP",
      salary: "Stipend Rs. 20000 PM to Rs. 25000 PM During 6 Months Internship Period Then CTC Rs. 4.2 to Rs. 5 LPA Based on Performance",
      lastDate: "2025-04-15",
      logo: "https://via.placeholder.com/150",
      location: "Bangalore"
    },
    {
      id: 2,
      company: "MICROSOFT",
      batch: "Batch 2025",
      stream: "CSE/IT",
      salary: "Stipend Rs. 60000 PM During Internship Then CTC Rs. 21 LPA",
      lastDate: "2025-04-18",
      logo: "https://via.placeholder.com/150",
      location: "Hyderabad"
    },
    {
      id: 3,
      company: "AMAZON",
      batch: "Batch 2025",
      stream: "CSE/IT/ECE",
      salary: "Stipend Rs. 50000 PM During Internship Then CTC Rs. 18 LPA",
      lastDate: "2025-04-20",
      logo: "https://via.placeholder.com/150",
      location: "Multiple Locations"
    },
    {
      id: 4,
      company: "TCS",
      batch: "Batch 2025",
      stream: "All Engineering Branches",
      salary: "Stipend Rs. 15000 PM During Internship Then CTC Rs. 3.6 to 7 LPA",
      lastDate: "2025-04-25",
      logo: "https://via.placeholder.com/150",
      location: "Pan India"
    },
    {
      id: 5,
      company: "INFOSYS",
      batch: "Batch 2025",
      stream: "All Engineering Branches",
      salary: "Stipend Rs. 18000 PM During Internship Then CTC Rs. 4.5 LPA",
      lastDate: "2025-04-22",
      logo: "https://via.placeholder.com/150",
      location: "Multiple Locations"
    }
  ];

  useEffect(() => {
    // Simulate API call with a delay
    const timer = setTimeout(() => {
      setDrives(placementData);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Calculate days remaining
  const calculateDaysRemaining = (dateString) => {
    const today = new Date();
    const lastDate = new Date(dateString);
    const diffTime = lastDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="w-full h-full ">
      <div className="flex items-center mb-6">
        <div className="bg-orange-500 text-white rounded-lg p-3 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Today's Placement Drives</h2>
        <div className="ml-auto">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            View All
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="h-16 bg-gray-200 rounded-md mb-4"></div>
              <div className="h-4 bg-gray-200 rounded-md mb-3 w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded-md mb-3 w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded-md mb-3 w-full"></div>
              <div className="h-4 bg-gray-200 rounded-md w-1/4"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drives.map((drive, index) => (
            <div 
              key={drive.id} 
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-md">
                    <img src="/api/placeholder/40/40" alt={drive.company} className="h-10 w-10 object-contain" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-gray-800">{drive.company}</h3>
                    <p className="text-sm text-gray-600">{drive.location}</p>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  calculateDaysRemaining(drive.lastDate) <= 3 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                }`}>
                  {calculateDaysRemaining(drive.lastDate)} days left
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <span className="text-gray-500 text-sm mr-2">Batch:</span>
                  <span className="text-gray-800 text-sm font-medium">{drive.batch}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 text-sm mr-2">Stream:</span>
                  <span className="text-gray-800 text-sm font-medium">{drive.stream}</span>
                </div>
                <div>
                  <span className="text-gray-500 text-sm mr-2">Package:</span>
                  <p className="text-gray-800 text-sm mt-1 leading-relaxed">{drive.salary}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center transition-colors duration-300">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-md transition-colors duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlacementDrivesGrid;