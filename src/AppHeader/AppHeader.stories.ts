import AppHeader from '.';
import { fn } from '@storybook/test';

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
};

export const DefaultState = {
  args: {
    productName: "Default Product",
    avatar: {
      name: "JD",
      badge: { status: 'available' }
    }
  }
};

export const NoImageAvatar = {
  args: {
    productName: "No Image Avatar",
    avatar: {
      name: "No Image Avatar",
      badge: { status: 'busy' }
    }
  }
};

export const BusyAvatar = {
  args: {
    productName: "Busy Avatar",
    avatar: {
      name: "Busy Avatar",
      badge: { status: 'busy' },
      image: { src: "https://randomuser.me/api/portraits/men/85.jpg" }
    }
  }
};

export const OutOfOfficeAvatar = {
  args: {
    productName: "Out Of Office Avatar",
    avatar: {
      name: "Out Of Office Avatar",
      badge: { status: 'out-of-office' },
      image: { src: "https://randomuser.me/api/portraits/men/85.jpg" }
    }
  }
};

export const AwayAvatar = {
  args: {
    productName: "Away Avatar",
    avatar: {
      name: "Away Avatar",
      badge: { status: 'away' },
      image: { src: "https://randomuser.me/api/portraits/men/85.jpg" }
    }
  }
};

export const AvailableAvatar = {
  args: {
    productName: "Available Avatar",
    avatar: {
      name: "Available Avatar",
      badge: { status: 'available' },
      image: { src: "https://randomuser.me/api/portraits/men/85.jpg" }
    }
  }
};

export const OfflineAvatar = {
  args: {
    productName: "Offline Avatar",
    avatar: {
      name: "Offline Avatar",
      badge: { status: 'offline' },
      image: { src: "https://randomuser.me/api/portraits/men/85.jpg" }
    }
  }
};

export const DoNotDisturbAvatar = {
  args: {
    productName: "Do Not Disturb Avatar",
    avatar: {
      name: "Do Not Disturb Avatar",
      badge: { status: 'do-not-disturb' },
      image: { src: "https://randomuser.me/api/portraits/men/85.jpg" }
    }
  }
};

export const UnknownAvatar = {
  args: {
    productName: "Unknown Avatar",
    avatar: {
      name: "Unknown Avatar",
      badge: { status: 'unknown' },
      image: { src: "https://randomuser.me/api/portraits/men/85.jpg" }
    }
  }
};

export const BlockedAvatar = {
  args: {
    productName: "Blocked Avatar",
    avatar: {
      name: "Blocked Avatar",
      badge: { status: 'blocked' },
      image: { src: "https://randomuser.me/api/portraits/men/85.jpg" }
    }
  }
};

export const DualStatesAvatar = {
  args: {
    productName: "Dual States Avatar",
    avatar: {
      name: "Dual States Avatar",
      badge: { status: 'available', outOfOffice: true },
      image: { src: "https://randomuser.me/api/portraits/men/85.jpg" }
    }
  }
};

export const Playground = {
  args: {
    productName: "Default Product",
    avatar: {
      name: "JD",
      badge: { status: 'available' }
    }
  }
};

// export const LoggedOut = {};
