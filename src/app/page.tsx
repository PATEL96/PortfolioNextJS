// import './Home.css'
import React from 'react';
import styles from './page.module.css'
import Bg from '../Images/black-13495.gif'
import Profile from '../Images/ProfileMain.jpeg'
import { Typewriter } from 'nextjs-simple-typewriter'
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/Components/Navbar/page'

export default function Home() {

	return(
		<>
		<div className={styles.Home}>
			<div className={styles.Data}>
				<div className={styles.Name_container}>
					Hi 👋, I'm <div className={styles.Name}>Raj <span style={{color: "#40f100"}}>D</span>. Patel</div>
				</div>
				<div style={{display: 'flex',width:"90%"}}>
					<div style={{paddingRight: "8px"}}>
						I'm A
					</div>
          			<div className={styles.Typer}>
            			<Typewriter
            				words={['Student.', 'Web Developer.', 'Blockchain Dev.', 'Youtuber.', 'Gamer.']}
            				loop={0}
							cursorBlinking
            				cursor
			        	    cursorStyle='|'
        				    typeSpeed={100}
            				deleteSpeed={60}
            				delaySpeed={1500}
          				/>
          			</div>
				</div>
				<div className={styles.more_container}>
					<Link href="/About" className={styles.more} >Learn More...</Link>
				</div>
			</div>
			<div className={styles.bg}>
				<Image src={Bg} alt='none' />
			</div>
			<div className={styles.profile_pic}>
				<Image src={Profile} alt="none" />
			</div>
		</div>
		</>
	);
}