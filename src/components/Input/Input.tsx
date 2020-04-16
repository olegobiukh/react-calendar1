import React from 'react';
import clsx from 'clsx';

import styled from 'styleguide/styled';
import Icon from 'components/Icon';
import { colors, misc } from 'styleguide/theme.json';

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

const borderRadius = misc.borderRadius;

const Label = styled.label`
  font-size: 10px;
`;
const ErrorText = styled.div`
  color: ${colors.red};
`;
const InputWrapper = styled.div`
  position: relative;
  max-width: 300px;
`;

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

  const CustomInput = styled.input`
    width: 100%;
    font-size: 12px;
    margin-top: 4px;
    padding: 8px 12px;
    border-radius: ${borderRadius};
    border: 1px solid;
    box-sizing: border-box;
    border-color: ${error ? colors.red : colors.alto};
    color: ${search && colors.grayDark};
  `;

  const StyledCustomIcon = styled(Icon)`
    position: absolute;
    right: 12px;
    bottom: 9px;
    fill: ${success ? colors.green : error ? colors.red : search ? colors.gray : null};
  `;

  if (success && !icon) icon = 'check-circle';

  const handleKeyPress = (e) => {
    if (blurOnSubmit && e.charCode === 13) e.target.blur();
    if (onKeyPress) onKeyPress(e);
  };

  return (
    <StyledInput className={clsx('input', { label, icon, error, success }, className)}>
      <Label>{label}</Label>
      <InputWrapper>
        <CustomInput onKeyPress={handleKeyPress} className={inputClassName} {...props} readOnly />
        {icon && <StyledCustomIcon name={icon} />}
      </InputWrapper>
      <ErrorText>{error}</ErrorText>
    </StyledInput>
  );
};

export default Input;

const StyledInput = styled.div``;
