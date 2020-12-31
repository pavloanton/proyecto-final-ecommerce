import { useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ItemsContext } from "../../../context/ItemsProvider";
import { NavLink } from "react-router-dom";
import './sliderfeatured.components.styles.css'

const SliderFeatured = () => {
  const { getItemNoSale, itemNoSale } = useContext(ItemsContext);
  useEffect(() => {
    getItemNoSale();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="sliderShirt animate__animated animate__fadeInUp animate__delay-1s">
      <Slider {...settings}>
        {itemNoSale.map((item) => (
          <div className="product-card" key={item.id}>
            {item.sale ? null : <div className="badge">Hot</div>}
            <div className="product-tumb">
              <img src={item.image} alt={item.name} className="img-fluid" />
            </div>
            <div className="product-details">
              <span className="product-catagory">{item.category}</span>
              <h5 className="slideTitle">{item.name}</h5>
              <div className="product-bottom-details">
                <div className="product-price">
                  {item.sale ? <small>${item.priceOld}</small> : null}$
                  {item.priceNow}
                </div>
              </div>
              <div className="product-bottom-details">
                <NavLink
                  to={"/producto/" + item.id}
                  className="btn btnDetalle"
                  role="button"
                  aria-pressed="true"
                  exact
                >
                  View Detail
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderFeatured;