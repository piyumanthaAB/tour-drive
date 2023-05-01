import React, { useState } from "react";
import toast from "react-hot-toast";
import submitForm from "../../../hooks/submitForm";
import Label from "../../shared/Form Elements/Label";
import TextArea from "../../shared/Form Elements/TextArea";
import TextField from "../../shared/Form Elements/TextField";
import * as c from "./AdminTourCreateFormElements";

const SingleCustomTourView = ({ tour }) => {
  const [review, setReview] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      // "Content-Type": "application/json",
    };
    const tdata = { review };

    await toast.promise(
      submitForm(`/api/v1/custom-tours/${tour._id}`, tdata, "patch", headers),
      {
        loading: "Adding review....",
        success: (data) => {
          console.log({ data });
          return `${data.data.message}` || "success";
        },
        error: (err) => `${err.response.data.message}`,
      },
      {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          fontSize: "2rem",
        },
      }
    );
  };
  return (
    <>
      <c.Container>
        <c.FormTitle>View Single Custom Tour</c.FormTitle>
        <c.Form>
          <c.FormGroup>
            <Label labelText={"Tour name"} />
            <TextField value={tour.name} readOnly={true} />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={"Tour Category"} />
            <TextField value={tour.category} readOnly={true} />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={"Your Max Budget"} />
            <TextField value={tour.price} readOnly={true} />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={"Preffered Vehicle"} />
            <TextField value={tour.vehicle} readOnly={true} />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={"Time Duration"} />
            <TextField value={tour.duration} readOnly={true} />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={"Package Type"} />
            <TextField value={tour.tourType} readOnly={true} />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={"Tour Description"} />
            <TextArea value={tour.description} readOnly={true} />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={"Tour Highlights"} />
            <TextArea value={tour.highlights} readOnly={true} />
          </c.FormGroup>
        </c.Form>
      </c.Container>
      <c.Container>
        <c.FormTitle>Add comment for the client</c.FormTitle>
        <c.Form onSubmit={onSubmit}>
          <c.FormGroup>
            <TextArea
              placeholder={"Enter your comment"}
              value={review}
              setValue={setReview}
            />
          </c.FormGroup>
          <c.FormGroup>
            <c.SubmitBtn type="submit">Submit</c.SubmitBtn>
          </c.FormGroup>
        </c.Form>
      </c.Container>
    </>
  );
};

export default SingleCustomTourView;
