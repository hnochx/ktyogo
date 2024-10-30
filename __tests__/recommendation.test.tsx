import Recommendation from '@/app/(Layout)/directChangeRate/recommendation/page';
import fetchPlan from '@/services/planServices';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

jest.mock('../src/services/planServices', () => ({
  __esModule: true,
  default: jest.fn(() =>
    Promise.resolve([
      {
        planMetas: [
          { mno: 'KT', mobileDataStr: '10GB', fee: 32000 },
          { mno: 'KT', mobileDataStr: '5GB', fee: 30000 },
        ],
      },
    ]),
  ),
}));

describe('recommendation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('통신사, 데이터, 월요금제양 선택', async () => {
    render(<Recommendation />);

    fireEvent.click(screen.getByText('KT'));
    await waitFor(() => expect(screen.getByText('1GB ~ 10GB')).toBeInTheDocument());

    fireEvent.click(screen.getByText('1GB ~ 10GB'));
    await waitFor(() => expect(screen.getByText('3만원대')).toBeInTheDocument());

    fireEvent.click(screen.getByText('3만원대'));

    expect(await screen.findByText(/분석 후 딱 맞는 /i)).toBeInTheDocument();
    expect(await screen.findByText(/요금제를 보여드릴게요!/i)).toBeInTheDocument();
  });

  it('선택한 조건에 대한 데이터 반환', async () => {
    const result = await fetchPlan('g0vgJer9zDCnuz5ZgxuH');
    const allPlans = result.flatMap((plan) => plan.planMetas);

    expect(allPlans).toEqual([
      { mno: 'KT', mobileDataStr: '10GB', fee: 32000 },
      { mno: 'KT', mobileDataStr: '5GB', fee: 30000 },
    ]);
  });
});
