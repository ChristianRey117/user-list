import { CardHeader, Grid } from "@mui/material";
import type { IUser } from "./IUser";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import "./user.css";
export default function User(user: IUser) {
  return (
    <>
      <Card>
        <CardHeader title="User information"></CardHeader>
        <CardContent>
          <Grid container rowSpacing={2}>
            <Grid size={3} spacing={2}>
              <AccountCircleIcon color="primary" />
              <span>Name</span>
            </Grid>

            <Grid size={9}>
              <p>{user.name}</p>
            </Grid>

            <Grid size={3}>
              <MailIcon color="primary"></MailIcon>
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
