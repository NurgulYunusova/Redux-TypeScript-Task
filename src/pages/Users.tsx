import { useEffect, useState } from "react";
import { User } from "../models/User";
import { userService } from "../services/userService";
import {
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Paper,
} from "@mui/material";

function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    userService.getData().then((res) => {
      setUsers(res);
    });
  };

  return (
    <>
      <TableContainer
        sx={{ width: 1000, margin: "50px auto" }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Id</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Username</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Address city</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Address street</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Company name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ fontWeight: "bold" }}>{row.id}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.address.city}</TableCell>
                  <TableCell>{row.address.street}</TableCell>
                  <TableCell>{row.company.name}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Users;
