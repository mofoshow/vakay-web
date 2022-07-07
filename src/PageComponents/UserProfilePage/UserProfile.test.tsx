import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserProfilePage } from '.';
import { mockUserData } from '../../../mocks/userData';

test('loads and displays greeting', async () => {
  render(<UserProfilePage user={mockUserData} />);

  // fireEvent.click(screen.getByText('Load Greeting'))

  // await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByRole('div')).toHaveTextContent(mockUserData.name);
  expect(screen.getByRole('button')).toBeDisabled();
});

// describe('App', () => {
//   it('should dispjkl', () => {
//     expect(screen.getByRole('button')).toBeDisabled();

//   })


// });
