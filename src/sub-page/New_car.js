import Header from "./Header"
import Footer from "./Footer"



export default function New_car()
{
 return(
    <>
    <Header pagename="new_cars"/>
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
											<img src="assets/images/new-cars-model/ncm1.png" alt="img"/>
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
											<img src="assets/images/new-cars-model/ncm2.png" alt="img"/>
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
											<img src="assets/images/new-cars-model/ncm3.png" alt="img"/>
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
      <Footer/>
    </>
 )
}