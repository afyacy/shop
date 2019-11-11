import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import AdminContent from './AdminContent';
export default class ProductAdmin extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <AdminContent />
      </div>
    )
  }
}
