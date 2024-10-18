// FilterHandler.tsx
import { PlanMeta } from '@/types/types';

type FilterHandlerProps = {
  allFilteredPlans: PlanMeta[];
  selectedMno: string[];
  selectedNets: string;
  selectedData: string;
};

interface MobileDataRange {
  min: number;
  max: number;
}

const mobileDataRanges: { [key: string]: MobileDataRange } = {
  '0~10GB': { min: 0, max: 10 },
  '10GB ~ 100GB': { min: 10, max: 100 },
  '110GB ~ 300GB': { min: 110, max: 300 },
  무제한: { min: 301, max: Infinity },
};

const FilterHandler = ({ allFilteredPlans, selectedMno, selectedNets, selectedData }: FilterHandlerProps) => {
  const filteredByMno =
    selectedMno.length > 0
      ? allFilteredPlans.filter((planMeta) => selectedMno.includes(planMeta.mno))
      : allFilteredPlans;

  const filteredByNets = selectedNets
    ? filteredByMno.filter((planMeta) => planMeta.net === selectedNets)
    : filteredByMno;

  // selectedData가 "무제한"인지 확인
  const finalFilteredPlans =
    selectedData === '무제한'
      ? filteredByNets.filter((planMeta) => planMeta.mobileDataStr === '무제한') // "무제한"인 경우만 필터링
      : selectedData
        ? filteredByNets.filter((planMeta) => {
            const dataAmount = parseInt(planMeta.mobileDataStr!);
            const selectedRange = mobileDataRanges[selectedData];

            return selectedRange ? dataAmount >= selectedRange.min && dataAmount <= selectedRange.max : false;
          })
        : filteredByNets;

  return finalFilteredPlans;
};

export default FilterHandler;
