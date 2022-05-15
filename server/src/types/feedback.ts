export type Feedback = {
  id: number;
  key: string;
  type: string;
  text: string;
  screenshot?: string;
  created_at: Date;
  updated_at: Date;
};
