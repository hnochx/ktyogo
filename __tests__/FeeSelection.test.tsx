import FeeSelection from '@/components/Recommend/FeeSelection';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

describe('FeeSelection', () => {
  it('should call onFeeSelect with correct value when fee range is selected', async () => {
    const handleFeeSelect = jest.fn();
    const handlePrevious = jest.fn();
    render(<FeeSelection onFeeSelect={handleFeeSelect} onPrevious={handlePrevious} />);

    fireEvent.click(screen.getByText('3만원대')); //

    await waitFor(() => {
      expect(handleFeeSelect).toHaveBeenCalledWith('3만원대');
    });
  });
});
