import { PlanMeta } from '@/types/types';

export const sortPlansByData = (plans: PlanMeta[], isAscending: boolean): PlanMeta[] => {
  return [...plans].sort((a, b) => {
    const dataA = parseInt(a.mobileDataStr!);
    const dataB = parseInt(b.mobileDataStr!);

    if (isNaN(dataA) || isNaN(dataB)) return 0;
    return isAscending ? dataA - dataB : dataB - dataA;
  });
};
