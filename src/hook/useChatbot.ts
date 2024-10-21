import { db } from '@/firebase/firebaseInitial';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react';

export const useFetchChatbot = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const items: msgType[] = [];

  const fetchData = async (title: string) => {
    try {
      setIsLoading(true);
      await new Promise((reslove) => setTimeout(reslove, 500));

      const queryDB = query(collection(db, 'chatbot'), where('title', '==', title));
      const snapshot = await getDocs(queryDB);

      snapshot.forEach((doc) => {
        items.push(doc.data() as msgType);
      });
    } catch (error) {
      alert('오류가 발생했습니다. \nFetch 에러 : ' + error);
    } finally {
      setIsLoading(false);
    }
    return items[0];
  };

  return { fetchData, isLoading };
};
