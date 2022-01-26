import { useEffect, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SingleSwipeBook from "./SingleSwipe-Book";

import useHttps from "../../hooks/useHttp";
import { fetchOneBook } from "../../lib/fetchPages";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import classes from "./Swipe-Book.module.css";
import "./test.css";

function SwipeBook() {
  const {
    sendRequest,
    status,
    data: fetchedData,
    error,
  } = useHttps(fetchOneBook, true);

  useEffect(() => {
    sendRequest(null);
  }, [sendRequest]);

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }

  if (
    status === "completed" &&
    (!fetchedData || fetchedData.data.length === 0)
  ) {
    return <h1>{error}</h1>;
  }

  const pagination = {
    clickable: true,
    dynamicBullets: true,
  };

  return (
    <Fragment>
      <div className={classes.bookSpace}>
        <Swiper
          modules={[Pagination, EffectCoverflow, Autoplay]}
          effect={"coverflow"}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop={true}
          pagination={pagination}
        >
          {fetchedData.data.map((book) => {
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
    </Fragment>
  );
}

export default SwipeBook;
