import React from 'react';
import { Button, Text, Input, Avatar, makeStyles, tokens } from '@fluentui/react-components';
import { Toolbar, ToolbarButton } from "@fluentui/react-components";
import { GridDots24Filled, Search24Regular } from '@fluentui/react-icons';
import { AppHeaderProps } from './AppHeader.types';

const useStyles = makeStyles({
  navBar: {
    backgroundColor: tokens.colorBrandBackground,
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
    color: tokens.colorBrandBackgroundInverted,
  },
  textTitle: {
    color: tokens.colorBrandBackgroundInverted,
    fontSize: '16px',
    whiteSpace: 'nowrap',  // Prevents text from wrapping
    overflow: 'hidden',     // Hides overflowing content
  },
  iconButton: {
    ':hover': {
      backgroundColor: tokens.colorBrandBackgroundHover,
    },
    ':hover:active': {
      backgroundColor: tokens.colorBrandBackgroundSelected,
    }
  },
});

const AppHeader = (props: AppHeaderProps) => {
  const styles = useStyles();

  // Function to render the icon with the desired color
  const renderIconWithColor = (icon: React.ReactElement, color: string) => {
    return React.cloneElement(icon, { color });
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.appLauncher}>
        <ToolbarButton className={styles.iconButton} icon={<GridDots24Filled color={tokens.colorBrandBackgroundInverted}/>} {...props.appLauncherButtonProps} aria-label='App launcher' title='App Launcher'/>
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
          <Toolbar >
            {props.commands.map((tab) => (
              <ToolbarButton
                className={styles.iconButton}
                key={tab.id}
                icon={renderIconWithColor(tab.icon, tokens.colorBrandBackgroundInverted)}
                value={tab.id}
                aria-label={tab.name}
                title={tab.name}
                {...tab.buttonProps}
              />
            ))}
          </Toolbar >
        </div>
      </div>
      <div className={styles.accountManager}>
        <Button className={styles.iconButton} appearance="transparent" icon={<Avatar {...props.avatar}/>} {...props.accountManager.buttonProps} aria-label={`Account Manager for ${props.accountManager.name}`} title={`Account Manager for ${props.accountManager.name}`}/>
      </div>
    </div>
  );
};

export default AppHeader;
