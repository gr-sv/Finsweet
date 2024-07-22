import React from "react";
import Wrapper from "../wrapper/wrapper";
import Image from "../../shared/image/image";
import { Link } from "react-router-dom";
import s from './ourMenu.module.scss'

function OurMenu () {
	return (
		<section className={`section ${s.ourMenu}`}>
			<Wrapper className={s.wrapper}>
				<h2 className={`title ${s.ourMenu__title}`}>Our menu</h2>
				<div className={s.textWrapper}>
					<p className={`intro ${s.ourMenu__intro}`}>Discover our menu chart</p>
					<p className={s.ourMenu__text}>Through True Rich Attended does no end it his mother since favourable 
						real had half every him case in packages enquire we up ecstatic.. 
						Through True Rich Attended does no end it his mother</p>
				</div>
				
				<div className={s.menuItems}>
					<h2>Most Popular Picks</h2>
					<Link className={s.menuItem__link}>
						<Image 
							className={s.menuItem__image}
							src='/assests/images/menu_1.jpeg'
							alt='Picture of a Drp Cofee'
							width={405}
							height={271}
						/>
						<h4 className={s.menuItem__title}>Drp Cofee</h4>
						<p className={s.menuItem__price}>$08.85</p>
					</Link>
					
					<Link className={s.menuItem__link}>
						<Image 
							className={s.menuItem__image}
							src='/assests/images/menu_2.jpeg'
							alt='Picture of a Choco Cup Cake'
							width={406}
							height={271}
						/>
						<h4 className={s.menuItem__title}>Choco Cup Cake</h4>
						<p className={s.menuItem__price}>$4.85</p>
					</Link>
					
					<Link className={s.menuItem__link}>
						<Image 
							className={s.menuItem__image}
							src='/assests/images/menu_3.jpeg'
							alt='Picture of a Chicken Burger'
							width={405}
							height={271}
						/>
						<h4 className={s.menuItem__title}>Chicken Burger</h4>
						<p className={s.menuItem__price}>$8.85</p>
					</Link>
					
					<Link className={s.menuItem__link}>
						<Image 
							className={s.menuItem__image}
							src='/assests/images/menu_4.jpeg'
							alt='Picture of a French Fries'
							width={405}
							height={271}
						/>
						<h4 className={s.menuItem__title}>French Fries</h4>
						<p className={s.menuItem__price}>$7.85</p>
					</Link>
					
					<Link className={s.menuItem__link}>
						<Image 
							className={s.menuItem__image}
							src='/assests/images/menu_5.jpeg'
							alt='Picture of a Sandwitch'
							width={406}
							height={271}
						/>
						<h4 className={s.menuItem__title}>Sandwitch</h4>
						<p className={s.menuItem__price}>$3.97</p>
					</Link>
					
					<Link className={s.menuItem__link}>
						<Image 
							className={s.menuItem__image}
							src='/assests/images/menu_6.jpeg'
							alt='Picture of a Chinese Soup'
							width={405}
							height={271}
						/>
						<h4 className={s.menuItem__title}>Chinese Soup</h4>
						<p className={s.menuItem__price}>$8.85</p>
					</Link>					
				</div>

				<Link className={`orangeBtnLink ${s.ourMenu__link}`} to="/menu">View Menu</Link>
			</Wrapper>
		</section>
	)
}

export default OurMenu;