import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
  const props = {
    isOpen: true,
    onClose: jest.fn(),
    children: <div>Modal content</div>,
    borderColor: 'black',
    color: 'white',
  };

  it('renders correctly when isOpen is true', () => {
    const { getByText } = render(<Modal {...props} />);
    expect(getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    const { queryByText } = render(<Modal {...props} isOpen={false} />);
    expect(queryByText('Modal content')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const { getByText } = render(<Modal {...props} />);
    const closeButton = getByText('X');
    fireEvent.click(closeButton);
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Modal {...props} />);
    expect(getByText('Modal content')).toBeInTheDocument();
  });
});