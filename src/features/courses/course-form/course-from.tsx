import {
  DefaultButton,
  IStackTokens,
  PrimaryButton,
  Stack,
  TextField,
} from "@fluentui/react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export function CourseForm() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("onSubmit", data);
  const stackTokens: IStackTokens = { childrenGap: 40 };
  //   console.log(watch("exampleRequired"));
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />
        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />

        <Stack horizontal tokens={stackTokens}>
          <TextField label="Standard" />
          <DefaultButton
            text="Standard"
            onClick={_alertClicked}
            allowDisabledFocus
            disabled={false}
            checked={false}
          />
          <PrimaryButton
            text="Primary"
            onClick={_alertClicked}
            allowDisabledFocus
            disabled={false}
            checked={false}
          />
        </Stack>
      </form>
    </div>
  );
}
function _alertClicked(): void {
  alert("Clicked");
}
