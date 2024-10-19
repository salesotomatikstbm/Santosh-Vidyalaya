"use client";
import { toggleVideoOpen } from "@/redux/features/videoSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import React from "react";

const BannerSection = () => {
  const dispatch = useAppDispatch()
  const handleVideoShow = () => {
    dispatch(toggleVideoOpen())
  }
  return (
    <section className="tf__banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8">
            <div className="tf__banner_text wow fadeInUp">
              <h5>Welcome to Shanthosh vidyalaya!</h5>
              <h1>
              Where Learning <span>Becomes</span> Adventure!
              </h1>
              <p>
              At Shanthosh Vidyalaya, education goes beyond the classroom, evolving into a journey filled with discovery and growth. We are dedicated to fostering a love for learning, empowering students to explore their potential, and preparing them for a bright future. With a strong focus on creativity, critical thinking, and holistic development, we strive to inspire young minds and cultivate a lifelong passion for knowledge.       </p>
              <ul className="d-flex flex-wrap align-items-center">
                <li>
                  <Link className="common_btn" href="/about">
                    Read More
                  </Link>
                </li>
                <li>
                  <a
                    className="venobox play_btn"
                    role="button"
                    onClick={handleVideoShow}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
