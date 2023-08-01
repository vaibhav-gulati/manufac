import React from 'react';
import dataset from '../assets/Wine-Data.json';

const calculateMean = (data, propertyName) => {
  // here first converted each property value into integre as for one record it was a string which result in error
  const sum = data.reduce((acc, record) => acc + parseFloat(record[propertyName]), 0);
  return sum / data.length;
};

const calculateMedian = (data, propertyName) => {
  const sortedData = data.slice().sort((a, b) => parseFloat(a[propertyName]) - parseFloat(b[propertyName]));
  const n = sortedData.length;
  if (n % 2 === 0) {
    const mid1 = parseFloat(sortedData[n / 2 - 1][propertyName]);
    const mid2 = parseFloat(sortedData[n / 2][propertyName]);
    return (mid1 + mid2) / 2;
  } else {
    return parseFloat(sortedData[Math.floor(n / 2)][propertyName]);
  }
};

const calculateMode = (data, propertyName) => {
  const frequencyMap = new Map();
  data.forEach((record) => {
    const propertyValue = record[propertyName];
    frequencyMap.set(propertyValue, (frequencyMap.get(propertyValue) || 0) + 1);
  });

  let modes = [];
  let maxFrequency = 0;
  for (const [propertyValue, frequency] of frequencyMap.entries()) {
    if (frequency > maxFrequency) {
      modes = [propertyValue];
      maxFrequency = frequency;
    } else if (frequency === maxFrequency) {
      modes.push(propertyValue);
    }
  }
  return { topModes: modes.slice(0, 3), additionalModes: modes.slice(3) };
};

const calculateGamma = (record) => {
  const Ash = parseFloat(record.Ash);
  const Hue = parseFloat(record.Hue);
  const Magnesium = parseFloat(record.Magnesium);
  const val = ((Ash * Hue) / Magnesium).toFixed(3);
  return val;
};

const StatsTable = ({ property }) => {
  const classWiseStats = {};

  //statistics for each class
  dataset.forEach((record) => {
    const classId = record.Alcohol;
    if (!classWiseStats[classId]) {
      classWiseStats[classId] = {
        data: [],
        mean: null,
        median: null,
        mode: null,
      };
    }
    classWiseStats[classId].data.push(record);
  });

  // If the property is 'Gamma' and Gamma property is not available
  if (property === 'Gamma' && !dataset[0].hasOwnProperty('Gamma')) {
    dataset.forEach((record) => {
      record.Gamma = calculateGamma(record);
    });
  }

  for (const classId in classWiseStats) {
    classWiseStats[classId].mean = calculateMean(classWiseStats[classId].data, property);
    classWiseStats[classId].median = calculateMedian(classWiseStats[classId].data, property);
    classWiseStats[classId].mode = calculateMode(classWiseStats[classId].data, property);
  }

  return (
    <div>
      <h1>Table for {property}</h1>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse', margin: '20px auto', tableLayout: 'fixed' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Measure</th>
            {Object.keys(classWiseStats).map((classId) => (
              <th key={classId} style={{ border: '1px solid black', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Class {classId}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>{property} Mean</td>
            {Object.values(classWiseStats).map((stats) => (
              <td key={stats.mean} style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{stats.mean?.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>{property} Median</td>
            {Object.values(classWiseStats).map((stats) => (
              <td key={stats.median} style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{stats.median?.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>{property} Mode</td>
            {Object.values(classWiseStats).map((stats) => (
              <td key={stats.mode.topModes} style={{ border: '1px solid black', padding: '8px', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <span title={stats.mode.additionalModes.join(', ')}>{stats.mode.topModes.join(', ')}{stats.mode.additionalModes.length > 0 ? '...' : ''}</span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;
