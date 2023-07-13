import { useNavigate } from 'react-router-dom';
import { convertDateToDays } from '../utils';
import Markdown from './Markdown';

export type PostCardProps = {
	id: number;
	title: string;
	description: string;
	date: string;
};

export default function PostCard(props: PostCardProps) {
	const { id, date, description, title } = props;

	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/posts/${id}`);
	};

	return (
		<div
			onClick={handleClick}
			className='flex flex-col gap-8 p-8 w-full bg-base-post rounded-lg cursor-pointer transition-all duration-75 hover:border-2 border-base-label'
		>
			<div className='flex justify-between items-start gap-6'>
				<h1 className='line-clamp-2 text-base-title text-xl font-bold'>{title}</h1>
				<span className='min-w-fit text-sm font-normal text-base-span'>{convertDateToDays(date)} days ago</span>
			</div>
			<Markdown className='line-clamp-3 text-base-text text-base font-normal' content={description} disablePlugins />
		</div>
	);
}
