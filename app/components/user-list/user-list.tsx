import { useEffect, useState } from "react";
import User from "../user/user";
import type { IUser } from "../user/IUser";
import { Grid } from "@mui/material";

export default function UserList({ searching }: any) {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  };
  return (
    <Grid container spacing={2} rowSpacing={2}>
      {users.map((user) => {
        if (searching) {
          if (user.name.toUpperCase().indexOf(searching.toUpperCase()) > -1) {
            return (
              <Grid
                key={user.id}
                size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                spacing={2}
              >
                <User email={user.email} id={user.id} name={user.name}></User>
              </Grid>
            );
          }
          return;
        }
        return (
          <Grid
            key={user.id}
            size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3 }}
            spacing={2}
          >
            <User email={user.email} id={user.id} name={user.name}></User>
          </Grid>
        );
      })}
    </Grid>
  );
}
