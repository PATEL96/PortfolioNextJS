"use client"

import "./page.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Profile from '../../Images/ProfileLogo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {

	const[active, setActive] = useState(`NavContentR`);
	const[bar, setBar] = useState(true);
	const Toggle = () => {
		active === `NavContentR` ? setActive(`NavContentR NavContentActive`) : setActive(`NavContentR`)
		setBar(!bar);
	}

	return(
		<div className={`Navbar`}>
			<Link href="/" className={`NavLink`} >
				<div className={`NavContentL`}>
					<Image src={Profile} alt="none" className={`Logo`} />
				</div>
			</Link>
			<div className={active}>
				<Link href="/" className={`NavLink`} onClick={Toggle} >
					<div className={`home`} align="center" >
						Home
						<hr color="none" />
					</div>
				</Link>
				<Link href="/Projects" className={`NavLink`} onClick={Toggle} >
					<div className={`projects`} align="center" >
						Projects
						<hr color="none" />
					</div>
				</Link>
				<Link href="/About" className={`NavLink`} onClick={Toggle} >
					<div className={`about`} align="center">
						About
						<hr color="none" />
					</div>
				</Link>
			</div>
			<div className={`mobile-toggle`} onClick={Toggle}>
				{bar ? <MenuIcon className={`menu`} onClick={Toggle}></MenuIcon> : <CloseIcon className={`close`} onClick={Toggle}></CloseIcon>}
			</div>
		</div>
	);
}