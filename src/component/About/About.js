import React from 'react'
import me from '../../assets/me1.jpg'
import './About.css'
function About() {
  return (
    <div className='cont'>
      <section>
        <div className='abohead'> <span className='head'>01. </span>About Me</div>
        <div className='cont'>
          <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dolore, architecto maiores aut dolorem distinctio sapiente inventore error. A hic ipsam dolor, repudiandae omnis vel rem numquam assumenda ducimus nemo obcaecati maxime id fugiat amet sapiente ab accusamus quos veritatis sit nisi? Nisi aut autem ipsa dolorum doloribus, consequatur aliquid magnam veniam tenetur eveniet enim ratione architecto quod laborum fugiat deserunt nulla magni pariatur est optio illo quibusdam quisquam ad reiciendis! Dicta architecto aliquid a iusto fugit, quia laborum voluptate placeat sit fugiat debitis facilis, nisi non? Quod et voluptatem eos sit placeat ad aperiam, nisi eaque nam laborum praesentium Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae distinctio doloremque officia? Magnam sunt, accusantium ullam ab iure totam veritatis natus ipsa omnis, quia minus neque quis quasi tenetur optio?.</p>
            <div className='skill'>
            <ul className='list'>
              <li>Html</li>
              <li>CSS</li>
              <li>BootStrap</li>
              <li>Tailwind</li>
              <li>Javascript</li>
              <li>React Js</li>
            </ul>
            <ul className='list'>
              <li>NodeJs</li>
              <li>ExpressJs</li>
              <li>MongoDb</li>
              <li>PassportJs</li>
              <li>Deployment</li>
              <li>Git Github Js</li>
            </ul>
            </div>
            </div>
          <img src={me} alt="" className='img' />
        </div>
      </section>
    </div>
  )
}

export default About
