// import React, { useState } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import './App.css';
// import logo from '/workspaces/KIOSK/part-number-kiosk/src/images/1200px-Logo_of_Bosch_Rexroth_AG.svg.png';
// import PartDetailsPage from '/workspaces/KIOSK/part-number-kiosk/src/PartDetailsPage.jsx';

// const partNumberDatabase = {
//   // Add your part numbers and references here
//   "123": "Part A",
//   "456": "Part B",
//   "789": "Part C",
//   "1234": "Part D",
// };

// function App() {
//   const [inputValue, setInputValue] = useState('');
//   const [matches, setMatches] = useState([]);
//   const [showPartDetails, setShowPartDetails] = useState(false);
//   const [selectedPartNumber, setSelectedPartNumber] = useState('');

//   const handleInputChange = (event) => {
//     const keyword = event.target.value.toLowerCase();
//     setInputValue(keyword);
//     const matchingParts = Object.entries(partNumberDatabase).filter(([partNumber]) =>
//       partNumber.toLowerCase().startsWith(keyword)
//     );
//     setMatches(matchingParts);
//   };

//   const handleShowPartDetails = (partNumber) => {
//     setSelectedPartNumber(partNumber);
//     setShowPartDetails(true);
//   };

//   return (
//     <BrowserRouter>
//       <div className="app">
//         <div className="logo-container">
//           <img src={logo} alt="Logo" className="logo" />
//         </div>
//         <div className="header">
//           {/* ... */}
//         </div>
//         <div className="search-pane">
//           {showPartDetails ? (
//             <PartDetailsPage partNumber={selectedPartNumber} />
//           ) : (
//             <>
//               <h1 className="title">FixtureFIND</h1>
//               <p className="sub-title">
//                 Your Ultimate KIOSK for Streamlining Pump and Fixture Insights!
//               </p>
//               <div className="input-container">
//                 <input
//                   type="text"
//                   value={inputValue}
//                   onChange={handleInputChange}
//                   placeholder="Enter pump number..."
//                   className="part-input"
//                 />
//                 {matches.length > 0 && inputValue.length > 0 && (
//                   <div className="suggestions">
//                     {matches.map(([partNumber, reference]) => (
//                       <div
//                         key={partNumber}
//                         className="suggestion"
//                         onClick={() => handleShowPartDetails(partNumber)}
//                       >
//                         {partNumber}: {reference}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import logo from '/Users/pruthvihosmani/Desktop/kiosk/KIOSK/part-number-kiosk/src/images/1200px-Logo_of_Bosch_Rexroth_AG.svg.png';
import PartDetailsPage from '/Users/pruthvihosmani/Desktop/kiosk/KIOSK/part-number-kiosk/src/PartDetailsPage.jsx';
import axios from 'axios';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [matches, setMatches] = useState([]);
  const [showPartDetails, setShowPartDetails] = useState(false);
  const [selectedPartNumber, setSelectedPartNumber] = useState('');

  const handleInputChange = async (event) => {
    const keyword = event.target.value.toLowerCase();
    setInputValue(keyword);

    try {
      const response = await axios.get(`/api/parts?keyword=${keyword}`);
      const matchingParts = response.data;
      setMatches(matchingParts);
    } catch (error) {
      console.error('Error fetching parts:', error);
      setMatches([]);
    }
  };

  const handleShowPartDetails = (partNumber) => {
    setSelectedPartNumber(partNumber);
    setShowPartDetails(true);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="header">
          {/* ... */}
        </div>
        <div className="search-pane">
          {showPartDetails ? (
            <PartDetailsPage partNumber={selectedPartNumber} />
          ) : (
            <>
              <h1 className="title">FixtureFIND</h1>
              <p className="sub-title">
                Your Ultimate KIOSK for Streamlining Pump and Fixture Insights!
              </p>
              <div className="input-container">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter pump number..."
                  className="part-input"
                />
                {matches.length > 0 && inputValue.length > 0 && (
                  <div className="suggestions">
                    {matches.map(({ partNumber, reference }) => (
                      <div
                        key={partNumber}
                        className="suggestion"
                        onClick={() => handleShowPartDetails(partNumber)}
                      >
                        {partNumber}: {reference}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

