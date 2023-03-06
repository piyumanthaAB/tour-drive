import { FiMap,FiTruck,FiUser,FiActivity,FiPlusCircle,FiBarChart2,FiBookOpen,FiSliders,FiXCircle } from "react-icons/fi";

const toursBaseUrl=''

export const adminlinks = [
    {
        resourceType: 'Tours',
        icon: <FiMap/>,
        options: [
            {
                icon: <FiBarChart2/>,
                text: 'Tour Statistics',
                redirectURL:'/admin/tours/stat'
            },
            {
                icon: <FiPlusCircle/>,
                text: 'Add Tours',
                redirectURL:'/admin/tours/add'
            },
            {
                icon: <FiSliders/>,
                text: 'Update Tours',
                redirectURL:'/admin/tours/update'
            },
            {
                icon: <FiBookOpen/>,
                text: 'View All Bookings',
                redirectURL:'/admin/tours/bookings'
            },
        ]
    },
    {
        resourceType: 'Vehicles',
        icon: <FiTruck/>,
        options: [
            {
                icon: <FiBarChart2/>,
                text: 'Vehicle Statistics',
                redirectURL:'/admin/vehicles/stat'
            },
            {
                icon: <FiPlusCircle/>,
                text: 'Add Vehicles',
                redirectURL:'/admin/vehicles/add'
            },
            {
                icon: <FiSliders/>,
                text: 'Update Vehicles',
                redirectURL:'/admin/vehicles/update'
            },
            {
                icon: <FiBookOpen/>,
                text: 'View All Rentings',
                redirectURL:'/admin/vehicles/bookings'
            },
        ]
    },
    {
        resourceType: 'Users',
        icon: <FiUser/>,
        options: [
            {
                icon: <FiBarChart2/>,
                text: 'View All Users',
                redirectURL:'/admin/users/all'
            },
            {
                icon: <FiPlusCircle/>,
                text: 'Add Users',
                redirectURL:'/admin/users/add'
            },
            {
                icon: <FiXCircle/>,
                text: 'Delete Users',
                redirectURL:'/admin/users/delete'
            },
            
        ]
    },
    {
        resourceType: 'Statistics',
        icon: <FiActivity/>,
        options: [
            {
                icon: <FiBarChart2/>,
                text: 'Vehicle Statistics',
                redirectURL:'/admin/vehicle-stats'
            },
            {
                icon: <FiPlusCircle/>,
                text: 'User Statistics',
                redirectURL:'/admin/vehicle-add'
            },
            {
                icon: <FiSliders/>,
                text: 'Tour Statistics',
                redirectURL:'/admin/vehicle-update'
            },
            {
                icon: <FiBookOpen/>,
                text: 'Reviews Statistics',
                redirectURL:'/admin/vehicle-rentings'
            },
        ]
    },
]
export const clientLinks = [
    {
        resourceType: 'Tour',
        icon: <FiMap/>,
        options: [
            {
                icon: <FiBarChart2/>,
                text: 'aaaaaaaaa',
                redirectURL:'/client/1'
            },
            {
                icon: <FiPlusCircle/>,
                text: 'bbbbbbbbbb',
                redirectURL:'/client/2'
            },
            {
                icon: <FiSliders/>,
                text: 'ccccccccc',
                redirectURL:'/client/3'
            },
            
        ]
    },
    {
        resourceType: 'Vehicles',
        icon: <FiTruck/>,
        options: [
            {
                icon: <FiBarChart2/>,
                text: 'dddddddddd',
                redirectURL:'/client/1'
            },
            {
                icon: <FiPlusCircle/>,
                text: 'eeeeeeeeee',
                redirectURL:'/client/2'
            },
            {
                icon: <FiSliders/>,
                text: 'ffffffffff',
                redirectURL:'/client/3'
            },
            
        ]
    },
    
]