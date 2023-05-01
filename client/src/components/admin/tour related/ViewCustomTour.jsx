import React from "react";
import * as f from "./ViewCustomTourElements";
import { FiBookOpen, FiDelete, FiTrash, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ViewCustomTour = ({ tours }) => {
  const navigate = useNavigate();
  const onTourView = (e, tour) => {
    navigate(`/admin/custom-tours/${tour._id}`);
  };
  return (
    <>
      <f.Container>
        <f.FormTitle>View all Requested Custom Tours</f.FormTitle>
        <f.TableContainer>
          <f.Table>
            <f.TableRow>
              <f.TableData th={true}>#</f.TableData>
              <f.TableData th={true}>Tour Name</f.TableData>
              <f.TableData th={true}>Type</f.TableData>
              <f.TableData th={true}>Category</f.TableData>
              <f.TableData th={true}>Duration</f.TableData>
              <f.TableData th={true}>Actions</f.TableData>
            </f.TableRow>
            {tours.map((tour, key) => {
              return (
                <f.TableRow>
                  <f.TableData>{key + 1}</f.TableData>
                  <f.TableData>{tour.name}</f.TableData>
                  <f.TableData>{tour.tourType}</f.TableData>
                  <f.TableData>{tour.category}</f.TableData>
                  <f.TableData minwidth="1 rem">{tour.duration}</f.TableData>
                  <f.TableData className="flex" minwidth="1rem">
                    <f.TableActionBtn
                      onClick={(e) => {
                        onTourView(e, tour);
                      }}
                    >
                      <FiBookOpen />
                    </f.TableActionBtn>
                    <f.TableActionBtn
                      onClick={(e) => {
                        console.log("custom tour deletion");
                      }}
                    >
                      <FiTrash2 />
                    </f.TableActionBtn>
                  </f.TableData>
                </f.TableRow>
              );
            })}
          </f.Table>
        </f.TableContainer>
      </f.Container>
    </>
  );
};

export default ViewCustomTour;
