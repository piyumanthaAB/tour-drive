import React from 'react'
import * as n from './AdminVehicleViewFormElements.js';

const AdminVehiclecViewForm =()=>{
    <h1>Vehicle Details</h1>
    return(

        
        <n.TableContainer>
            
            <n.TableRow>
                <n.TableHeader>Vehicle No</n.TableHeader>
                <n.TableHeader>Vehicle Model</n.TableHeader>
                <n.TableHeader>Vehicle Type</n.TableHeader>
            </n.TableRow>

            <n.TableRow>
                <n.TableData>KS-1111</n.TableData>
                <n.TableData>Axio</n.TableData>
                <n.TableData>Car</n.TableData>
            </n.TableRow>
        </n.TableContainer>
    );
}

export default AdminVehiclecViewForm