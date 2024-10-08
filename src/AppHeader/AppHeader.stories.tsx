import { Edit24Regular, Emoji24Regular, Question24Filled, Settings24Regular, AccessTime24Regular } from '@fluentui/react-icons';
import AppHeader from '.';
import { fn } from '@storybook/test';
import React from 'react';

export default {
  title: 'Components/Navigation/AppHeader',
  component: AppHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // args: {
  //   onLogin: fn(),
  //   onLogout: fn(),
  //   onCreateAccount: fn(),
  // },
  args: {
    searchProps: {
      onChange: fn()
    }
  }
};

export const DefaultState = {
  args: {
    productName: 'Default Product',
    avatar: {
      name: 'John Doe',
      badge: { status: 'available' },
    },
    accountManager: {
      name: 'John Doe',
      buttonProps: {
        onClick: fn()
      }
    },
    appLauncherButtonProps: {
      onClick: fn()
    },
    commands: [
      {
        id: 'feedback',
        name: 'Feedback',
        icon: <Emoji24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'edit',
        name: 'Edit',
        icon: <Edit24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'settings',
        name: 'Settings',
        icon: <Settings24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'help',
        name: 'Help',
        icon: <Question24Filled/>,
        buttonProps: {
          onClick: fn()
        }
      },
    ],
  },
};

export const NoImageAvatar = {
  args: {
    productName: 'No Image Avatar',
    avatar: {
      name: 'No Image Avatar',
      badge: { status: 'busy' },
    },
    accountManager: {
      name: 'No Image Avatar',
      buttonProps: {
        onClick: fn()
      }
    },
    appLauncherButtonProps: {
      onClick: fn()
    },
    commands: [
      {
        id: 'feedback',
        name: 'Feedback',
        icon: <Emoji24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'edit',
        name: 'Edit',
        icon: <Edit24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'settings',
        name: 'Settings',
        icon: <Settings24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'help',
        name: 'Help',
        icon: <Question24Filled/>,
        buttonProps: {
          onClick: fn()
        }
      },
    ],
  },
};

export const BusyAvatar = {
  args: {
    productName: 'Busy Avatar',
    avatar: {
      name: 'Busy Avatar',
      badge: { status: 'busy' },
      image: { src: 'https://randomuser.me/api/portraits/men/85.jpg' },
    },
    accountManager: {
      name: 'Busy Avatar',
      buttonProps: {
        onClick: fn()
      }
    },
    appLauncherButtonProps: {
      onClick: fn()
    },
    commands: [
      {
        id: 'feedback',
        name: 'Feedback',
        icon: <Emoji24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'edit',
        name: 'Edit',
        icon: <Edit24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'settings',
        name: 'Settings',
        icon: <Settings24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'help',
        name: 'Help',
        icon: <Question24Filled/>,
        buttonProps: {
          onClick: fn()
        }
      },
    ],
  },
};

export const OutOfOfficeAvatar = {
  args: {
    productName: 'Out Of Office Avatar',
    avatar: {
      name: 'Out Of Office Avatar',
      badge: { status: 'out-of-office' },
      image: { src: 'https://randomuser.me/api/portraits/men/85.jpg' },
    },
    accountManager: {
      name: 'Out Of Office Avatar',
      buttonProps: {
        onClick: fn()
      }
    },
    appLauncherButtonProps: {
      onClick: fn()
    },
    commands: [
      {
        id: 'feedback',
        name: 'Feedback',
        icon: <Emoji24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'edit',
        name: 'Edit',
        icon: <Edit24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'settings',
        name: 'Settings',
        icon: <Settings24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'help',
        name: 'Help',
        icon: <Question24Filled/>,
        buttonProps: {
          onClick: fn()
        }
      },
    ],
  },
};

export const AwayAvatar = {
  args: {
    productName: 'Away Avatar',
    avatar: {
      name: 'Away Avatar',
      badge: { status: 'away' },
      image: { src: 'https://randomuser.me/api/portraits/men/85.jpg' },
    },
    accountManager: {
      name: 'Away Avatar',
      buttonProps: {
        onClick: fn()
      }
    },
    appLauncherButtonProps: {
      onClick: fn()
    },
    commands: [
      {
        id: 'feedback',
        name: 'Feedback',
        icon: <Emoji24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'edit',
        name: 'Edit',
        icon: <Edit24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'settings',
        name: 'Settings',
        icon: <Settings24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'help',
        name: 'Help',
        icon: <Question24Filled/>,
        buttonProps: {
          onClick: fn()
        }
      },
    ],
  },
};

export const AvailableAvatar = {
  args: {
    productName: 'Available Avatar',
    avatar: {
      name: 'Available Avatar',
      badge: { status: 'available' },
      image: { src: 'https://randomuser.me/api/portraits/men/85.jpg' },
    },
    accountManager: {
      name: 'Available Avatar',
      buttonProps: {
        onClick: fn()
      }
    },
    appLauncherButtonProps: {
      onClick: fn()
    },
    commands: [
      {
        id: 'feedback',
        name: 'Feedback',
        icon: <Emoji24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'edit',
        name: 'Edit',
        icon: <Edit24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'settings',
        name: 'Settings',
        icon: <Settings24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'help',
        name: 'Help',
        icon: <Question24Filled/>,
        buttonProps: {
          onClick: fn()
        }
      },
    ],
  },
};

export const OfflineAvatar = {
  args: {
    productName: 'Offline Avatar',
    avatar: {
      name: 'Offline Avatar',
      badge: { status: 'offline' },
      image: { src: 'https://randomuser.me/api/portraits/men/85.jpg' },
    },
    accountManager: {
      name: 'Offline Avatar',
      buttonProps: {
        onClick: fn()
      }
    },
    appLauncherButtonProps: {
      onClick: fn()
    },
    commands: [
      {
        id: 'feedback',
        name: 'Feedback',
        icon: <Emoji24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'edit',
        name: 'Edit',
        icon: <Edit24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'settings',
        name: 'Settings',
        icon: <Settings24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'help',
        name: 'Help',
        icon: <Question24Filled/>,
        buttonProps: {
          onClick: fn()
        }
      },
    ],
  },
};

export const DoNotDisturbAvatar = {
  args: {
    productName: 'Do Not Disturb Avatar',
    avatar: {
      name: 'Do Not Disturb Avatar',
      badge: { status: 'do-not-disturb' },
      image: { src: 'https://randomuser.me/api/portraits/men/85.jpg' },
    },
    accountManager: {
      name: 'Do Not Disturb Avatar',
      buttonProps: {
        onClick: fn()
      }
    },
    appLauncherButtonProps: {
      onClick: fn()
    },
    commands: [
      {
        id: 'feedback',
        name: 'Feedback',
        icon: <Emoji24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'edit',
        name: 'Edit',
        icon: <Edit24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'settings',
        name: 'Settings',
        icon: <Settings24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'help',
        name: 'Help',
        icon: <Question24Filled/>,
        buttonProps: {
          onClick: fn()
        }
      },
    ],
  },
};

export const UnknownAvatar = {
  args: {
    productName: 'Unknown Avatar',
    avatar: {
      name: 'Unknown Avatar',
      badge: { status: 'unknown' },
      image: { src: 'https://randomuser.me/api/portraits/men/85.jpg' },
    },
    accountManager: {
      name: 'Unknown Avatar',
      buttonProps: {
        onClick: fn()
      }
    },
    appLauncherButtonProps: {
      onClick: fn()
    },
    commands: [
      {
        id: 'feedback',
        name: 'Feedback',
        icon: <Emoji24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'edit',
        name: 'Edit',
        icon: <Edit24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'settings',
        name: 'Settings',
        icon: <Settings24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'help',
        name: 'Help',
        icon: <Question24Filled/>,
        buttonProps: {
          onClick: fn()
        }
      },
    ],
  },
};

export const BlockedAvatar = {
  args: {
    productName: 'Blocked Avatar',
    avatar: {
      name: 'Blocked Avatar',
      badge: { status: 'blocked' },
      image: { src: 'https://randomuser.me/api/portraits/men/85.jpg' },
    },
    accountManager: {
      name: 'Blocked Avatar',
      buttonProps: {
        onClick: fn()
      }
    },
    appLauncherButtonProps: {
      onClick: fn()
    },
    commands: [
      {
        id: 'feedback',
        name: 'Feedback',
        icon: <Emoji24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'edit',
        name: 'Edit',
        icon: <Edit24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'settings',
        name: 'Settings',
        icon: <Settings24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'help',
        name: 'Help',
        icon: <Question24Filled/>,
        buttonProps: {
          onClick: fn()
        }
      },
    ],
  },
};

export const DualStatesAvatar = {
  args: {
    productName: 'Dual States Avatar',
    avatar: {
      name: 'Dual States Avatar',
      badge: { status: 'available', outOfOffice: true },
      image: { src: 'https://randomuser.me/api/portraits/men/85.jpg' },
    },
    accountManager: {
      name: 'Dual States Avatar',
      buttonProps: {
        onClick: fn()
      }
    },
    appLauncherButtonProps: {
      onClick: fn()
    },
    commands: [
      {
        id: 'feedback',
        name: 'Feedback',
        icon: <Emoji24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'edit',
        name: 'Edit',
        icon: <Edit24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'settings',
        name: 'Settings',
        icon: <Settings24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'help',
        name: 'Help',
        icon: <Question24Filled/>,
        buttonProps: {
          onClick: fn()
        }
      },
    ],
  },
};

export const DifferentCommands = {
  args: {
    productName: 'Different Commands',
    avatar: {
      name: 'Different Commands Avatar',
      badge: { status: 'available', outOfOffice: true },
      image: { src: 'https://randomuser.me/api/portraits/men/85.jpg' },
    },
    accountManager: {
      name: 'Different Commands Avatar',
      buttonProps: {
        onClick: fn()
      }
    },
    appLauncherButtonProps: {
      onClick: fn()
    },
    commands: [
      {
        id: 'feedback',
        name: 'Feedback',
        icon: <Emoji24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'help',
        name: 'Help',
        icon: <Question24Filled/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'access-time',
        name: 'Access Time',
        icon: <AccessTime24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
    ],
  },
};

export const Playground = {
  args: {
    productName: 'Default Product',
    avatar: {
      name: 'John Doe',
      badge: { status: 'available' },
    },
    accountManager: {
      name: 'John Doe',
      buttonProps: {
        onClick: fn()
      }
    },
    appLauncherButtonProps: {
      onClick: fn()
    },
    commands: [
      {
        id: 'feedback',
        name: 'Feedback',
        icon: <Emoji24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'edit',
        name: 'Edit',
        icon: <Edit24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'settings',
        name: 'Settings',
        icon: <Settings24Regular/>,
        buttonProps: {
          onClick: fn()
        }
      },
      {
        id: 'help',
        name: 'Help',
        icon: <Question24Filled/>,
        buttonProps: {
          onClick: fn()
        }
      },
    ],
  },
};

// export const LoggedOut = {};
