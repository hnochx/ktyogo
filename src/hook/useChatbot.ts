import { db } from '@/firebase/firebaseInitial';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const useFetchChatbot = () => {
  const items: msgType[] = [];
  const titleArr: string[] = [];

  const fetchData = async (title: string) => {
    try {
      await new Promise((reslove) => setTimeout(reslove, 1500));

      const queryDB = query(collection(db, 'chatbot'), where('title', '==', title));
      const snapshot = await getDocs(queryDB);

      snapshot.forEach((doc) => {
        items.push(doc.data() as msgType);
      });
    } catch (error) {
      alert('오류가 발생했습니다. \nFetch 에러 : ' + error);
    }
    return items[0];
  };

  const fetchAllTitle = async () => {
    try {
      const queryDB = query(collection(db, 'chatbot'));
      const snapshot = await getDocs(queryDB);

      snapshot.forEach((doc) => {
        titleArr.push(doc.data().title);
      });
    } catch (error) {
      alert('오류가 발생했습니다. \nFetch 에러 : ' + error);
    } finally {
      return titleArr as string[];
    }
  };

  return { fetchData, fetchAllTitle };
};
