import { useState, useEffect } from 'react';
import { fetchUsers } from '../../API/users';

function User() {
  const [user, setUser] = useState([]);

  const fetchWrapper = async () => {
    const user = await fetchUsers(1);
    setUser(user);
  };

  useEffect(() => {
    fetchWrapper();
  }, []);

  return <div>{JSON.stringify(user)}</div>;
}
export default User;
