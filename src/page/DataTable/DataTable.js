import React, { useState } from "react";
import "./DataTable.css";
import MaterialTable, { MTableEditRow, MTableEditField } from "material-table";
import { FormControl, NativeSelect } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";

// TODO: get table data
export default function DataTable() {
  // console.log(useParams());
  const [tableData, setTableData] = useState({
    name: "products",
    title: "款号",
    MTtables: [
      {
        title: "款号表",
        columns: [
          {
            title: "款号",
            field: "productId"
          },
          {
            title: "颜色",
            field: "colors",
            render: ({ colors }) => colors.join(" | ")
          },
          {
            title: "设计师",
            field: "designer"
          }
        ]
      }
    ]
  });
  const { title, MTtables } = tableData;
  return (
    <div className="DataTable">
      <div className="header">
        <h1>{title}</h1>
      </div>
      <div className="tables">
        {MTtables.map((it, i) => {
          return (
            <MaterialTable
              key={i}
              {...it}
              data={query =>
                new Promise((resolve, reject) => {
                  resolve({
                    data: [
                      {
                        productId: "ps001",
                        colors: ["红色", "黑色"],
                        designer: "alice"
                      },
                      {
                        productId: "ps002",
                        colors: ["红色", "黑色"],
                        designer: "frank"
                      },
                      {
                        productId: "ps003",
                        colors: ["红色", "黑色"],
                        designer: "joice"
                      }
                    ],
                    page: 0,
                    totalCount: 3
                  });
                })
              }
              localization={{
                toolbar: {
                  searchPlaceholder: "搜索"
                },
                pagination: {
                  labelRowsSelect: "行/页"
                },
                grouping: {
                  placeholder: "将行拖动到这里进行分组"
                },
                body: {
                  emptyDataSourceMessage: "没有数据"
                },
                header: {
                  actions: "操作"
                }
              }}
              options={{ grouping: true }}
              editable={{
                onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        /* const data = this.state.data;
                                data.push(newData);
                                this.setState({ data }, () => resolve()); */
                      }
                      resolve();
                    }, 1000);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        /* const data = this.state.data;
                                const index = data.indexOf(oldData);
                                data[index] = newData;                
                                this.setState({ data }, () => resolve()); */
                      }
                      resolve();
                    }, 1000);
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        /* let data = this.state.data;
                                const index = data.indexOf(oldData);
                                data.splice(index, 1);
                                this.setState({ data }, () => resolve()); */
                      }
                      resolve();
                    }, 1000);
                  })
              }}
              components={{
                EditRow: MUIEditRow,
                EditField: MUIEditField
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

const MUIEditRow = ({ onEditingApproved, ...props }) => {
  return (
    <Formik
      validationSchema={Yup.object({
        productId: Yup.string().required("必填项"),
        colors: Yup.string().required("必填项"),
        designer: Yup.string().required("必填项")
      })}
      initialValues={props.data}
      onSubmit={newData => {
        console.log(newData);
        // delete newData.tableData;
        // onEditingApproved(props.mode, newData, props.data);
      }}
      render={({ submitForm }) => (
        <MTableEditRow {...props} onEditingApproved={submitForm} />
      )}
    />
  );
};

const MUIEditField = props => {
  return (
    <Field
      name={props.columnDef.field}
      render={({ field, form }) => {
        const { name } = field;
        const { error, setFieldValue } = form;
        return <MTableEditField />;
      }}
    />
  );
};
