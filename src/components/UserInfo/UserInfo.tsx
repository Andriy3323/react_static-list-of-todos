import React from 'react';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props | null> = ({ user }) => (
  <>
    {user && (
      <div>
        <p>
          {user.name}
        </p>

        <p>
          {user.email}
        </p>
      </div>
    )}
  </>
);
