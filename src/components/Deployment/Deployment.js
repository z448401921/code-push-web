
import React, { PropTypes, Component } from 'react';
import { Breadcrumb, Table } from 'react-bootstrap';
import cx from 'classnames';
import _ from 'lodash';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Deployment.css';
import Link from '../Link';

class Deployment extends Component {
  static propTypes = {
    appName: PropTypes.string,
    deploymentName: PropTypes.string,
    items: PropTypes.array,
  };

  static defaultProps = {
    appName: '',
    deploymentName: '',
    items: [],
  };

  constructor() {
    super();
  }


  render() {
    const self = this;
    const tipText = '暂无数据';
    console.log(this.props);
    return (
      <div className={s.root} >
        <div className={s.container}>
          <Breadcrumb>
            <Breadcrumb.Item active>
              <Link to="/apps">应用列表</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              <Link to={`/apps/${this.props.appName}`}>{this.props.appName}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              {this.props.deploymentName}
            </Breadcrumb.Item>
          </Breadcrumb>
          <Table striped bordered condensed hover responsive>
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }} >AppVersion</th>
                <th style={{ textAlign: 'center' }} >PackageInfo</th>
                <th style={{ textAlign: 'center' }} >Install Metrics</th>
                <th style={{ textAlign: 'center' }} >操作</th>
              </tr>
            </thead>
            <tbody />
          </Table>
        </div>
      </div>
    );
  }
}
export default withStyles(s)(Deployment);
