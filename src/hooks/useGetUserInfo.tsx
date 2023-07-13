import { useQuery } from '@tanstack/react-query';
import GithubService from '../services/Github.service';

export default function useGetUserInfo() {
	const githubService = new GithubService();

	return useQuery({
		queryKey: ['UserInfo'],
		queryFn: githubService.getUserInfo,
	});
}
