// Function Based Component
// Class Based Componnent
// import React, { useState, useEffect } from "react";
// import "./index.scss";
// import Card from "../Card";

// const List = (props) => {
//   const [grandTotal, setGrandTotal] = useState(0.0);

//   useEffect(() => {
//     let total = 0.0;
//     props.cart.forEach((c) => {
//       total += c.quantity * c.price;
//     });
//     setGrandTotal(total);
//   }, [props.cart]);

//   return (//JSX
//     <div className="List">
//       Toplam Tutar: {grandTotal.toFixed(2)} TL
//       {props.cart.map((c) => {
//         return <Card key={c.id} product={c} />;
//       })}
//     </div>
//   );
// };

// export default List;
// MAP Return
// FOREACH no Return
import React from "react";
import "./index.scss";
import Card from "../Card";
class List extends React.Component {
  grandTotal = () => {
    let total = 0.0;
    this.props.cart.forEach((c) => {
      total += c.quantity * c.price;
    });
    return total;
  };
  render() {
    return (
      <div className="List">
        Toplam Tutar: {this.grandTotal().toFixed(2)} TL
        {this.props.cart.map((c) => {
          return <Card key={c.id} product={c} />;
        })}
      </div>
    );
  }
}
export default List;
