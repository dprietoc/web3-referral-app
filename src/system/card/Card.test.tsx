import { render, fireEvent } from '@testing-library/react';
import Card, { CardProps } from './Card';

describe('Card component', () => {
  const props: CardProps = {
    buttonText: 'Click me',
    category: 'Test category',
    editions: '10',
    imageSrc: 'https://example.com/image.jpg',
    title: 'Test title',
    onButtonClick: jest.fn(),
  };

  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<Card {...props} />);
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.category)).toBeInTheDocument();
    expect(getByText(`Ediciones: ${props.editions}`)).toBeInTheDocument();
    expect(getByAltText(props.title)).toBeInTheDocument();
  });

  it('calls onButtonClick when button is clicked', () => {
    const { getByText } = render(<Card {...props} />);
    const button = getByText(props.buttonText);
    fireEvent.click(button);
    expect(props.onButtonClick).toHaveBeenCalledTimes(1);
  });

  it('disables button when disabled prop is true', () => {
    const disabledProps: CardProps = { ...props, disabled: true };
    const { getByText } = render(<Card {...disabledProps} />);
    const button = getByText(props.buttonText);
    expect(button).toBeDisabled();
  });

  it('renders image with correct src and alt', () => {
    const { getByAltText } = render(<Card {...props} />);
    const image = getByAltText(props.title);
    expect(image).toHaveAttribute('src', props.imageSrc);
  });
});