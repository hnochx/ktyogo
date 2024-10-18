'use client';

import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../firebase/firestore';
import { PlanMeta } from '@/types/types';

export default function Page() {
  const [plans, setPlans] = useState<PlanMeta[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getDocs(collection(db, 'total_plan'));
      const planList: PlanMeta[] = [];

      results.forEach((doc) => {
        const data = doc.data();
        planList.push(data as PlanMeta);
      });
      setPlans(planList);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Plans</h1>
      <ul>
        {plans.map((plan, index) => (
          <li key={index}>{JSON.stringify(plan)}</li>
        ))}
      </ul>
    </div>
  );
}
