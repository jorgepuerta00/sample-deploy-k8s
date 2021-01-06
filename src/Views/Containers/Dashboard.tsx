
import React from 'react';
import { getUser, removeUserSession } from '../../Utils/Index';
import { useGetUser } from './../../Hooks/Index';

function Dashboard(props: any) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  const [ loading, data, error, fetchData ] = useGetUser();

  React.useEffect(() => {
    fetchData(user.uid);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div className="content">Retriving data...</div>
  }

  if (error !== "") {
    return <div className="content">{error && <><br /><small>{error}</small><br /></>}<br /></div>
  }

  return (
    <div>
      Welcome {data!.firstname} {data!.lastname}!<br /><br />
      Age: {data!.age}<br /><br />
      Score: {data!.score}<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;