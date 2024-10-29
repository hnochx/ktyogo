// DataAmountSelection.test.tsx
import DataAmountSelection from '@/components/Recommend/DataAmountSelection';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

describe('DataAmountSelection', () => {
  it('1GB ~ 10GB 선택하기', async () => {
    const handleDataAmountSelect = jest.fn();
    const handlePrevious = jest.fn();
    render(<DataAmountSelection onDataAmountSelect={handleDataAmountSelect} onPrevious={handlePrevious} />);

    fireEvent.click(screen.getByText('1GB ~ 10GB'));

    await waitFor(() => {
      expect(handleDataAmountSelect).toHaveBeenCalledWith('1GB ~ 10GB');
    });
  });
});
