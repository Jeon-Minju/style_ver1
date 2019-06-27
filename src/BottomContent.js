import React, { Fragment } from "react";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Image1 from "./Images/comment-black.png";
import Image2 from "./Images/comment-gray.png";

const useStyles = makeStyles(theme => ({
  bhButtons_sm: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  bhButtons_md: {
    marginRight: theme.spacing(1),
    flexBasis: theme.spacing(60),
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  bhDropdown: {
    marginLeft: "auto"
  },
  tablePaper: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

function createData(
  id,
  orderer,
  contact,
  info,
  time,
  amount,
  paymentMethod,
  additional,
  message,
  confirm
) {
  return {
    id,
    orderer,
    contact,
    info,
    time,
    amount,
    paymentMethod,
    additional,
    message,
    confirm
  };
}

const rows = [
  createData(
    0,
    "안다혜",
    "010-1234-1234",
    "데리야끼 / 1개",
    "10:18",
    "7000원",
    "현금",
    "X",
    "메시지",
    "체크"
  ),
  createData(
    1,
    "안다혜",
    "010-1234-1234",
    "데리야끼 / 1개",
    "10:18",
    "7000원",
    "현금",
    "X",
    "메시지",
    "체크"
  ),
  createData(
    2,
    "안다혜",
    "010-1234-1234",
    "데리야끼 / 1개",
    "10:18",
    "7000원",
    "현금",
    "X",
    "메시지",
    "체크"
  ),
  createData(
    3,
    "안다혜",
    "010-1234-1234",
    "데리야끼 / 1개",
    "10:18",
    "7000원",
    "현금",
    "X",
    "메시지",
    "체크"
  ),
  createData(
    4,
    "안다혜",
    "010-1234-1234",
    "데리야끼 / 1개",
    "10:18",
    "7000원",
    "현금",
    "X",
    "메시지",
    "체크"
  )
];

export default function BC() {
  const classes = useStyles();
  const buttons = (
    <div
      style={{
        marginTop: "1%",
        display: "flex",
        marginLeft: "10px"
      }}
    >
      <Button variant="contained" style={{ backgroundColor: "white" }}>
        주문자 이름 순
      </Button>
      <Button variant="contained" style={{ backgroundColor: "white" }}>
        수령시간
      </Button>
      <Button variant="contained" style={{ backgroundColor: "white" }}>
        결제 방식
      </Button>
      <Button variant="contained" style={{ backgroundColor: "white" }}>
        읽지않은 문의
      </Button>
    </div>
  );
  const table = (
    <Table size="small" style={{ whiteSpace: "nowrap" }}>
      <TableHead>
        <TableRow>
          <TableCell>주문자</TableCell>
          <TableCell>연락처</TableCell>
          <TableCell>주문 정보</TableCell>
          <TableCell>수령 시간</TableCell>
          <TableCell>총 금액</TableCell>
          <TableCell>결제 방식</TableCell>
          <TableCell>추가 문의</TableCell>
          <TableCell>
            <div
              style={{
                backgroundImage: `url(${Image1})`,
                backgroundSize: "cover",
                height: "18px",
                width: "20px"
              }}
            />
          </TableCell>
          <TableCell>수령 확인</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.orderer}</TableCell>
            <TableCell>{row.contact}</TableCell>
            <TableCell>{row.info}</TableCell>
            <TableCell>{row.time}</TableCell>
            <TableCell>{row.amount}</TableCell>
            <TableCell>{row.paymentMethod}</TableCell>
            <TableCell>{row.additional}</TableCell>
            <TableCell>{row.message}</TableCell>
            <TableCell>{row.confirm}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
  return (
    <Fragment>
      <Paper>
        <Paper style={{ display: "flex" }}>
          <div className={classes.bhText}>정렬방식</div>
          <div className={classes.bhButtons_md}>{buttons}</div>
          <div className={classes.bhDropdown}>주문서 내보내기</div>
        </Paper>
        <div className={classes.bhButtons_sm}>{buttons}</div>
      </Paper>
      <Paper className={classes.tablePaper}>{table}</Paper>
    </Fragment>
  );
}
