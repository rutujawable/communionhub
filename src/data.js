

const initialEvents = [
    {
      title: 'Religious Gathering',
      date: '2025-04-01',
      location: 'Church Hall',
      description: 'A community prayer meeting',
      category: 'Religious',
      img:'https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738152151720?_a=BAMCkGfi0'
    },
    {
      title: 'Social Meetup',
      date: '2025-04-05',
      location: 'Community Center',
      description: 'Meet new friends and network',
      category: 'Social',
      img:'https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1737999482266?_a=BAMCkGfi0'
    },
    {
      title: 'Charity Fundraiser',
      date: '2025-04-10',
      location: 'Town Square',
      description: 'Support local charities',
      category: 'Charity',
      img:'https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738151964428?_a=BAMCkGfi0'
    },
    
    
      {
        title: 'Cultural Festival',
        date: '2025-04-12',
        location: 'City Park',
        description: 'Experience different cultures through food, music, and art',
        category: 'Cultural',
        img: 'https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?cs=srgb&dl=pexels-minan1398-1313814.jpg&fm=jpg'
      },
      {
        title: 'Tech Workshop',
        date: '2025-04-15',
        location: 'Tech Hub',
        description: 'Learn the latest in web development',
        category: 'Educational',
        img: 'https://img.freepik.com/free-photo/everything-will-be-awesome-group-young-people-casual-clothes-working-modern-office_146671-16522.jpg?semt=ais_hybrid'
      },
      {
        title: 'Music Festival',
        date: '2025-04-20',
        location: 'Central Park',
        description: 'Live performances by top artists',
        category: 'Entertainment',
        img: 'https://media.istockphoto.com/id/1491722807/photo/singer-man-singing-in-a-music-concert.webp?a=1&b=1&s=612x612&w=0&k=20&c=Efx5NwA6TQpIP57LbXlPineTxx9BNIYlIcF_tcAA_2I='
      },
      {
        title: 'Health & Wellness Seminar',
        date: '2025-04-25',
        location: 'City Hospital',
        description: 'Tips for a healthy lifestyle',
        category: 'Health',
        img: 'https://media.gettyimages.com/id/539281953/photo/outdoor-games.jpg?s=612x612&w=gi&k=20&c=bjq9Rl8vj1FZs7VOm55fQFsiq8eiaJrnOAiO3VsqCoQ='
      },
      {
        title: 'Book Fair',
        date: '2025-04-30',
        location: 'Library Hall',
        description: 'Discover new books and meet authors',
        category: 'Educational',
        img: 'https://media.gettyimages.com/id/1964361120/photo/kolkata-west-bengal-india-children-along-with-their-parents-look-over-some-new-publications.jpg?s=612x612&w=gi&k=20&c=b_V60u5RjqlE4De0t6pwmcUHuvZoLQkIB6UbUwG_jxg='
      },
      {
        title: 'Food Festival',
        date: '2025-05-05',
        location: 'Town Square',
        description: 'Taste delicious dishes from around the world',
        category: 'Food',
        img: 'https://thumbs.dreamstime.com/b/summer-hotel-food-festival-people-guests-gathered-patio-guest-house-fish-dishes-tasting-buffet-style-87597090.jpg'
      },
      {
        title: 'Art Exhibition',
        date: '2025-05-10',
        location: 'Art Gallery',
        description: 'Showcasing contemporary artists',
        category: 'Art',
        img: 'https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFydCUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D'
      },
      {
        title: 'Sports Tournament',
        date: '2025-05-15',
        location: 'Stadium',
        description: 'Compete in various sports activities',
        category: 'Sports',
        img: 'https://www.shutterstock.com/image-photo/creative-collage-depicting-mix-men-260nw-2492320165.jpg'
      },
      {
        title: 'Meditation Retreat',
        date: '2025-05-20',
        location: 'Mountain Retreat Center',
        description: 'Relax and rejuvenate with guided meditation',
        category: 'Health',
        img: 'https://media.gettyimages.com/id/597963486/photo/its-a-perfect-day-for-yoga-at-the-beach.jpg?s=612x612&w=0&k=20&c=MYw4GXRb2KR3VFYt3LF0NNQ1whkrDoejIgPPuU6cKK0='
      },
      {
        title: 'Entrepreneurship Bootcamp',
        date: '2025-05-25',
        location: 'Business Center',
        description: 'Learn startup strategies from experts',
        category: 'Business',
        img: 'https://ediindia.ac.in/wp-content/uploads/2020/10/P8A6310-scaled.jpg'
      },
      {
        title: 'Volunteer Beach Cleanup',
        date: '2025-05-30',
        location: 'Sunset Beach',
        description: 'Help keep our beaches clean',
        category: 'Community Service',
        img: 'https://plus.unsplash.com/premium_photo-1663039947303-0fad26f737b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBjbGVhbnVwfGVufDB8fDB8fHww'
      },
      {
        title: 'Film Screening Night',
        date: '2025-06-05',
        location: 'Open-Air Theatre',
        description: 'Enjoy classic and indie films under the stars',
        category: 'Entertainment',
        img: 'https://img.freepik.com/premium-photo/cheerful-young-heterosexual-couple-eating-popcorn-while-watching-funny-comedy-cinema-leisure_274679-6936.jpg?ga=GA1.1.240953307.1742673499&semt=ais_hybrid0'
      }
   
    
  
  
  ];
  
  export default initialEvents;