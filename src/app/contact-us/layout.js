export const metadata = {
    title: 'Contact Us - Jojo Travel Bike Rental Jaipur',
    description: 'Get in touch with Jojo Travel for bike and scooty rentals in Jaipur. Contact us via phone, WhatsApp, or email for inquiries about two-wheeler rentals and services.',
    keywords: 'contact jojo travel, bike rental contact jaipur, scooty rental contact, jojo travel phone number, bike rental booking jaipur',
    openGraph: {
        title: 'Contact Us | Jojo Travel Bike Rental',
        description: 'Reach out to Jojo Travel for all your bike and scooty rental needs in Jaipur. Easy booking and instant support available.',
        type: 'website',
        url: 'https://jojobikes.com/contact-us',
        images: [
            {
                url: '/assets/jojo-bike-og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Contact Jojo Bikes Rental'
            }
        ],
        locale: 'en_IN',
        siteName: 'Jojo Travel'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Us - Jojo Travel Bike Rental',
        description: 'Contact Jojo Travel for bike and scooty rentals in Jaipur. Quick response guaranteed.',
        images: ['/assets/jojo-bike-og-image.jpg'],
    },
    alternates: {
        canonical: 'https://jojobikes.com/contact-us'
    }
}

export default function Layout({ children }) {
    return children;
}
