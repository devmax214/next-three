import { MotionViewport, varFade } from "@/components/animate";
import { Box, Container, Typography } from "@mui/material";
import { m } from "framer-motion";
import { ProductCard1 } from "@/components/proudct-cards";
import Carousel, { CarouselArrows, useCarousel } from "@/components/carousel";
import { _relationProducts } from "@/@mockup/_product";
import { IProductItem } from "@/@types/product";

type Props = {
  products: IProductItem[];
};

export default function RelationProducts({ products }: Props) {
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
          bgcolor: "#fff",
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
            <Typography variant="h2" color="#292F3D">
              OTHERS ALSO BOUGHT
            </Typography>
          </m.div>

          <Box sx={{ position: "relative" }}>
            <CarouselArrows
              filled
              shape="rounded"
              onNext={carousel.onNext}
              onPrev={carousel.onPrev}
              leftButtonProps={{
                sx: {
                  left: 24,
                  ...(_relationProducts.length < 5 && { display: "none" }),
                },
              }}
              rightButtonProps={{
                sx: {
                  right: 24,
                  ...(_relationProducts.length < 5 && { display: "none" }),
                },
              }}
            >
              <Carousel
                ref={carousel.carouselRef}
                {...carousel.carouselSettings}
              >
                {products.map((product) => (
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
      </Box>
    </>
  );
}
