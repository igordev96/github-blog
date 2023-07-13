import { useMemo } from 'react';
import Anchor from './Anchor';
import Badge from './Badge';
import { convertDateToDays } from '../utils';

export type CardType = 'PROFILE' | 'POST_HEADER';

export type CardProps = {
	type: CardType;
	name?: string;
	description?: string;
	username?: string;
	link?: string;
	company?: string;
	followers?: string;
	date?: string;
	comments?: number;
	avatar_url?: string;
	title?: string;
};

export default function Card(props: CardProps) {
	const { type, comments, company, date, description, followers, link, name, username, avatar_url, title } = props;

	const isProfile = useMemo(() => {
		if (type === 'PROFILE') return true;
		return false;
	}, [type]);

	return (
		<div className='flex gap-8 p-8 w-full bg-base-profile rounded-lg shadow-card'>
			{isProfile && <img className='h-36 w-36 object-cover rounded-lg' src={avatar_url} alt='user picture' />}
			<div className='flex flex-col w-full'>
				<div className='flex justify-between items-center mb-2'>
					{isProfile ? <h1 className='font-bold text-2xl text-base-title'>{name}</h1> : <Anchor type='INTERNAL' />}
					<Anchor link={link} />
				</div>
				{isProfile ? (
					<p className='text-base font-normal text-base-text line-clamp-2 mb-6'>{description}</p>
				) : (
					<h1 className='mt-5 mb-2 font-bold text-2xl text-base-title'>{title}</h1>
				)}
				{isProfile ? (
					<div className='flex gap-6'>
						<Badge cardType='PROFILE' type='GITHUB'>
							{username}
						</Badge>
						<Badge cardType='PROFILE' type='COMPANY'>
							{company}
						</Badge>
						<Badge cardType='PROFILE' type='FOLLOWERS'>
							{followers} followers
						</Badge>
					</div>
				) : (
					<div className='flex gap-8'>
						<Badge cardType='POST_HEADER' type='GITHUB'>
							{username}
						</Badge>
						<Badge cardType='POST_HEADER' type='CALENDAR'>
							{convertDateToDays(date ?? '')} days ago
						</Badge>
						<Badge cardType='POST_HEADER' type='MESSAGE'>
							{comments} comments
						</Badge>
					</div>
				)}
			</div>
		</div>
	);
}
