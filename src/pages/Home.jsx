import React from "react";
import MainBgImage from "../components/MainBgImage/MainBgImage";
import CategorySection from "../components/CategorySection/CategorySection";
import SelectCategory from "../components/SelectCategory/SelectCategory";
import BrowseByStyle from "../components/BrowseByStyle/BrowseByStyle";
import InforCircleIcon from "../components/common/InforCircleIcon";
import { TfiHeadphoneAlt, TfiTruck } from "react-icons/tfi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import useFetch from "../hooks/useFetch";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import Container from "../components/common/Container";

const Home = () => {
  const {
    data: flashSalesData,
    loading: loadingFlash,
    error: errorFlash,
  } = useFetch("product?limit=4");

  const {
    data: featuredData,
    loading: loadingFeatured,
    error: errorFeatured,
  } = useFetch("product?limit=4");
  const arr = Array(4).fill("*");
  return (
    <div className="">
      <MainBgImage />
      {loadingFlash ? (
        <Container>
          <div className="flex flex-wrap items-center gap-5">
            {arr.map((_, idx) => (
              <ShimmerSimpleGallery key={idx} card imageHeight={300} caption />
            ))}
          </div>
        </Container>
      ) : (
        <CategorySection
          data={flashSalesData?.data || []}
          label={"Today's"}
          title={"Flash Sales"}
          buttonText={"See All"}
        />
      )}
      <SelectCategory />
      {loadingFeatured ? (
        <Container>
          <div className="flex flex-wrap items-center gap-5">
            {arr.map((_, idx) => (
              <ShimmerSimpleGallery key={idx} card imageHeight={300} caption />
            ))}
          </div>
        </Container>
      ) : (
        <CategorySection
          data={featuredData?.data || []}
          label={"Today's"}
          title={"Flash Sales"}
          button={"See all"}
        />
      )}
      <BrowseByStyle />
      <div className="flex items-center justify-center gap-52 my-20">
        <InforCircleIcon
          title="Free and Fast Delivery"
          desc={"Free delivery for all orders over $140"}
        >
          <TfiTruck size={28} color="white" />
        </InforCircleIcon>
        <InforCircleIcon
          title={"24/7 CUSTOMER SERVICE"}
          desc={"Friendly 24/7 customer support"}
        >
          <TfiHeadphoneAlt size={28} color="white" />
        </InforCircleIcon>
        <InforCircleIcon
          title={"MONEY BACK GUARANTEE"}
          desc={"We reurn money within 30 days"}
        >
          <IoShieldCheckmarkOutline size={28} color="white" />
        </InforCircleIcon>
      </div>
    </div>
  );
};

export default Home;
