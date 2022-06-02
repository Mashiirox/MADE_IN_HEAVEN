type QueryParams = {
  page: number;
  pageSize?: number;
  state: 'open' | 'closed';
  filter?: string;
};

type Milestone = {
  id: number;
  number: number;
  url: string;
  title: string;
  description: string;
  open_issues: number;
  updated_at: string;
};

type Label = {
  id: number;
  url: string;
  name: string;
  description: string;
  color: string;
};

type Issue = {
  id: number;
  number: number;
  url: string;
  title: string;
  body: string;
  description: string;
  created_at: string;
  updated_at: string;
  milestone: Milestone;
  labels: Array<Label>;
};

type Cloud = {
  ip: string;
  location: {
    id: string;
    name: string;
    country: string;
    path: string;
    timezone: string;
    timezone_offset: string;
  };
  now: {
    text: string;
    code: string;
    temperature: string;
  };
  last_update: string;
};

type PoemsInfo = {
  author: string;
  content: Array<string>;
  dynasty: string;
  title: string;
  translate: Array<string>;
};

type PoemsData = {
  cacheAt: string;
  content: string;
  id: string;
  matchTags: Array<string>;
  origin: PoemsInfo;
  popularity: number;
  recommendedReason: string;
};

type Poems = {
  data: PoemsData;
  ipAddress: string;
  status: string;
  token: string;
  warning: string | null;
};
