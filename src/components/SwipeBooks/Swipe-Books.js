import { useEffect, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SingleSwipeBook from "./SingleSwipe-Book";

import useHttps from "../../hooks/useHttp";
import { fetchFewBook } from "../../lib/fetchPages";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import classes from "./Swipe-Book.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function SwipeBook() {
  const {
    sendRequest,
    status,
    data: fetchedData,
    error: errorMessage,
  } = useHttps(fetchFewBook, true);
  useEffect(() => {
    sendRequest(null);
  }, [sendRequest]);

  if (status === "pending") {
    return <h1 className="loading">Loading...</h1>;
  }

  if (status === "completed" && errorMessage !== null) {
    errorMessage.map((error) => {
      return (
        <div key={errorMessage.length}>
          <h1>{error.title}</h1>
          <p>For more information open console</p>
        </div>
      );
    });
  }

  const pagination = {
    clickable: true,
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
                  imgLink={book.attributes.posterImage}
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
