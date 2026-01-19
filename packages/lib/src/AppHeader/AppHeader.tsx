import React from 'react';
import { AppHeaderProps, AppHeaderUserOverlayProps } from './AppHeader.types';
import { ActionList, AnchoredOverlay, Button, Header, Text } from '@primer/react'
import { UserAvatar, useUser } from '../Auth';


const AppHeader = (props: AppHeaderProps) => {
  return (
    <Header>
      {/* Primer does not respect full being false, so we use undefined instead */}
      <Header.Item full={props.productName ? undefined : true}>
        <Header.Link href="https://www.minersonline.uk">
          <Text as="span" size="large" style={{ fontWeight: 'bold' }}>
            Miners Online
          </Text>
        </Header.Link>
      </Header.Item>
      {props.productName && <Header.Item full>
        <Text as="span" size="large" style={{ fontWeight: 'bold', marginRight: 8 }}>
          /
        </Text>
        <Text as="span" size="medium">
          {props.productName}
        </Text>
      </Header.Item>}
      <Header.Item>
        <AppHeaderUserOverlay fallback={props.userOverlayFallback} />
      </Header.Item>
    </Header>
  );
};

export default AppHeader;

export function AppHeaderUserOverlay({
  onSignOut,
  settingsUrl = "https://account.minersonline.uk",
  fallback
}: AppHeaderUserOverlayProps) {
  const [open, setOpen] = React.useState(false)

  const { user } = useUser();

  if (!user) {
    return fallback || null;
  }

  const {name, email} = user;

  return (
    <AnchoredOverlay
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderAnchor={props => <Button {...props} variant='invisible'><UserAvatar/></Button>}
    >
      <ActionList>
        <ActionList.Item>
          <ActionList.LeadingVisual>
            <UserAvatar/>
          </ActionList.LeadingVisual>
          {name}
          <ActionList.Description variant="block">{email}</ActionList.Description>
        </ActionList.Item>
        <ActionList.Divider />
        <ActionList.LinkItem href={settingsUrl}>Profile Settings</ActionList.LinkItem>
        <ActionList.Divider />
        <ActionList.Item onSelect={onSignOut}>Sign Out</ActionList.Item>
      </ActionList>
    </AnchoredOverlay>
  )
}