import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className=" max-w-7xl mx-auto font-poppins px-3 mb-10">
			<Outlet></Outlet>
			<Toaster />
		</div>
	);
};

export default MainLayout;
