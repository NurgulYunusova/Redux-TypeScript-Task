import {
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useSelector } from "react-redux";
import { User } from "../models/User";

function Users() {
  const { users, loading, error } = useSelector(
    (state: any) => state.usersReducer
  );

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <h1>{error.message}</h1>
      ) : (
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
                <TableCell sx={{ fontWeight: "bold" }}>
                  Address street
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Company name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                users?.map((row: User) => (
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
      )}
    </>
  );
}

export default Users;
