import CarrierSelection from '@/components/Recommend/CarrierSelection';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

describe('CarrierSelection', () => {
  it('KT선택하기', async () => {
    const handleCarrierSelect = jest.fn();
    render(<CarrierSelection onCarrierSelect={handleCarrierSelect} />);

    fireEvent.click(screen.getByText('KT'));

    await waitFor(() => {
      expect(handleCarrierSelect).toHaveBeenCalledWith('KT');
    });
  });
});
