/**
*
* description
*
* @author Asn.Li <18390955482@163.com>
* @created on 2019/07/22
*/

import React, { Component } from 'react'
import { Radio, Row, Col, Select, Tag, 
  DatePicker, Form, Input, InputNumber  
} from 'antd'

const { Option } = Select;

class UserCont extends Component {
  state = {
    value: 1,
    expand: false
  }
  componentDidMount() {
    console.log(this.props.form)
  }
  onRadioChange = e => {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value,
    })
  }
  onDatePickerChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    })
  }
  getFields() {
    const { getFieldDecorator } = this.props.form;
    const config = [{
      type: "datePicker",
      label: "预抵日期",
      id: "dateList"
    }, {
      type: "inputNumber",
      label: "入住天数",
      id: "arrivalDays"
    }, {
      type: "input",
      label: "订单来源",
      id: "orderSource"
    }]
    const checkType = type => {
      const types = {
        input: <Input placeholder="placeholder" />,
        datePicker: <DatePicker showTime placeholder="Select Time"/>,
        inputNumber: <InputNumber min={1} max={10} defaultValue={3} />
      }
      return types[type]
    }
    return config.map((item, index) => {
      return (
        <Col span={6} key={index}>
          <Form.Item label={item.label}>
            {getFieldDecorator(item.id, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(
              checkType(item.type)
            )}
          </Form.Item>
        </Col>
      )
    })
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <label htmlFor="">客人类型:</label>
            <Radio.Group onChange={this.onRadioChange} value={this.state.value}>
              <Radio value={1}>散客</Radio>
              <Radio value={2}>会员</Radio>
              <Radio value={3}>单价</Radio>
              <Radio value={4}>中介</Radio>
            </Radio.Group>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={value => { console.log(value) }}
              onSearch={value => { console.log(value) }}
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
            <Tag>注册会员</Tag>
          </Col>
        </Row>
        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch} labelAlign="left">
          <Row gutter={24}>{this.getFields()}</Row>
        </Form>
      </div>
    )
  }
}

export default  Form.create({ name: 'normal_login' })(UserCont)