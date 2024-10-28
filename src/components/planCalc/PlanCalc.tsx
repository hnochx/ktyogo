import { KTPlan } from '@/types/types';
import PlanCalcBottom from './PlanCalcBottom';
import PlanCalcTop from './PlanCalcTop';
import { useEffect, useState } from 'react';

interface PlanCalcProps {
  list: KTPlan[];
}

const PlanCalc = ({ list }: PlanCalcProps) => {
  const [selectedPlan, setSelectedPlan] = useState<KTPlan | null>(null); // 선택된 요금제
  // const [processedData, setProcessedData] = useState<KTPlan[] | []>([]); // 가공된 요금제 데이터

  useEffect(() => {
    // setProcessedData(list);
    if (list.length > 0) {
      setSelectedPlan(list[6]);
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
