import React from "react";
import ReactToPrint from "react-to-print";
import PropTypes from "prop-types";
import "/example/index.css";

const tabStyle = {
  height: 500,
  maxHeight: 300,
  overflow: "scroll",
  //backgroundColor: "blue"
};

export default function TestingPrint() {
  return <div>TestingPrint</div>;
}

// <ReactToPrint
//           trigger={() => <a href="#">Print this out!</a>}
//           content={() => this.componentRef}
//           bodyClass={"printElement1"}
//         />
