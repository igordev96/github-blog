import { IssueDTO } from './IssueDTO';

export interface IssuesDTO {
	total_count: number;
	items: IssueDTO[];
}
