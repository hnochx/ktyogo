'use client';

import { icon_send } from '@/assets/images/images';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Inter } from 'next/font/google';
import { LeftChat } from '@/components/chatbot/LeftChat';
import { RightChat } from '@/components/chatbot/RightChat';
import { MenuButton } from '@/components/chatbot/MenuButton';
import { useFetchChatbot } from '@/hook/useChatbot';
import { ChatSkeleton } from '@/components/chatbot/ChatSkeleton';
import { WritingChat } from '@/components/chatbot/WritingChat';
import { AutoKeywordBox } from '@/components/chatbot/AutoKeywordBox';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const ChatBotMain = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  const [sendText, setSendText] = useState<string>('');
  const [msgArr, setMsgArr] = useState<msgType[]>([]);
  const [autoArr, setAutoArr] = useState<string[]>([]);
  const [filterArr, setFilterArr] = useState<string[]>([]);

  const msgRef = useRef<HTMLDivElement>(null);
  const fetchChatbot = useFetchChatbot();

  const sendMsg = (msg: string) => {
    if (msg.trim() !== '') {
      setMsgArr((msgList) => [
        ...msgList,
        { msgId: Date.now(), message: msg, created: new Date(), location: 'right', type: 'text' },
      ]);

      try {
        fetchChatbot.fetchData(msg).then((res) => {
          if (res) {
            setMsgArr((msgList) => [...msgList, { ...res, msgId: Date.now(), created: new Date(), location: 'left' }]);
          } else {
            setMsgArr((msgList) => [
              ...msgList,
              {
                type: 'text',
                message: `제가 잘 이해하지 못했어요. \nKT상품과 관련된 문의는 대답을 잘 할 수 있어요.\n`,
                msgId: Date.now(),
                created: new Date(),
                location: 'left',
              },
            ]);
          }
        });
      } catch (error) {
        alert('오류가 발생했습니다. \n에러 : ' + error);
      } finally {
        setSendText('');
      }
    }
  };

  const scrollBottom = () => {
    if (msgRef.current) {
      msgRef.current.scrollTop = msgRef.current.scrollHeight;
    }
  };

  const inputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      sendMsg(sendText);
    }
  };

  useEffect(() => {
    scrollBottom();
  }, [msgArr, sendText]);

  useEffect(() => {
    setFilterArr(autoArr.filter((auto) => auto.includes(sendText)));
  }, [sendText]);

  useEffect(() => {
    setMounted(true);
    sendMsg('요고 다이렉트');
    fetchChatbot.fetchAllTitle().then((res) => setAutoArr(res));
  }, []);

  return (
    mounted && (
      <div className="flex flex-col h-full">
        <div className="font-bold text-black text-lg text-center py-4 bg-white border-b-[0.5px] border-[#808080]">
          KT 요고 챗봇
        </div>
        <div ref={msgRef} className="flex-1 bg-[#F4F7FA] py-4 px-5 overflow-y-auto">
          <div>
            <div className="pt-5">
              <b className={`text-xl whitespace-pre-line ${inter.className}`}>
                고객님, 반가워요~ {'\n'}무엇이 궁금하신가요?
              </b>
            </div>
            <MenuButton
              menuArr={['iPhone16 Series', '요고 다이렉트', '알뜰할인 프로모션', '인터넷 TV 동시가입 혜택']}
              sendHandler={sendMsg}
            />

            {msgArr.map((msgItem, index) => {
              if (msgItem.location === 'left') {
                if (msgItem.buttonList && msgItem.buttonList?.length > 0) {
                  return (
                    <div key={index}>
                      <LeftChat msgInfo={msgItem} />
                      <MenuButton menuArr={msgItem.buttonList} sendHandler={sendMsg} />
                    </div>
                  );
                } else {
                  return <LeftChat key={index} msgInfo={msgItem} />;
                }
              } else if (msgItem.location === 'right') {
                return <RightChat key={index} msgInfo={msgItem} />;
              }
            })}
          </div>
          {fetchChatbot.isLoading && <ChatSkeleton />}
          {sendText.length > 0 && <WritingChat />}
        </div>

        {sendText.length > 0 && filterArr.length > 0 && (
          <AutoKeywordBox arr={filterArr} keyword={sendText} sendHandler={sendMsg} />
        )}
        <div className="py-2 px-3">
          <div className="flex items-center bg-[#F7F7F7] rounded-[30px] px-3 py-1">
            <input
              type="text"
              placeholder="요금제에 관해 궁금한 점을 물어보세요!"
              className="flex-1 bg-[#F7F7F7] text-sm"
              value={sendText}
              onChange={(e) => setSendText(e.target.value)}
              onKeyDown={(e) => inputEnter(e)}
            />
            <button type="button" onClick={() => sendMsg(sendText)} disabled={sendText.trim() === ''}>
              <Image src={icon_send} alt="send" className="w-[30px] h-[30px]" />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ChatBotMain;
