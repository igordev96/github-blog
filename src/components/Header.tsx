import logo from '../assets/logo.svg';

export default function Header() {
	return (
		<header className='h-72 bg-header flex justify-center'>
			<img alt='logo' src={logo} className='h-16 mt-16' />
		</header>
	);
}
