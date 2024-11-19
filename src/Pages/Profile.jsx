import { useLocation } from "react-router-dom";

const Profile = () => {
  const { state } = useLocation();
  console.log(location.state);
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">
          <img src="ksdfsdf" alt={`'s avatar`} />
        </div>
        <div className="profile-info">
          <h2> Name: {state?.name}</h2>
          <p>
            <strong>Email:</strong> {state?.email}
          </p>
          <p>
            <strong>Phone:</strong> {state.phone}
          </p>
          <p>
            <strong>City:</strong> {state.city}
          </p>
 
        </div>
      </div>
    </div>
  );
};

export default Profile;
