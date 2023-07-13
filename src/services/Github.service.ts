import { IssueDTO } from '../interfaces/IssueDTO';
import { IssuesDTO } from '../interfaces/IssuesDTO';
import { UserDTO } from '../interfaces/UserDTO';

class GithubService {
	constructor() {
		if (!instance) {
			instance = this;
		}
		return instance;
	}

	getUserInfo(): Promise<UserDTO> {
		return fetch('https://api.github.com/users/mateodelnorte')
			.then((res) => res.json())
			.then((data) => data);
	}

	getIssues(searchValue: string): Promise<IssuesDTO> {
		return fetch(`https://api.github.com/search/issues?q=${searchValue}repo:mateodelnorte/meta`)
			.then((res) => res.json())
			.then((data) => data);
	}

	getIssue(id: number): Promise<IssueDTO> {
		return fetch(`https://api.github.com/repos/mateodelnorte/meta/issues/${id}`)
			.then((res) => res.json())
			.then((data) => data);
	}
}

let instance: null | GithubService = null;

export default GithubService;
