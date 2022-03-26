import { useState, useEffect, useRef } from "react";
// material
import { Box, Stack, Container, Typography } from "@mui/material";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";
import Slider from "react-slick";
import CarouselArrow from "components/CarouselArrow";
export default function Roadmap() {
  const RoadmapSliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Stack sx={{ bgcolor: "#151515", pt: 10, pb: 10 }}>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" spacing={20}>
          <Stack>
            <Typography sx={{ width: 600 }} variant="h2" color="#ff7a00">
              NFT ITEMS
            </Typography>
            <Typography>
              Earn your NFT items and trade them on the marketplace to make
              money
            </Typography>
          </Stack>
          <Stack>
            <Stack sx={{ px: 5, py: 3, bgcolor: "#ff7a00" }}>MARKETPLACE</Stack>
          </Stack>
        </Stack>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Slider {...settings}>
          {[...Array(11)].map((item, index) => (
            <Box sx={{ p: 3 }}>
              <video
                width="100%"
                height="100%"
                loop
                muted="muted"
                autoPlay="true"
              >
                <source
                  src={`/images/nfts/${index + 1}.mp4`}
                  type="video/mp4"
                />
              </video>
            </Box>
          ))}
        </Slider>
      </Container>
    </Stack>
  );
}
