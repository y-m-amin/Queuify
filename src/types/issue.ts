export type IssueStatus = 'Open' | 'In Progress' | 'Resolved';
export type IssuePriority = 'High' | 'Medium' | 'Low';

export interface Issue {
  id: number;
  title: string;
  description: string;
  customer: string;
  priority: IssuePriority;
  status: IssueStatus;
  createdAt: string;
}
