import React from "react";
import Address from "../address/address";
import Button from "../shared/button/button";
import Wrapper from "../wrapper/wrapper";
import './home.css'

function Home () {
	return (
		<div className="home">
			<div className="test-button">
				<Button>Base button</Button>
				<br />
				<Button className="button__black">Button</Button>
				<br />
				<Button button__menu>Fast Food</Button>
				<br />
				<Button button__form>Send Messege</Button>
				<br />
				<Button disabled>Disabled</Button>
			</div>
			

			<section className="promo">
				<Wrapper className="promo-wrapper">
					<h1 className="visually-hidden">Finsweet</h1>
				</Wrapper>				
			</section>

			<section className="know-more">
				<Wrapper className="know-more-wrapper">
					<h2 className="title know-more__title">Know more about us</h2>
				</Wrapper>				
			</section>

			<section className="serving">
				<Wrapper className="serving-wrapper">
					<h2 className="title serving__title">What we are serving</h2>
				</Wrapper>				
			</section>

			<section className="our-menu">
				<Wrapper className="our-menu-wrapper">
					<h2 className="title our-menu__title">Discover our menu chart</h2>
				</Wrapper>				
			</section>

			<section className="quote">
				<Wrapper className="quote-wrapper">
					<h2 className="visually-hidden">Quote</h2>
				</Wrapper>
			</section>

			<section className="blog">
				<Wrapper className="blog-wrapper">
					<h2 className="visually-hidden">Blog</h2>
				</Wrapper>
			</section>

			<section className="contacts">
				<Wrapper className="contacts-wrapper">
					<Address className="contacts__address"></Address>
				</Wrapper>
			</section>			
		</div>
	)
}

export default Home;