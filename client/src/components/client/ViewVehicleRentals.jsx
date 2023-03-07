import React from 'react'
import * as f from './ViewVehicleRentalsElements.js';

const ViewVehicleRentals = () => {
    return (
        <>
            <f.Container>
                <f.FormTitle>
                    Vehicle Rentals
                </f.FormTitle>

                <f.TableContainer>
                    <f.Table>
                        <f.TableRow>
                            <f.TableDataCell th={true}>#</f.TableDataCell>
                            <f.TableDataCell th={true}>Vehicle No</f.TableDataCell>
                            <f.TableDataCell th={true}>Type</f.TableDataCell>
                            <f.TableDataCell th={true}>Status</f.TableDataCell>
                            <f.TableDataCell th={true}>Fee</f.TableDataCell>
                            <f.TableDataCell th={true}>Deposit</f.TableDataCell>
                        </f.TableRow>
                        <f.TableRow>
                            <f.TableDataCell>1</f.TableDataCell>
                            <f.TableDataCell>CBA-1010</f.TableDataCell>
                            <f.TableDataCell minwidth='1rem'>car</f.TableDataCell>
                            <f.TableDataCell className="flex"> completed </f.TableDataCell>
                            <f.TableDataCell minwidth='1rem'>$50</f.TableDataCell>
                            <f.TableDataCell minwidth='1rem'>refunded : 500$</f.TableDataCell>
                        </f.TableRow>
                        <f.TableRow>
                            <f.TableDataCell>2</f.TableDataCell>
                            <f.TableDataCell>tw-1352</f.TableDataCell>
                            <f.TableDataCell minwidth='1rem'>bike</f.TableDataCell>
                            <f.TableDataCell className="flex">pending</f.TableDataCell>
                            <f.TableDataCell minwidth='1rem'>$20</f.TableDataCell>
                            <f.TableDataCell minwidth='1rem'>$100</f.TableDataCell>
                        </f.TableRow>
                        {/* <f.TableRow>
                            <f.TableDataCell>3</f.TableDataCell>
                            <f.TableDataCell>City gazer</f.TableDataCell>
                            <f.TableDataCell minwidth='1rem'>2022-06-25</f.TableDataCell>
                            <f.TableDataCell className="flex">$999</f.TableDataCell>
                            <f.TableDataCell minwidth='1rem'>completed</f.TableDataCell>
                        </f.TableRow> */}
                    </f.Table>
                </f.TableContainer>

            </f.Container>
        </>
    );
}

export { ViewVehicleRentals as VehicleRentals}