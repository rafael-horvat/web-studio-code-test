import React from 'react'
import type { NextPage } from 'next'
import {useState, useEffect} from 'react'
import Head from 'next/head'
import FollowCursor from '../components/FollowCursor'
import Script from 'next/script'
import Header from '../components/Header'
import ParallaxItem from '../components/ParallaxItem'
import DotText from '../components/DotText'
import HorizontalText from '../components/HorizontalText'
import SplitTextAnimation from '../components/SplitTextAnimation'
import DetailsModal from '../components/DetailsModal'

const color1 = '#000'
const color2 = '#e2e2e2'

const Home: NextPage = () => {
  const [isDark, setDark] = useState(true)  
  const [rendered, setRendered] = useState(false)  
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [DetailContent, setDetailContent] = useState({title:'initial', details:'initial', url:'img/img01.jpg'})
  
  const OkDetailsModalhandle = () =>{
    setShowDetailsModal(false)
  }

  const CloseDetailsModalhandle = () =>{
    setShowDetailsModal(false)
  }

  const showDetailsModalhandle = (details:{ title: string; details: string; url: string }) =>{    
    setDetailContent(details)
    setShowDetailsModal(true)
  }

  
  const allow =
    <svg width="30" height="15" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:'10px'}}>
      <rect x="1" y="1" width="28" height="13" rx="6.5" fill={isDark?"#FF5C00":"#001AFF"} stroke={isDark?"#FF5C00":"#001AFF"} strokeWidth="2"/>
      <path className="arrow" fillRule="evenodd" clipRule="evenodd" d="M6.32812 7.96875V7.03125L23.2031 7.03125V7.96875L6.32812 7.96875Z" fill="white"/>
      <rect className="arrow" width="5.625" height="0.9375" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 20.1172 11.4844)" fill="white"/>
      <rect className="arrow" width="5.625" height="0.9375" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24.0938 7.49316)" fill="white"/>
    </svg>
 
  return (
    <>
      <Head>
        <title>Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main uppercase " style={{backgroundColor:isDark?color1:color2, color:isDark?color2:color1}}>        
                
        <div data-scroll className="main-wrapper">

          <Header/>
          <div className="content">
            
            <section className="fluid__item fluid__item--home fluid__item--current text-[40px] md:text-[97px] leading-[40px] md:leading-[90px]">
              <div className="hidden md:block my-32">
                <p className="text-justify" data-splitting="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Independent</p>
                <p className="text-justify" data-splitting="">design&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;studio</p>
                <p className="text-justify flex items-center" data-splitting="">based in
                {isDark?
                  <button className="button-next button--telesto button--letstalk mx-4" onClick={ () => alert('clicked')}>
                    <span><span className="-mt-3 relative">
                      LET’S TALK
                      {allow}
                    </span></span>
                  </button>
                  :
                  <button className="button-next button--telesto telesto-blue button--letstalk text-black mx-4" onClick={ () => alert('clicked')}>
                    <span><span className="-mt-3 relative">
                      LET’S TALK
                      {allow}                   
                    </span></span>
                  </button>
                }
                los angeles
              </p>
              </div>
              <div className="md:hidden my-10">
                <p className="text-justify" data-splitting="">Independent design<br/>studio</p>
                <p className="text-justify  flex items-center" data-splitting="">in
                <button className="button-next button--telesto button--letstalk mx-2 h-[40px]" onClick={ () => alert('clicked')}>
                  <span><span className="relative">
                    LET’S TALK
                    {allow}                   
                  </span></span>
                </button>
                los</p>
                <p className="text-justify  flex items-center" data-splitting="">angeles</p>
              </div>
              <div className="h-[35px]"></div>
              <DotText leftalign={true} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
            </section>

            <ParallaxItem no="01" title="title 1" imgURL='url(img/product01.jpg)'
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />

            <ParallaxItem no="02" title="title 2" imgURL='url(img/product02.jpg)'
              description="We don't have to be committed. We are just playing here."
            />
            
            <section className="fluid__item fluid__item--home fluid__item--current mt-[50px] mb-[110px] md:mb-[250px]">
              <div className="h-[50px] hidden md:block"></div>
              <DotText leftalign={false} text="about" />
              <div className="h-[30px]"></div>

              <div className="md:hidden">
                <SplitTextAnimation fontSize={38}
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                />
              </div>
              <div className="hidden md:block">
                <SplitTextAnimation fontSize={76}
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                />
              </div>
              
              <div className="md:flex justify-between items-center mt-4">
                <DotText leftalign={true} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."/>
                <div className="h-6 md:hidden"/>
                <div className="mr-40 ">
                  {isDark?
                    <button className="button-next button--telesto button--service mx-6" onClick={ () => alert('clicked')}>
                      <span><span className="relative">
                        OUR SERVICES
                        {allow}                   
                      </span></span>
                    </button>
                    :
                    <button className="button-next button--telesto telesto-blue text-black button--service mx-6" onClick={ () => alert('clicked')}>
                      <span><span className="relative">
                        OUR SERVICES
                        {allow}                   
                      </span></span>
                    </button>
                  }
                </div>
              </div>
            </section>

            <section className="mb-[110px] md:mb-[250px]">
              <DotText leftalign={false} text="SELECT&nbsp;PROJECTS" />
              <div className="h-[16px] md:h-[30px]"></div>
              <div className="overflow-hidden">
                <div className="grid -mx-32" style={{transform:'rotate(0deg)'}}>
                  <HorizontalText step={3} text="Project1" url='img/img01.jpg' direction={1}  showdetail={showDetailsModalhandle}/>
                  <HorizontalText step={2} text="Project2" url='img/img02.jpg' direction={-1} showdetail={showDetailsModalhandle}/>
                  <HorizontalText step={2} text="Project3" url='img/img03.jpg' direction={1}  showdetail={showDetailsModalhandle}/>
                  <HorizontalText step={3} text="Project4" url='img/img04.jpg' direction={-1} showdetail={showDetailsModalhandle}/>
                  <HorizontalText step={2} text="Project5" url='img/img05.jpg' direction={1}  showdetail={showDetailsModalhandle}/>
                  <HorizontalText step={2} text="Project6" url='img/img06.jpg' direction={-1} showdetail={showDetailsModalhandle}/>
                </div>
              </div>
            </section>

            <section className="mb-[110px]">
              <div className="md:flex items-center justify-center text-[100px] md:text-[170px] leading-[100px] md:leading-[170px] font-normal" data-splitting="">
                <div>Let’s</div>                
                <div className="md:hidden w-full text-right">work</div>
                <div className="h-6 md:hidden"></div>
                <div className="flex justify-center ">
                  {
                    isDark?
                    <button className="button-next button--telesto mx-4 border-white" onClick={ () => alert('clicked')}>
                      <span><span className="relative">
                          <svg width="112" height="46" viewBox="0 0 112 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.65625 25.6875L0.65625 20.3125L106.406 20.3125V25.6875L0.65625 25.6875Z" fill="#FF5C00"/>
                            <rect width="33.7833" height="5.63055" transform="matrix(0.737805 -0.675013 -0.737805 -0.675013 87.0625 45.8438)" fill="#FF5C00"/>
                            <rect width="33.7835" height="5.63058" transform="matrix(-0.737843 -0.674972 -0.737843 0.674972 111.988 22.9611)" fill="#FF5C00"/>
                          </svg>                                       
                      </span></span>
                    </button>
                    :
                    <button className="button-next button--telesto telesto-blue mx-4 border-black" onClick={ () => alert('clicked')}>
                      <span><span className="relative">
                        <svg width="112" height="46" viewBox="0 0 112 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M0.65625 25.6875L0.65625 20.3125L106.406 20.3125V25.6875L0.65625 25.6875Z" fill="#0019FF"/>
                          <rect width="33.7833" height="5.63055" transform="matrix(0.737805 -0.675013 -0.737805 -0.675013 87.0625 45.8438)" fill="#0019FF"/>
                          <rect width="33.7835" height="5.63058" transform="matrix(-0.737843 -0.674972 -0.737843 0.674972 111.988 22.9611)" fill="#0019FF"/>
                        </svg>
                      </span></span>
                    </button>
                  }
                </div>
                <div className="hidden md:block">work</div>
              </div>
              <div className="h-10 md:hidden"/>
              <div className="w-full flex justify-end md:mt-4">
                <p className="hidden md:block text-14 w-[400px] mr-[150px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="text-14 w-full px-8 md:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </section>

            <section className="md:flex justify-between items-center">
              <div className="flex items-center justify-center md:justify-start">
                {
                  isDark
                  ?
                  <button className="button-next button--telesto mx-4 border-orange-500" 
                    style={{height:'53px !important'}} onClick={ () => setDark(!isDark)}
                  >
                    <span><span className="relative">
                      Dark/Light                    
                    </span></span>
                  </button>
                  :
                  <button className="button-next button--telesto telesto-blue mx-4 border-blue text-black" 
                    style={{height:'53px !important'}} onClick={ () => setDark(!isDark)}
                  >
                    <span><span className="relative">
                      Dark/Light                    
                    </span></span>
                  </button>
                }
                <p className="text-14 ml-12 hidden md:block ">DESIGN STUDIO<br/>LOS ANGELES</p>  
              </div>
              <p className="text-14 text-center mt-4 md:hidden pr-16">DESIGN STUDIO<br/>LOS ANGELES&nbsp;&nbsp;&nbsp;</p>  
              <div className="h-[75px] md:hidden"/>
              <p className="text-14 md:ml-6 text-center md:text-left">2022© STUDIO LLC. All Rights Reserved.</p>  
            </section>

            <section className="flex justify-center items-center -mx-16 pt-[100px] h-[120px] overflow-hidden">
              <p className="text-[180px] md:text-[240px] font-bold text-center">STUDIO©</p>  
            </section>
          </div>
        
        </div>

        <canvas id='hover-image-canvas' className="pointer-events-none" 
          style={{width:'100%', height:'100%', position:'fixed', left:0, top:0, opacity:1.0, zIndex:1}}/>
        <div id='hover-details-wrapper' className="absolute left-0 top-0"></div>
      </main>

      <DetailsModal show={showDetailsModal} handleClose={CloseDetailsModalhandle}>
        <p className="text-center p-4 text-40">{DetailContent.title}</p>
        <p className="text-center p-8 text-20">{DetailContent.details}</p>
        <img src={DetailContent.url} style={{}} className="absolute top-[50vh] -ml-10 -mr-10 w-full"/>
      </DetailsModal>

      <div className="hidden md:block">
        <FollowCursor/>
      </div>
      <Script src="./script/imagesloaded.pkgd.min.js"></Script>
      <Script src="./script/scrolling.js"></Script>
      
    </>
  )
}

export default Home