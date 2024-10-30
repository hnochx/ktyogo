import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import ChatBotMain from '@/app/(NoLayout)/chatbot/page';

describe('ChatBotMain', () => {
  act(() => render(<ChatBotMain />));
  const iPhone = screen.getByText('iPhone16 Series');

  it('메인페이지 초기 렌더링', () => {
    const main = screen.getByText('KT 요고 챗봇');
    expect(main).toBeInTheDocument();
    expect(iPhone).toBeInTheDocument();
  });

  it('첫 통신 확인', () => {
    waitFor(() => expect(screen.findByText('내 맘대로 고를 수 있는 요금제')).toBeInTheDocument());
  });

  it('iPhone16 Series 버튼 클릭 후 통신', () => {
    fireEvent.click(iPhone);
    waitFor(() => expect(screen.findByText('iPhone16도 역시 KT닷컴!')).toBeInTheDocument());
  });
});

const chatbot = require('../src/hook/useChatbot');

chatbot.fetchAllTitle = jest.fn();
chatbot.fetchData = jest.fn();
const chatData = chatbot.fetchData;
const allTItle = chatbot.fetchAllTitle;

describe('firestore func test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('call item', () => {
    chatbot.fetchData('요고 69');
    expect(chatData).toHaveBeenCalledTimes(1);
    expect(chatData).toHaveBeenCalledWith('요고 69');
  });

  it('call title in db', async () => {
    chatbot.fetchAllTitle();
    expect(allTItle).toHaveBeenCalledTimes(1);
    expect(allTItle).toHaveBeenCalledWith();
  });
});
