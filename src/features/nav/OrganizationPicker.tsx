import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { apiCall } from '../../services/apiCall';
import { setLocationContext } from '../locationContext/locationContextSlice';
import LocationPicker from './LocationPicker';

const OrganizationPicker = () => {
  const dispatch = useDispatch();
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orgId, setOrgId] = useState(localStorage.getItem('organization_id'));

  useEffect(() => {
    (async () => {
      try {
        const res = await apiCall('/organizations', 'get');
        const json = await res.json();
        setOrganizations(json);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('organization_id', e.target.value);
    localStorage.removeItem('location_id');
    setOrgId(e.target.value);
    //dispatch(setLocationContext({organizationId: e.target.value}));
  };

  const resetOrg = () => {
    localStorage.removeItem('organization_id');
  };

  const persistedOrg: any = organizations
    ? organizations.find(
        (org: any) =>
          org.id === parseInt(localStorage.getItem('organization_id') || '0')
      )
    : null;

  if (loading) {
    return <p>loading</p>;
  }

  return (
    <div>
      <button onClick={resetOrg}>Reset</button>
      <label>Organization</label>
      {organizations && (
        <div>
          <select
            onChange={handleSelect}
            defaultValue={persistedOrg ? persistedOrg.id : 'DEFAULT'}>
            <option key={'0'} value={'DEFAULT'} hidden>
              Select
            </option>
            {organizations.map((org: any) => (
              <option key={org.id} value={org.id}>
                {org.name}
              </option>
            ))}
          </select>
          {orgId && <LocationPicker organizationId={orgId} />}
        </div>
      )}
    </div>
  );
};

export default OrganizationPicker;
