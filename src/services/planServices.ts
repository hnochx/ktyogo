import { doc, getDoc } from 'firebase/firestore';

import { PlanData } from '@/types/types';
import { db } from '@/firebase/firebaseInitial';

const fetchPlan = async (planId: string) => {
  const planRef = doc(db, 'total_plan', planId);
  const docSnap = await getDoc(planRef);
  if (docSnap.exists()) {
    return [docSnap.data() as PlanData];
  } else {
    return [];
  }
};

export default fetchPlan;
