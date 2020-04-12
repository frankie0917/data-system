import React from "react";
import "./DataTable.css";
import { useParams } from "react-router-dom";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

// TODO: get data
export default function DataTable() {
  let tableName = useParams().name;

  const DataTableInfo = {
    name: "库存",
    tables: [
      {
        name: "入库",
        id: 1,
        cols: [
          {
            colName: "productId"
          },
          {
            colName: "quantity",
            align: "right"
          },
          {
            colName: "colors",
            align: "right"
          }
        ],
        rows: [
          { productId: 111, quantity: 100, colors: ["red", "green"] },
          { productId: 222, quantity: 200, colors: ["blue", "white"] },
          { productId: 333, quantity: 300, colors: ["black", "white"] },
          { productId: 444, quantity: 400, colors: ["purple", "orange"] },
          { productId: 555, quantity: 500, colors: ["pink", "white"] }
        ]
      },
      {
        name: "出库",
        id: 1,
        cols: [
          {
            colName: "productId"
          },
          {
            colName: "quantity",
            align: "right"
          },
          {
            colName: "colors",
            align: "right"
          }
        ],
        rows: [
          { productId: 111, quantity: 10, colors: ["red", "green"] },
          { productId: 444, quantity: 40, colors: ["purple", "orange"] },
          { productId: 555, quantity: 50, colors: ["pink", "white"] }
        ]
      }
    ]
  };
  return (
    <div className="Data">
      <h1>{DataTableInfo.name}</h1>
      <Divider />
      <div className="datagrids">
        <h2>数据表：</h2>
        {DataTableInfo.tables.map(table => (
          <DataGrid key={table.name} tableInfo={table} />
        ))}
      </div>
      <Divider />
      <div className="garphs">
        <h2>图表</h2>
      </div>
      <Divider />
      <div className="workflow">
        <h2>流程</h2>
      </div>
    </div>
  );
}

function DataGrid(props) {
  let { tableInfo } = props;
  return (
    <TableContainer className="DataGrid" component={Paper}>
      <div className="info">
        <h3>{tableInfo.name}</h3>
        <div className="operation">
          <IconButton aria-label="编辑" className="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="删除" className="delete">
            <DeleteForeverIcon />
          </IconButton>
        </div>
      </div>
      <Table>
        {renderTableHead(tableInfo.cols)}
        {renderTableBody(tableInfo)}
      </Table>
    </TableContainer>
  );
}

function renderTableHead(cols) {
  console.log(cols);
  return (
    <TableHead>
      <TableRow>
        {cols.map(col => (
          <TableCell key={col.colName} align={col.align}>
            {col.colName}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function renderTableBody(tableInfo) {
  let { rows, cols } = tableInfo;
  return (
    <TableBody>
      {rows.map((row, index) => {
        return (
          <TableRow key={index}>
            {cols.map(col => (
              <TableCell key={col.colName} align={col.align}>
                {row[col.colName]}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
}
