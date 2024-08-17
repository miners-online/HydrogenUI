import { AvatarProps, ButtonProps } from '@fluentui/react-components';

export interface AppHeaderProps {
  productName: string;
  avatar: AvatarProps;
  commands: AppHeaderCommand[];
}

export type AppHeaderCommand = {
  id: string;
  name: string;
  icon: React.ReactElement;
  buttonProps?: Partial<Pick<ButtonProps, 'disabled' | 'disabledFocusable'>>;
};
