import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Post from './routes/Post';

export default function App() {
	return (
		<div className='min-h-screen bg-base-background'>
			<Header />
			<main className='-mt-20 max-w-[864px] mx-auto pb-10 px-8 sm:px-0'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/posts/:postId' element={<Post />} />
				</Routes>
			</main>
		</div>
	);
}
