import React from 'react';


export interface AppHeaderProps {
  productName?: string;
  userOverlayFallback?: React.ReactNode;
}

export interface AppHeaderUserOverlayProps {
  onSignOut?: () => Promise<void>;
  settingsUrl?: string;
  fallback?: React.ReactNode;
}
