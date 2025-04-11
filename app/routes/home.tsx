import type { Route } from "./+types/home";
import UserList from "~/components/user-list/user-list";
import { Grid } from "node_modules/@mui/material";
import Search from "~/components/search/search";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [search, setSearch] = useState(null);
  return (
    <Grid container spacing={2} rowSpacing={2}>
      <Grid size={12} padding={"2rem"}>
        <h2>Create a list component</h2>
      </Grid>
      <Grid size={12} padding={"2rem"}>
        <Search
          onChange={(value: any) => {
            setSearch(value);
          }}
        ></Search>
      </Grid>

      <Grid size={12} padding={"0rem 2rem"}>
        <UserList searching={search}></UserList>
      </Grid>
    </Grid>
  );
}
