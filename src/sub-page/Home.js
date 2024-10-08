import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Api from "./Api";

export default function Home() {

	return(
		<>
  
 
			<Header pagename="home" />
			

			<section id="home" class="welcome-hero">

				<div class="container">
					<div class="welcome-hero-txt">
						<h2>get your desired car in resonable price</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore   magna aliqua.
						</p>
						<button class="welcome-btn" onclick="window.location.href='#'">contact us</button>
						
					</div>
				</div>

				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="model-search-content">
								<div class="row">
									<div class="col-md-offset-1 col-md-2 col-sm-12">
										<div class="single-model-search">
											<h2>select year</h2>
											<div class="model-select-icon">
												<select class="form-control">

													<option value="default">year</option>

													<option value="2018">2018</option>

													<option value="2017">2017</option>
													<option value="2016">2016</option>

												</select>
											</div>
										</div>
										<div class="single-model-search">
											<h2>body style</h2>
											<div class="model-select-icon">
												<select class="form-control">

													<option value="default">style</option>

													<option value="sedan">sedan</option>

													<option value="van">van</option>
													<option value="roadster">roadster</option>

												</select>
											</div>
										</div>
									</div>
									<div class="col-md-offset-1 col-md-2 col-sm-12">
										<div class="single-model-search">
											<h2>select make</h2>
											<div class="model-select-icon">
												<select class="form-control">

													<option value="default">make</option>

													<option value="toyota">toyota</option>

													<option value="holden">holden</option>
													<option value="maecedes-benz">maecedes-benz.</option>

												</select>
											</div>
										</div>
										<div class="single-model-search">
											<h2>car condition</h2>
											<div class="model-select-icon">
												<select class="form-control">

													<option value="default">condition</option>

													<option value="something">something</option>

													<option value="something">something</option>
													<option value="something">something</option>

												</select>
											</div>
										</div>
									</div>
									<div class="col-md-offset-1 col-md-2 col-sm-12">
										<div class="single-model-search">
											<h2>select model</h2>
											<div class="model-select-icon">
												<select class="form-control">

													<option value="default">model</option>

													<option value="kia-rio">kia-rio</option>

													<option value="mitsubishi">mitsubishi</option>
													<option value="ford">ford</option>

												</select>
											</div>
										</div>
										<div class="single-model-search">
											<h2>select price</h2>
											<div class="model-select-icon">
												<select class="form-control">

													<option value="default">price</option>

													<option value="$0.00">$0.00</option>

													<option value="$0.00">$0.00</option>
													<option value="$0.00">$0.00</option>

												</select>
											</div>
										</div>
									</div>
									<div class="col-md-2 col-sm-12">
										<div class="single-model-search text-center">
											<button class="welcome-btn model-search-btn" onclick="window.location.href='#'">
												search
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>



			<section id="service" class="service">
				<div class="container">
					<div class="service-content">
						<div class="row">
							<div class="col-md-4 col-sm-6">
								<div class="single-service-item">
									<div class="single-service-icon">
										<i class="flaticon-car"></i>
									</div>
									<h2><a href="#">largest dealership <span> of</span> car</a></h2>
									<p>
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.
									</p>
								</div>
							</div>
							<div class="col-md-4 col-sm-6">
								<div class="single-service-item">
									<div class="single-service-icon">
										<i class="flaticon-car-repair"></i>
									</div>
									<h2><a href="#">unlimited repair warrenty</a></h2>
									<p>
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.
									</p>
								</div>
							</div>
							<div class="col-md-4 col-sm-6">
								<div class="single-service-item">
									<div class="single-service-icon">
										<i class="flaticon-car-1"></i>
									</div>
									<h2><a href="#">insurence support</a></h2>
									<p>
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
			<Api/>
			<section id="new-cars" class="new-cars">
				<div class="container">
					<div class="section-header">
						<p>checkout <span>the</span> latest cars</p>
						<h2>newest cars</h2>
					</div>
					<div class="new-cars-content">
						<div class="owl-carousel owl-theme" id="new-cars-carousel">
							<div class="new-cars-item">
								<div class="single-new-cars-item">
									<div class="row">
										<div class="col-md-7 col-sm-12">
											<div class="new-cars-img">
												<img src="assets/images/new-cars-model/ncm1.png" alt="img" />
											</div>
										</div>
										<div class="col-md-5 col-sm-12">
											<div class="new-cars-txt">
												<h2><a href="#">chevrolet camaro <span> za100</span></a></h2>
												<p>
													Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
												</p>
												<p class="new-cars-para2">
													Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
												</p>
												<button class="welcome-btn new-cars-btn" onclick="window.location.href='#'">
													view details
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="new-cars-item">
								<div class="single-new-cars-item">
									<div class="row">
										<div class="col-md-7 col-sm-12">
											<div class="new-cars-img">
												<img src="assets/images/new-cars-model/ncm2.png" alt="img" />
											</div>
										</div>
										<div class="col-md-5 col-sm-12">
											<div class="new-cars-txt">
												<h2><a href="#">BMW series-3 wagon</a></h2>
												<p>
													Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
												</p>
												<p class="new-cars-para2">
													Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
												</p>
												<button class="welcome-btn new-cars-btn" onclick="window.location.href='#'">
													view details
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="new-cars-item">
								<div class="single-new-cars-item">
									<div class="row">
										<div class="col-md-7 col-sm-12">
											<div class="new-cars-img">
												<img src="assets/images/new-cars-model/ncm3.png" alt="img" />
											</div>
										</div>
										<div class="col-md-5 col-sm-12">
											<div class="new-cars-txt">
												<h2><a href="#">ferrari 488 superfast</a></h2>
												<p>
													Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
												</p>
												<p class="new-cars-para2">
													Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
												</p>
												<button class="welcome-btn new-cars-btn" onclick="window.location.href='#'">
													view details
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>



			<section id="featured-cars" class="featured-cars">
				<div class="container">
					<div class="section-header">
						<p>checkout <span>the</span> featured cars</p>
						<h2>featured cars</h2>
					</div>
					<div class="featured-cars-content">
						<div class="row">
							<div class="col-lg-3 col-md-4 col-sm-6">
								<div class="single-featured-cars">
									<div class="featured-img-box">
										<div class="featured-cars-img">
											<img src="assets/images/featured-cars/fc1.png" alt="cars" />
										</div>
										<div class="featured-model-info">
											<p>
												model: 2017
												<span class="featured-mi-span"> 3100 mi</span>
												<span class="featured-hp-span"> 240HP</span>
												automatic
											</p>
										</div>
									</div>
									<div class="featured-cars-txt">
										<h2><a href="#">BMW 6-series gran coupe</a></h2>
										<h3>$89,395</h3>
										<p>
											Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
										</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-4 col-sm-6">
								<div class="single-featured-cars">
									<div class="featured-img-box">
										<div class="featured-cars-img">
											<img src="assets/images/featured-cars/fc2.png" alt="cars" />
										</div>
										<div class="featured-model-info">
											<p>
												model: 2017
												<span class="featured-mi-span"> 3100 mi</span>
												<span class="featured-hp-span"> 240HP</span>
												automatic
											</p>
										</div>
									</div>
									<div class="featured-cars-txt">
										<h2><a href="#">chevrolet camaro <span>wmv20</span></a></h2>
										<h3>$66,575</h3>
										<p>
											Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
										</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-4 col-sm-6">
								<div class="single-featured-cars">
									<div class="featured-img-box">
										<div class="featured-cars-img">
											<img src="assets/images/featured-cars/fc3.png" alt="cars" />
										</div>
										<div class="featured-model-info">
											<p>
												model: 2017
												<span class="featured-mi-span"> 3100 mi</span>
												<span class="featured-hp-span"> 240HP</span>
												automatic
											</p>
										</div>
									</div>
									<div class="featured-cars-txt">
										<h2><a href="#">lamborghini <span>v520</span></a></h2>
										<h3>$125,250</h3>
										<p>
											Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
										</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-4 col-sm-6">
								<div class="single-featured-cars">
									<div class="featured-img-box">
										<div class="featured-cars-img">
											<img src="assets/images/featured-cars/fc4.png" alt="cars" />
										</div>
										<div class="featured-model-info">
											<p>
												model: 2017
												<span class="featured-mi-span"> 3100 mi</span>
												<span class="featured-hp-span"> 240HP</span>
												automatic
											</p>
										</div>
									</div>
									<div class="featured-cars-txt">
										<h2><a href="#">audi <span> a3</span> sedan</a></h2>
										<h3>$95,500</h3>
										<p>
											Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-3 col-md-4 col-sm-6">
								<div class="single-featured-cars">
									<div class="featured-img-box">
										<div class="featured-cars-img">
											<img src="assets/images/featured-cars/fc4.png" alt="cars" />
										</div>
										<div class="featured-model-info">
											<p>
												model: 2017
												<span class="featured-mi-span"> 3100 mi</span>
												<span class="featured-hp-span"> 240HP</span>
												automatic
											</p>
										</div>
									</div>
									<div class="featured-cars-txt">
										<h2><a href="#">infiniti <span>z5</span></a></h2>
										<h3>$36,850</h3>
										<p>
											Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
										</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-4 col-sm-6">
								<div class="single-featured-cars">
									<div class="featured-img-box">
										<div class="featured-cars-img">
											<img src="assets/images/featured-cars/fc5.png" alt="cars" />
										</div>
										<div class="featured-model-info">
											<p>
												model: 2017
												<span class="featured-mi-span"> 3100 mi</span>
												<span class="featured-hp-span"> 240HP</span>
												automatic
											</p>
										</div>
									</div>
									<div class="featured-cars-txt">
										<h2><a href="#">porsche <span>718</span> cayman</a></h2>
										<h3>$48,500</h3>
										<p>
											Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
										</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-4 col-sm-6">
								<div class="single-featured-cars">
									<div class="featured-img-box">
										<div class="featured-cars-img">
											<img src="assets/images/featured-cars/fc7.png" alt="cars" />
										</div>
										<div class="featured-model-info">
											<p>
												model: 2017
												<span class="featured-mi-span"> 3100 mi</span>
												<span class="featured-hp-span"> 240HP</span>
												automatic
											</p>
										</div>
									</div>
									<div class="featured-cars-txt">
										<h2><a href="#"><span>bmw 8-</span>series coupe</a></h2>
										<h3>$56,000</h3>
										<p>
											Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
										</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-4 col-sm-6">
								<div class="single-featured-cars">
									<div class="featured-img-box">
										<div class="featured-cars-img">
											<img src="assets/images/featured-cars/fc8.png" alt="cars" />
										</div>
										<div class="featured-model-info">
											<p>
												model: 2017
												<span class="featured-mi-span"> 3100 mi</span>
												<span class="featured-hp-span"> 240HP</span>
												automatic
											</p>
										</div>
									</div>
									<div class="featured-cars-txt">
										<h2><a href="#">BMW <span> x</span>series-6</a></h2>
										<h3>$75,800</h3>
										<p>
											Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>



			<section id="clients-say" class="clients-say">
				<div class="container">
					<div class="section-header">
						<h2>what our clients say</h2>
					</div>
					<div class="row">
						<div class="owl-carousel testimonial-carousel">
							<div class="col-sm-3 col-xs-12">
								<div class="single-testimonial-box">
									<div class="testimonial-description">
										<div class="testimonial-info">
											<div class="testimonial-img">
												<img src="assets/images/clients/c1.png" alt="image of clients person" />
											</div>
										</div>
										<div class="testimonial-comment">
											<p>
												Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
											</p>
										</div>
										<div class="testimonial-person">
											<h2><a href="#">tomas lili</a></h2>
											<h4>new york</h4>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-3 col-xs-12">
								<div class="single-testimonial-box">
									<div class="testimonial-description">
										<div class="testimonial-info">
											<div class="testimonial-img">
												<img src="assets/images/clients/c2.png" alt="image of clients person" />
											</div>
										</div>
										<div class="testimonial-comment">
											<p>
												Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
											</p>
										</div>
										<div class="testimonial-person">
											<h2><a href="#">romi rain</a></h2>
											<h4>london</h4>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-3 col-xs-12">
								<div class="single-testimonial-box">
									<div class="testimonial-description">
										<div class="testimonial-info">
											<div class="testimonial-img">
												<img src="assets/images/clients/c3.png" alt="image of clients person" />
											</div>
										</div>
										<div class="testimonial-comment">
											<p>
												Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
											</p>
										</div>
										<div class="testimonial-person">
											<h2><a href="#">john doe</a></h2>
											<h4>washington</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>



			<section id="brand" class="brand">
				<div class="container">
					<div class="brand-area">
						<div class="owl-carousel owl-theme brand-item">
							<div class="item">
								<a href="#">
									<img src="assets/images/brand/br1.png" alt="brand-image" />
								</a>
							</div>
							<div class="item">
								<a href="#">
									<img src="assets/images/brand/br2.png" alt="brand-image" />
								</a>
							</div>
							<div class="item">
								<a href="#">
									<img src="assets/images/brand/br3.png" alt="brand-image" />
								</a>
							</div>
							<div class="item">
								<a href="#">
									<img src="assets/images/brand/br4.png" alt="brand-image" />
								</a>
							</div>

							<div class="item">
								<a href="#">
									<img src="assets/images/brand/br5.png" alt="brand-image" />
								</a>
							</div>

							<div class="item">
								<a href="#">
									<img src="assets/images/brand/br6.png" alt="brand-image" />
								</a>
							</div>
						</div>
					</div>

				</div>

			</section>



			<section id="blog" class="blog"></section>
			<Footer />
			

		</>
	)
}