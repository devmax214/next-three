import React, { useContext } from "react";
import { Box, Container } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_CONFIGURATOR } from "@/routers/path";
import { useBoolean } from "@/hooks";
import ConfirmQuote from "../confirm-quote";
import QuoteForm from "../quote-form";
import { useRouter } from "next/router"; "@next/router";

type Props = {}

export default function RequestQuoteView(props: Props) {
  const quote = useBoolean();
  const router = useRouter();

  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: "#F9F5EE",
          position: "relative",
          pt: { xs: 10, md: 10 },
        }}
      >
        <Container
          sx={{
            pb: { xs: 10, md: 10 },
          }}
        >
          <CustomBreadCrumbs
            heading="Request for Quote"
            links={[
              {
                name: "Home",
                href: PATH_CONFIGURATOR.root,
              },
              { name: "Request for Quote" },
            ]}
            sx={{
              mb: { xs: 0, md: 5 },
            }}
          />

          {!quote.value && (
            <ConfirmQuote
              onConfirm={() => {
                quote.onTrue();
              }}
              customProduct={JSON.parse(router.query.customProduct)}
              {...props}
            />
          )}

          {quote.value && <QuoteForm {...props} />}
        </Container>
      </Box>
    </>
  );
}
