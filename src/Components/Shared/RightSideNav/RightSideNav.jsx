import fblogo from "../../../assets/SVG/fb.svg";
import twitterlogo from "../../../assets/SVG/twitter.svg";
import instagramlogo from "../../../assets/SVG/instagram.svg";
import qzone1 from "../../../assets/images/qZone1.png";
import qzone2 from "../../../assets/images/qZone2.png";
import qzone3 from "../../../assets/images/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";

const RightSideNav = () => {
	// use context
	const { googleSignIn, githubSignIn } = useContext(AuthContext);

	// Handle google sign in
	const handleGoogleSignIn = () => {
		googleSignIn()
			.then(() => {
				toast.success("Google sign in successful");
			})
			.catch(() => {
				toast.error("Something went wrong");
			});
	};

	// handle github sign in
	const handleGitHubSignIn = () => {
		githubSignIn()
			.then(() => {
				toast.success("GitHub sign in successful");
			})
			.catch(() => {
				toast.error("Something went wrong");
			});
	};

	return (
		<div className=" mt-20">
			{/* Login Method */}
			<h1 className=" text-gray-800 font-bold">Login With</h1>
			<div className=" space-y-2">
				{/* Google BTN */}
				<div className=" mt-3">
					<button
						onClick={handleGoogleSignIn}
						type="button"
						className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
					>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							className="mr-2"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
						</svg>
						Sign in with Google
					</button>
				</div>
				{/* GitHub */}
				<div>
					<button
						onClick={handleGitHubSignIn}
						type="button"
						className="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							className="mr-2"
							viewBox="0 0 1792 1792"
						>
							<path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
						</svg>
						Sign in with GitHub
					</button>
				</div>
				{/* Facebook */}
				<div>
					<button
						type="button"
						className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
					>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							className="mr-2"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
						</svg>
						Sign in with Facebook
					</button>
				</div>
			</div>

			{/* Find US Section */}
			<h1 className=" text-gray-800 font-bold mt-7 mb-5">Find US On</h1>

			<div className=" border py-4 pl-4 rounded-t-lg hover:text-gray-700">
				<div className=" flex gap-3 items-center hover:cursor-pointer hover:scale-105 duration-300">
					<div className=" bg-gray-100 hover:bg-gray-200 duration-300 p-2 rounded-full">
						<img className=" w-5 h-5" src={fblogo} alt="" />
					</div>
					<p className=" text-gray-600 font-medium">Facebook</p>
				</div>
			</div>
			<div className=" border-x py-4 pl-4  hover:text-gray-700">
				<div className=" flex gap-3 items-center hover:cursor-pointer hover:scale-105 duration-300">
					<div className=" bg-gray-100 hover:bg-gray-200 duration-300 p-2 rounded-full">
						<img className=" w-5 h-5" src={twitterlogo} alt="" />
					</div>
					<p className=" text-gray-600 font-medium">Twitter</p>
				</div>
			</div>
			<div className=" border py-4 pl-4 rounded-b-lg hover:text-gray-700">
				<div className=" flex gap-3 items-center hover:cursor-pointer hover:scale-105 duration-300">
					<div className=" bg-gray-100 hover:bg-gray-200 duration-300 p-2 rounded-full">
						<img className=" w-5 h-5" src={instagramlogo} alt="" />
					</div>
					<p className=" text-gray-600 font-medium">Instagram</p>
				</div>
			</div>

			{/* Q Zone Section */}
			<div className=" bg-gray-100 px-4 mt-4 rounded-lg">
				<h1 className=" text-gray-800 font-bold mb-4 pt-5">Q-Zone</h1>
				<div className="space-y-5">
					<div>
						<img src={qzone1} alt="" />
					</div>
					<div>
						<img src={qzone2} alt="" />
					</div>
					<div>
						<img src={qzone3} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightSideNav;
