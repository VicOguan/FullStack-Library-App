import React from "react";
import BookModel from "../../models/BookModel";
import { Link } from "react-router-dom";
import { LeaveAReview } from "../Utils/LeaveAReview";

export const CheckoutAndReviewBox: React.FC<{
  book: BookModel | undefined;
  mobile: boolean;
  currentLoansCount: number;
  isAuthenticated: any;
  isCheckedOut: Boolean;
  checkoutBook: any;
  isReviewLeft: boolean;
  submitReview: any
}> = (props) => {
  function buttonRender() {
    if (props.isAuthenticated) {
      if (!props.isCheckedOut && props.currentLoansCount < 5) {
        return (
          <button
            onClick={() => props.checkoutBook()}
            className=" btn btn-success btn-lg>"
          >
            Checkout
          </button>
        );
      } else if (props.isCheckedOut) {
        return (
          <p>
            <b>Book checked out. Sorry!</b>
          </p>
        );
      } else if (!props.isCheckedOut) {
        return <p className="text-danger">Too many books checkedout</p>;
      }
    }
    return (
      <Link to={"/login"} className="btn btn-success btn-lg">
        Sign in
      </Link>
    );
  }

  function reviewRender() {
    if (props.isAuthenticated && !props.isReviewLeft) {
      return <p> <LeaveAReview submitReview={props.submitReview}/> </p>;
    } else if (props.isAuthenticated && props.isReviewLeft) {
      return (
        <p>
          <b>
            <i>Thank sa Review pre!</i>
          </b>
        </p>
      );
    }
    return (
      <div>
        <hr />
        <p>Sign in to review</p>
      </div>
    );
  }

  return (
    <div
      className={
        props.mobile ? "card d-flex mt-5" : "card col-3 container d-flex mb-5"
      }
    >
      <div className="card-body container">
        <div className="mt-3 ">
          <p>
            <b>{props.currentLoansCount}/5 </b>
            books checkout
          </p>
          <hr />
          {props.book &&
          props.book.copiesAvailable &&
          props.book.copiesAvailable > 0 ? (
            <h4 className="text-success">Available</h4>
          ) : (
            <h4 className="text-danger">Wait list</h4>
          )}
          <div className="row">
            <p className="col-6 lead">
              <b>{props.book?.copies} </b>
              copies
            </p>
            <p className="col-6 lead">
              <b>{props.book?.copiesAvailable} </b>
              Available
            </p>
          </div>
        </div>
        {buttonRender()}
        <hr />
        <p className="mt-3">
          This number can change until placing order has been completed.
        </p>
        {reviewRender()}
      </div>
    </div>
  );
};
