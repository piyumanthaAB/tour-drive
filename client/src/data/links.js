import { FiMap,FiTruck,FiUser,FiActivity,FiPlusCircle,FiBarChart2,FiBookOpen,FiSliders,FiXCircle } from "react-icons/fi";


export const adminlinks = [
    {
        resourceType: 'Tour',
        icon: <FiMap/>,
        options: [
            {
                icon: <FiBarChart2/>,
                text: 'Tour Statistics',
                redirectURL:'/admin/tour-stats'
            },
            {
                icon: <FiPlusCircle/>,
                text: 'Add Tours',
                redirectURL:'/admin/tours-add'
            },
            {
                icon: <FiSliders/>,
                text: 'Update Tours',
                redirectURL:'/admin/tour-update'
            },
            {
                icon: <FiBookOpen/>,
                text: 'View All Bookings',
                redirectURL:'/admin/tour-bookings'
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
                redirectURL:'/admin/vehicle-stats'
            },
            {
                icon: <FiPlusCircle/>,
                text: 'Add Vehicles',
                redirectURL:'/admin/vehicle-add'
            },
            {
                icon: <FiSliders/>,
                text: 'Update Vehicles',
                redirectURL:'/admin/vehicle-update'
            },
            {
                icon: <FiBookOpen/>,
                text: 'View All Rentings',
                redirectURL:'/admin/vehicle-rentings'
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
                redirectURL:'/admin/vehicle-stats'
            },
            {
                icon: <FiPlusCircle/>,
                text: 'Add Users',
                redirectURL:'/admin/vehicle-add'
            },
            {
                icon: <FiXCircle/>,
                text: 'Delete Users',
                redirectURL:'/admin/vehicle-update'
            },
            
        ]
    },
    {
        resourceType: 'Stats',
        icon: <FiActivity/>,
        options: [
            {
                icon: <FiBarChart2/>,
                text: 'Vehicle Statistics',
                redirectURL:'/admin/vehicle-stats'
            },
            {
                icon: <FiPlusCircle/>,
                text: 'Add Vehicles',
                redirectURL:'/admin/vehicle-add'
            },
            {
                icon: <FiSliders/>,
                text: 'Update Vehicles',
                redirectURL:'/admin/vehicle-update'
            },
            {
                icon: <FiBookOpen/>,
                text: 'View All Rentings',
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