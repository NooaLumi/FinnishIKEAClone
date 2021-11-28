import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
 test('it displays a list of items', async () => {
   render(<App />);

   const itemList = await waitFor(() => screen.getByTestId('items-display'));
   expect(itemList).toBeInTheDocument();
 });
});