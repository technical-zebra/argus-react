import "./home.scss";
import React from "react";
import Gallery from "../components/gallery";
import home1 from "../Images/home1.jpg";
import home2 from "../Images/home2.jpg";
import home3 from "../Images/home3.png";
import home4 from "../Images/home4.png";
import homeDrone from "../Images/home_drone.jpg";
import { useNavigate } from "react-router-dom";

import AnimatedText from "../components/AnimatedText.js";

/**
 * It returns an iframe element with a className, src, title, frameBorder, allow, and allowFullScreen
 * @returns A React component that renders an iframe.
 */
function VideoIframe() {
  return (
    <iframe
      className="cover-video"
      src="https://www.youtube.com/embed/DJ2hcC1orc4"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}

/**
 * It returns a div with a bunch of other divs and other elements inside it
 * @returns A div with a class of text-content saas-intro.
 */
function MaaSIntro() {
  const navigate = useNavigate();

  return (
    <div className="text-content saas-intro">
      <div>
        <div className="saas-intro-space2"></div>
        <div className="saas-intro-title">
          <br></br>
          <AnimatedText>
            <h1>
              <b>Start your intelligent modelling now!</b>
            </h1>
          </AnimatedText>
          <br></br>
        </div>
        <div className="saas-intro-space2"></div>
        <div className="row saas-intro-content">
          <div className="col col-md-4 col-lg-4">
            <h3>Modelling for flexible needs</h3>
            <br></br>
            <p>
              Customize to model different objects and different environments
              that specify by customers
            </p>
          </div>
          <div className="col col-md-4 col-lg-4">
            <h3>Cost reduction</h3>
            <br></br>
            <p>
              30-80% reduction in manual modelling time and 30-80% cost for
              purchase models
            </p>
          </div>
          <div className="col col-md-4 col-lg-4">
            <h3>High resolution and realistic shape</h3>
            <br></br>
            <p>
              AI-powered drone and Intelligent modelling on real objects provide
              high resolution and realistic details on model
            </p>
          </div>
        </div>
        <div className="saas-intro-title">
          <br></br>
          <button
            className="btn btn-primary saas-intro-btn"
            type="button"
            onClick={() => navigate("/maas")}
          >
            <b>Explore Modelling as a Service</b>
          </button>
          <div className="saas-intro-space"></div>
        </div>
      </div>
    </div>
  );
}

/**
 * GetStart() is a function that returns a div with a class of get-start-block, which contains a div
 * with a class of row h-100, which contains two divs, one with a class of col-6 d-flex
 * justify-content-center h-100 flex-column no1, which contains an h2 and a button, and the other with
 * a class of col-6 d-flex justify-content-center h-100 flex-column no2, which contains an image.
 * @returns A div with a class of get-start-block.
 */
function GetStart() {
  const navigate = useNavigate();

  return (
    <div className="get-start-block">
      <div className="row align-items-center">
        <div className="col-lg-6 d-flex justify-content-center no1">
          <AnimatedText>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  
                    <h2>Bring Realistic and detailed model to your business</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    className="btn btn-outline-light button rounded-0 px-4 py-3"
                    type="button"
                    onClick={() => navigate("/contact")}
                  >
                    Get started -&gt;
                  </button>
                </div>
              </div>
            </div>
          </AnimatedText>
        </div>

        <div className="col-lg-6 d-flex flex-column no2">
          <img
            className="image"
            src={homeDrone}
            alt="A man flying a drone"
          ></img>
        </div>
      </div>
    </div>
  );
}

/**
  Generate Homepage from react functional components
 * @returns A div contain all components format layout using bootstrap.
 */
function Homepage() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center home-col">
          <VideoIframe />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center">
          <MaaSIntro />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center home-col">
          <Gallery
            title="Characters / Items / Environment / Architectural Visualization"
            images={[home1, home2, home3, home4]} bgcolor={undefined}          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center home-col">
          <GetStart />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
