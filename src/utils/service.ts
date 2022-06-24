const token = ['ghp_wP8QaPA2Bz4BVpF2', 'TKYfymZwo8eeIw4L98L2'];
const access_token = `token ${token.join('')}`;
const blog = 'https://api.github.com/repos/Mashiirox/MADE_IN_HEAVEN';
const poems = 'https://v2.jinrishici.com/one.json';

const githubQuery = async <T>(api: string): Promise<T> => {
  try {
    const response = await fetch(api, {
      method: 'GET',
      headers: { Authorization: access_token },
    });
    if (response.ok) {
      return await response.json();
    } else {
      const error = new Error(response.statusText);
      return Promise.reject(error);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const queryIssues = async ({
  page = 1,
  pageSize = 10,
  state = 'open',
  filter = '',
}: QueryParams): Promise<Array<Issue>> => {
  const api = `${blog}/issues?state=${state}&page=${page}&per_page=${pageSize}${filter}`;
  return githubQuery(api);
};

export const queryIssue = async (number: string): Promise<Issue> => {
  const api = `${blog}/issues/${number}?state=open`;
  return githubQuery(api);
};

export const queryArchive = async (page = 1): Promise<Array<Issue>> =>
  queryIssues({ page, state: 'open' });

export const queryPoems = async (): Promise<Poems> => {
  try {
    const token = localStorage.getItem('poems_token');
    const transferToken = token ? `&X-User-Token=${token.replace('+', '%2B')}` : '';
    const api = `${poems}?client=browser-sdk/1.2${transferToken}`;
    const response = await fetch(api);
    if (response.ok) {
      const data = (await response.json()) as Poems;
      !token && localStorage.setItem('poems_token', data.token);
      return data;
    } else {
      const error = new Error(response.statusText);
      return Promise.reject(error);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
