import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseInitial';

export const fetchChatbotData = async (title: string) => {
  try {
    const queryDB = query(collection(db, 'chatbot'), where('title', '==', title));
    const snapshot = await getDocs(queryDB);

    if (snapshot.docs.length === 0) {
      alert('조회된 데이터가 없습니다.');
      return;
    }

    const items: msgType[] = [];

    snapshot.forEach((doc) => {
      items.push(doc.data() as msgType);
    });

    return items[0];
  } catch (error) {
    alert('오류가 발생했습니다. \nFetch 에러 : ' + error);
  } finally {
  }
};
