import React from "react";
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

import { useFormik } from "formik";
import * as Yup from "yup";

// TODO: get data
export default function DataTable() {
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
      <div className="datagrids">
        <h2>数据表：</h2>
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
  const formInfo = {
    initialValues: {
      productId: "",
      color: "",
      quantity: ""
    },
    validationSchema: Yup.object({
      productId: Yup.string().required("必填项"),
      color: Yup.string().required("必填项"),
      quantity: Yup.number().required("必填项")
    }),
    fields: [
      {
        component: "TextField",
        fieldProps: {
          label: "款号",
          name: "productId",
          required: true,
          type: "text"
        }
      },
      {
        component: "Select",
        fieldProps: {
          label: "颜色",
          name: "color",
          required: true,
          type: "text"
        },
        selectValues: {
          0: "绿色",
          1: "红色"
        }
      },
      {
        component: "TextField",
        fieldProps: {
          label: "数量",
          name: "quantity",
          required: true,
          type: "number"
        }
      }
    ]
  };
  const formik = useFormik({
    initialValues: formInfo.initialValues,
    validationSchema: formInfo.validationSchema,
    onSubmit: values => {
      console.log(values);
    }
  });
  
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
        <form onSubmit={formik.handleSubmit} onReset={formik.onReset}>
          {formInfo.fields.map((field, index) => {
            switch (field.component) {
              case "Select":
                return (
                  <FormControl
                    key={index}
                    error={
                      formik.touched[field.fieldProps.name] &&
                      formik.errors[field.fieldProps.name]
                    }
                    style={{
                      width: "10rem"
                    }}
                  >
                    <InputLabel>{field.fieldProps.label}</InputLabel>
                    <Select
                      {...field.fieldProps}
                      value={formik.values[field.fieldProps.name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      {Object.keys(field.selectValues).map(key => {
                        return (
                          <MenuItem key={key} value={key}>
                            {field.selectValues[key]}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    <FormHelperText>
                      {formik.touched[field.fieldProps.name] &&
                      formik.errors[field.fieldProps.name]
                        ? formik.errors[field.fieldProps.name]
                        : ""}
                    </FormHelperText>
                  </FormControl>
                );
              case "TextField":
              default:
                return (
                  <TextField
                    key={index}
                    {...field.fieldProps}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[field.fieldProps.name]}
                    error={
                      formik.touched[field.fieldProps.name] &&
                      formik.errors[field.fieldProps.name]
                    }
                    helperText={
                      formik.touched[field.fieldProps.name] &&
                      formik.errors[field.fieldProps.name]
                        ? formik.errors[field.fieldProps.name]
                        : ""
                    }
                  />
                );
            }
          })}
          <ButtonGroup>
            <Button type="submit">提交</Button>
            <Button type="button" onClick={formik.resetForm}>
              清除
            </Button>
          </ButtonGroup>
        </form>
      </Paper>
    </div>
  );
}
