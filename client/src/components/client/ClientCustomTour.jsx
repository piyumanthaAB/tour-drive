import React, { useState } from "react";
import * as c from "./ClientCustomTourElements";
import Label from "../../components/shared/Form Elements/Label";
import TextField from "../../components/shared/Form Elements/TextField";
import DropDown from "../../components/shared/Form Elements/DropDown";
import TextArea from "../shared/Form Elements/TextArea";
import toast from "react-hot-toast";
import submitForm from "../../hooks/submitForm";
import { Autocomplete, Box, Stack } from "@mui/material";
// import TextField from "@mui/material";

const ClientCustomTour = () => {
  const districtdata = [
    {
      name: "Kalutara",
    },
    {
      name: "Ampara",
    },
    {
      name: "Badulla",
    },
    {
      name: "Colombo",
    },
    {
      name: "Galle",
    },
    {
      name: "Jaffna",
    },
    {
      name: "Kandy",
    },
  ];

  const tourCategoryValues = [
    { label: "city", value: "city" },
    { label: "hiking", value: "hiking" },
    { label: "adventure", value: "adventure" },
    { label: "historical", value: "historical" },
    { label: "cultural", value: "cultural" },
  ];

  const availableVehicle = [
    {
      label: "Car (economy 4 Passengers 2 bags)",
      value: "Car (economy 4 Passengers 2 bags)",
    },
    {
      label: "car (standard 3 Passengers 3 bags)",
      value: "car (standard 3 Passengers 3 bags)",
    },
    "car (standard 3 Passengers 3 bags)",
    "car (Premium 5 passengers 4 bags)",
    "SUV (Compact 5 passengers 3 bags)",
    "SUV (Standard 5 passengers 4 bags)",
    "SUV (Premium 6 passengers 5 bags)",
    "Minivan (7-8 passengers 5 bags)",
    "van (8-12 passengers 8 bags)",
  ];

  const availableTypes = ["Budget", "Standard", "Premium", "Luxury"];

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  // const [price, setPrice] = useState("");
  const [vehicle, setVehicle] = useState("");
  // const [galleryImages, setGalleryImages] = useState([]);
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [highlights, setHighlights] = useState("");
  const [option, setOption] = useState([]);
  // const [locations, setLocations] = useState("");
  // const [tourType, setTourType] = useState("");

  setOption(districtdata);

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    const headers = {
      "Content-Type": "multipart/form-data",
    };

    const formData = new FormData();

    formData.append("name", name);
    // formData.append("price", price);
    formData.append("category", category);
    formData.append("vehicle", vehicle);
    formData.append("duration", duration);
    formData.append("description", description);
    formData.append("highlights", highlights);
    // formData.append("location", locations);
    // formData.append("tourType", tourType);

    console.log(formData, "form data...............");

    // for (const file of galleryImages) {
    // formData.append("galleryImg", file);
    // }

    await toast.promise(
      submitForm("/api/v1/custom-tours", formData, "post", headers),
      {
        loading: "Adding Custom Tour...",
        success: (data) => {
          console.log({ data });
          return ` ${data.data.message} ` || "success";
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

  // const handleGalleryImg = (e) => {
  //   setGalleryImages(e.target.files);
  // };

  return (
    <>
      <c.Container>
        <c.FormTitle>Request Custom Tour </c.FormTitle>
        <c.Form onSubmit={onSubmit}>
          <c.FormGroup>
            <Label labelText={"Tour name"} />
            <TextField
              value={name}
              setValue={setName}
              placeholder={"Enter tour name here"}
            />
          </c.FormGroup>

          <c.FormGroup>
            <Label labelText={"Tour Category"} />
            <DropDown
              dropDownValues={tourCategoryValues}
              currentDropdownVal={category}
              setCurrentDropdownVal={setCategory}
            />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={"Duration"} />
            <TextField
              value={duration}
              setValue={setDuration}
              type="text"
              placeholder={"Enter tour duration here"}
            />
          </c.FormGroup>
          <c.FormGroup />
          {/* <c.Space> */}
          <c.HR />
          {/* </c.Space> */}
          <c.FormTitle>Vehicle Selection</c.FormTitle>
          <c.FormGroup />
          <c.FormGroup />
          <c.FormGroup>
            <Label labelText={"Preffered Vehicle"} />
            <DropDown
              dropDownValues={availableVehicle}
              currentDropdownVal={vehicle}
              setCurrentDropdownVal={setVehicle}
            />
          </c.FormGroup>

          <c.HR />
          <c.FormGroup>
            {/* <c.TourCard>
              <Stack sx={{ width: 200 }}>
                <Autocomplete
                  id="district"
                  getOptionLabel={(option) => `${option.name}`}
                  options={option}
                  sx={{ width: 200 }}
                  isOptionEqualToValue={(option, value) =>
                    option.name === value.name
                  }
                  noOptionsText={"no available option"}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      {option.name}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField {...params} label="search your district" />
                  )}
                />
              </Stack>
            </c.TourCard> */}
          </c.FormGroup>
          <c.HR />
          <c.FormGroup>
            <Label labelText={"Tour Description"} />
            <TextArea
              value={description}
              setValue={setDescription}
              rows={10}
              placeholder="Enter your tour request descrtiption here"
            />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={"Tour Highlights"} />
            <TextArea
              value={highlights}
              setValue={setHighlights}
              rows={10}
              placeholder="Enter your tour request important information here"
            />
          </c.FormGroup>
          {/* <c.FormGroup>
            <Label labelText={"Tour Locations"} />
            <TextArea
              value={locations}
              setValue={setLocations}
              rows={10}
              placeholder="Enter coordinates of the locations here
            EX:
            [latitude_1,longtitude_1]
            [latitude_2,longtitude_2]
            [latitude_3,longtitude_3]"
            />
          </c.FormGroup> */}
          {/* <c.FormGroup>
            <Label labelText={"Select your tour package types"} />
            <DropDown
              dropDownValues={availableTypes}
              currentDropdownVal={tourType}
              setCurrentDropdownVal={setTourType}
            />
          </c.FormGroup> */}

          <c.FormGroup>
            <c.SubmitBtn type="submit">Submit Request</c.SubmitBtn>
            <c.SubmitBtn color="#333" type="reset">
              Clear
            </c.SubmitBtn>
          </c.FormGroup>
        </c.Form>
      </c.Container>
    </>
  );
};

export default ClientCustomTour;
