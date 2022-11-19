export interface Animal {
  title: string;
  url: string;
  type: string;
}

export interface AnimalProps {
  animals: Animal[];
}

export interface RankListItem {
  rank: number;
  name: string;
  date: string;
  score: number;
}

export interface RankList {
  ranklist: RankListItem[];
}
