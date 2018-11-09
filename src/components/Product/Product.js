
import React, { PropTypes, Component } from 'react';
import { Breadcrumb, Table } from 'react-bootstrap';
import moment from 'moment';
import _ from 'lodash';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Product.css';
import Link from '../Link';

class Product extends Component {
  static propTypes = {
    appName: PropTypes.string,
    items: PropTypes.array,
  };

  static defaultProps = {
    appName: '',
    items: [],
  };

  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
  }

  render() {
    console.log(this.props);
    const self = this;
    const tipText = '暂无数据';
    return (
      <div className={s.root} >
        <div className={s.container}>
          <Breadcrumb>
            <Breadcrumb.Item active>
              <Link to="/apps">应用列表</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              {this.props.appName}
            </Breadcrumb.Item>
          </Breadcrumb>
          <Table striped bordered condensed hover responsive>
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }} >环境</th>
                <th style={{ textAlign: 'center' }} >秘钥</th>
                <th style={{ textAlign: 'center' }} >创建时间</th>
                <th style={{ textAlign: 'center' }} >详细信息</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.items.length > 0 ?
                  _.map(this.props.items, (item, index) => self.renderRow(item, index))
                  :
                  <tr>
                    <td>{tipText}</td>
                  </tr>
              }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }

  renderRow(rowData, index) {
    const deployName = _.get(rowData, 'name');
    const others = _.get(rowData, 'package') ? _.get(rowData, 'package') : {};
    const createdTime = moment(_.get(rowData, 'createdTime')).format('YYYY-MM-DD HH:mm');
    const descHtml = [];
    for (const x in others) {
      const html = <p>{x}:{others[x]}</p>;
      descHtml.push(html);
    }
    return (
      <tr key={index}>
        <td>
          {deployName}
        </td>
        <td style={{ textAlign: 'left' }}>
          {_.get(rowData, 'key')}
        </td>
        <td>{createdTime}</td>
        <td style={{ textAlign: 'left', fontSize: 14 }}>{descHtml}</td>
      </tr>
    );
  }
}
export default withStyles(s)(Product);
