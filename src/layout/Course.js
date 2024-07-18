import React, { useEffect } from "react";

function Course() {
	useEffect(() => {
		var dropdown = document.getElementsByClassName("dropdown-btn");
		var i;

		for (i = 0; i < dropdown.length; i++) {
			dropdown[i].addEventListener("click", function () {
				this.classList.toggle("active");
				var dropdownContent = this.nextElementSibling;
				if (dropdownContent.style.display === "block") {
					dropdownContent.style.display = "none";
				} else {
					dropdownContent.style.display = "block";
				}
			});
		}
	}, []);
	return (
		<section id='course'>
			<section className='course-side-bar'>
				<a href='#about'>About</a>
				<a href='#services'>Services</a>
				<a href='#clients'>Clients</a>
				<a href='#contact'>Contact</a>
				<button class='dropdown-btn'>
					Dropdown
					<i class='fa fa-caret-down'></i>
				</button>
				<div class='dropdown-container'>
					<a href='#'>Link 1</a>
					<a href='#'>Link 2</a>
					<a href='#'>Link 3</a>
				</div>
				<a href='#contact'>Search</a>
			</section>
			<section className='course-content'></section>
		</section>
	);
}

export default Course;
