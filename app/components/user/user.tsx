import { CardHeader, Grid } from "@mui/material";
import type { IUser } from "./IUser";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function User(user: IUser) {
  return (
    <>
      <Card>
        <CardHeader title="User information"></CardHeader>
        <CardContent>
          <Grid container rowSpacing={2}>
            <Grid size={3}>
              <span>Name</span>
            </Grid>

            <Grid size={9}>
              <p>{user.name}</p>
            </Grid>

            <Grid size={3}>
              <span>Email</span>
            </Grid>

            <Grid size={9}>
              <p>{user.email}</p>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
