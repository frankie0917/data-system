import React, { useContext } from "react";
import "./DataTable.css";
import { useParams } from "react-router-dom";
import MaterialTable from "material-table";
import { MTableToolbar } from "material-table";

import IconButton from "@material-ui/core/IconButton";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { StateContext } from "../../App";
// TODO: get data
export default function DataTable() {
  const state = useContext(StateContext);
  let tableName = useParams().name;

  const DataTableInfo = {
    name: "库存",
    tables: [
      {
        title: "入库记录表",
        id: 1,
        data: [
          {
            productId: 111,
            color: 0,
            quantity: 20
          },
          {
            productId: 111,
            color: 1,
            quantity: 20
          }
        ]
      },
      {
        title: "出库记录表",
        id: 2,
        data: [
          {
            productId: 111,
            color: 0,
            quantity: 10
          },
          {
            productId: 111,
            color: 1,
            quantity: 40
          }
        ]
      }
    ]
  };
  return (
    <div className="Data">
      <h1>{DataTableInfo.name}</h1>
      <Divider />
      <h2>数据表：</h2>
      <div className="datagrids">
        {DataTableInfo.tables.map((table, i) => (
          <DataGrid key={i} tableInfo={table} />
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
    <div className="datagrid">
      <MaterialTable
        title={tableInfo.title}
        data={tableInfo.data}
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
        actions={[
          {
            icon: "edit",
            tooltip: "修改",
            onclick(e, rowData) {},
            iconProps: {
              style: {
                color: "#00adb5"
              }
            }
          },
          {
            icon: "delete",
            tooltip: "删除",
            onclick(e, rowData) {},
            iconProps: {
              style: {
                color: "rgb(233, 68, 39)"
              }
            }
          }
        ]}
        columns={[
          {
            title: "款号",
            field: "productId"
          },
          {
            title: "颜色",
            field: "color"
          },
          {
            title: "总数",
            field: "quantity"
          }
        ]}
        options={{ grouping: true, actionsColumnIndex: -1 }}
        components={{
          Toolbar: props => {
            return (
              <div className="toolbar">
                <MTableToolbar {...props} />
                <div className="icon-wrap">
                  <IconButton>
                    <AddBoxIcon />
                  </IconButton>
                </div>
              </div>
            );
          }
        }}
      />
      <Paper style={{ margin: ".2rem 0 1rem 0", padding: "1rem" }}>
        <h3>新增/修改数据</h3>
        <GridForm />
      </Paper>
    </div>
  );
}

function GridForm() {
  // TODO: get color values for each productId
  const colorValues = {
    0: "绿色",
    1: "红色"
  };

  return (
    <Formik
      initialValues={{
        productId: "",
        color: "",
        quantity: ""
      }}
      validationSchema={Yup.object({
        productId: Yup.string().required("必填项"),
        color: Yup.string().required("必填项"),
        quantity: Yup.number().required("必填项")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
        }, 2000);
      }}
    >
      {({ values, isSubmitting, errors, touched, resetForm }) => (
        <Form>
          <Field
            value="productId"
            error={touched.productId && !!errors.productId}
            helperText={
              touched.productId && !!errors.productId ? errors.productId : ""
            }
            as={TextField}
          />

          <FormControl
            error={touched.color && !!errors.color}
            style={{
              width: "10rem"
            }}
          >
            <InputLabel>颜色</InputLabel>
            <Field as={Select}>
              {Object.keys(colorValues).map(key => {
                return (
                  <MenuItem key={key} value={key}>
                    {colorValues[key]}
                  </MenuItem>
                );
              })}
            </Field>
            <FormHelperText>
              {touched.color && !!errors.color ? errors.color : ""}
            </FormHelperText>
          </FormControl>
          <Field
            value={values[field.fieldProps.name]}
            error={
              touched[field.fieldProps.name] && !!errors[field.fieldProps.name]
            }
            helperText={
              touched[field.fieldProps.name] && !!errors[field.fieldProps.name]
                ? errors[field.fieldProps.name]
                : ""
            }
            as={TextField}
          />
          <ButtonGroup>
            <Button type="submit" disabled={isSubmitting}>
              提交
            </Button>
            <Button type="button" onClick={resetForm}>
              清除
            </Button>
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  );
}
