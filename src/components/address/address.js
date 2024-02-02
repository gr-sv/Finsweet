import React from "react";

function Address () {
	return (
		<div className="address">
			<h2 className="visually-hidden">Address</h2>

			<div className="working-hour">
				<h3 className="address__title working-hour__title">Working hour</h3>
				<p className="address__text working-hour__text">Sunday to Saturday 09:00 AM to 11:00 PM</p>
			</div>

			<div className="location">
				<h3 className="address__title location__title">Location</h3>
				<p className="address__text location__text">Street - 127, New York,United States 546544</p>
			</div>

			<div className="contact-us">
				<h3 className="address__title contact-us__title">Contact us</h3>
				<a className="address__text address__link contact-us__tel" href="tel:+123456789">+123456789</a>
				<a className="address__text address__link contact-us__mail" href="mailto:hey@yourdomain.com">hey@yourdomain.com</a>
			</div>

			<picture className="map">
				<source srcset="#" media="(min-width: 320px)" />
				<img className="map__image" src="#" srcset="#" width="" height="" alt="Map" />
            </picture>
		</div>
	)
}

export default Address;