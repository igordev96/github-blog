import { useQuery } from '@tanstack/react-query';
import GithubService from '../services/Github.service';

export default function useGetIssues(text: string = '') {
	const githubService = new GithubService();

	return useQuery({
		queryKey: [`Issues with ${text}`],
		queryFn: () => githubService.getIssues(text),
	});
}
