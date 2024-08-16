import React from 'react';
import { Button, Text, Input, Avatar, makeStyles } from '@fluentui/react-components';
import { GridDots24Filled, Search24Regular, Settings24Regular, Question24Filled, Edit24Regular, Emoji24Regular } from '@fluentui/react-icons';
import { AppHeaderProps } from './AppHeader.types';

const useStyles = makeStyles({
  navBar: {
    backgroundColor: '#0E519C',
    display: 'flex',
    alignItems: 'center',
    height: '48px'
  },
  appLauncher: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '68px',
    height: '48px'
  },
  titleSection: {
    justifyContent: 'flex-start',
  },
  middleSection: {
    flexGrow: 1,
    display: 'flex', // Add flexbox display to the parent container
    alignItems: 'center', // Vertically center child elements
    justifyContent: 'space-between', // Ensure space between searchBoxContainer and middleCommands
    width: 'calc(100% - 116px)',
  },
  searchBoxContainer: {
    display: 'flex',
    flex: '1 0 auto',
    justifyContent: 'center',
    minWidth: '408px',
  },
  middleCommands: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  accountManager: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px'
  },
  textWhite: {
    color: 'white',
  },
  textTitle: {
    color: 'white',
    fontSize: '16px',
    whiteSpace: 'nowrap',  // Prevents text from wrapping
    overflow: 'hidden',     // Hides overflowing content
  },
  iconButton: {
    color: 'white',
  },
});

const AppHeader = (props: AppHeaderProps) => {
  const styles = useStyles();

  return (
    <div className={styles.navBar}>
      <div className={styles.appLauncher}>
        <Button appearance="transparent" icon={<GridDots24Filled color='white'/>} aria-label='App launcher' title='App Launcher'/>
      </div>
      <div className={styles.titleSection}>
        <Text className={styles.textTitle} weight="semibold">{props.productName}</Text>
      </div>
      <div className={styles.middleSection}>
        <div className={styles.searchBoxContainer}>
          <Input
            contentBefore={<Search24Regular />}
            placeholder="Search"
            appearance="filled-lighter"
          />
        </div>
        <div className={styles.middleCommands}>
          <Button appearance="transparent" icon={<Emoji24Regular color='white' />} />
          <Button appearance="transparent" icon={<Edit24Regular color='white' />} />
          <Button appearance="transparent" icon={<Settings24Regular color='white' />} />
          <Button appearance="transparent" icon={<Question24Filled color='white' />} />
        </div>
      </div>
      <div className={styles.accountManager}>
        <Avatar {...props.avatar} />
      </div>
    </div>
  );
};

export default AppHeader;
