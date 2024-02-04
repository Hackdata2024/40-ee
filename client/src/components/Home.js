import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { SignInButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  // Redirect to dashboard if already signed in
  React.useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Background Banner" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Helping your Parents and Elders</h1>
          <p className="primary-text">
            Elderly Assistant Help Application is a way to help elders and ease
            their life with futuristic features
          </p>

          {!isSignedIn && (
            <SignInButton className="secondary-button">
              <span>
                Login Now <FiArrowRight />
              </span>
            </SignInButton>
          )}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
