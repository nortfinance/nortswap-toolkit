import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import bunnyHeadMain from "./svg/bunnyhead.svg"; 
import bunnyButt from "./svg/bunnybutt.svg";

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax?: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "cursor";
};

const getBaseThumbStyles = ({ disabled }: StyledInputProps) => `
  -webkit-appearance: none;
  background-image: url(${bunnyHeadMain});
  background-color: transparent; 
  background-repeat: no-repeat;
  border: 0;
  cursor: ${getCursorStyle};
  width: 24px;
  height: 32px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transform: translate(-2px, 11.7px);
  transition: 200ms transform;

  &:hover {
    transform: ${disabled ? "scale(1) translate(-2px, 11.5px)" : "scale(1.1) translate(-3px, 11.7px)"};
  }
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const BunnyButt = styled.div<DisabledProp>`
  background: url(${bunnyButt}) no-repeat;
  height: 32px;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  position: absolute;
  transform: translate(-10px, 14px);
  width: 24px;
`;

export const BunnySlider = styled.div`
  position: absolute;
  left: 14px;
  width: calc(100% - 14px);
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;

  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }

  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }

  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) => theme.colors[disabled ? "textDisabled" : "inputSecondary"]};
  height: 2px;
  position: absolute;
  top: 18px;
  width: 97%;
`;

export const BarProgress = styled.div<StyledInputProps>`
  background-color: ${({ theme, isMax }) => theme.colors[isMax ? 'secondary' : 'primary']};
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  height: 10px;
  position: absolute;
  top: 18px;
`;
