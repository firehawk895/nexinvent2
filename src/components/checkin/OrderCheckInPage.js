import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Container,
  Col,
  Row,
  Button,
  Table,
  FormFeedback,
  Input,
  InputGroup,
  Alert,
  Form
} from "reactstrap";
import { loadOrderDetails } from "../../redux/actions/orderActions";
import { isEmptyObject, zip } from "../../utils";
import { checkin } from "../../redux/actions/checkinActions";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import SpinnerWrapper from "../common/SpinnerWrapper";

// TODO: when adding a new product create a disabled dropdown with NEW as default
const CHECKIN_STATUSES = {
  MISSING: "Missing/Not Delivered",
  RECEIVED: "Received (Full)",
  RECEIVED_PARTIAL: "Received (Partial)",
  RETURNED: "Returned"
};

function getSubTotal(checkin_formdata_map, orderDetails) {
  let sum = 0;
  for (let [checkin_item, order_item] of zip(
    Object.values(checkin_formdata_map),
    orderDetails.order_items
  ))
    sum += order_item.product.price * checkin_item.qty_received;
  return sum;
}

function getFormdataMap(orderDetails) {
  if (isEmptyObject(orderDetails)) {
    return {};
  }
  let theMap = {};
  orderDetails.order_items.forEach(item => {
    theMap[item.id] = {
      qty_received: item.qty_received,
      status: item.status,
      hasErrors: false,
      errorMessage: ""
    };
  });
  return theMap;
}

// the helper generates the json to be sent to the API
function getCheckinData(
  orderId,
  checkin_formdata_map,
  deliveredOn,
  invoiceNumber
) {
  return {
    order: orderId,
    delivered_on: deliveredOn,
    invoice_no: invoiceNumber,
    order_items: Object.keys(checkin_formdata_map).map(function(key) {
      return {
        id: key,
        status: checkin_formdata_map[key]["status"],
        qty_received: checkin_formdata_map[key]["qty_received"]
      };
    })
  };
}

/*
This method sets errors in the checkin_formdata_map, which will reflect
in the rows of the check in items
*/
function setErrors(checkin_formdata_map, setFormdataMap, errorString) {
  // the expectation is that the formdata map exists if the errors exist
  const errorObj = JSON.parse(errorString);
  if ("order_items" in errorObj) {
    const orderItemIdList = Object.keys(checkin_formdata_map);
    for (let [errorObj, orderItemId] of zip(
      errorObj.order_items,
      orderItemIdList
    )) {
      /*
        The expected keys here are: non_field_errors, status, qty_received
        We (but its actually I) are not really using the fields, so just extract the
        first error message
        */
      setFormdataMap(prevState => {
        const newMap = { ...prevState };
        newMap[orderItemId]["errorMessage"] = !isEmptyObject(errorObj)
          ? errorObj[Object.keys(errorObj)[0]][0]
          : "";
        newMap[orderItemId]["hasErrors"] = !isEmptyObject(errorObj)
          ? true
          : false;
        return newMap;
      });
    }
  }
}

function OrderCheckInPage({
  match,
  loadOrderDetails,
  orderDetails,
  checkin,
  loading
}) {
  // container components should not contain presentation logic
  // saving the date on a patch will cause formDataMap to reset because of a re-render
  const orderId = match.params.id;
  // This parent state syncs with the local child state of the items to be checked in
  // Use this to send out data to the POST API
  // React Logic: Intialization means have to use both useState and useEffect
  const [checkin_formdata_map, setFormdataMap] = useState(
    getFormdataMap(orderDetails)
  );
  console.log(orderDetails);
  const [deliveredOn, setDeliveredOn] = useState(
    !isEmptyObject(orderDetails) ? orderDetails.delivered_on : null
  );
  const [invoiceNumber, setInvoiceNumber] = useState(
    !isEmptyObject(orderDetails) ? orderDetails.invoice_no : null
  );
  useEffect(() => {
    setFormdataMap(getFormdataMap(orderDetails));
    setDeliveredOn(
      !isEmptyObject(orderDetails) ? orderDetails.delivered_on : null
    );
    setInvoiceNumber(
      !isEmptyObject(orderDetails) ? orderDetails.invoice_no : null
    );
  }, [orderDetails]);

  const [renderRedirect, setRenderRedirect] = useState(false);
  const [loadErrors, setLoadErrors] = useState("");

  useEffect(() => {
    loadOrderDetails(orderId).catch(the_error =>
      setLoadErrors(the_error.message)
    );
  }, []);

  function handleCheckin() {
    checkin(
      getCheckinData(orderId, checkin_formdata_map, deliveredOn, invoiceNumber)
    )
      .then(() => {
        toast.success("Your order has been checked-in");
        setRenderRedirect(true);
      })
      .catch(errors => {
        setErrors(checkin_formdata_map, setFormdataMap, errors.message);
      });
  }
  function handleDateChange(event) {
    const { name, value } = event.target;
    setDeliveredOn(value);
  }
  function handleInvoiceChange(event) {
    const { name, value } = event.target;
    setInvoiceNumber(value);
  }
  return (
    <>
      {renderRedirect && <Redirect to="/crustos" />}
      <h2>Order Check-in</h2>
      {loading ? (
        <SpinnerWrapper />
      ) : loadErrors ? (
        <Alert color="danger">{loadErrors}</Alert>
      ) : (
        !isEmptyObject(orderDetails) && (
          <Container>
            <Row className="mb-2">
              <Col lg="3">
                <b>{orderDetails.supplier.name + " Invoice Number"}</b>
                <Input
                  type="text"
                  value={invoiceNumber}
                  onChange={handleInvoiceChange}
                />
              </Col>
              <Col lg="3">
                <b>Actual Delivery Date</b>
                <Input
                  type="date"
                  value={deliveredOn || ""}
                  onChange={handleDateChange}
                />
              </Col>
              <Col lg="4" />
              <Col>
                <Button color="primary" onClick={handleCheckin} block>
                  Save
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <ProductTable
                  orderDetails={orderDetails}
                  setFormdataMap={setFormdataMap}
                  checkin_formdata_map={checkin_formdata_map}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="8" />
              <Col>
                <Table striped>
                  <tbody>
                    {/* <tr>
                      <td>Sub Total:</td>
                      <td>&#8377; {}</td>
                    </tr> */}
                    {/* <tr>
                      <td>Delivery Charge:</td>
                      <td>
                        <Form inline>
                          <Input type="number" />
                        </Form>
                      </td>
                    </tr> */}
                    <tr>
                      <td>Total:</td>
                      <td>
                        &#8377;{" "}
                        {getSubTotal(checkin_formdata_map, orderDetails)}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        )
      )}
    </>
  );
}

function ProductTable({
  orderDetails: { order_items },
  setFormdataMap,
  checkin_formdata_map
}) {
  const rows = [];
  order_items.forEach(item => {
    rows.push(
      <OrderItemRow
        key={item.id}
        orderItem={item}
        qty_received={
          item.id in checkin_formdata_map
            ? checkin_formdata_map[item.id]["qty_received"]
            : item.qty_received
        }
        status={
          item.id in checkin_formdata_map
            ? checkin_formdata_map[item.id]["status"]
            : item.status
        }
        setFormdataMap={setFormdataMap}
        hasErrors={
          item.id in checkin_formdata_map
            ? checkin_formdata_map[item.id]["hasErrors"]
            : false
        }
        errorMessage={
          item.id in checkin_formdata_map
            ? checkin_formdata_map[item.id]["errorMessage"]
            : ""
        }
      />
    );
  });
  return (
    <>
      <Table striped className="text-center">
        <thead>
          <tr>
            <th>Received</th>
            <th>Qty Received / Ordered</th>
            <th>Status</th>
            <th>Unit</th>
            <th>Item Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
}

function StatusCheckBox({ checkinStatus, handleStatusCheckBoxClick }) {
  let className = "btn-circle btn-outline";
  let colour = "success";

  if (checkinStatus) {
    // remove the button outline
    className = "btn-circle";
    if (
      checkinStatus === CHECKIN_STATUSES.MISSING ||
      checkinStatus === CHECKIN_STATUSES.RETURNED
    ) {
      colour = "danger";
    } else if (checkinStatus == CHECKIN_STATUSES.RECEIVED) {
      colour = "success";
    } else if (checkinStatus == CHECKIN_STATUSES.RECEIVED_PARTIAL) {
      colour = "warning";
    }
  }
  return (
    <Button
      className={className}
      color={colour}
      onClick={handleStatusCheckBoxClick}
    >
      <i
        className="fa fa-2x fa-check"
        style={{ marginTop: "-3px", color: "white" }}
      />
    </Button>
  );
}

function OrderItemRow({
  orderItem: { id, quantity, product },
  setFormdataMap,
  hasErrors,
  errorMessage,
  qty_received,
  status
}) {
  // Initialization of recdQty
  // Notice how cutely you have to do both useState and useEffect.
  // because React Logic, or I don't know what I'm doing
  const [recdQty, setRecdQty] = useState(qty_received);
  useEffect(() => {
    setRecdQty(qty_received);
  }, [qty_received]);

  // Initialization of status
  const [checkinStatus, setCheckinStatus] = useState(status);
  useEffect(() => {
    setCheckinStatus(status);
  }, [status]);

  useEffect(() => {
    /* * if recdQty is null, javascript translates it to 0 LOL
          https://stackoverflow.com/a/13407585/1881812, so please ignore comparisons when its null
       * To keep the comparisons sane, convert it to a float
       * Quantity has to be a non zero number */
    if (recdQty) {
      const decimalRecdQty = parseFloat(recdQty);
      const decimalQty = parseFloat(quantity);
      if (decimalRecdQty == 0) {
        setCheckinStatus(CHECKIN_STATUSES.MISSING);
      } else if (decimalRecdQty >= decimalQty) {
        setCheckinStatus(CHECKIN_STATUSES.RECEIVED);
      } else if (decimalRecdQty < decimalQty) {
        setCheckinStatus(CHECKIN_STATUSES.RECEIVED_PARTIAL);
      }
    }
    // Updating Parent state
    // even if its null, because someone can backspace the F out of the field
    setFormdataMap(prevState => {
      const newMap = { ...prevState };
      if (id in newMap) {
        newMap[id]["qty_received"] = recdQty;
      }
      return newMap;
    });
  }, [recdQty]);

  useEffect(() => {
    // Updating Parent state
    setFormdataMap(prevState => {
      const newMap = { ...prevState };
      if (id in newMap) {
        newMap[id]["status"] = checkinStatus;
      }
      return newMap;
    });
  }, [checkinStatus]);

  function handleStatusChange(event) {
    const { name, value } = event.target;
    setCheckinStatus(value);
  }

  function handleRecdQtyChange(event) {
    const { name, value } = event.target;
    setRecdQty(value);
  }

  return (
    <tr>
      <td className="align-middle">
        <StatusCheckBox
          checkinStatus={checkinStatus}
          handleStatusCheckBoxClick={() => {
            setRecdQty(quantity);
          }}
        />
      </td>
      <td className="align-middle">
        <InputGroup>
          {
            // value={recdQty || ""} this short circuit notation is used for the following reason:
            // https://stackoverflow.com/a/47012342/1881812
          }
          <Input
            min={0}
            step="1"
            type="number"
            onChange={handleRecdQtyChange}
            value={recdQty || ""}
            invalid={hasErrors}
          />
          <div className="input-group-append">
            <Button disabled style={{ cursor: "default" }}>
              {" "}
              / {quantity}
            </Button>
          </div>
          <FormFeedback>{errorMessage}</FormFeedback>
        </InputGroup>
      </td>
      <td className="align-middle">
        <Input
          type="select"
          onChange={handleStatusChange}
          value={checkinStatus || ""}
          invalid={hasErrors}
        >
          <option />
          <option>{CHECKIN_STATUSES.RECEIVED}</option>
          <option>{CHECKIN_STATUSES.RECEIVED_PARTIAL}</option>
          <option>{CHECKIN_STATUSES.MISSING}</option>
          <option>{CHECKIN_STATUSES.RETURNED}</option>
        </Input>
      </td>
      <td className="align-middle">{product.unit}</td>
      <td className="align-middle">{product.name}</td>
      <td className="align-middle">{product.sku}</td>
      <td className="align-middle">{product.price}</td>
      <td className="align-middle">
        {recdQty && (
          <>&#8377; {(recdQty * parseFloat(product.price)).toFixed(2)}</>
        )}
      </td>
    </tr>
  );
}

function mapStateToProps(state) {
  return {
    orderDetails: state.orderDetails,
    loading: state.apiCallsInProgress > 0
  };
}

const mapDispatchToProps = {
  loadOrderDetails,
  checkin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderCheckInPage);
