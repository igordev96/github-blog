import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowUpRightFromSquare as AnchorIcon, FaChevronLeft as Chevron } from 'react-icons/fa6';

export type AnchorProps = {
	link?: string;
	type?: 'EXTERNAL' | 'INTERNAL';
};

export default function Anchor(props: AnchorProps) {
	const { link = '', type = 'EXTERNAL' } = props;
	const navigate = useNavigate();

	const isInternal = useMemo(() => type === 'INTERNAL', [type]);

	const handleClick = () => {
		isInternal ? navigate(-1) : window.open(link, '_blank');
	};

	return (
		<div
			onClick={handleClick}
			className='hover:border-b border-blue flex items-center gap-2 text-blue text-xs cursor-pointer'
		>
			{isInternal ? (
				<>
					<Chevron />
					<span>BACK</span>
				</>
			) : (
				<>
					<span>GITHUB</span>
					<AnchorIcon />
				</>
			)}
		</div>
	);
}
