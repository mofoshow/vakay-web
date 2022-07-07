import { mockUserData } from '../mocks/userData';
import { UserProfilePage } from '../src/PageComponents/UserProfilePage';
import React from 'react';

const UserProfile = () => {
  return <UserProfilePage user={mockUserData} />;
};

export default UserProfile;
