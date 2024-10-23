import { KTPlan } from '@/types/types';
import PlanCalcBottom from './plan-calc-bottom';
import PlanCalcTop from './plan-calc-top';
import { useEffect, useState } from 'react';

interface PlanCalcProps {
  list: KTPlan[];
}

const PlanCalc = ({ list }: PlanCalcProps) => {
  const [selectedPlan, setSelectedPlan] = useState<KTPlan | null>(null); // 선택된 요금제

  useEffect(() => {
    if (list.length > 0) {
      setSelectedPlan(list[0]);
    }
  }, [list]);

  return (
    <>
      <PlanCalcTop list={list} setSelectedPlan={setSelectedPlan} selectedPlan={selectedPlan} />
      <PlanCalcBottom selectedPlan={selectedPlan} />
    </>
  );
};
export default PlanCalc;
