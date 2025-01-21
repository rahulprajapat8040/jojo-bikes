import Hero from "@/components/about/Hero"
import WhyJojoBikes from "@/components/about/WhyJojoBikes"

export const metadata = {
    title: 'About JOJO Bikes | Best Bike Rental Service in Jaipur',
    description: 'Learn about JOJO Bikes - Jaipur\'s premier bike and Activa rental service. Discover our commitment to affordable, hassle-free transportation solutions.',
    keywords: 'bike rental Jaipur, Activa on rent, scooty rental, two-wheeler rental service'
}

const AboutJojoBikes = () => {
    const HeroData = {
        title: "ABOUT JOJO Bikes",
        para0: "In These days of owning an Activa are long gone. The new Future of booking on the go and renting is here. And it is here to stay. Activa on rent in Jaipur and Bike on rent in Jaipur are the new age passions. JoJo BIkes, a startup created with the vision of making transportation hassle-free, affordable and efficient.",
        para1: 'If You are searching Activa on rent in Jaipur and bike or scotty on rent in Jaipur then JoJo Bikes has been Giving you the best Rental bike or activa in Jaipur. We are now expanding to Rajasthan For Activa and scooty for rent in Jaipur We have range of Activa and bikes, JoJo Travel is committed to customer satisfaction. JOJo Bikes provides Activa on rent in Jaipur, Bieks on rent in Jaipur,',
        para2: 'Monthly scooty and bike rental in jaipur and activa on rent in Jaipur is very reasonable and In ,If You think for Rental bikes “which is the bike rental near me” query would lead you straight to JOJo BIkeswith reasonable prices, we don’t need to hard documentation requirement, and 24X7 servicing makes JoJO Bikes ',
        para3: 'IMonthly JoJo bike rental would enable to Our Guest to Check out the service over a reliable period of time. Not only would it be easy on the Price but it would also make the daily commute hassle-free and consequently save the customer both time and money. ',
        image: '/assets/about-us-side-image.jpg'
    }

    const WhyJojoBikesData = [
        {
            id: 1,
            title: 'Premium Fleet Selection',
            description: 'Choose from our range of well-maintained and sanitized bikes in excellent condition.',
            icons: '🏍️',
            features: ['Sanitized bikes', 'Excellent condition bike', 'Support System']
        },
        {
            id: 2,
            title: 'Doorstep Services',
            description: 'Enjoy convenient pickup, drop, and home delivery services with professional guidance.',
            icons: '🚚',
            features: ['Professional Guidance', 'Pick up and Drop service', 'Home Delivery']
        },
        {
            id: 3,
            title: 'Hassle-free Booking',
            description: 'Easy online booking process with proper documentation and safety equipment provided.',
            icons: '📱',
            features: ['Online Booking', 'Proper Documentation', 'Helmets']
        },
        {
            id: 4,
            title: 'Affordable Pricing',
            description: 'Enjoy competitive rates with transparent pricing. No hidden charges, just straight-forward affordable rentals.',
            icons: '💰',
            features: ['Best price guarantee', 'Special offers', 'Long-term discounts']
        },
        {
            id: 5,
            title: 'Flexible Delivery Options',
            description: 'We offer convenient doorstep delivery and pickup services across Jaipur. Get your bike delivered right where you need it.',
            icons: '🚚',
            features: ['Pick up and Drop service', 'Home Delivery', 'Flexible timing']
        }
    ]

    return (
        <>
            <Hero HeroData={HeroData} />
            <WhyJojoBikes WhyJojoBikesData={WhyJojoBikesData} />
        </>
    )
}

export default AboutJojoBikes