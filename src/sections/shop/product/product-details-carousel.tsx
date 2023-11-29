import { Avatar, Box } from "@mui/material";
import Carousel, {
  CarouselArrowIndex,
  useCarousel,
} from "@/components/carousel";
import { alpha, styled, useTheme } from "@mui/material/styles";
import Image from "@/components/image";
import { IProductItem } from "@/@types/product";
import LightBox, { useLightBox } from "@/components/lightbox";
import { bgGradient } from "@/theme/css";

const THUMB_SIZE = 100;

const StyledThumbnailsContainer = styled("div")<{ length: number }>(
  ({ length, theme }) => ({
    position: "relative",
    margin: theme.spacing(0, "auto"),
    "& .slick-slide": {
      lineHeight: 0,
    },

    ...(length === 1 && {
      maxWidth: THUMB_SIZE * 1 + 16,
    }),

    ...(length === 2 && {
      maxWidth: THUMB_SIZE * 2 + 32,
    }),

    ...((length === 3 || length === 4) && {
      maxWidth: THUMB_SIZE * 3 + 48,
    }),

    ...(length >= 5 && {
      maxWidth: THUMB_SIZE * 6,
    }),

    ...(length > 3 && {
      "&:before, &:after": {
        ...bgGradient({
          direction: "to left",
          startColor: `${alpha(theme.palette.background.default, 0)} 0%`,
          endColor: `${theme.palette.background.default} 100%`,
        }),
        top: 0,
        zIndex: 9,
        content: "''",
        height: "100%",
        position: "absolute",
        width: (THUMB_SIZE * 2) / 3,
      },
      "&:after": {
        right: 0,
        transform: "scaleX(-1)",
      },
    }),
  })
);

type Props = {
  product: IProductItem;
};

export default function ProductDetailsCarousel({ product }: Props) {
  const theme = useTheme();

  const slides = product.images.map((img) => ({
    src: "/uploads/" + img,
  }));

  const lightbox = useLightBox(slides);

  const carouselLarge = useCarousel({
    rtl: false,
    draggable: false,
    adaptiveHeight: true,
  });

  const carouselThumb = useCarousel({
    rtl: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: "0px",
    slidesToShow: slides.length > 3 ? 3 : slides.length,
  });

  const renderLargeImg = (
    <Box
      sx={{
        mb: 3,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Carousel
        {...carouselLarge.carouselSettings}
        asNavFor={carouselThumb.nav}
        ref={carouselLarge.carouselRef}
      >
        {slides.map((slide) => (
          <Image
            key={slide.src}
            alt={slide.src}
            src={slide.src}
            ratio="1/1"
            onClick={() => lightbox.onOpen(slide.src)}
            sx={{ cursor: "zoom-in", bgcolor: "#ffffff" }}
          />
        ))}
      </Carousel>

      <CarouselArrowIndex
        index={carouselLarge.currentIndex}
        total={slides.length}
        onNext={carouselThumb.onNext}
        onPrev={carouselThumb.onPrev}
      />
    </Box>
  );

  const renderThumbnails = (
    <StyledThumbnailsContainer length={slides.length}>
      <Carousel
        {...carouselThumb.carouselSettings}
        asNavFor={carouselLarge.nav}
        ref={carouselThumb.carouselRef}
      >
        {slides.map((item, index) => (
          <Box key={item.src} sx={{ px: 0.5 }}>
            <Avatar
              key={item.src}
              alt={item.src}
              src={item.src}
              variant="rounded"
              sx={{
                width: THUMB_SIZE,
                height: THUMB_SIZE,
                opacity: 0.48,
                cursor: "pointer",
                bgcolor: "#ffffff",
                ...(carouselLarge.currentIndex === index && {
                  opacity: 1,
                  border: `solid 2.5px ${theme.palette.primary.main}`,
                }),
              }}
            />
          </Box>
        ))}
      </Carousel>
    </StyledThumbnailsContainer>
  );

  return (
    <Box
      sx={{
        "& .slick-slide": {
          float: theme.direction === "rtl" ? "right" : "left",
        },
      }}
    >
      {renderLargeImg}

      {renderThumbnails}

      <LightBox
        index={lightbox.selected}
        slides={slides}
        open={lightbox.open}
        close={lightbox.onClose}
        onGetCurrentIndex={(index) => lightbox.setSelected(index)}
      />
    </Box>
  );
}
