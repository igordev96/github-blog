import { useState } from 'react';
import { useDebounce, useGetIssues, useGetUserInfo } from '../hooks';
import Card from '../components/Card';
import CustomInput from '../components/CustomInput';
import PostCard from '../components/PostCard';
import Spinner from '../components/Spinner';

export default function Home() {
	const [searchValue, setSearchValue] = useState('');

	const debouncedSearchValue = useDebounce(searchValue, 500);

	const { data: userData, isLoading: userIsLoading, isError: userIsError } = useGetUserInfo();
	const { data: issuesData, isLoading: issuesIsLoading, isError: issuesIsError } = useGetIssues(debouncedSearchValue);

	if (userIsError || issuesIsError) {
		return 'Error';
	}
	return (
		<div className='w-full'>
			{userIsLoading ? (
				<Spinner />
			) : (
				<Card
					name={userData.name}
					username={userData.login}
					company={userData.company ?? 'No company'}
					followers={userData.followers.toString()}
					avatar_url={userData.avatar_url}
					description={userData.bio}
					link={userData.html_url}
					type='PROFILE'
				/>
			)}
			<div className='flex justify-between items-center mt-16'>
				<h1 className='text-base-subtitle text-lg font-bold'>Publications</h1>
				<span className='text-base-span text-sm font-normal'>
					{issuesData?.total_count} publication{issuesData?.total_count ?? 0 > 1 ? 's' : ''}
				</span>
			</div>
			<CustomInput value={searchValue} setValue={setSearchValue} />
			{issuesIsLoading ? (
				<div className='w-full mt-12'>
					<Spinner />
				</div>
			) : (
				<div className='mt-12 grid sm:grid-cols-2 grid-cols-1 auto-rows-max gap-8'>
					{issuesData?.items?.map((issue) => (
						<PostCard
							date={issue.created_at}
							description={issue.body}
							title={issue.title}
							id={issue.number}
							key={issue.number}
						/>
					))}
				</div>
			)}
		</div>
	);
}
