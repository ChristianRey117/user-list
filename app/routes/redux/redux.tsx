import { Grid } from "@mui/material";
import AuthForm from "~/components/auth-form/auth-form";

export default function Redux() {
  return (
    <>
      <Grid
        size={12}
        justifyContent={"center"}
        display={"flex"}
        paddingTop={"25%"}
      >
        <AuthForm></AuthForm>
      </Grid>
    </>
  );
}
