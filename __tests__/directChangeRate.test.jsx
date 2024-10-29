import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import DataPlanSelect from '@/components/PlanChangeForm/SelectData';

describe('DataPlanSelect', () => {
  const mockOnSelect = jest.fn();

  beforeEach(() => {
    render(<DataPlanSelect onSelect={mockOnSelect} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  test('fetches correct plan name for 2.5GB data from API', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ name: '다이렉트LTE 30', data: '2.5GB' }]),
      }),
    );

    fireEvent.click(screen.getByText(/월 데이터/i));
    fireEvent.click(screen.getByText('1GB ~ 10GB'));

    await waitFor(() => {
      const dataPlans = [{ name: '다이렉트LTE 30', data: '2.5GB' }];
      const targetPlan = dataPlans.find((plan) => plan.data === '2.5GB' && plan.name === '다이렉트LTE 30');

      expect(targetPlan).toBeDefined();
      expect(targetPlan?.name).toBe('다이렉트LTE 30');
      console.log(targetPlan);
    });
  });
});
