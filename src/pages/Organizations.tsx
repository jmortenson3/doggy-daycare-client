import React, { useState } from 'react';

export function Organizations() {
  const [organization, setOrganization] = useState({
    name: '',
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch('https://localhost:5001/organizations/1', {
        credentials: 'include',
      });

      if (res.ok) {
        const json = await res.json();
        setOrganization(json || {});
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form method="get">
        <button onClick={handleSubmit}>Get Org</button>
      </form>

      <code>
        <pre>{organization && organization.name}</pre>
      </code>
    </div>
  );
}
