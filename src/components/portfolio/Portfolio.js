import { useRef } from "react";
import "./portfolio.css"
import {motion,useScroll,useSpring, useTransform} from "framer-motion" ;

const items = [
    {
        id:1,
        title:"Portfolio React",
        img:"https://images.pexels.com/photos/1111692/pexels-photo-1111692.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Portfolio Website using the React js and Framer motion is used ",
    },
    {
        id:2,
        title:"Farmer C#",
        img:"https://images.pexels.com/photos/1482101/pexels-photo-1482101.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"farmer Website using the C Sharp ",
    },
];

const Single = ({item})=>{

    const ref = useRef()

    const{scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    });

    const y = useTransform(scrollYProgress,[0,1],["0%","-300%"]);
    return(
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                      <img src={item.img}/>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <div className="button">See More</div>
                </motion.div>
                </div>
              
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const{scrollYProgress} = useScroll({
        target:ref,
        offset:["end end","start start"],
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,    
    });
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
<Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio