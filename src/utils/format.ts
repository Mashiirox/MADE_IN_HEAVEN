import { format } from 'timeago.js';

const regex = /^(.+)?\r\n\s*(.+)?\r\n/;

export const formatIssue = (issue: Issue): Issue => {
  const { body, created_at } = issue;
  const result = regex.exec(body)!;
  issue.description = result[1];
  issue.created_at = format(created_at, 'zh_CN');
  return issue;
};
