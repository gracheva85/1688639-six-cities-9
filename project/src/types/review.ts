type Review = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
  avatarUrl: string
  id: number
  isPro: boolean
  name: string
  }};

type Reviews = Review[];
export type {Review, Reviews};
