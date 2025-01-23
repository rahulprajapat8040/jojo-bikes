'use client'

export default function TermsCondition() {
    const otherTerms = [
        'Our office timings are from 9 am to 8 pm. All bookings fall within this time period and no pick-ups or drop-offs can be scheduled before 9 am or after 8 pm.',
        'Two-wheeler bookings are subject to availability. JoJo Travel-Reserves the right to cancel any booking if deemed necessary.',
        'We provide Two Helmets per two-wheeler on rent as complimentary and they have to be returned without any damages during the drop.',
        'Rider should respect and follow Traffic rules and regulations. All Challans issued due to rider negligence need to be paid in full to the penalizing authority.',
        'Rider will ensure proper care of keys and other properties of JoJo Travel If Loss or damage will attract charges.',
        'Rider will park vehicle in appropriate parking areas. Rider is liable to pay a penalty of Rs 700 in case of tow away or confiscation of bike inaddition to the Challan amount levied by Traffic Police.',
        'Driving under the influence of Alcohol/Drugs is strictly prohibited. JoJo Travel will not be responsible to compensate for any mishaps and their consequences in such cases. The customer will be liable to pay for all damages to the vendor for the same.',
        'Customer has to drop the bike at the same location from where it was picked up. No requests will be accommodated for a change in the drop location.',
        'In case a customer feels that they will be late for the drop, they should call the Office Contact Number or customer care and ask for a trip extension. Extensions are subject to availability.',
        'The Pick-up date, time and location cannot be changed once a booking is confirmed.',
        'If a rider violates any traffic rules and regulations, Eg. Over-speeding or driving drunk, they will alone be responsible for all damages, liabilities and fines.'
    ];

    const rentalPolicies = [
        'The two-wheeler needs to be returned at the specified Date and Time as mentioned A delay of more than 15 minutes without intimating the customer care (On Call) or executive will attract a penalty of Rs 100/hr as well as the standard hourly charges.',
        'The customer is not authorized to lend the two-wheeler to any person without permission of JoJo Travel In such cases we will need to verify the documents of the additional rider before starting the trip. Failure to do so would attract a penalty of Rs. 1000.',
        'The rented vehicles should not be used in any event Eg. Rallies, Racing purpose, Stunts, Goods Transportation or to tow any vehicle.',
        'In case of minor damages to the helmet, the customer is liable to pay Rs.200/helmet and in case of major damage or loss of the helmet, the customer is liable to pay a fine of Rs. 800.',
        'The vehicle speeds are tracked and monitored remotely through GPS devices to ensure safety of all JoJo Bikes Riders. For every Over-speeding beyond speed limit there will be a fine of Rs 100 per alert(Speed limits are, 100-149 CC Bikes – 70 KMPH).'
    ];

    const accidentTerms = [
        'In case of damage to the two-wheeler on rent due to accident/mishandling/carelessness, appropriate charges will be calculated by the vendor and the rider is liable to pay the same to the vendor along with the daily tariff until the bike is ready for renting again.',
        'As per Co\'s policy we don\'t claim any damages below Rs. 5000.00 from the insurance co. Hence rider has to bear the amount in full up to Rs.5000.00 along with the daily tariff until the bike is ready for renting again.',
        'In case of major damages, the Rider is liable to pay, in full, the amount of repair Plus 7 days tariff of the bike, including incidental charges if any. After settlement of insurance claim the claim amount will be credited to Rider\'s Account.',
        'In case of Total loss, the Rider is liable to pay, in full, the amount of new two-wheeler Plus Cost of Registration and Insurance Plus 7 days tariff of the bike including incidental charges if any, After settlement of insurance claim the claim amount will be credited to Rider\'s Account.',
        'In case of theft, immediately the Rider is liable to pay, in full, the amount of new two-wheeler Plus Cost of Registration and Insurance Plus 7 days tariff of the bike, including incidental charges if any. After settlement of insurance claim the claim amount will be credited to Rider\'s Account.'
    ];

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <h1 className="text-3xl font-bold text-center text-white mb-8">
                    Terms and Conditions
                </h1>

                <section className="bg-gradient-to-br from-gray-700 to-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 text-white">(A) Documentation</h2>
                    <p className="text-gray-200 mb-4">
                        The documents mentioned below need to be verified, in original, for each rider.
                    </p>
                    <ul className="list-disc pl-6 text-gray-200 space-y-2">
                        <li>Document 1: Driving License</li>
                        <li>Document 2: Passport, PAN, Aadhar Card, Corporate ID card, ID card issued to any Govt. employee (Any one of these).</li>
                    </ul>
                    <p className="mt-4 text-gray-200 italic">
                        *Document 2 will be deposited by the customer at the time of pickup and it will be returned during drop off. Failure to furnish the documents will lead to the order being cancelled. No rent refund would be issued in such cases.
                    </p>
                </section>

                <section className="bg-gradient-to-br from-gray-700 to-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 text-white">(B) Other Terms</h2>
                    <ul className="list-disc pl-6 text-gray-200 space-y-2">
                        {otherTerms.map((term, index) => (
                            <li key={index}>{term}</li>
                        ))}
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-gray-700 to-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 text-white">(C) Rental Policy</h2>
                    <ul className="list-disc pl-6 text-gray-200 space-y-2">
                        {rentalPolicies.map((policy, index) => (
                            <li key={index}>{policy}</li>
                        ))}
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-gray-700 to-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 text-white">(D) In Case of Accident - Terms and Conditions</h2>
                    <ul className="list-disc pl-6 text-gray-200 space-y-2">
                        {accidentTerms.map((term, index) => (
                            <li key={index}>{term}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}
