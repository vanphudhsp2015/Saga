import React, { Component } from "react";
import table from "./table.module.scss";
import { Table, Avatar, Dropdown, Button, Icon, Menu } from "antd";
import moment from "moment";

class TableComponent extends Component {
  handleButtonClick = event => () => {
    this.setState({
      id: event.id
    });
  };
  onDelete = () => {
    this.props.onRemove(this.state.id);
  };
  onChangerView = ()=>{
    this.props.onChangerView();
  }
  render() {
    const { data } = this.props;
    const menu = (
      <Menu>
        <Menu.Item>
          <Button type="danger" onClick={this.onDelete}>
            Delete
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button type="primary" onClick={this.onEdit}>
            Edit
          </Button>
        </Menu.Item>
      </Menu>
    );
    const columns = [
      {
        title: "ID",
        width: 100,
        dataIndex: "id",
        key: "id",
        fixed: "left"
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "title",
        width: 110
      },

      {
        title: "phone",
        dataIndex: "phone",
        key: "phone",
        width: 150
      },
      {
        title: "avatar",
        dataIndex: "avatar",
        key: "avatar",
        width: 150
      },
      {
        title: "email",
        dataIndex: "email",
        key: "email",
        width: 150
      },
      {
        title: "address",
        dataIndex: "address",
        key: "address",
        width: 150
      },
      {
        title: "Delete",
        key: "operation",
        fixed: "right",
        width: 100,
        render: event => (
          <Dropdown
            onClick={this.handleButtonClick(event)}
            overlay={menu}
            trigger={["click"]}
          >
            <Button type="ghost">
              <Icon type="down-square" />
            </Button>
          </Dropdown>
        )
      }
    ];
    return (
      <div className={table.table}>
        <div className={table.tableHeader}>
          <h2 className={table.tableTitle}>Basic Usage</h2>
        </div>
        <div className={table.tableContent}>
          <div className={table.tableAdd}>
            <Button type="primary" className={table.button} onClick={this.onChangerView}>
              ADD
            </Button>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 1500, y: 300 }}
            hasData
            rowKey="id"
          />
        </div>
      </div>
    );
  }
}

export default TableComponent;
