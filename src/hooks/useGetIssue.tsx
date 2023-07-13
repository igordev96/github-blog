import { useQuery } from '@tanstack/react-query';
import GithubService from '../services/Github.service';

export default function useGetIssue(id: number) {
	const githubService = new GithubService();

	return useQuery({
		queryKey: [`Issue ${id}`],
		queryFn: () => githubService.getIssue(id),
	});
}
