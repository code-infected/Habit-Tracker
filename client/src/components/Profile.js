import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    // TODO: Fetch user data from the server
    // For now, we'll use dummy data
    setUser({ name: 'John Doe', email: 'john@example.com' });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement profile update logic here
    console.log('Profile update attempt with:', user);
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;

