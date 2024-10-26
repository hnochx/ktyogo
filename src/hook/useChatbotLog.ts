import { db } from '@/firebase/firebaseInitial';
import { doc, getDoc, setDoc, collection, getDocs, query, where } from 'firebase/firestore';

export const useFetchChatLog = () => {
  const findDocu = async (docNm: string) => {
    const docRef = doc(db, 'chatbotLog', docNm);
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? true : false;
  };

  let fieldData: chatLogField;

  const findField = async (ip: string, createTime: Date) => {
    const queryDB = query(collection(db, 'chatbotLog'), where('createTime', '==', createTime), where('ip', '==', ip));
    const snapshot = await getDocs(queryDB);

    snapshot.forEach((doc) => {
      fieldData = doc.data() as chatLogField;
    });
  };

  const saveData = async (docuExist: boolean = false, ip: string, logItem: chatLogType, firstTime: Date) => {
    await setDoc(doc(db, 'chatbotLog', `${ip}_${firstTime}`), {
      ip: ip,
      createTime: docuExist ? fieldData.createTime : firstTime,
      chatLog: docuExist ? [...fieldData.chatLog, logItem] : [logItem],
    });
  };

  return { findDocu, findField, saveData };
};
