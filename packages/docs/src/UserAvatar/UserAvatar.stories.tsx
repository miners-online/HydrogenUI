import { User, UserAvatar } from "@miners-online/hydrogen-ui";

export default {
  title: "Components/UserAvatar",
  component: UserAvatar,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    user: new User(
      "1",
      "Jane Doe",
      "jane.doe@example.com",
      "https://via.placeholder.com/150",
    ),
    size: 32,
  },
};

export const NoAvatarUrl = {
  args: {
    user: new User(
      "2",
      "John Smith",
      "john.smith@example.com",
      undefined,
    ),
    size: 32,
  },
};

export const CustomSize = {
  args: {
    user: new User(
      "3",
      "Alice Johnson",
      "alice.johnson@example.com",
      "https://via.placeholder.com/150",
    ),
    size: 64,
  },
};

export const NoUser = {
  args: {
    user: undefined,
    size: 32,
  },
};
