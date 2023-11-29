import { Box, Container, Typography } from "@mui/material";
import { m } from "framer-motion";
import Carousel, { CarouselArrows, useCarousel } from "@/components/carousel";
import { _bestSellers } from "@/@mockup/_product";
import { ProductCard1 } from "@/components/proudct-cards";
import { MotionViewport, varFade } from "@/components/animate";
// import Icon2 from "@/components/icons/home/icon2";
// import Icon1 from "@/components/icons/home/icon1";
// import Icon3 from "@/components/icons/home/icon3";
import { IProductItem } from "@/@types/product";

type Props = {
  bestSellers: IProductItem[];
};

export default function Section2({ bestSellers }: Props) {
  const carousel = useCarousel({
    infinite: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  return (
    <>
      <Box
        component="div"
        sx={{
          position: "relative",
        }}
      >
        <Container
          component={MotionViewport}
          sx={{
            textAlign: "center",
            py: { xs: 10, md: 10 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography
              sx={{
                fontSize: { xs: 36, md: 48 },
                fontWeight: 700,
                color: "#292F3D",
              }}
              color="#292F3D"
            >
              BESTSELLERS
            </Typography>
          </m.div>

          <Box component="div" sx={{ position: "relative" }}>
            <CarouselArrows
              shape="rounded"
              onNext={carousel.onNext}
              onPrev={carousel.onPrev}
              leftButtonProps={{
                sx: {
                  left: 24,
                  ...(_bestSellers.length < 5 && { display: "none" }),
                },
              }}
              rightButtonProps={{
                sx: {
                  right: 24,
                  ...(_bestSellers.length < 5 && { display: "none" }),
                },
              }}
            >
              <Carousel
                ref={carousel.carouselRef}
                {...carousel.carouselSettings}
              >
                {bestSellers.map((product) => (
                  <Box
                    key={product._id}
                    component={m.div}
                    variants={varFade().in}
                    sx={{
                      px: 2,
                      py: { xs: 8, md: 10 },
                    }}
                  >
                    <ProductCard1 key={product._id} product={product} />
                  </Box>
                ))}
              </Carousel>
            </CarouselArrows>
          </Box>
        </Container>

        {/*<Box*/}
        {/*  component="div"*/}
        {/*  sx={{*/}
        {/*    position: "absolute",*/}
        {/*    width: 80,*/}
        {/*    height: 167,*/}
        {/*    left: 0,*/}
        {/*    bottom: 0,*/}
        {/*    transform: "translateY(50%)",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Icon1 />*/}
        {/*</Box>*/}

        {/*<Box*/}
        {/*  component="div"*/}
        {/*  sx={{*/}
        {/*    position: "absolute",*/}
        {/*    width: 71,*/}
        {/*    height: 40,*/}
        {/*    right: 100,*/}
        {/*    top: 100,*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Icon2 />*/}
        {/*</Box>*/}

        {/*<Box*/}
        {/*  component="div"*/}
        {/*  sx={{*/}
        {/*    position: "absolute",*/}
        {/*    width: 94,*/}
        {/*    height: 152,*/}
        {/*    right: 0,*/}
        {/*    bottom: 0,*/}
        {/*    transform: "translateY(50%)",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Icon3 />*/}
        {/*</Box>*/}
      </Box>
    </>
  );
}
