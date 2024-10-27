import Button from "@mui/material/Button";
import handleReserve from "./helpers/handleReserve";
import { AppointMentsTypes } from "../AppTypes";
import { useContext } from "react";
import ApointmentContext from "../../context/ApointmentContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

type AvaiableAppointmentsTableType = {
  setAppointments: Function;
  dateApointments: AppointMentsTypes[];
  setDateAppointments: Function;
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AvaiableAppointmentsTable = ({
  dateApointments,
  setDateAppointments,
  setAppointments,
}: AvaiableAppointmentsTableType) => {
  const { currentUserPhoneNumber, currentUserName } =
    useContext(ApointmentContext);

  const ReserveButton = (appointmentId: string) => {
    return (
      <Button
        color="success"
        className="w-[100px]"
        variant="outlined"
        onClick={() => {
          handleReserve({
            appointmentId,
            setDateAppointments,
            setAppointments,
            currentUserName: currentUserName as string,
            currentUserPhoneNumber: currentUserPhoneNumber as string,
          });
        }}
      >
        رزرو
      </Button>
    );
  };

  const createData = (
    date: string,
    time: string,
    reserveButton: React.ReactElement,
  ) => {
    return { date, time, reserveButton };
  };

  const rows = dateApointments.map((appointment) => {
    return createData(
      appointment.date,
      appointment.time,
      ReserveButton(appointment.id as string),
    );
  });

  if (rows.length) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 370 }} aria-label="avaiable appointments">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="right">زمان</StyledTableCell>
              <StyledTableCell align="right">تاریخ</StyledTableCell>
              <StyledTableCell align="right">عملیات</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <StyledTableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell align="right">{row.time}</StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.reserveButton}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return null;
  }
};

export default AvaiableAppointmentsTable;
