import { useMemo } from 'react';
import { FaGithub, FaBuilding, FaCalendarDay, FaComment, FaUserGroup } from 'react-icons/fa6';
import { CardType } from './Card';

export type BadgeProps = {
	type: 'GITHUB' | 'CALENDAR' | 'MESSAGE' | 'COMPANY' | 'FOLLOWERS';
	cardType: CardType;
	children: any;
};

export default function Badge(props: BadgeProps) {
	const { type, cardType, children } = props;

	const BadgeIcon = useMemo(() => {
		switch (type) {
			case 'FOLLOWERS':
				return FaUserGroup;
			case 'MESSAGE':
				return FaComment;
			case 'CALENDAR':
				return FaCalendarDay;
			case 'COMPANY':
				return FaBuilding;
			case 'GITHUB':
			default:
				return FaGithub;
		}
	}, [type]);

	const TextClass = useMemo(() => {
		if (cardType === 'PROFILE') {
			return 'text-base-subtitle';
		}
		return 'text-base-span';
	}, [cardType]);

	return (
		<div className='flex items-center gap-2 font-normal text-base'>
			<BadgeIcon className='text-base-label' />
			<span className={TextClass + ' ' + 'cursor-default'}>{children}</span>
		</div>
	);
}
