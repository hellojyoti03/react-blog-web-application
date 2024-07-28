import React from "react";
import Carousel from "react-multi-carousel";
import $ from "jquery";
import "react-multi-carousel/lib/styles.css";
import { Dropdown } from "react-nested-dropdown";
import "react-nested-dropdown/dist/styles.css";
import { useState } from "react";
import { motion } from "framer-motion";
import {
	MDBDropdown,
	MDBDropdownMenu,
	MDBDropdownToggle,
	MDBDropdownItem,
	MDBContainer,
} from "mdb-react-ui-kit";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "../provider/ThemeProvider";
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 13,
		slidesToSlide: 1, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

function Header() {
	const navigate = useNavigate();
	const { lightTheme, darkTheme } = useTheme();
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = (e) => {
		const checked = e.target.checked;
		setIsChecked(checked);
		toggleTheme(checked);
	};

	const toggleTheme = (isChecked) => {
		if (isChecked) {
			darkTheme();
			// Add your theme toggle logic here
		} else {
			console.log("Theme toggled to light mode");
			lightTheme();
		}
	};
	const renderSubMenu = (subMenu) => {
		if (!subMenu) return null;
		return (
			<ul className="dropdown-menu">
				{subMenu.map((item) => (
					<li key={item.id}>
						<a href="#">{item.title}</a>
						{item.subMenu && renderSubMenu(item.subMenu)}
					</li>
				))}
			</ul>
		);
	};

	let arr = [
		{
			title: "JAVA",
			action: [
				{ title: "main-0", action: [{ title: "sub-0", action: [{ title: "sub-sub-0", action: [] }] }] },
				{ title: "main-1", action: [] },
			],
		},
		{
			title: "JAVA",
			action: [
				{ title: "main-0", action: [{ title: "sub-0", action: [{ title: "sub-sub-0", action: [] }] }] },
				{ title: "main-1", action: [] },
			],
		},
		{
			title: "JAVA",
			action: [
				{ title: "main-0", action: [{ title: "sub-0", action: [{ title: "sub-sub-0", action: [] }] }] },
				{ title: "main-1", action: [] },
			],
		},
	];

	const renderBlogHeader = (action, sub = false) => {
		console.log(action, "action");
		// if (sub) {
		// 	return action.map((item) => (
		// 		<ul className="dropdown-menu dropdown-submenu">
		// 			{item.action.length ? renderBlogHeader(action, true) : renderBlogHeader(action, false)}
		// 		</ul>
		// 	));
		// }
		if (action.length) {
			return action.map((item) => (
				<MDBDropdownItem>
					<Link to="/course" className="course-nav-menu">
						{item.action.length ? (
							<>
								{item.title}
								&raquo;{" "}
							</>
						) : (
							<>{item.title}</>
						)}
					</Link>
					{item.action.length ? (
						<>
							<ul className="dropdown-menu dropdown-submenu">{renderBlogHeader(item.action)}</ul>
						</>
					) : (
						<></>
					)}
				</MDBDropdownItem>
			));
		}
	};
	return (
		<header>
			<div className="header-group">
				<img src="https://codetheweb.blog/assets/img/icon2.png" />
				<div className="course-list">
					{arr.map((blog) => {
						return (
							<MDBDropdown className="md-dropdown">
								<MDBDropdownToggle className="md-dropdown-toggle">{blog.title}</MDBDropdownToggle>
								<MDBDropdownMenu>{renderBlogHeader(blog.action)}</MDBDropdownMenu>
							</MDBDropdown>
						);
					})}
					{/* <MDBDropdown className="md-dropdown">
						<MDBDropdownToggle className="md-dropdown-toggle">Course</MDBDropdownToggle>
						<MDBDropdownMenu>
							<MDBDropdownItem>
								<a href="#" className="course-nav-menu">
									Action
								</a>
							</MDBDropdownItem>
							<MDBDropdownItem>
								<a href="#" className="course-nav-menu">
									Another action
								</a>
							</MDBDropdownItem>
							<MDBDropdownItem>
								<a href="#" className="course-nav-menu">
									Submenu &raquo;
								</a>
								<ul className="dropdown-menu dropdown-submenu">
									<MDBDropdownItem>
										<a href="#" className="course-nav-menu">
											Submenu item 1
										</a>
									</MDBDropdownItem>
									<MDBDropdownItem>
										<a href="#" className="course-nav-menu">
											Submenu item 2
										</a>
									</MDBDropdownItem>
									<MDBDropdownItem>
										<a href="#" className="course-nav-menu">
											Submenu item 3 &raquo;
										</a>
										<ul className="dropdown-menu dropdown-submenu">
											<MDBDropdownItem>
												<a href="#" className="course-nav-menu">
													Multi level 1
												</a>
											</MDBDropdownItem>
											<MDBDropdownItem>
												<a href="#" className="course-nav-menu">
													Multi level 2
												</a>
											</MDBDropdownItem>
										</ul>
									</MDBDropdownItem>
									<MDBDropdownItem>
										<a href="#" className="course-nav-menu">
											Submenu item 4
										</a>
									</MDBDropdownItem>
									<MDBDropdownItem>
										<a href="#" className="course-nav-menu">
											Submenu item 5
										</a>
									</MDBDropdownItem>
								</ul>
							</MDBDropdownItem>
						</MDBDropdownMenu>
					</MDBDropdown> */}
				</div>
				<div className="auth">
					<div>
						<input type="checkbox" class="checkbox" id="checkbox" onChange={handleCheckboxChange} />
						<label for="checkbox" class="checkbox-label">
							<i class="fas fa-moon"></i>
							<i class="fas fa-sun"></i>
							<span class="ball"></span>
						</label>
					</div>
					<div>
						<button>Join now</button>
					</div>
				</div>
			</div>

			<nav>
				<Carousel
					responsive={responsive}
					swipeable={false}
					draggable={false}
					showDots={true}
					autoPlay={true}
					infinite={true}
					autoPlaySpeed={3000}
					customTransition="all .5"
					transitionDuration={500}
					removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
					<div style={{ background: "black" }}>Item 1</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<div>Item 4</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<div>Item 4</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<div>Item 4</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<div>Item 4</div>
				</Carousel>
			</nav>
		</header>
	);
}

export default Header;
