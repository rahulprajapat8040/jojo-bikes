import BikeSlider from "@/components/bike-rent/BikeSlider"
import Hero from "@/components/bike-rent/Hero"
import FaqsData from "@/components/common/Faqs"
import RentalBike from "@/components/common/RentalBike"
import SectionData from "@/components/common/SectionData"

export const metadata = {
    title: 'Bike Rent in Jaipur | Royal Enfield, KTM & Premium Bikes - JOJO Travel',
    description: 'Rent premium bikes in Jaipur including Royal Enfield, KTM Duke, Bullet, and Harley Davidson. 24/7 support, doorstep delivery, and competitive prices for motorcycle rentals.',
    keywords: 'bike rent in jaipur, royal enfield on rent in jaipur, bullet on rent in jaipur, ktm bike on rent in jaipur, harley davidson on rent in jaipur, bike rental jaipur, motorcycle rental jaipur, bike hire jaipur, rent bike jaipur',
    openGraph: {
        title: 'Premium Bike Rentals in Jaipur | JOJO Travel',
        description: 'Choose from Royal Enfield, KTM, Bullet & Harley Davidson bikes for rent in Jaipur. Best rates, well-maintained bikes, and hassle-free booking.',
        type: 'website',
        url: 'https://jojobikes.com/bike-rent-in-jaipur',
        images: [
            {
                url: '/assets/bike-rent-og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Premium Bikes for Rent in Jaipur'
            }
        ],
        locale: 'en_IN',
        siteName: 'JOJO Travel'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rent Premium Bikes in Jaipur | JOJO Travel',
        description: 'Royal Enfield, KTM, Bullet & Harley Davidson bikes available for rent in Jaipur. Easy booking, 24/7 support.',
        images: ['/assets/bike-rent-og-image.jpg']
    },
    alternates: {
        canonical: 'https://jojobikes.com/bike-rent-in-jaipur'
    }
}

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
        title: 'Bikes On Rent',
        Bikes: [
            {
                id: "1",
                type: "bullet",
                title: "Royal Enfield 350",
                transmission: "Manual",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/bike-on-rent-in-jaipur.png",
            },
            {
                id: "2",
                type: "ktm",
                title: "KTM Duke",
                transmission: "Manual",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/ktm-duke-best-offer.png",
            },
            {
                id: "3",
                type: "sports",
                title: "Yamaha R15",
                transmission: "Manual",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/bike-rent-in-jaipur-near-me.png",
            },
            {
                id: "4",
                type: "ktm",
                title: "KTM 390 Duke",
                transmission: "Manual",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/hire-ktm-bike-on-rent-in-jaipur.png",
            },
            {
                id: "5",
                type: "ktm",
                title: "KTM RC 200",
                transmission: "Manual",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/affordable-ktm-bike-on-rent-in-jaipur.png",
            },
            {
                id: "6",
                type: "ktm",
                title: "KTM 125 Duke",
                transmission: "Manual",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/rent-in-jaipur-ktm-bike.png",
            },
            {
                id: "7",
                type: "harley",
                title: "Harley Davidson Fat Bob",
                transmission: "Manual",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/hire-harley-davidson-bike-on-rent-in-jaipur.png",
            },
            {
                id: "8",
                title: "Harley Davidson Street Bob",
                type: "harley",

                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/affordable-harley-davidson-bike-on-rent-in-jaipur.png",
            },
            {
                id: "9",
                title: "Harley Davidson PAN",
                type: "harley",

                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/bike-on-rent-in-jaipur-harley-davidson.png",
            },
            {
                id: "10",
                title: "Yamaha FZ-Fi ",
                transmission: "Automatic",
                type: "sports",

                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/affordable-two-wheeler-on-rent-in-jaipur.png",
            },
            {
                id: "11",
                title: "Honda Hornet 2.0",
                transmission: "Automatic",
                type: "sports",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/hire-two-wheeler-on-rent-in-jaipur.png",
            },
            {
                id: "12",
                title: "Honda SP 125",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/2-wheeler-on-rent-in-jaipur.png",
            },
            {
                id: "13",
                title: "Bullet Classic x 350",
                type: "bullet",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/hire-bullet-on-rent-in-jaipur.png",
            },
            {
                id: "14",
                title: "Royal Enfield Classic BS6",
                transmission: "Automatic",
                type: "bullet",

                Fuel: "Petrol",
                Passenger: "1",
                image: "/assets/affordable-bullet-on-rent-in-jaipur.png",
            },
            {
                id: "15",
                title: "Royal Enfield Classic 350",
                transmission: "Automatic",
                type: "bullet",

                Fuel: "Petrol",
                Passenger: "2",
                image: "/assets/rent-in-Jaipur-bullet.png",
            },


        ]
    }

    const sectionData = [
        {
            id: 1,
            title: `Travel in Jaipur with a Bike on Rent in Jaipur`,
            description: `
Jaipur is one of the top-rated destinations and hence a lot of tourists visit Pink city to experience its rich heritage. Though the city has many transportation facilities, traveling to Jaipur on bikes is a fun-filling activity in itself. While visiting Jaipur, you get to cross many narrow streets which allow you to explore this beautiful city in a far better way. For all of you who are traveling to Jaipur, and yes do not have any means to travel through those narrow lanes, a Bike on rent in Jaipur from JOJO travel is the best option for you. With bike rent Jaipur we provide amazing and well-maintained services as per your comfort. You can choose your bike for rent according to your preference to explore the culture and traditions of Jaipur. You can find online bike rent in Jaipur at JOJO travel at an affordable price.`
        },
        {
            id: 2,
            title: `Best Offers at JOJO Travels on Bike Rental in Jaipur`,
            description: `Jojo travels provides various best offers for the bike on rent in Jaipur to travel. We provide bike rental in Jaipur to the rider at affordable prices with many offers or discounts to the customer. With the best offers or discounts to the customer, we provide various services such as home delivery, hassle-free booking, services bike, helmet service, and many more at affordable prices. Offering a range of Bike Rental in Jaipur that is easy to ride even on narrow streets of the market, we offer you multiple choices of bikes to choose from like Royal Enfield 350, Yamaha R15 and so many more.`
        },
        {
            id: 3,
            title: `Book Online Bike Rent in Jaipur in an Easy Way`,
            description: `With affordable Rent For Bike In Jaipur at JOJO Travels booking a bike rent Jaipur is now very simple. Our main motive is only customer satisfaction, and for that, we offer exclusive services to make our customers feel special. We offer well-maintained bike on rent in Jaipur and deliver them to your doorstep according to your preference. If you traveling from another city to explore Jaipur then you can also pre-book your bike online before reaching the destination. As we deliver the vehicle to your destination so it will make your travel hassle-free and time-saving. Before booking the bike we also provide various options as per the comfort of the customer to satisfy them. You can easily book an online bike rent in Jaipur by Jojo Travel, save your time, and get many online goings offers. We have experienced or trained staff that will explain everything in an informative manner. You can also search Bike Rent In Jaipur Near Me and find Jojo travels online at your nearby location. `
        },
        {
            id: 4,
            title: `JOJO Travels Offers Premium Range of Bike Rent in Jaipur Sindhi Camp`,
            description: `If you are traveling to Jaipur for visit by bus and looking for Bike rent in Jaipur Sindhi camp. Then choose Jojo travel for Bike Rental in Jaipur. Here we offer with best and most affordable premium rent for a bike in Jaipur to make your trip easy. Our bikes are always in excellent condition and sanitized to provide a smooth and memorable riding experience for a rider. We offer the best premium range of bikes on rent in Jaipur Sindhi Camp. We have various options of bikes with different premium ranges to satisfy the customer. If anyone travels to Jaipur by bus from a different city, they can easily book their bike online before reaching, so our executive will deliver the bike on rent in Jaipur Sindhi Camp.

But If you have no time to pre-book your ride with us then don't worry you can search for bike rent in Jaipur near me and hire Jojo travels for rent bikes in Jaipur. We provide convenient or comfortable Bikes at your desired location to travel at affordable or reasonable prices. `
        },
        {
            id: 5,
            title: `How Can JOJO Travel Help in Choosing the Best Bike for Rent Near You?`,
            description: `The main reason to choose Jojo Travel for Bike Rental in Jaipur is you can easily get the bike at your desired place. You can also book your bike online as per your choice. As we have different variety of bikes, the customer chooses their preferred bike at affordable prices. We provide the bikes in the best condition for customers' easy or fearless rides. If you are thinking to travel to Jaipur by bike then you arrive at the right place as we provide bike for rent in Jaipur by searching Bike Rent In Jaipur Near Me at affordable prices as per the customer's choice. `
        },
        {
            id: 6,
            title: `KTM on Rent in Jaipur to Roam Around Jaipur`,
            description: `

The best way to utilize your time and money at the time of traveling from one place to another in Jaipur is by choosing rental bike. You can comfortably travel through the streets of Pink city with so much fun and adventure. You will realize that you had understood the environment of the great city even more, better by taking a KTM bike for rent in Jaipur. JOJO Travel allows you to choose the best bike on rent to experience the immense pleasure that you are going to feel when you will rove in Pink city with the KTM bike.`
        }
    ]

    const HeroData = {
        videoUrl: '/assets/bike-bg.mp4',
        title: 'Rent a Bike at Jojo Travels'
    }

    const Faqs = [
        {
            qustion: 'Where can i pickup the Bike?',
            answer: 'You have the option to select a pickup location as bike rent in Jaipur near me. You can choose a location when you book your bike.'
        },
        {
            qustion: 'What are the charges for damange to the Bike ?',
            answer: `


i) In the facts of damage to the rented two-wheeler due to accident/abuse/negligence, the provider will charge the corresponding fees and the driver is obliged to pay these to the provider together with the daily rate until the bike is ready for use rent again.

ii) As per Co's policy, we will not claim damages below Rs. 5000/- from insurance. Therefore, the total amount up to Rs. 5000 plus the daily charge shall be borne by the customer until the bike is ready for rent again.

iii) In the facts of major damage, the rider is responsible for paying the repair amount in full plus the 7-day bike fee, including any incidental expenses. After the insurance claim has been settled, the amount of the claim will be credited to the customer's account.

iv) In the fact of a total loss, the driver is obliged to pay in full the amount of the new two-wheeler plus the costs for registration and insurance as well as the 7-day fee for the bike including ancillary costs after the insurance claim has been processed, the amount of the claim will be credited to the customer account.

v) In the facts of theft, the cyclist is immediately obliged to pay the full value of the new two-wheeler plus registration and insurance costs plus 7 days bike fee, including any unforeseen costs. After the insurance claim has been settled, the amount of the claim will be credited to the customer's account.

            `
        },
        {
            qustion: 'What is the speed limit policy for the rented bike of jojo travels ?',
            answer: 'Vehicle speeds are remotely tracked and monitored via GPS devices to ensure the safety of all JOJO bike riders. Any violation of the speed limit will incur a fine of Rs. 100 per warning (speed limits are 100-149 cc bikes- 70 km/h). ',

        },
        {
            qustion : 'How do i pay for my rental bike in jaipur at Jojo Travels ?',
            answer: 'You can pay online using credit/debit cards, e-wallets, cash, or any other payment method. '
        },
        {
            qustion : 'What accessories of Inclusions will get when hiring Jojo travels for bike rent?',
            answer : 'You will get the best service bike with maintenance and a complementary helmet with your rental bike.'
        },
        {
            qustion : 'will Jojo Travels deliver bike rent in jaipur Sindhi Camp ?',
            answer: 'Yes, if you traveling from some other place by bus and you looking to rent a bike, then we provide service of bike delivery at Sindhi camp.'
        },
        {
            qustion : 'How Much does it cost to Bike on rent at Jojo Travels ?',
            answer: 'Jojo travels provides affordable Rent For Bike In Jaipur to the customer with many offers and discounts.'
        },
        {
            qustion: 'Is it possible to ride the Bike OutStation ?',
            answer : 'Yes, it is possible to take a bike ride outstation. '
        }
    ]

    return (
        <>
            <Hero data={HeroData} />
            <BikeSlider BikesData={BikesData} />
            <RentalBike data={BikesOnRent} />
            <FaqsData faqData={Faqs} />
            <SectionData data={sectionData} />
        </>
    )
}

export default BikeRentInJaipur