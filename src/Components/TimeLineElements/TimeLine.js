import React from "react";
import './TimeLine.css'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { TimeLineElements } from './TimeLineElements'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component/dist-modules';

export default function TimeLine() {
	let WorkIconStyle = {background: "black", color: "white"}
	let SchoolIconStyle = {background: "black", color: "white"}
	let contentStyle = {background: "aliceblue"}

	return(
		<VerticalTimeline
			lineColor="grey"
		>
				{
					TimeLineElements.map((element) => {
						let IsWorkIcon = element.Icon === "Work";
						let showutton = element.ButtonText !== undefined && element.ButtonText !== null && element.ButtonText !== "";

						return(
							<VerticalTimelineElement 
								key={element.id}
								date={element.Date}
								dateClassName="date"
								contentStyle={contentStyle}
								iconStyle={IsWorkIcon ? WorkIconStyle : SchoolIconStyle}
								icon={IsWorkIcon ? <WorkIcon></WorkIcon> : <SchoolIcon></SchoolIcon>}
							>
								<div className="timeline-title">
									{element.Title}
								</div>
								<div className="timeline-subtitle">{element.Location}</div>
								<div className="description">{element.Desciption}</div>
								<div className="btn">
									{showutton && <a href={element.Link} target="_blank" className="button">{element.ButtonText}</a>}
								</div>
							</VerticalTimelineElement>
						);
					})
				}
			</VerticalTimeline>
	);
}