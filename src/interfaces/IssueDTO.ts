import { UserDTO } from './UserDTO';

export interface IssueDTO {
	number: number;
	created_at: string;
	comments: number;
	title: string;
	body: string;
	user: UserDTO;
}
