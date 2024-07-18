import React from "react";

function Footer() {
	return (
		<>
			<footer id='footer'>
				<div class='container'>
					<div class='row'>
						<div class='col-md-3'>
		
								<img
									src='https://codetheweb.blog/assets/img/icon2.png'
									alt=''
									class='img-fluid logo-footer'
								/>
					
							<div class='footer-about'>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								
								</p>
							</div>
						</div>
						<div class='col-md-3'>
							<div class='useful-link'>
								<h2>Useful Links</h2>
								<img src='./assets/images/about/home_line.png' alt='' class='img-fluid' />
								<div class='use-links'>
									<li>
										<a href='#'>
											<i class='fa-solid fa-angles-right'></i> Home
										</a>
									</li>
									
								</div>
							</div>
						</div>
						<div class='col-md-3'>
							<div class='social-links'>
								<h2>Follow Us</h2>
								<img src='./assets/images/about/home_line.png' alt='' />
								<div class='social-icons'>
									<li>
										<a href=''>
											<i class='fa-brands fa-facebook-f'></i> Facebook
										</a>
									</li>
									<li>
										<a href=''>
											<i class='fa-brands fa-instagram'></i> Instagram
										</a>
									</li>
									<li>
										<a href=''>
											<i class='fa-brands fa-linkedin-in'></i> Linkedin
										</a>
									</li>
								</div>
							</div>
						</div>
						<div class='col-md-3'>
							<div class='address'>
								<h2>Address</h2>
								<img src='./assets/images/about/home_line.png' alt='' class='img-fluid' />
								<div class='address-links'>
									<li class='address1'>
										<i class='fa-solid fa-location-dot'></i> MAHAMADAPUR 
									</li>
									<li>
										<a href=''>
											<i class='fa-solid fa-phone'></i> +91 837367373737
										</a>
									</li>
									<li>
										<a href=''>
											<i class='fa-solid fa-envelope'></i> mail@1234567.com
										</a>
									</li>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<section id='copy-right'>
				<div class='copy-right-sec'>
					<i class='fa-solid fa-copyright'></i>
				blog web site 2024 Powerd By <a href='#'>jyoti prakash panigrahi</a>
				</div>
			</section>
		</>
	);
}

export default Footer;
