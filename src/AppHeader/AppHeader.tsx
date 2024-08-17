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
    color: tokens.colorBrandBackgroundInverted,
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
        <Button appearance="transparent" icon={<GridDots24Filled color={tokens.colorBrandBackgroundInverted}/>} aria-label='App launcher' title='App Launcher'/>
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
                key={tab.id}
                icon={renderIconWithColor(tab.icon, tokens.colorBrandBackgroundInverted)}
                value={tab.id}
                {...tab.buttonProps}
              />
            ))}
            {/* <ToolbarButton icon={<Emoji24Regular color={tokens.colorBrandBackgroundInverted}/>} value="tab1"></ToolbarButton>
            <ToolbarButton icon={<Edit24Regular color={tokens.colorBrandBackgroundInverted}/>} value="tab2"></ToolbarButton>
            <ToolbarButton icon={<Settings24Regular color={tokens.colorBrandBackgroundInverted}/>} value="tab3"></ToolbarButton>
            <ToolbarButton icon={<Question24Filled color={tokens.colorBrandBackgroundInverted}/>}  value="tab4"></ToolbarButton> */}
          </Toolbar >
        </div>
      </div>
      <div className={styles.accountManager}>
        <Avatar {...props.avatar} />
      </div>
    </div>
  );
};

export default AppHeader;
