import type { Route } from "./+types/home";
import UserList from "~/components/user-list/user-list";
import { Grid } from "node_modules/@mui/material";
import Search from "~/components/search/search";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Grid container spacing={2} rowSpacing={2}>
      <Grid size={12} padding={"2rem"}>
        <Search></Search>
      </Grid>

      <Grid size={12} padding={"0rem 2rem"}>
        <UserList></UserList>
      </Grid>
    </Grid>
  );
}
