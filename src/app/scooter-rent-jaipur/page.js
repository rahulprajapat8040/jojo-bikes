import WhyJojoBikes from "@/components/about/WhyJojoBikes"
import BikeSlider from "@/components/bike-rent/BikeSlider"
import Hero from "@/components/bike-rent/Hero"
import RentalBike from "@/components/common/RentalBike"
import SectionData from "@/components/common/SectionData"

export const metadata = {
    title: 'Scooty & Activa on Rent in Jaipur | Best Rates - Jojo bike rental',
    description: 'Rent Activa, Scooty & automatic two-wheelers in Jaipur. Affordable daily & monthly rental plans with doorstep delivery. Book Honda Activa & scooters at best rates.',
    keywords: 'scooty on rent in jaipur, activa on rent in jaipur, honda activa rental jaipur, scooty rental jaipur, automatic scooter rent jaipur, monthly scooty rental jaipur, activa 6g on rent, activa 125 rental',
    openGraph: {
        title: 'Scooty & Activa Rentals in Jaipur | Jojo bike rental',
        description: 'Rent Honda Activa & Scooters in Jaipur. Best maintained vehicles, flexible rental plans, and hassle-free booking process.',
        type: 'website',
        url: 'https://www.jojobikerental.in/scooter-rent-jaipur',
        images: [
            {
                url: '/assets/scooty-rent-og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Scooty and Activa Rentals in Jaipur'
            }
        ],
        locale: 'en_IN',
        siteName: 'Jojo bike rental'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rent Scooty & Activa in Jaipur | Jojo bike rental',
        description: 'Best rates for Activa & Scooty rentals in Jaipur. Daily & monthly plans available with doorstep delivery.',
        images: ['/assets/scooty-rent-og-image.jpg']
    },
    alternates: {
        canonical: 'https://www.jojobikerental.in/scooter-rent-jaipur'
    }
}

const BikeRentInJaipur = () => {

    const BikesData = [

        {
            title: `
activa on rent in Jaipur
Activa on Rent in Jaipur - Jojo bike rental
`,
            para: `

Activa is the best option to travel to the city. Are you planning to explore the beauty of Jaipur, and you don't have a vehicle? Don't worry! Get an activa on rent in Jaipur or freely enjoy your in-city Jaipur ride. Riding an activa in Jaipur is an experience in itself because it can pass smoothly from crowded places and can also go in small areas so you can explore the unseen Jaipur.
\n
Jaipur is the capital city of Rajasthan state and is famous for its tradition and royal history. Jojo bike rental provides a wide range of activa on rent in Jaipur to enjoy the actual flavor of Rajasthan. Jojo bike rental provides activa in excellent condition for a smooth riding experience and proper safety gear like helmets at a very affordable price because customer satisfaction and safety are our priority. `,
            img: '/assets/activa-on-rent-in-jaipur.jpg'
        },
        {
            title: `Scooty On Rent in Jaipur - Jojo bike rental`,
            para: `Traveling is the main factor when visiting and exploring places in Jaipur. Scooty can smoothly go in crowded places, and it is easy to maintain a Scooty for in-city rides. Riding a Scooty in the city has several benefits as it has storage space where you can store your items. In Jaipur, if you want to explore the unseen corners of Jaipur, renting a Scooty is the best option for this. We are offering the Scooty on rent in Jaipur. We have a wide range of different Scooty at different and affordable price points. Providing the Scooty in the best condition to our customers is always our main priority. `,
            img: '/assets/scooty-on-rent-in-jaipur.jpg'
        },

    ]

    const BikesOnRent = {
        title: 'Scooter On Rent',
        Bikes: [
            {
                id: "1",
                type: "honda",
                title: "Honda Activa 6G",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 500,
                image: "/assets/activa-rent-in-jaipur.png",
            },
            {
                id: "2",
                type: "honda",
                title: "Honda Activa 125",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 500,
                image: "/assets/affordable-activa-on-rent-in-jaipur.png",
            },
            {
                id: "3",
                type: "honda",
                title: "Honda Activa 4G",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 450,
                image: "/assets/rent-in-jaipur-Activa.png",
            },
            {
                id: "4",
                type: "suzuki",
                title: "Suzuki Access 125",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 600,
                image: "/assets/scooty-rent-in-jaipur.png",
            },
            {
                id: "5",
                type: "honda",
                title: "Honda Activa 3g",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 450,
                image: "/assets/affordable-scooty-on-rent-in-jaipur.png",
            },
            {
                id: "6",
                type: "honda",
                title: "Honda Grazia 125",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 500,
                image: "/assets/rent-in-jaipur-scooty.png",
            },
        ]
    }

    const sectionData = [
        {
            id: 1,
            title: `Explore Jaipur with Scooty On Rent in Jaipur`,
            description: `
If you are a Traveler, traveling to Jaipur must be on your Checklist. Exploring famous places is easy to explore with the Scooty. Riding with Scooty can help us to explore the unseen corners of the Jaipur. What is better than getting a Scooty on rent in Jaipur for this? You can save time money and get a Scooty immediately by renting. Jojo bike rental is the perfect place where you will get the Scooty in the best condition with proper documentation for a hassle-free ride for our customers. You can explore the beauty of Pink city on the various variety of Scooty at the best affordable prices. `
        },
        {
            id: 2,
            title: `Get the Premium Range of Scooty On Rent in Jaipur`,
            description: `Find the wide range of Premium Scooty on Rent in Jaipur at affordable prices on Jojo bike rental. For a comfortable and smooth ride in the city and crowded places. What could be better than a Scooty? Scooty is the most convenient and easy-to-maintain vehicle that comes with some storage space to store your items. Jojo bike rental offers you the premium collection of Scooty in the best condition. Roam around the Jaipur one a Scooty and feel the essence of Jaipur by renting a Scooty at affordable prices. Traveling on a Scooty with family and friends is more fun and a hassle-free ride experience. Jojo bike rental provides you the Scooty and support for a responsive ride and following all the traffic rules. `
        },
        {
            id: 3,
            title: `Explore Jaipur with Activa on Rent in Jaipur`,
            description: `One of the best ways to give a break to your stressful life is traveling. What could be better than traveling to Jaipur, Rajasthan? Here you can enjoy the Rajasthani tradition or many historical places, and many more. Jojo bike rental provides a premium range of activa on rent in Jaipur to explore Jaipur conveniently.

By hiring an activa on rent in Jaipur, you can directly save your time and money spent on public transport. Jojo bike rental provides a hassle-free transportation medium with proper documentation and safety equipment. You can go anywhere you want in Jaipur and enjoy the beauty of Jaipur - the Pink city of India.`
        },
        {
            id: 4,
            title: `Hire An Activa on Rent in Jaipur in Simple Clicks `,
            description: `Hiring a vehicle for rent is such a painful and time taking procedure. But with us, you can book an activa on rent in Jaipur with some simple clicks. With the help of technology, you can book an activa with just simple clicks, and this complete procedure will only take a few minutes.

Travel around Jaipur hassle-free by renting an activa and enjoy the essence of royalty of Rajasthan in Jaipur. Activa is a family-friendly and very convenient vehicle. You can take it wherever you want to visit Jaipur.`
        },
    ]

    const HeroData = {
        videoUrl: '/assets/about-bg.mp4',
        title: 'Rent a Scooter at Jojo bike rentals'
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
    const title = "Our Pricing Includes"

    return (
        <>
            <Hero data={HeroData} />
            <BikeSlider BikesData={BikesData} />
            <RentalBike data={BikesOnRent} />
            <SectionData data={sectionData} />
            <WhyJojoBikes WhyJojoBikesData={whyJojoBikes} title={title} />
        </>
    )
}

export default BikeRentInJaipur