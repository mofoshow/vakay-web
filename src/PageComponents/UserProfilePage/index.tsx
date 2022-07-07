import { PicturePlaceholder } from '../../placeholders/PicturePlaceholder';
import { TopInfo, TopSection } from './UserProfile.styles';
import React from 'react';

type EmergencyContactType = {
  name: string;
  phone: string;
};

type UserDataType = {
  name: string;
  birthday: string;
  location: string;
  phone: string;
  email: string;
  allergies: string[];
  photoId: boolean;
  emergencyContact: EmergencyContactType;
  venmo: string;
};

interface UserProfilePageProps {
  user: UserDataType;
}

export const UserProfilePage = ({ user }: UserProfilePageProps) => {
  return (
    <div>
      <TopSection>
        <PicturePlaceholder width={100} height={100} />
        <TopInfo>
          <p>{user.name}</p>
          <p>{user.birthday}</p>
        </TopInfo>
      </TopSection>
      <p>{user.email}</p>
      <p>{user.location}</p>
      <p>
        {user.allergies.map((allergin: string) => (
          <span>{allergin} </span>
        ))}
      </p>
      <p>Has photo id {user.photoId}</p>
      <p>{user.venmo}</p>
    </div>
  );
};
