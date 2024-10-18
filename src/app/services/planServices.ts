import { doc, getDoc } from 'firebase/firestore';

import { PlanData } from '@/types/types';
import db from '../../../firebase/firestore';

const fetchPlan = async (planId: string) => {
  const planRef = doc(db, 'total_plan', planId); // 문서 참조 생성

  const docSnap = await getDoc(planRef);
  if (docSnap.exists()) {
    return [docSnap.data() as PlanData]; // 데이터가 있을 경우 배열로 반환
  } else {
    return [];
  }
};

export default fetchPlan;
