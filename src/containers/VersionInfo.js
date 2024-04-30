import React, { useState, useEffect } from 'react';

const VersionInfo = () => {
  const [data, setData] = useState({ version: '', changes: [] });

  useEffect(() => {
    fetch('/version.json')
      .then(response => response.json())
      .then(setData);
  }, []);

  return (
    <div>
      <strong>Version:</strong> {data.version}
      <ul>
        {data.changes.map((change, index) => (
          <li key={index}>{change}</li>
        ))}
      </ul>
    </div>
  );
};

export default VersionInfo;
