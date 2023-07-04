import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../style"
import { experiences } from "../constans"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({experiance}) => {
  return (<VerticalTimelineElement
  contentStyle={{background:'#1d1236',color:'#fff'}}
  contentArrowStyle={{borderRight:'7px solid #232631'}}
  experiance={experiance.date}
  iconStyle={{background:experiance.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img src={experiance.icon} alt="icon" 
      className="w-[60%] h-[60%] object-contain "
      />
    </div>
  }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experiance.title}</h3>
      <p className="text-secondary text-[16px] font-semibold">{experiance.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
    {experiance.points.map((point,index) => (
      <li key={`experiance-point-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider"
      >
        {point}
      </li>
    ))}
    </ul>
  </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}
    >
<p className={`${styles.sectionSubText}`}>what i have done so far!</p>
      <h2 className={styles.sectionHeadText}>experiance</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
    <VerticalTimeline>
      {experiences.map((experiance,index) => (
        <ExperienceCard key={index} experiance={experiance}/>
      ))}
    </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,'work') 