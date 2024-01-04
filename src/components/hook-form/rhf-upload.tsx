import { Controller, useFormContext } from "react-hook-form";
import { Upload, UploadProps } from "../upload";
import FormHelperText from "@mui/material/FormHelperText";

interface Props extends Omit<UploadProps, "file"> {
  name: string;
  multiple?: boolean;
}

export function RhfUpload({ name, multiple, helperText, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) =>
        multiple ? (
          <Upload
            multiple
            accept={{ "image/*": [] }}
            files={field.value}
            error={!!error}
            helperText={
              (!!error || helperText) && (
                <FormHelperText error={!!error} sx={{ px: 2 }}>
                  {error ? error?.message : helperText}
                </FormHelperText>
              )
            }
            {...other}
          />
        ) : (
          <Upload
            accept={{ "image/*": [] }}
            file={field.value}
            error={!!error}
            helperText={
              (!!error || helperText) && (
                <FormHelperText error={!!error} sx={{ px: 2 }}>
                  {error ? error?.message : helperText}
                </FormHelperText>
              )
            }
            {...other}
          />
        )
      }
    />
  );
}
