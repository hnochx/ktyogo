'use client';
import { icon_send } from '@/assets/images/images';
import Image from 'next/image';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import { LeftChat } from '@/components/chatbot/left-chat';
import { RightChat } from '@/components/chatbot/right-chat';
import { MenuButton } from '@/components/chatbot/menu-button';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const ChatBotMain = () => {
  const [sendText, setSendText] = useState<string>('');
  const sendMsg = (msg: string) => {
    if (msg.trim() !== '') {
      setSendText('');
    }
  };

  const inputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      sendMsg(sendText);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="font-bold text-black text-xl text-center py-4 bg-white">KT 요고 챗봇</div>
      <div className="flex-1 bg-[#F4F7FA] py-4 px-5 overflow-y-auto">
        <div className="pt-5">
          <b className={`text-xl whitespace-pre-line ${inter.className}`}>
            고객님, 반가워요~ {'\n'}무엇이 궁금하신가요?
          </b>
        </div>
        <MenuButton menuArr={['요고 요금제', '요고 요금제', '요고 요금제', '요고 요금제']} />

        <RightChat />
        <LeftChat />
        <MenuButton
          menuArr={['요고 69', '요고 61', '요고 55', '요고 49', '요고 46', '요고 44', '요고 42', '요고 38']}
        />
      </div>
      <div className="py-2 px-3">
        <div className="flex items-center bg-[#F7F7F7] rounded-[30px] px-3 py-1">
          <input
            type="text"
            placeholder="요금제에 관해 궁금한 점을 물어보세요!"
            className="flex-1 bg-[#F7F7F7]"
            value={sendText}
            onChange={(e) => setSendText(e.target.value)}
            onKeyDown={(e) => inputEnter(e)}
          />
          <button type="button" onClick={() => sendMsg(sendText)} disabled={sendText.trim() === ''}>
            <Image src={icon_send} alt="send" className="w-[5.5vw] h-[5.5vw]" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatBotMain;
