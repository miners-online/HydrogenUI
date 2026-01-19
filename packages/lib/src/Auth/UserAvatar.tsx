import { Avatar } from "@primer/react";

import { useUser } from "./useUser";
import React from "react";
import { User } from "./user";

interface UserAvatarProps {
  user?: User;
  size?: number;
}

export default function UserAvatar({ user, size = 32 }: UserAvatarProps) {
  if (!user) {
    const { user: contextUser } = useUser();
    if (!contextUser) {
      return null;
    }
    user = contextUser;
  }

  const initials = user.getInitials();
  const avatarUrl = user.avatarUrl;

  if (!avatarUrl) {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: 'var(--color-bg-subtle,#f6f8fa)',
        }}
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: 'var(--color-fg-muted,#6a737d)',
            fontWeight: 'bold',
            fontSize: '0.875rem',
          }}
        >
          {initials}
        </span>
      </div>
    );
  }

  return (
    <Avatar
      src={avatarUrl}
      alt={user.name}
      size={size}
    />
  );
}
