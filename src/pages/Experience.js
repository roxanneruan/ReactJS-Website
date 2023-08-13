import React from 'react'
import {
    VerticalTimeline, 
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import GroupIcon from '@material-ui/icons/GroupTwoTone'

function Experience() {
  return (
    <div className="experience">
        <VerticalTimeline lineColor="#3e497a">

            <VerticalTimelineElement className="vertical-timeline-element--extracurricular"
                date="Apr. 2023 - May 2023"
                iconStyle={{background: "#3e497a", color: "#fff"}} 
                icon={<GroupIcon />}
                >
                <h3 className= "vertical-timeline-element-title"> 
                    UC Davis Design Interactive (UI/UX Club)
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                    Spring Fellowship '23
                </h4>

                <p> Conducted user research through survey to target UC Davis Students.
                    Prototyped and wireframed web redesign in Figma, critically analyzed user feedback
                    to further improve designs in Figma.
                </p>

                <h5 className="vertical-timeline-element-info"> Award: Most Human-Centered Design  </h5>
                <h5 className="vertical-timeline-element-info"> Skillset: Figma, User-Research, User-Testing,
                    Wireframing, Prototyping, Design, Teamwork</h5>

            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education"
                date="Sept. 2021 - Present"
                iconStyle={{background: "#3e497a", color: "#fff"}} 
                icon={<SchoolIcon />}
                >
                <h3 className="vertical-timeline-element-title"> 
                    University of California - Davis, Davis, CA 
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                    Bachelor's Degree
                </h4>

                <p> Computer Science </p>

                <h5 className="vertical-timeline-element-info"> GPA: 3.65</h5>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="Aug. 2017 - Jun. 2021"
            iconStyle={{background: "#3e497a", color: "#fff"}} 
            icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title"> 
                    KIPP King Collegiate HS, San Lorenzo, CA 
                </h3>

                <p> High School Diploma </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
      
    </div>
  )
}

export default Experience
