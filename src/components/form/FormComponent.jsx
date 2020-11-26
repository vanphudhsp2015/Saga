import React, { Component } from "react";
import form from "./form.module.scss";
import { Form, Input, Button } from "antd";

class FormComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: "",
      author: "",
      categories: "",
      tags: "",
      visibility: ""
    };
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onAdd(values);
      }
    });
  };

  onChangerView = () => {
    this.props.onChangerView();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 20 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 20 },
        sm: { span: 14 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 4
        }
      }
    };
    return (
      <div className={form.form}>
        <div className={form.formHeader}>
          <h2 className={form.formTitle}>Customized Validation</h2>
        </div>
        <div className={form.formContent}>
          <div className={form.tableAdd}>
            <Button
              type="primary"
              className={form.button}
              onClick={this.onChangerView}
            >
              Table
            </Button>
          </div>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="name" className={form.formItem} hasFeedback>
              {getFieldDecorator("name", {
                initialValue: this.state.title,
                rules: [
                  {
                    type: "string",
                    required: true,
                    message: "The title is not valid"
                  }
                ]
              })(<Input className={form.formInput} />)}
            </Form.Item>
            <Form.Item label="phone" className={form.formItem} hasFeedback>
              {getFieldDecorator("phone", {
                initialValue: this.state.author,
                rules: [
                  {
                    type: "string",
                    required: true,
                    message: "The author is not valid"
                  }
                ]
              })(<Input className={form.formInput} />)}
            </Form.Item>
            <Form.Item label="avatar" className={form.formItem} hasFeedback>
              {getFieldDecorator("avatar", {
                initialValue: this.state.categories,
                rules: [
                  {
                    type: "string",
                    required: true,
                    message: "The categories is not valid"
                  }
                ]
              })(<Input className={form.formInput} />)}
            </Form.Item>
            <Form.Item label="email" className={form.formItem} hasFeedback>
              {getFieldDecorator("email", {
                initialValue: this.state.tags,
                rules: [
                  {
                    type: "string",
                    required: true,
                    message: "The tags is not valid"
                  }
                ]
              })(<Input className={form.formInput} />)}
            </Form.Item>
            <Form.Item label="address" className={form.formItem} hasFeedback>
              {getFieldDecorator("address", {
                initialValue: this.state.visibility,
                rules: [
                  {
                    type: "string",
                    required: true,
                    message: "The visibility is not valid"
                  }
                ]
              })(<Input className={form.formInput} />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout} className={form.formItem}>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(FormComponent);
