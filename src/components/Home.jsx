import React, { useEffect, useState } from 'react'
import './Home.css'
import pick from '../assets/pick.png'
import ggif1 from '../assets/ggif1.gif'
import badge2 from '../assets/badge2.gif'
import cvv from '../assets/cvv.pdf'
import globe from '../assets/globe.gif'
import desk from '../assets/desk.gif'
import layer from '../assets/layer.gif'
import tool from '../assets/tool.gif'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import Skill from './Skill'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeliting] = useState(false)
  const toRotate = ["FRONTEND DEVELOPER", "MEARN STACK DEVELOPER", "REACT DEVELOPER", "FULLSTACK DEVELOPER"]
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 300

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    return () => { clearInterval(ticker) }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updateText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)

    }
    if (!isDeleting && updateText === fullText) {
      setIsDeliting(true)
      setDelta(period)
    } else if (isDeleting && updateText === '') {
      setIsDeliting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }

  }



  return (
    <>
      {/* <Header></Header> */}

      <div className='bg-img row w-100'>
        <Header></Header>

        <div className='main col-lg-6 text-center '>
          <section className='home'>
            <div className='home-contnt ms-5'>
              <h3 className='text-warning'>HELLO, IT'S ME</h3>
              <h1 className='text-warning'>ABIN CHANDRA</h1>
              <h3> I'M A <span className='wrap'>{text} |</span></h3>
              <p className='para'>I Work in Full stack Web Development And Mostly Focused On Front-End Web Development.I Have Experience in Dealing With Programming And Modern Technologies,And I have Built A Lot Of projects That Have IncreasedMy Experience And Trained A Loat,I Am A Fast Leaner And Always Love To Develop Myself </p>
              <div className='ho' >
                <div className='home-sci'>
                  <a href="https://www.linkedin.com/in/abin-chandra-2a233b226/"><i class="fa-brands fa-linkedin-in mt-2" style={{ color: '#0ef' }}></i></a>

                </div>
                <div className='home-sci'>
                  <a href="https://github.com/abinchandra22"><i class="fa-brands fa-github mt-2" style={{ color: '#0ef' }}></i></a>

                </div>
                <div className='home-sci'>
                  <a href="https://www.instagram.com/mobonature?igsh=MXZjYmFwcDFoNXF1Nw=="><i class="fa-brands fa-instagram mt-2" style={{ color: '#0ef' }}></i></a>

                </div>

              </div>
            </div>
          </section>

        </div>
        <div className='pic col-lg-6 text-center'>
          <img class="profile img-fluid" src={pick} alt="" />
        </div>

        {/* text slide */}
        <div className='text '>
          <div className='text-slide ms-5 me-5 mt-5 '>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>Bootstrap</h3>
            <h3>Java Scropt</h3>
            <h3>React</h3>
            <h3>Redux</h3>
            <h3>Angular</h3>
            <h3>MongoDB</h3>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>Bootstrap</h3>
            <h3>Java Scropt</h3>
            <h3>React</h3>
            <h3>Redux</h3>
            <h3>Angular</h3>
            <h3>MongoDB</h3>

          </div>


        </div>
        {/* about*/}

        <div className='bs ' id='about'>
          <div className='about mt-5 W-100'>
            <button class='glowing-btn'><span class='glowing-txt'>AB<span class='faulty-letter'>OUT</span>ME</span></button>
          </div>
          <div className='row  mt-5 '>

            <div className=' col-lg-5 text-center'>

              <img className='home-contnt gif img-fluid' src={ggif1} alt="" />
            </div>

            <div className='col-lg-1'></div>
            <div className='pic col-lg-6 text-start mt-5'>
              <div className='text-center mt-2'>
                <h4 >MY NAME IS ABIN CHANDRA <span style={{ color: 'yellow' }}>I'M A {text}</span></h4>

              </div>

              {/* card */}

              <Card className='cards ' >
                <div className='row g-1'>
                  <div className='col-lg-2 text-center'>
                    <Card.Img variant="top" src={badge2} style={{ height: "80px", width: "80px", marginTop: "20px" }} />

                  </div>
                  {/* <div className='col-lg-1'></div> */}


                  <div className='col-lg-9 text-light ms-3'>
                    <Card.Body>
                      {/* <Card.Title>Card Title</Card.Title> */}
                      <Card.Text>
                        A skilled full-stack developer (MEARN stack), proficient in designing, implementing, and
                        maintaining web applications. Experienced in both front-end and back-end technologies, adept
                        at collaborating with cross-functional teams to deliver high-quality solutions that meet client
                        needs.
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>

              </Card>


              <Card className='cards ' >
                <div className='row g-1'>
                  <div className='col-lg-2 text-center'>
                    <Card.Img variant="top" src={badge2} style={{ height: "80px", width: "80px", marginTop: "20px" }} />

                  </div>
                  {/* <div className='col-lg-1'></div> */}


                  <div className='col-lg-9 text-light ms-3'>
                    <Card.Body>
                      {/* <Card.Title>Card Title</Card.Title> */}
                      <Card.Text>
                        I have completed numerous projects in React, Node.js, and MongoDB for backend
                        development. I have completed my Bachelors degree in computer Science .My goal is to develop
                        my skill at a reputed company and help in the company development.        </Card.Text>

                    </Card.Body>
                  </div>


                </div>

              </Card>

              <Card className='cards ' >
                <div className='row g-1'>
                  <div className='col-lg-2 text-center'>
                    <Card.Img variant="top" src={badge2} style={{ height: "80px", width: "80px", marginTop: "20px" }} />

                  </div>
                  {/* <div className='col-lg-1'></div> */}


                  <div className='col-lg-9 text-light ms-3'>
                    <Card.Body>
                      {/* <Card.Title>Card Title</Card.Title> */}
                      <Card.Text>
                        I Work In Front-End Web Development, And I Have Experience in Dealing With Programming And Modern Web Technologies, And I Have Built A Lot Of Projects That Have Increased My Experience And Trained A Lot, I AmA Fast Learner And Always Love To Develop Myself.</Card.Text>
                    </Card.Body>
                  </div>
                </div>

              </Card>

              <Card className='cards ' >
                <div className='row g-1'>
                  <div className='col-lg-2 text-center'>
                    <Card.Img variant="top" src={badge2} style={{ height: "80px", width: "80px", marginTop: "20px" }} />

                  </div>
                  {/* <div className='col-lg-1'></div> */}


                  <div className='col-lg-9 text-light ms-3'>
                    <Card.Body>
                      {/* <Card.Title>Card Title</Card.Title> */}
                      <Card.Text>
                        I have don a six month internship at Luminartechnolab as a Frontend developer.
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>

              </Card>

              {/* resume */}

              <div className='cv mb-3' >
                <button>
                  <a href={cvv} style={{ textDecoration: 'none', color: 'white' }}>Download CV</a>
                </button>
              </div>

            </div>

          </div>

          {/* SERVISES */}

          <div className='service' id='Services'>
            <div className='about mt-5 W-100 mb-5'>
              <button class='glowing-btn'><span class='glowing-txt'>SE<span class='faulty-letter'>RVIC</span>ES</span></button>
            </div>

            <div className='ser  mb-5 text-center'>
              <Card className='cardss' style={{ width: '18rem', marginBottom: '25px', alignItems: 'center' }}>
                <Card.Img variant="top" src={desk} style={{ height: '100px', width: '100px' }} />
                <Card.Body>
                  <Card.Title className='text-danger text-bold mt-3'><h4>SINGLE PAGE APPLICATION</h4></Card.Title>
                  <Card.Text className='mt-4'>
                    I Can Build Professional Single Page Application Using React ,Angular And Modern Library.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className='cardss' style={{ width: '18rem', marginBottom: '25px', alignItems: 'center' }}>
                <Card.Img variant="top" src={globe} style={{ height: '100px', width: '100px' }} />
                <Card.Body>

                  <Card.Title className='text-danger text-bold mt-3'><h4>WEBSITES</h4></Card.Title>
                  <Card.Text className='mt-4'>
                    I Can Build Professional Responsive Websites Optimized For The Most Popular Search Engines.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className='cardss' style={{ width: '18rem', marginBottom: '25px', alignItems: 'center' }}>
                <Card.Img variant="top" src={layer} style={{ height: '100px', width: '100px' }} />
                <Card.Body>
                  <Card.Title className='text-danger text-bold mt-3 '><h4>WEB APPLICATION</h4></Card.Title>
                  <Card.Text className='mt-4'>
                    I Can Build Applications for Different Purposes Using Technologies That Allow You More security.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className='cardss' style={{ width: '18rem', marginBottom: '25px', alignItems: 'center' }}>
                <Card.Img variant="top" src={tool} style={{ height: '100px', width: '100px' }} />
                <Card.Body>
                  <Card.Title className='text-danger text-bold mt-3'><h4>FIXED WEBSITES</h4></Card.Title>
                  <Card.Text className='mt-4'>
                    I Can Build Professional Responsive Websites Optimized For The Most Popular Search Engines.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

          </div>

          {/* skill */}

          <div className='w-100 ' id='Skills'>
            <div className='about mt-5 W-100 mb-5'>
              <button class='glowing-btn'><span class='glowing-txt'>MY<span class='faulty-letter'>SKIL</span>LS</span></button>
            </div>

            <div className='mt-5 '>
              <Skill></Skill>
            </div>

          </div>

          {/* Projects */}

          <div className='w-100 ' id='project'>
            <div className='about mt-5 W-100 mb-5'>
              <button class='glowing-btn'><span class='glowing-txt'>PR<span class='faulty-letter'>OJE</span>CTS</span></button>
            </div>

            <div className='mt-5 '>
              <Project></Project>
            </div>

          </div>

          {/* Contact */}

          <div className='w-100 ' id='Contact'>
            <div className='about mt-5 W-100 '>
              <button class='glowing-btn'><span class='glowing-txt'>CO<span class='faulty-letter'>NCACT</span></span></button>
            </div>

            <div className=' p-5'>
              <Contact></Contact>
            </div>

          </div>

          {/* footer */}

          <div className='  w-100'>
            <Footer></Footer>
          </div>


        </div>
      </div>
    </>
  )
}

export default Home

