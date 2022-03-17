import { useEffect, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwipeBookInner from "./Swipe-Book_Inner";

import { useHttps } from "../../hooks/useHttps";
import { fetchManga } from "../../lib/fetchManga";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import { SwipeBookOuterStyled } from "../../styles/shared/Container.styled";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function SwipeBook() {
  const {
    sendRequest,
    status,
    data: fetchedData,
    error: errorMessage,
  } = useHttps(fetchManga, true);

  useEffect(() => {
    sendRequest({ pages: 5, offset: 0, sort: "popularityRank" });
  }, [sendRequest]);

  if (status === "pending") {
    return <h1 className="loading">Loading...</h1>;
  }

  if (status === "completed" && errorMessage !== null) {
    return <>{console.log(errorMessage)}</>;
    // errorMessage.map((error) => {
    //   return (
    //     <div key={errorMessage.length}>
    //       <h1>{error.title}</h1>
    //       <p>For more information open console</p>
    //     </div>
    //   );
    // });
  }

  const pagination = {
    clickable: true,
  };

  return (
    <Fragment>
      <SwipeBookOuterStyled>
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
                <SwipeBookInner
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
      </SwipeBookOuterStyled>
    </Fragment>
  );
}

export default SwipeBook;
