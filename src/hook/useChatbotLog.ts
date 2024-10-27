import { db } from '@/firebase/firebaseInitial';
import { doc, getDoc, setDoc, collection, getDocs, query, where, Timestamp } from 'firebase/firestore';

export const useFetchChatLog = () => {
  const findDocu = async (docNm: string) => {
    const docRef = doc(db, 'chatbotLog', docNm);
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? true : false;
  };

  let fieldData: chatbotColletion;

  const findField = async (ip: string) => {
    const queryDB = query(collection(db, 'chatbotLog'), where('ip', '==', ip));
    const snapshot = await getDocs(queryDB);

    snapshot.forEach((doc) => {
      fieldData = doc.data() as chatbotColletion;
    });

    return fieldData;
  };

  let findItem: chatLogType[];
  let elseItem: chatLogType[];

  const saveData = async (docuExist: boolean = false, ip: string, logItem: chatMsgType, firstTime: Timestamp) => {
    if (docuExist) {
      await findField(ip).then(async (res) => {
        findItem = res.chatLog.filter((log) => log.createTime.seconds === firstTime.seconds);
        elseItem = res.chatLog.filter((log) => log.createTime.seconds !== firstTime.seconds);

        setDoc(doc(db, 'chatbotLog', `${ip}`), {
          ip: ip,
          chatLog: [
            ...elseItem,
            {
              createTime: findItem.length > 0 ? findItem[0].createTime : firstTime,
              messageList: findItem.length > 0 ? [...findItem[0].messageList, logItem] : [logItem],
            },
          ],
        });
      });
    } else {
      await setDoc(doc(db, 'chatbotLog', `${ip}`), {
        ip: ip,
        chatLog: [
          {
            createTime: firstTime,
            messageList: [logItem],
          },
        ],
      });
    }
  };

  return { findDocu, findField, saveData };
};
