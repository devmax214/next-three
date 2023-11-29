import { useMemo } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import FormProvider, { RhfSelect, RHFTextField } from "@/components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ICustomerItem } from "@/@types/customer";
import { CUSTOMER_STATUS_OPTIONS } from "@/@mockup/_customer";

type Props = {
  open: boolean;
  onClose: VoidFunction;
  currentUser?: ICustomerItem;
};

export default function CustomerQuickEditForm({
  currentUser,
  open,
  onClose,
}: Props) {
  const NewCustomerSchema = Yup.object().shape({});

  const defaultValues = useMemo(
    () => ({
      firstname: currentUser?.firstname || "",
      lastname: currentUser?.lastname || "",
      email: currentUser?.email || "",
      phone: currentUser?.phone || "",
      postal: currentUser?.postal || "",
      status: currentUser?.status,
    }),
    [currentUser]
  );

  const methods = useForm({
    resolver: yupResolver(NewCustomerSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {});

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <DialogTitle>Quick Update</DialogTitle>

        <DialogContent>
          <Box
            component="div"
            rowGap={3}
            columnGap={2}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            }}
          >
            <RhfSelect name="status" label="Status">
              {CUSTOMER_STATUS_OPTIONS.map((status) => (
                <MenuItem key={status.value} value={status.value}>
                  {status.label}
                </MenuItem>
              ))}
            </RhfSelect>

            <Box
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            />

            <RHFTextField name="firstname" label="First Name" />
            <RHFTextField name="lastname" label="Last Name" />
            <RHFTextField name="email" label="Email Address" />
            <RHFTextField name="phone" label="Phone Number" />
            <RHFTextField name="postal" label="Zip/Code" />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>

          <LoadingButton
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Update
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}
