export const metadata = {
    title: 'Contact Us - Jojo bike rental Bike Rental Jaipur',
    description: 'Get in touch with Jojo bike rental for bike and scooty rentals in Jaipur. Contact us via phone, WhatsApp, or email for inquiries about two-wheeler rentals and services.',
    keywords: 'contact Jojo bike rental, bike rental contact jaipur, scooty rental contact, Jojo bike rental phone number, bike rental booking jaipur',
    openGraph: {
        title: 'Contact Us | Jojo bike rental Bike Rental',
        description: 'Reach out to Jojo bike rental for all your bike and scooty rental needs in Jaipur. Easy booking and instant support available.',
        type: 'website',
        url: 'https://www.jojobikerental.in/contact-us',
        images: [
            {
                url: '/assets/jojo-bike-og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Contact Jojo Bikes Rental'
            }
        ],
        locale: 'en_IN',
        siteName: 'Jojo bike rental'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Us - Jojo bike rental Bike Rental',
        description: 'Contact Jojo bike rental for bike and scooty rentals in Jaipur. Quick response guaranteed.',
        images: ['/assets/jojo-bike-og-image.jpg'],
    },
    alternates: {
        canonical: 'https://www.jojobikerental.in/contact-us'
    }
}

export default function Layout({ children }) {
    return children;
}
