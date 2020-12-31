import "./sliderfirst.components.styles.css";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import Image Sliders
import SlideDesktop1 from "../../../assets/img/slide1.jpg";
import SlideDesktop2 from "../../../assets/img/slide2.jpg";
import SlideDesktop3 from "../../../assets/img/slide3.jpg";
import SlideDesktop4 from "../../../assets/img/slide4.jpg";
import SlideDesktop5 from "../../../assets/img/slide5.jpg";

import SlideMobile1 from "../../../assets/img/slide1-mobile.jpg";
import SlideMobile2 from "../../../assets/img/slide2-mobile.jpg";
import SlideMobile3 from "../../../assets/img/slide3-mobile.jpg";
import SlideMobile4 from "../../../assets/img/slide4-mobile.jpg";
import SlideMobile5 from "../../../assets/img/slide5-mobile.jpg";

const SliderFirst = () => {
  //Array Images and text
  const slide = {
    results: [
      {
        urlDesktop: `${SlideDesktop1}`,
        urlMobile: `${SlideMobile1}`,
      },
      {
        urlDesktop: `${SlideDesktop2}`,
        urlMobile: `${SlideMobile2}`,
      },
      {
        urlDesktop: `${SlideDesktop3}`,
        urlMobile: `${SlideMobile3}`,
      },
      {
        urlDesktop: `${SlideDesktop4}`,
        urlMobile: `${SlideMobile4}`,
      },
      {
        urlDesktop: `${SlideDesktop5}`,
        urlMobile: `${SlideMobile5}`,
      },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="sliderHome animate__animated animate__fadeIn animate__delay-0.5s">
      <Slider {...settings}>
        {slide.results.map((item, index) => (
          <div key={index}>
            <img
              className="img-fluid imgSlider slideDesktop"
              src={item.urlDesktop}
              alt="imagen del slider Desktop"
            />
            <img
              className="img-fluid imgSlider slideMobile"
              src={item.urlMobile}
              alt="imagen del slider Desktop"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderFirst;