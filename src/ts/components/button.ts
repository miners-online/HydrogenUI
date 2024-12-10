import '../../scss/index.scss';
import '../../scss/components/button.scss';

export interface ButtonProps {
    primary: boolean;
    size: "small" | "medium" | "large";
    backgroundColor: string;
    label: string;
    onClick: any;
}

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}: ButtonProps) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = label;
    btn.addEventListener('click', onClick);

    const mode = primary ? 'button--primary' : 'button--secondary';
    btn.className = ['button', `button--${size}`, mode, 'fg-white', 'bg-info'].join(' ');

    btn.style.backgroundColor = backgroundColor;

    return btn;
};
