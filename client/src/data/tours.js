export const tours = [
    {
        _id: '1',
        name: 'sample_tour_1',
        tour_cover: 'https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNyaSUyMGxhbmthfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        tour_gallery_images: [
            'https://images.unsplash.com/photo-1542785853-cf202360bca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            'https://images.unsplash.com/photo-1546048607-6a1240f95d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            'https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
            'https://images.unsplash.com/photo-1553603227-2358aabe821e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
        ],
        category: 'sea-exploring',
        type: 'predefined',
        price: '599',
        duration: '5',
        locations: [
            {'location_1':['latitude','longtitude']},
            {'location_2':['latitude','longtitude']},
            {'location_3':['latitude','longtitude']},
        ],
        tourPlan: [
            {
                'day': 1,
                'description':'things will do in day 1'
            },
            {
                'day': 2,
                'description':'thisngs will do in day 2'
            },
            {
                'day': 3,
                'description':'thisngs will do in day 3'
            }
        ],
        tourHighlights: [
            'highligh 1','highligh 1','highligh 1','highligh 1'
        ],
        includes: [
            'include_option 1','include_option2'
        ],
        excludes: [
            'exclude_option 1','exclude_option2'
        ],
        active: true,
        description: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        start_date: '2023-05-01',
        ratings_average: '4.5',
        age_limit: '45',
        max_seats: '20',
        tour_guides: [
            {
                _id: 1,
                name: 'guide-1',
                photo:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            },
            {
                _id: 2,
                name: 'guide-2',
                photo:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            },
        ]
        
        
    },
]