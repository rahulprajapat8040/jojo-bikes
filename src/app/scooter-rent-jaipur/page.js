import WhyJojoBikes from "@/components/about/WhyJojoBikes"
import BikeSlider from "@/components/bike-rent/BikeSlider"
import Hero from "@/components/bike-rent/Hero"
import RentalBike from "@/components/common/RentalBike"
import SectionData from "@/components/common/SectionData"

const BikeRentInJaipur = () => {

    const BikesData = [
        {
            title: `online bike rent in Jaipur Bike on Rent in Jaipur – JOJO Travels`,
            para: `Jaipur – the Pink City of India, the Capital of Rajasthan famous for its royal history and tradition. If you want to explore Jaipur bazaar then a bike is the best option for you to move comfortably in traffic. Riding a bike is one of the best amusements in life. Nowadays the bike is a very essential vehicle that helps us to reach our destination. The riders have an intense passion to ride a different variety of bikes. At Jojo travels we provide different types of Bike rent Jaipur to fill your entertainment while riding a bike. So, if you are looking for a bike rental in Jaipur, then choose Jojo travels and make use of our services. We provide the best serviced bike on rent in Jaipur to roam around this beautiful place. From our wide range of collections, you can choose the bike as per your needs with many services such as helmets, security, and many more to satisfy the customer's needs. Book online bike rent in Jaipur at Jojo Travels to make your trip smooth and convenient with our best services.`,
            img: '/assets/online-bike-rent-in-Jaipur.jpg'
        },
        {
            title: `
activa on rent in Jaipur
Activa on Rent in Jaipur - JOJO Travel
`,
            para: `

Activa is the best option to travel to the city. Are you planning to explore the beauty of Jaipur, and you don't have a vehicle? Don't worry! Get an activa on rent in Jaipur or freely enjoy your in-city Jaipur ride. Riding an activa in Jaipur is an experience in itself because it can pass smoothly from crowded places and can also go in small areas so you can explore the unseen Jaipur.
\n
Jaipur is the capital city of Rajasthan state and is famous for its tradition and royal history. JOJO Travel provides a wide range of activa on rent in Jaipur to enjoy the actual flavor of Rajasthan. JOJO Travel provides activa in excellent condition for a smooth riding experience and proper safety gear like helmets at a very affordable price because customer satisfaction and safety are our priority. `,
            img: '/assets/activa-on-rent-in-jaipur.jpg'
        },
        {
            title: `Scooty On Rent in Jaipur - Jojo Travel`,
            para: `Traveling is the main factor when visiting and exploring places in Jaipur. Scooty can smoothly go in crowded places, and it is easy to maintain a Scooty for in-city rides. Riding a Scooty in the city has several benefits as it has storage space where you can store your items. In Jaipur, if you want to explore the unseen corners of Jaipur, renting a Scooty is the best option for this. We are offering the Scooty on rent in Jaipur. We have a wide range of different Scooty at different and affordable price points. Providing the Scooty in the best condition to our customers is always our main priority. `,
            img: '/assets/scooty-on-rent-in-jaipur.jpg'
        },
        {
            title: `KTM Bike on Rent in Jaipur - JOJO Travel`,
            para: `Are you planning to hire rental KTM bike to roam on the streets of the beautiful city Jaipur? If yes then we are glad to tell you that JOJO Travel introduce you to the most efficient and adventurous KTM bike on rent in Jaipur. They offer the best bike at the lowest prices across Jaipur.
\n
Jaipur the capital of Rajasthan state is famous for its traditional and royal culture, arcade palaces, gardens, museums, and different buildings. You can see the splendid forts, major tourist attractions including Hawa Mahal, Jantar Mantar, Albert Hall, and many more places to visit in the pick city. There are numerous benefits to hiring KTM bike on rent in Jaipur as these bike are cost-effective, and provides you the guarantee of a great adventure throughout the trip. `,
            img: '/assets/ktm-bike-on-rent-in-jaipur.jpg'
        },
        {
            title: `
harley davidson bike on rent in Jaipur
Harley Davidson Bike on Rent in Jaipur
`,
            para: `Harley Davidson, A dream of every bike lover to own a Harley Davidson once in a life, but the expensive cost of this luxury cruise bike makes it unaffordable for many of us. Harley Davidson is a luxury cruise bike segment that offers a comfortable and powerful ride to the rider. Now you can ride a Harley Davidson bike without owning it. Jojo Travel provides exclusive and luxury Harley Davidson Bike on Rent in Jaipur.
\n
Ride and enjoy the feel of a Harley Davidson because it is not just a bike. It is an emotion for every bike lover. Jojo Travel provides 24*7 Support and service to building a strong Harley community in Jaipur.
\n
We offer a wide range of Harley Davidson bikes on rent in the best condition. You can book a Harley with simple clicks. Jojo Travel always cares about riders' safety as a priority. For this, we always provide Helmets and proper documentation with every booking.`,
            img: '/assets/harley-davidson-bike-on-rent-in-jaipur.jpg'
        },
        {
            title: `Two wheeler on Rent in Jaipur – JOJO Travel`,
            para: `Are you planning to hire rental 2 wheeler to roam on the streets of the beautiful city Jaipur? If yes then we are glad to tell you that JOJO Travel introduce you to the most efficient and adventurous Two wheeler on rent in Jaipur. They offer the best 2 wheeler at the lowest prices across Jaipur.
\n
Jaipur the capital of Rajasthan state is famous for its traditional and royal culture, arcade palaces, gardens, museums, and different buildings. You can see the splendid forts, major tourist attractions including Hawa Mahal, Jantar Mantar, Albert Hall, and many more places to visit in the pick city. There are numerous benefits to hiring 2 wheeler on rent in Jaipur as this are cost-effective, and provides you the guarantee of a great adventure throughout the trip. `,
            img: '/assets/two-wheeler-on-rent-in-jaipur.jpg'
        },
        {
            title: `Bullet on Rent in Jaipur - JOJO Travel`,
            para: `

Are you planning to hire rental Bullet to roam on the streets of the beautiful city Jaipur? If yes then we are glad to tell you that JOJO Travel Company introduce you to the most efficient and adventurous Bullet on rent in Jaipur. They offer the best bike at the lowest prices across Jaipur.
\n
Jaipur the capital of Rajasthan state is famous for its traditional and royal culture, arcade palaces, gardens, museums, and different buildings. You can see the splendid forts, major tourist attractions including Hawa Mahal, Jantar Mantar, Albert Hall, and many more places to visit in the pick city. There are numerous benefits to hiring Bullet on rent in Jaipur as these bike are cost-effective, and provides you the guarantee of a great adventure throughout the trip. `,
            img: '/assets/bullet-on-rent-in-jaipur.jpg'
        },
        {
            title: `
royal enfield on rent in Jaipur
Royal Enfield on Rent in Jaipur - JOJO Travel
`,
            para: `
royal enfield on rent in Jaipur
Royal Enfield on Rent in Jaipur - JOJO Travel

Royal Enfield is an adventurous motorcycle segment company that can travel the world. The Retro style look of a Royal Enfield makes it different from others. Driving a Royal Enfield is a different experience because of its heavyweight. People love to ride a Royal Enfield with pride because the motorcycle cherishes their riding experience. Royal Enfield is one of the most loved motorcycle brands in India.
\n
Jojo Travel provides the best offer of Royal Enfield on rent in Jaipur. We offer the Royal Enfield for royal persons to roam around the Jaipur - The pink city of India. We provide the perfect services to the customers by providing them with 24*7 support assistance. Our customers can immediately book a Royal Enfield in a few minutes at affordable prices. Jojo Travel mainly focuses on customer satisfaction.
`,
            img: '/assets/royal-enfield-on-rent-in-jaipur.jpg'
        }
    ]

    const BikesOnRent = {
        title: 'Scooter On Rent',
        Bikes: [
            {
                id: "1",
                title: "Honda Activa 6G",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/activa-rent-in-jaipur.jpg",
            },
            {
                id: "2",
                title: "Honda Activa 125 ",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/affordable-activa-on-rent-in-jaipur.jpg",
            },
            {
                id: "3",
                title: "Honda Activa 4G",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/rent-in-jaipur-Activa.jpg",
            },
            {
                id: "4",
                title: "Suzuki Access 125",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/scooty-rent-in-jaipur.jpg",
            },
            {
                id: "5",
                title: "Honda Activa 3g",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/affordable-scooty-on-rent-in-jaipur.jpg",
            },
            {
                id: "6",
                title: "Honda Grazia 125",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/rent-in-jaipur-scooty.jpg",
            },

        ]
    }

    const sectionData = [
        {
            id: 1,
            title: `Explore Jaipur with Scooty On Rent in Jaipur`,
            description: `
If you are a Traveler, traveling to Jaipur must be on your Checklist. Exploring famous places is easy to explore with the Scooty. Riding with Scooty can help us to explore the unseen corners of the Jaipur. What is better than getting a Scooty on rent in Jaipur for this? You can save time money and get a Scooty immediately by renting. Jojo Travel is the perfect place where you will get the Scooty in the best condition with proper documentation for a hassle-free ride for our customers. You can explore the beauty of Pink city on the various variety of Scooty at the best affordable prices. `
        },
        {
            id: 2,
            title: `Get the Premium Range of Scooty On Rent in Jaipur`,
            description: `Find the wide range of Premium Scooty on Rent in Jaipur at affordable prices on Jojo Travel. For a comfortable and smooth ride in the city and crowded places. What could be better than a Scooty? Scooty is the most convenient and easy-to-maintain vehicle that comes with some storage space to store your items. Jojo Travel offers you the premium collection of Scooty in the best condition. Roam around the Jaipur one a Scooty and feel the essence of Jaipur by renting a Scooty at affordable prices. Traveling on a Scooty with family and friends is more fun and a hassle-free ride experience. Jojo Travel provides you the Scooty and support for a responsive ride and following all the traffic rules. `
        },
        {
            id: 3,
            title: `Explore Jaipur with Activa on Rent in Jaipur`,
            description: `One of the best ways to give a break to your stressful life is traveling. What could be better than traveling to Jaipur, Rajasthan? Here you can enjoy the Rajasthani tradition or many historical places, and many more. JOJO Travel provides a premium range of activa on rent in Jaipur to explore Jaipur conveniently.

By hiring an activa on rent in Jaipur, you can directly save your time and money spent on public transport. JOJO Travel provides a hassle-free transportation medium with proper documentation and safety equipment. You can go anywhere you want in Jaipur and enjoy the beauty of Jaipur - the Pink city of India.`
        },
        {
            id: 4,
            title: `Hire An Activa on Rent in Jaipur in Simple Clicks `,
            description: `Hiring a vehicle for rent is such a painful and time taking procedure. But with us, you can book an activa on rent in Jaipur with some simple clicks. With the help of technology, you can book an activa with just simple clicks, and this complete procedure will only take a few minutes.

Travel around Jaipur hassle-free by renting an activa and enjoy the essence of royalty of Rajasthan in Jaipur. Activa is a family-friendly and very convenient vehicle. You can take it wherever you want to visit Jaipur.`
        },
    ]

    const HeroData = {
        videoUrl: '/assets/8070865-uhd_3840_2160_24fps.mp4',
        title: 'Rent a Scooter at Jojo Travels'
    }

    const whyJojoBikes = [
        {
            id: 1,
            title: 'Premium Range of Activa',
            description: 'Choose from our wide selection of premium scooters and activas in excellent condition.',
            icons: '🛵',
            features: ['Sanitized vehicles', 'Best condition scooters', 'Multiple models available']
        },
        {
            id: 2,
            title: 'Complete Documentation',
            description: 'We provide all necessary paperwork and documentation for a hassle-free rental experience.',
            icons: '📄',
            features: ['Rental agreement', 'Insurance coverage', 'Valid permits']
        },
        {
            id: 3,
            title: 'Safety First',
            description: 'Your safety is our priority. We provide essential safety gear with every rental.',
            icons: '⛑️',
            features: ['Quality helmets', 'Scooter locks', 'Sanitized vehicles']
        },
        {
            id: 4,
            title: 'Customer Support',
            description: '24/7 dedicated support for all your rental needs and queries.',
            icons: '🤝',
            features: ['24/7 assistance', 'Professional guidance', 'Emergency support']
        },
        {
            id: 5,
            title: 'Affordable Pricing',
            description: 'Competitive rates with no hidden charges for the best value.',
            icons: '💰',
            features: ['Transparent pricing', 'Flexible packages', 'Best market rates']
        },
        {
            id: 6,
            title: 'Satisfactory Services',
            description: 'We ensure complete customer satisfaction with our quality services.',
            icons: '⭐',
            features: ['Well-maintained vehicles', 'Timely service', 'Customer-focused approach']
        }
    ]


    return (
        <>
            <Hero data={HeroData} />
            <BikeSlider BikesData={BikesData} />
            <RentalBike data={BikesOnRent} />
            <SectionData data={sectionData} />
            <WhyJojoBikes WhyJojoBikesData={whyJojoBikes} />
        </>
    )
}

export default BikeRentInJaipur