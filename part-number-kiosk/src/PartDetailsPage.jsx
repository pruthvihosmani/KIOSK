import React, { useState } from 'react';
import './PartDetailsPage.css';

function PartDetailsPage() {
  const [aSideFixture, setASideFixture] = useState('');
  const [bSideFixture, setBSideFixture] = useState('');
  const [finalTorquingFixture, setFinalTorquingFixture] = useState('');
  const [positionPinDia, setPositionPinDia] = useState('');

  return (
    <div className="part-details-page">
      <h2 className="page-title">Part Details</h2>
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
