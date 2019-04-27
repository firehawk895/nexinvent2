import React from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import * as orderActions from "../../redux/actions/orderActions";
import Moment from "react-moment";
import { bindActionCreators } from "redux";

class OrderRow extends React.Component {
  render() {
    const order = this.props.order;
    const id = order.id;
    const status = order.status;
    const supplier = order.supplier;
    const order_placed = order.order_placed;
    const order_total = order.order_total;
    const invoice_no = order.invoice_no;
    return (
      <tr>
        <td>{status}</td>
        <td>{id}</td>
        <td>{supplier}</td>
        <td>
          <Moment format="YYYY-MM-DD HH:mm">{order_placed}</Moment>
        </td>
        <td>{order_total}</td>
        <td>{invoice_no}</td>
      </tr>
    );
  }
}

class OrderTable extends React.Component {
  render() {
    const rows = [];
    this.props.orders.forEach(order => {
      rows.push(<OrderRow key={order.id} order={order} />);
    });
    return (
      <Table striped hover>
        <thead>
          <tr>
            <th>Status</th>
            <th>Order #</th>
            <th>Supplier</th>
            <th>Date</th>
            <th>Total</th>
            <th>Invoice #</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
}

class FilterableOrdersTable extends React.Component {
  render() {
    return <OrderTable orders={this.props.orders} />;
  }
}

class OrdersPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadOrders().catch(error => {
      alert("Loading orders failed" + error);
    });
  }

  render() {
    return (
      <>
        <h2>Order History</h2>
        <FilterableOrdersTable orders={this.props.orders} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadOrders: bindActionCreators(orderActions.loadOrders, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersPage);
