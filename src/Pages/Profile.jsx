const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">
          <img src="ksdfsdf" alt={`'s avatar`} />
        </div>
        <div className="profile-info">
          <h2> user.name </h2>
          <p>
            <strong>Email:</strong> user.email{" "}
          </p>
          <p>
            <strong>Phone:</strong> user.phone{" "}
          </p>
          <p>
            <strong>Address:</strong> user.address{" "}
          </p>
          <p>
            <strong>Bio:</strong> user.bio{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
