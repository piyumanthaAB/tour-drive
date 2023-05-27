import {
  FiMap,
  FiAlignLeft,
  FiTruck,
  FiUser,
  FiActivity,
  FiPlusCircle,
  FiBarChart2,
  FiBookOpen,
  FiSliders,
  FiXCircle,
  FiBookmark,
} from 'react-icons/fi';

const toursBaseUrl = '';

export const adminlinks = [
  {
    resourceType: 'Tours',
    icon: <FiMap />,
    options: [
      {
        icon: <FiBarChart2 />,
        text: 'Tour Statistics',
        redirectURL: '/admin/tours/stat',
      },
      {
        icon: <FiPlusCircle />,
        text: 'Add Tours',
        redirectURL: '/admin/tours/add',
      },
      //   {
      //     icon: <FiSliders />,
      //     text: 'Update Tours',
      //     redirectURL: '/admin/tours/update/:id',
      //   },
      {
        icon: <FiBookOpen />,
        text: 'View All Tours',
        redirectURL: '/admin/tours/all',
      },
      {
        icon: <FiBookOpen />,
        text: 'View All Custom Tours',
        redirectURL: '/admin/custom-tours/all',
      },
    ],
  },
  {
    resourceType: 'Vehicles',
    icon: <FiTruck />,
    options: [
      {
        icon: <FiBarChart2 />,
        text: 'Vehicle Statistics',
        redirectURL: '/admin/vehicles/stat',
      },
      {
        icon: <FiPlusCircle />,
        text: 'Add Vehicles',
        redirectURL: '/admin/vehicles/add',
      },
      //   {
      //     icon: <FiSliders />,
      //     text: 'Update Vehicles',
      //     redirectURL: '/admin/vehicles/update/:id',
      //   },
      {
        icon: <FiBookOpen />,
        text: 'View All Vehicles',
        redirectURL: '/admin/vehicles/all',
      },
    ],
  },
  {
    resourceType: 'Users',
    icon: <FiUser />,
    options: [
      {
        icon: <FiBarChart2 />,
        text: 'View All Users',
        redirectURL: '/admin/users/all',
      },
      {
        icon: <FiPlusCircle />,
        text: 'Add Users',
        redirectURL: '/admin/users/add',
      },
      //   {
      //     icon: <FiXCircle />,
      //     text: 'Update Users',
      //     redirectURL: '/admin/users/update/:id',
      //   },
    ],
  },
  {
    resourceType: 'Statistics',
    icon: <FiActivity />,
    options: [
      {
        icon: <FiBarChart2 />,
        text: 'Vehicle Statistics',
        redirectURL: '/admin/vehicles/stat',
      },
      {
        icon: <FiPlusCircle />,
        text: 'User Statistics',
        redirectURL: '/admin/vehicle-add',
      },
      // {
      //     icon: <FiSliders/>,
      //     text: 'Tour Statistics',
      //     redirectURL:'/admin/vehicle-update'
      // },
      {
        icon: <FiBookOpen />,
        text: 'Reviews Statistics',
        redirectURL: '/admin/vehicle-rentings',
      },
    ],
  },
];
export const clientLinks = [
  {
    resourceType: '',
    icon: <FiAlignLeft />,
    options: [
      {
        icon: <FiUser />,
        text: 'My profile',
        redirectURL: '/client/home',
      },
      {
        icon: <FiBookmark />,
        text: 'My booked tours',
        redirectURL: '/client/my-tour-bookings',
      },
      {
        icon: <FiTruck />,
        text: 'My booked vehicles',
        redirectURL: '/client/my-vehicle-bookings',
      },
      {
        icon: <FiTruck />,
        text: 'My custom tours',
        redirectURL: '/client/my-custom-tours',
      },
      {
        icon: <FiPlusCircle />,
        text: 'Request Custom Tour',
        redirectURL: '/client/add-custom-tour',
      },
    ],
  },
];
export const cutomer_care_links = [
  {
    resourceType: '',
    icon: <FiAlignLeft />,
    options: [
      {
        icon: <FiUser />,
        text: 'My profile',
        redirectURL: '/cutomer-care/home',
      },
      {
        icon: <FiBookmark />,
        text: 'All emergency requests',
        redirectURL: '/customer-care/view-all-requests',
      },
      {
        icon: <FiBookmark />,
        text: 'Customer Q&A',
        redirectURL: '/customer-care/view-all-qa-requests',
      },
    ],
  },
];
