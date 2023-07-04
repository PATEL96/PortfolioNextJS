"use client"
import Image from 'next/image';
import Bg from '../../Images/black-13494.gif'
import styles from './page.module.css'
import TimeLine from "@/Components/TimeLineElements/TimeLine";

export default function Projects() {
	return(
		<div className={styles.Projects}>
			<div className={styles.bg}>
				<Image src={Bg} alt='none' />
			</div>
			<div className={styles.main_head}>Projects Done</div>
			<TimeLine />
		</div>
	);
}