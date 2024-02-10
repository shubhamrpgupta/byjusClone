const courseModel = [
    {
        id: 1, // Unique identifier for the course
        name: 'React Native',
        dueDate: "2024-03-25",
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
            // Additional enrolled students...
        ],
    },
    {
        id: 2, // Unique identifier for the course
        name: 'Bold Byte',
        dueDate: "2025-04-29",
        instructor: 'Kenny Becker', // Name of the course instructor
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis possimus, recusandae inventore officia aliquam nostrum est minima deleniti commodi sapiente, quibusdam iste? Nihil similique quod cupiditate fuga nulla quaerat reiciendis.",
        enrollmentStatus: 'Open',
        thumbnail: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D', //Link to the course thumbnail
        duration: '10 weeks', // Duration of the course
        schedule: 'Mondays and Wednesdays, 4:00 PM - 6:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 103,
                name: 'Carmine Stevenson',
                email: 'alice@example.com',
            },
            {
                id: 104,
                name: 'Jack Abbott',
                email: 'bob@example.com',
            },
            // Additional enrolled students...
        ],
    },
    {
        id: 3, // Unique identifier for the course
        name: 'Pixel Perfect',
        dueDate: "2019-07-24",
        instructor: 'Sharon York', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Closed',
        thumbnail: 'https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D', //Link to the course thumbnail
        duration: '6 weeks', // Duration of the course
        schedule: 'Tuesdays and Fridays, 2:00 PM - 6:00 PM',
        location: 'Offline',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 105,
                name: 'Cliff Fleming',
                email: 'alice@example.com',
            },
            {
                id: 106,
                name: 'Nadia George',
                email: 'bob@example.com',
            },
            // Additional enrolled students...
        ],
    },
    {
        id: 4, // Unique identifier for the course
        name: 'CodeCraft',
        dueDate: "2024-10-23",
        instructor: 'Brittany Barrera', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D', //Link to the course thumbnail
        duration: '12 weeks', // Duration of the course
        schedule: 'Wednesday and Thursdays, 11:00 AM - 01:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 107,
                name: "Jerry Frank",
                email: 'alice@example.com',
            },
            {
                id: 108,
                name: 'Sherman Mason',
                email: 'bob@example.com',
            },
            // Additional enrolled students...
        ],
    },
    {
        id: 5, // Unique identifier for the course
        name: 'Web Wizard',
        dueDate: "2026-11-26",
        instructor: 'Lois Morse', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'In Progress',
        thumbnail: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D', //Link to the course thumbnail
        duration: '16 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 109,
                name: 'Garrett Rogers',
                email: 'alice@example.com',
            },
            {
                id: 110,
                name: 'Lon Hardy',
                email: 'bob@example.com',
            },
            // Additional enrolled students...
        ],
    },
    {
        id: 6, // Unique identifier for the course
        name: 'Digital Dream',
        dueDate: "2020-03-20",
        instructor: 'Kris Hatfield', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Closed',
        thumbnail: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww', //Link to the course thumbnail
        duration: '10 weeks', // Duration of the course
        schedule: 'Mondays and Saturdays, 2:00 PM - 6:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 103,
                name: 'Carmine Stevenson',
                email: 'alice@example.com',
            },
            {
                id: 104,
                name: 'Jack Abbott',
                email: 'bob@example.com',
            },
            // Additional enrolled students...
        ],
    },
    {
        id: 7, // Unique identifier for the course
        name: 'Nexus Now',
        dueDate: "2024-12-04",
        instructor: 'Carmelo Odom', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 10:00 AM - 12:00 PM',
        location: 'Offline',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 107,
                name: "Jerry Frank",
                email: 'alice@example.com',
            },
            {
                id: 108,
                name: 'Sherman Mason',
                email: 'bob@example.com',
            },
            // Additional enrolled students...
        ],
    },
    {
        id: 8, // Unique identifier for the course
        name: 'Interactive Ink',
        dueDate: "2026-02-18",
        instructor: 'Sara Knox', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'In Progress',
        thumbnail: 'https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D', //Link to the course thumbnail
        duration: '16 weeks', // Duration of the course
        schedule: 'Tuesdays and Saturdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 105,
                name: 'Cliff Fleming',
                email: 'alice@example.com',
            },
            {
                id: 106,
                name: 'Nadia George',
                email: 'bob@example.com',
            },
            // Additional enrolled students...
        ],
    },
    {
        id: 9, // Unique identifier for the course
        name: 'Prodigy Programmer',
        dueDate: "2017-08-21",
        instructor: 'Adam Galloway', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Closed',
        thumbnail: 'https://images.unsplash.com/photo-1545670723-196ed0954986?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww', //Link to the course thumbnail
        duration: '6 weeks', // Duration of the course
        schedule: 'Tuesdays and Fridays, 08:00 PM - 10:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 109,
                name: 'Garrett Rogers',
                email: 'alice@example.com',
            },
            {
                id: 110,
                name: 'Lon Hardy',
                email: 'bob@example.com',
            },
            // Additional enrolled students...
        ],
    },
    {
        id: 10, // Unique identifier for the course
        name: 'TechTrailblazer',
        dueDate: "2024-08-26",
        instructor: 'Bernard Friedman', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww', //Link to the course thumbnail
        duration: '20 weeks', // Duration of the course
        schedule: 'Mondays and Wednesdays and Fridays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
            // Additional enrolled students...
        ],
    },
];
export default courseModel;