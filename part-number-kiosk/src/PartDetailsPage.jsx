import React, { useState } from 'react';
import './PartDetailsPage.css';

function PartDetailsPage({ partNumber }) {
  const [aSideFixture, setASideFixture] = useState('');
  const [bSideFixture, setBSideFixture] = useState('');
  const [finalTorquingFixture, setFinalTorquingFixture] = useState('');
  const [positionPinDia, setPositionPinDia] = useState('');

  // You can fetch part details based on the part number here
  // For now, using placeholders
  const partDetails = {
    "123": {
      aSideFixture: "A-Side Fixture Details",
      bSideFixture: "B-Side Fixture Details",
      finalTorquingFixture: "Final Torquing Fixture Details",
      positionPinDia: "Position Pin Dia Details",
    },
    // Add more part details for other part numbers
  };

  const handlePartNumberChange = (newPartNumber) => {
    const details = partDetails[newPartNumber] || {};
    setASideFixture(details.aSideFixture || '');
    setBSideFixture(details.bSideFixture || '');
    setFinalTorquingFixture(details.finalTorquingFixture || '');
    setPositionPinDia(details.positionPinDia || '');
  };

  // Call the handler when the part number prop changes
  React.useEffect(() => {
    handlePartNumberChange(partNumber);
  }, [partNumber]);

  return (
    <div className="part-details-page">
      <h1 className="page-title">Part Details</h1>
      <div className="input-container">
        <label className="input-label">A Side Fixture:</label>
        <input
          type="text"
          value={aSideFixture}
          onChange={(e) => setASideFixture(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-container">
        <label className="input-label">B Side Fixture:</label>
        <input
          type="text"
          value={bSideFixture}
          onChange={(e) => setBSideFixture(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-container">
        <label className="input-label">Final Torquing Fixture:</label>
        <input
          type="text"
          value={finalTorquingFixture}
          onChange={(e) => setFinalTorquingFixture(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-container">
        <label className="input-label">Position Pin Dia:</label>
        <input
          type="text"
          value={positionPinDia}
          onChange={(e) => setPositionPinDia(e.target.value)}
          className="input-field"
        />
      </div>
    </div>
  );
}

export default PartDetailsPage;
