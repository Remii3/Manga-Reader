import classes from "./Swipe-Book.module.css";
import useHttps from "../../hooks/useHttp";
import { fetchOneBooks } from "../../lib/fetchPages";
import { useEffect } from "react";
import SingleSwipeBook from "./SingleSwipe-Book";
import { Fragment } from "react";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
function SwipeBook() {
  const {
    sendRequest,
    status,
    data: receivedData,
    error,
  } = useHttps(fetchOneBooks, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }

  if (
    status === "completed" &&
    (!receivedData || receivedData.data.length === 0)
  ) {
    return <h1>{error}</h1>;
  }

  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Fragment>
      <div className={classes.bookSpace}>
        <Swiper
          modules={[Pagination, EffectCoverflow, Autoplay]}
          effect={"coverflow"}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          pagination={pagination}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {receivedData.data.map((book) => {
            return (
              <SwiperSlide key={book.id}>
                <SingleSwipeBook
                  key={book.id}
                  id={book.id}
                  title={book.attributes.canonicalTitle}
                  description={book.attributes.description}
                  imgLink={book.attributes.posterImage.tiny}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={`${classes["swipeButtons-Space"]} centered`}></div>
    </Fragment>
  );
}

export default SwipeBook;
