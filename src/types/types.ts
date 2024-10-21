export type PlanMeta = {
  mno: string;
  mvno: string;
  name: string;
  fee: number;
  feeString: string;
  isEsim: boolean;
  isSupportUsimOrder: boolean;
  net: string;
  mobileData: number;
  mobileData2: number;
  mobileDataTotal: number;
  mobileDataDescription: string;
  mobileDataStandard: string;
  mobileDataStr?: string;
  mobileDataString: string;
  mobileDataDateExhaustedDescription: string;
  mobileMessage: number;
  mobileVoice: number;
  mobileSignupUrl?: string; // 선택적 속성
  mobileTransferPartnerLink: string;
  speedWhenExhausted: number;
  mobileDataLimit?: number;
  signupUrl?: string; // 선택적 속성
  speedWhenExhaustedDescription?: string;
  additionalWhenExhausted?: string; // 선택적 속성
  twMonthFee: number;
  giftList?: GiftMeta[]; // 선택적 속성
};

export type PlanData = {
  planMetas: PlanMeta[]; // 여기에서 PlanMeta 배열로 수정
  totalSize: number;
};

type GiftMeta = {
  category: string;
  description: string;
  eventTitle: string;
  receiptDate: string;
  endDate: string;
};

export type KTPlan = {
  id: string;
  plan_name: string;
  monthly_fee: string;
  calls_and_texts: string;
  info: string;
  benefits: KTBenefits;
  data: KTData;
};

export type KTBenefits = {
  additional_benefits: string;
  choice_benefits: string;
  plus_benefits: string[];
  plus_benefits_limit: string;
  smart_device_benefits_limit: string;
  smart_device_lines: number;
};

export type KTData = {
  shared_data_limit: string;
  speed_limit: string;
  total_data: string | undefined;
};
