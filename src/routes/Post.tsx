import { useParams } from 'react-router-dom';
import { useGetIssue } from '../hooks';
import Card from '../components/Card';
import Markdown from '../components/Markdown';
import Spinner from '../components/Spinner';

export default function Post() {
	const { postId } = useParams();

	const { data, isLoading, isError } = useGetIssue(+(postId ?? '0'));

	if (isLoading) {
		return <Spinner />;
	}
	if (isError) {
		return 'Error';
	}
	return (
		<div className='w-full'>
			<Card
				comments={data.comments}
				title={data.title}
				username={data.user.login}
				link={data.user.html_url}
				date={data.created_at}
				type='POST_HEADER'
			/>
			<Markdown className='p-10 text-base-title leading-7' content={data.body} />,
		</div>
	);
}
