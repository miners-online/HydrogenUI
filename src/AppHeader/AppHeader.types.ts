import {
  AvatarProps,
  ButtonProps,
  InputProps,
} from '@fluentui/react-components';

export interface AppHeaderProps {
  productName: string;
  avatar: AvatarProps;
  commands: AppHeaderCommand[];
  accountManager: AccountManagerProps;
  appLauncherButtonProps?: Partial<
    Pick<ButtonProps, 'disabled' | 'disabledFocusable'>
  >;
  searchProps?: InputProps;
}

export type AppHeaderCommand = {
  id: string;
  name: string;
  icon: React.ReactElement;
  buttonProps?: Partial<Pick<ButtonProps, 'disabled' | 'disabledFocusable'>>;
};

export type AccountManagerProps = {
  name: string;
  buttonProps?: Partial<Pick<ButtonProps, 'disabled' | 'disabledFocusable'>>;
};
