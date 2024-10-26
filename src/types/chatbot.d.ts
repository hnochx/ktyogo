type msgType = {
  msgId: number; // 메세지 고유 아이디
  message: string; // 메세지 내용
  img?: string | StaticImport; // 메세지 이미지
  created: Date; // 채팅 시간
  location: 'left' | 'right'; // 메세지 창 내 위치
  type: 'card' | 'text'; // 메세지 타입
  buttonList?: string[]; // 하단 버튼 배열
  chipList?: { displayText: string; pageUrl: string }[]; // 메세지 내 하단 버튼
};

type chatMsgType = 'button' | 'input';

type chatLogType = {
  type: chatMsgType;
  text: string;
  chatTime: Date;
};

type chatLogField = {
  createTime: Date;
  ip: string;
  chatLog: [
    {
      type: chatMsgType;
      text: string;
      chatTime: Date;
    },
  ];
};
