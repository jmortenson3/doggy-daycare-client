import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { apiCall } from '../../services/apiCall';

export interface Props {
  organizationId: string;
}

const LocationPicker = ({ organizationId }: Props) => {
  const dispatch = useDispatch();
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await apiCall(
          `/locations?organization_id=${organizationId}`,
          'get'
        );
        const json = await res.json();
        setLocations(json);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('location_id', e.target.value);
  };

  if (loading) {
    return <></>;
  }

  if (locations) {
    const persistedLocation: any = locations.find(
      (location: any) =>
        location.id === parseInt(localStorage.getItem('location_id') || '0')
    );

    return (
      <li>
        <label>Location</label>
        <select
          onChange={handleSelect}
          defaultValue={persistedLocation ? persistedLocation.id : 'DEFAULT'}>
          <option key={'0'} value={'DEFAULT'} hidden>
            Select
          </option>
          {locations.map((location: any) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
      </li>
    );
  } else {
    return <p>No data</p>;
  }
};

export default LocationPicker;
