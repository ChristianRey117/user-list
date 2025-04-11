import { Grid } from "@mui/material";
import AuthForm from "~/components/auth-form/auth-form";
import { selectIsAuthenticated } from "~/redux/auth-reducer/auth-reducer";
import type { RootState } from "~/redux/auth-reducer/store";
import { useSelector } from "react-redux";
import Login from "~/components/login/login";

export default function Redux() {
  const isAuthenticated = useSelector((state: RootState) =>
    selectIsAuthenticated(state)
  );

  return (
    <>
      {isAuthenticated ? (
        <Login></Login>
      ) : (
        <Grid
          size={12}
          justifyContent={"center"}
          display={"flex"}
          paddingTop={"10%"}
        >
          <AuthForm></AuthForm>
        </Grid>
      )}
    </>
  );
}
