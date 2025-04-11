import { useEffect, useState } from "react";
import User from "../user/user";
import type { IUser } from "../user/IUser";
import { Grid } from "@mui/material";

export default function UserList() {
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
    <>
      {users.map((user) => {
        return (
          <Grid key={user.id} size={4} spacing={2}>
            <User email={user.email} id={user.id} name={user.name}></User>
          </Grid>
        );
      })}
    </>
  );
}
