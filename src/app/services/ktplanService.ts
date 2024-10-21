import { collection, getDocs } from 'firebase/firestore';
import { KTPlan } from '@/types/types';
import db from '../../../firebase/firestore';

export const KTfetchPlans = async (): Promise<KTPlan[]> => {
  const results = await getDocs(collection(db, 'kt_plan'));
  const planList: KTPlan[] = [];

  results.forEach((doc) => {
    const data = doc.data();
    planList.push(data as KTPlan);
  });

  return planList;
};
