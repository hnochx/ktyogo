// FilterHandler.tsx
import { PlanMeta } from '@/types/types';

type FilterHandlerProps = {
  filteredPlans: PlanMeta[];
  selectedMno: string[];
  selectedNets: string;
};

const FilterHandler = ({ filteredPlans, selectedMno, selectedNets }: FilterHandlerProps) => {
  const filteredByMno =
    selectedMno.length > 0 ? filteredPlans.filter((planMeta) => selectedMno.includes(planMeta.mno)) : filteredPlans;

  // 망 종류에 따른 필터링
  const filteredByNets = selectedNets
    ? filteredByMno.filter((planMeta) => planMeta.net === selectedNets)
    : filteredByMno;

  return filteredByNets;
};

export default FilterHandler;
