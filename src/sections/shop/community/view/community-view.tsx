import React from "react";
import { Box, Container } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import CommunityItem from "../community-item";

type Props = { mode?: "colored" | "dark" };

export default function CommunityView({ mode }: Props) {
  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: mode === "dark" ? "#fff" : "#F9F5EE",
          position: "relative",
          pt: { xs: 10, md: 10 },
        }}
      >
        <Container>
          <CustomBreadCrumbs
            mode={mode}
            heading="COMMUNITY"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              { name: "Community" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />
        </Container>

        <CommunityItem
          title="Together, let's raise the standard"
          description1="WonderRaw for many things, one of which is holding the fashion industry to a higher standard, which no longer risks the health of workers or of the environment."
          description2="In today’s world, it shouldn’t be so difficult to make a sustainable choice. That’s why we created a concept that goes against the fashion industry’s seasonal models."
          image="/images/community/1.jpg"
          direction="left"
          mode="white"
        />

        <CommunityItem
          title="Let's give where we take"
          description1="From the start, the industry has desperately needed a shake-up. Enough of the days of overconsumption, pollution, waste, and human rights violations. We need to give back where we take and stand up to the industry that takes a fatal toll on our planet."
          description2="With this need, we've created a regenerative concept of long-lasting products made ethically and vertically integrated at an in-house manufacturing center. Our mission has always been to identify ways we can produce garments while remaining responsible for the planet and the people involved. With that, our brand was born."
          image="/images/community/2.jpg"
          direction="right"
          mode={mode === "colored" ? "dark" : "white"}
          isIcon={mode === "colored"}
        />

        <CommunityItem
          title="Let's Color the world responsibly"
          description1="We implies raising the bar for how the industry works and focusing on clothes made responsibly, transparently, and that stand for a greater purpose. The colors are a tribute to diversity and inclusion, to being bold, vibrant, and unique. At WonderRaw, there is a shade or tone for any and every kind of person."
          description2="Today, our products are available online and across the world at over 1000 retailers and within our various. Moving forward, we will continue creating high-quality and timeless gender neutral designs."
          image="/images/community/3.jpg"
          direction="left"
          mode="white"
        />
      </Box>
    </>
  );
}
