export type PlanBilling = 'monthly' | 'annual';

export interface IPlanItem {
  billing: PlanBilling;
  title: string;
  price: string;
  discountPercent: string;
  discountPrice: string;
  subtitle: string;
  onChangePlan: (arg: PlanBilling) => void;
  isPlan: PlanBilling;
}
