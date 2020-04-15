import './index.scss'

import React from 'react';
import clsx from 'clsx';

import styled from 'styleguide/styled';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/Icon';

interface IComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The content of the label.
   */
  label?: React.ReactNode;
  /**
   * Error state. If used as string error text will appear below the input.
   */
  error?: boolean | React.ReactNode;
  /**
   * Success state. Makes icon green and adds default 'check-circle' icon.
   */
  success?: boolean;
  /**`
   * Name of an icon to dispay on the right side of the input.
   */
  icon?: IconName;
  /**`
   * Removes focus from input when "Enter" is pressed.
   */
  blurOnSubmit?: boolean;
  inputClassName?: string; 
  search?: boolean; 
}

const Input: React.FC<IComponentProps> = ({
  label,
  error,
  success,
  icon,
  blurOnSubmit,
  className,
  inputClassName,
  onKeyPress,
  search,
  ...props
}) => {
  if (success && !icon) icon = 'check-circle';

  const handleKeyPress = e => {
    if (blurOnSubmit && e.charCode === 13) e.target.blur();
    if (onKeyPress) onKeyPress(e);
  };

  return (
    <StyledInput className={clsx('input', { label, icon, error, success }, className)}>
      <label className={`custom-label`}>{label}</label>
      <div className="input-wrapper">
        <input onKeyPress={handleKeyPress} className={inputClassName} {...props} readOnly />
        {icon && (
        <Icon 
          name={icon} 
          className={`custom-icon ${success ? 'custom-icon--success' : error ? 'custom-icon--error': search ? 'custom-icon--search' : null }`}
        />)}
      </div>
      <div className="error-text">{error}</div>
    </StyledInput>
  );
};

export default Input;

const StyledInput = styled.div``;
