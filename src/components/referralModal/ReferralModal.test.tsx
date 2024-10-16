// import '@testing-library/jest-dom';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import ReferralModal from './ReferralModal';
// import { Project } from '../../types';

// describe('ReferralModal component', () => {
//   const project: Project = {
//     id: '123',
//     apiKey: 'api-key',
//     name: 'Project Name',
//     description: 'Project Description',
//     logoUrl: 'https://example.com/logo.png',
//     referralReward: '10%',
//     incentives: ['Incentive 1', 'Incentive 2'],
//     primaryColor: '#333',
//     secondaryColor: '#666',
//   };

//   it('renders correctly when isOpen is true', () => {
//     const { getByText, getByRole } = render(
//       <ReferralModal
//         walletAddress="0x1234567890"
//         project={project}
//         isOpen={true}
//         onClose={() => {}}
//       />
//     );

//     expect(getByText('Project Name')).toBeInTheDocument();
//     expect(getByText('Project Description')).toBeInTheDocument();
//     expect(getByText('10%')).toBeInTheDocument();
//     expect(getByText('Incentive 1')).toBeInTheDocument();
//     expect(getByText('Incentive 2')).toBeInTheDocument();
//     expect(getByRole('button', { name: 'X' })).toBeInTheDocument();
//   });

//   it('renders nothing when isOpen is false', () => {
//     const { queryByText } = render(
//       <ReferralModal
//         walletAddress="0x1234567890"
//         project={project}
//         isOpen={false}
//         onClose={() => {}}
//       />
//     );

//     expect(queryByText('Project Name')).not.toBeInTheDocument();
//   });

//   it('calls onClose when close button is clicked', () => {
//     const onClose = jest.fn();
//     const { getByRole } = render(
//       <ReferralModal
//         walletAddress="0x1234567890"
//         project={project}
//         isOpen={true}
//         onClose={onClose}
//       />
//     );

//     const closeButton = getByRole('button', { name: 'X' });
//     fireEvent.click(closeButton);

//     expect(onClose).toHaveBeenCalledTimes(1);
//   });

//   it('copies referral link to clipboard when copy button is clicked', async () => {
//     const { getByText } = render(
//       <ReferralModal
//         walletAddress="0x1234567890"
//         project={project}
//         isOpen={true}
//         onClose={() => {}}
//       />
//     );

//     const copyButton = getByText('Copy');
//     fireEvent.click(copyButton);

//     await waitFor(() => expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1));
//     expect(navigator.clipboard.writeText).toHaveBeenCalledWith('https://example.com/?referrer=0x1234567890');
//   });
// });