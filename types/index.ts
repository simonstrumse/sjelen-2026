export interface VariantConfig {
  id: string;
  name: string;
  description: string;
  path: string;
}

export interface FormData {
  email: string;
  phone: string;
}

export interface AnimationConfig {
  duration?: number;
  repeat?: number;
  ease?: string | number[];
}
