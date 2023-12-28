import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/routes/home';
import Layout from '@/layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider
				router={router}
				fallbackElement={<div>Loading...</div>}
			/>
		</>
	);
}

export default App;
