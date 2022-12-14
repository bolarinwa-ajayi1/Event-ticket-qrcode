import React,{useEffect, useState} from 'react'
import axios from "axios";
import Header from '../navigation/header.js';
import Footer from '../navigation/footer.js';
import './style.css'
import EventForm from '../modal/eventForm.js';


export default function Home() {
  let [songData, setSongData] = React.useState([]);
  let [videoData, setVideoData] = React.useState([]);

    useEffect(()=>{
      const URL = process.env.REACT_APP_BASEURL;

      const getAllSongs =() =>{
        const songURl = URL + 'songs';
  
        axios.request(songURl).then(function (response) {
          const allSongs = response.data;
          let newArr = []
  
          for(let i = 0; i < 4; i++){
            let index = Math.floor(Math.random() * allSongs.length);
            newArr.push(allSongs[index])
          }
          setSongData(newArr)
  
        }).catch(function (error) {
          console.error(error);
        });  
      } ;

      const getAllVideos =() =>{
        const videoURl = URL + 'videos';
  
        axios.request(videoURl).then(function (response) {
          const allVideos = response.data;
          let newArr = []
  
          for(let i = 0; i < 4; i++){
            let index = Math.floor(Math.random() * allVideos.length);
            newArr.push(allVideos[index])
          }
      
          setVideoData(newArr)
  
        }).catch(function (error) {
          console.error(error);
        });  
      } 
      getAllSongs();
      getAllVideos();
  }, [])

    
  // section one image asset
    const img1 = require('../../img/img1.jpg');
    const img2 = require('../../img/img2.jpg');
    const img3 = require('../../img/img3.jpg');

    //logo Asset
    const img4 = require('../../img/apple.png');
    const img5 = require('../../img/deezeer.png');
    const img7 = require('../../img/tiktok.png');
    const img8 = require('../../img/spotify.png');

    // card image asset
    const [ modalOpen, setOpenModal] = useState(false);


  return (
    <div className="body">
      <Header modalState={setOpenModal} ms={modalOpen} />
      {modalOpen&&<EventForm/>}
      <div className="flex justify-center lg:mt-16 mt-8 header-section">
        <div className="p-8 flex flex-col lg:w-8/12 justify-center items-center  md:w-10/12 sm:w-full">
          <h1 className="lg:text-6xl font-extrabold md:text-4xl text-white text-center main-text">
            <span class="gradient-text">Listening</span> to good music make your <span class="gradient-text">life better </span>
          </h1>
          <p className="text-lg font-thin text-white lg:w-8/12 md:w-10/12 sm:w:full pt-6 sub-text text-center">
            With new genre of music you can make huge change in music life, enjoy the best thought pattern in your life time.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-3 stage-section">
        <div className=" flex justify-center items-center lg:flex-row flex-col w-11/12">
          <div className="lg:w-3/12 w-full lg:mx-5">
            <img src={img3} alt="musician" className="rounded-lg" />
          </div>
          <div className="lg:w-3/12 w-full lg:mx-5 flex-col">
            <div className=" w-full h-auto my-5 text-center">
              <p className="text-base font-light py-5 text-white">Scroll down to see more</p>
              <div className="flex justify-center items-center">
                <div className="mouse"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="music-card">
                <img src={img1} alt="musician" className="rounded-lg" />
              </div>
            </div>
          </div>
          <div className="lg:w-3/12 w-full lg:mx-5 lg:my-0 my-5 ">
            <img src={img2} alt="musician" className="rounded-lg" />
          </div>
        </div>
      </div>

      <div className="flex justify-center partner-section">
        <div className="flex justify-between items-center  flex-col lg:flex-row w-9/12 my-12">
            <div className="w-3/10">
              <img src={img4} alt="Brand Logo" className='logo-img1' />
            </div>
            <div className="w-3/10">
              <img src={img5} alt="Brand Logo" className='logo-img' />
            </div>
            <div className="w-3/10">
              <img src={img7} alt="Brand Logo" className='logo-img' />
            </div>
            <div className="w-3/10">
              <img src={img8} alt="Brand Logo" className='logo-img' />
            </div>
          </div>
      </div>

      <div className="event-section">
        <div className="flex justify-center">
          <div className=" flex justify-center items-center lg:flex-row flex-col w-10/12 my-8">
            <div className="lg:w-6/12 lg:mx-5 w-full">
              <h1 className="text-white text-left header-text">Concert music event that you can attend in your location</h1>
            </div>
            <div className="lg:w-6/12 lg:mx-5 w-full">
              <p className="text-base font-thin text-white sub-text text-left my-5">
                With new genre of music you can make huge change in music life, enjoy the best thought pattern in your life time.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" flex justify-center items-center lg:flex-row flex-col w-10/12 my-8 ">
                {videoData.map(data => {
              return (
                   <video key={data.id} width="250" height="600" controls className="mx-3 rounded-md lg:my-0 my-5">
                      <source src={data.action}/>
                 </video>
                );   
              })}          
          </div>
        </div>
      </div>


      <div className="artist-section">
        <div className="mx-auto lg:w-4/12 ">
          <h1 className="text-white text-center header-text">Connect with artist, Choose from the best base</h1>
          <p className="text-base font-thin text-white sub-text text-center my-5">
            With new genre of music you can make huge change in music life, enjoy the best thought pattern in your life time.
          </p>
        </div>

        <div className="flex justify-center">
          <div className=" flex justify-between items-center lg:flex-row flex-col w-10/12 my-8">
            {songData.map(data => {
              return (
                <div key={data._id} className="lg:my-0 my-5"> 
                      <h1 className="text-white text-center lg:w-56 w-full py-1">{data.title}</h1>
                      <h3 className="text-white text-center lg:w-56 w-full py-1">{data.artist}</h3>
                      <p className="text-white text-center text-sm lg:w-56 w-full">{data.year}</p>
                  </div>
                );   
              })}
          </div>
        </div>
      </div>

      <div className="virtual-section">
        <div className="flex justify-center ">
          <div className=" flex justify-center items-center lg:flex-row flex-col w-10/12 my-8">
            <div className="lg:w-6/12 lg:mx-5 w-full">
              <h1 className="text-white text-left header-text">Visual music concert through our easy to use platform</h1>
            </div>
            <div className="lg:w-6/12 lg:mx-5 w-full">
              <p className="text-base font-thin text-white sub-text text-left my-5">
                With new genre of music you can make huge change in music life, enjoy the best thought pattern in your life time.
              </p>
              <div className="flex">
                <div className="lg:w-4/12 lg:ml-5 w-full">
                  <h1 className="text-white text-lg"> 120K views</h1>
                  <p className="text-white text-xs"> Lorem par move</p>
                </div>
                <div className="lg:w-4/12 lg:ml-5 w-full">
                  <h1 className="text-white text-lg"> 120K view</h1>
                  <p className="text-white text-xs"> Lorem par move</p>
                </div>
                <div className="lg:w-4/12 lg:ml-5 w-full">
                  <h1 className="text-white text-lg"> 120K view</h1>
                  <p className="text-white text-xs"> Lorem par move</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 mx-auto w-10/12">
          <div className=" flex justify-center items-center lg:flex-row flex-col w-full my-8">
            <div className="border-2 lg:w-5/12 lg:mx-5 w-full">
              1
            </div>
            <div className="border-2 lg:w-7/12 lg:mx-5 w-full">
              2
            </div>
          </div>
          <div className=" flex justify-center items-center lg:flex-row flex-col w-full my-8">
            <div className="border-2 lg:w-7/12 lg:mx-5 w-full">
              1
            </div>
            <div className="border-2 lg:w-5/12 lg:mx-5 w-full">
              2
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe-section mx-auto w-10/12 h-autos rounded-lg my-5">
        <div className="mx-auto lg:w-7/12 py-5">
          <h1 className="text-white text-center header-text">Easily find your favourite Virtual music or concert on our platform</h1>
          <p className="text-base font-thin text-white sub-text text-center my-3">
            Our platform offers you with best in season music, live concert with great artist.
          </p>

          <div className="formBox lg:flex justify-center items-center my-3">
            <input name="fullName" placeholder='Email Address' className="email-form" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}