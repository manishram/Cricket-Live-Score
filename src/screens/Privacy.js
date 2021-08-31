import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

function AboutUs() {
    return (
        <ScrollView style={styles.container}>
            <Text style={{ fontWeight: '700', alignSelf: 'center' }}>
                Privacy Policy
            </Text>
            <Text>
                We respect the privacy of all parties viewing and others making
                use of this App, and is committed to protect their privacy. What
                we Collect from You
            </Text>
            <Text>
                1. We collect personal data about our Users, firstly to enable
                us to provide our services in connection with the CricScore App
                and secondly to enable us to continually adapt and improve our
                service to meet the interests and wishes of our Users. In doing
                so, we comply with all relevant provisions of the Basic Data
                Protection Ordinance (DSGVO), as well as relevant data
                protection regulations under Swiss law (in particular under the
                DSG).
            </Text>
            <Text>
                2. We use appropriate technical measures to protect your data
                and keep it confidential. The data traffic to our server is
                encrypted with SSL.s
                <Text>Time User Information</Text>
                <Text>
                    To avail certain service on our App, users are required to
                    provide certain information for the registration process
                    namely: -a) your name, b) email address, c) sex, c) credit
                    card or debit card details for Ad Fee App usage, d) password
                    etc. The information collected by the users enables us to
                    improve our application and provide you the most
                    user-friendly experience. All required information us
                    service dependent and we may use the above said user
                    information to, maintain, protect and improve its services
                    and for developing new services. Such information will not
                    be considered as sensitive if it is freely or is furnished
                    under the Right the Information Act, 2005 or any ither Law
                    for the time being in the force. Any personal data collected
                    will be used by us to contact you via phone, SMS or by email
                    for marketing and to deliver certain updates for the
                    services or information you have requested.
                </Text>
                <Text>Data Categories</Text>
                <Text>
                    We process your personal data, which fall under the
                    following data categories:
                </Text>
            </Text>
            <Text>
                User dimension: Type Description Age Text Identifies users by
                six categories: 18-24, 25-34, 35-44, 45-54, 55-64, and 65+. App
                Store Text The store from which the app was downloaded and
                installed. App Version Text The versionName (Android) or the
                Bundle version (iOS). Country Text The country the user resides
                in. Device Brand Text The brand name of the mobile device (e.g.,
                Motorola, LG, or Samsung). Device Category Text The category of
                the mobile device (e.g., mobile or tablet). Device Model Text
                The mobile device model name (e.g., iPhone 5s or SM-J500M).
                First Open Time Number The time (in milliseconds, UTC) at which
                the user first opened the app, rounded up to the next hour.
                Gender Text Identifies users as either male or female. Interests
                Text Lists the interests of the user (e.g., "Arts &
                Entertainment, Games, Sports"). Language Text The language
                setting of the device OS (e.g., en-us or pt-br). New/Established
                N/A New: First opened the app within the last 7 days.
                Established: First opened the app more than 7 days ago. OS
                Version Text The version of the device OS (e.g., 9.3.2 or
                5.1.1). Data Transfer to Third Parties Your personal data will
                be processed exclusively by us and not passed on to third
                parties. Excluded from this is the transmission of credit card
                data to the processing bank institutes/payment service providers
                for the purpose of debiting the purchase price to the transport
                company/forwarding agent commissioned by us for the delivery of
                the goods as well as to our tax consultant for the fulfilment of
                our tax obligations (order processor). These processors provide
                their services and process data exclusively on our behalf and
                within the scope of our express instructions. Under no
                circumstances may they use the data received for their own
                purposes or even transfer them to third parties. Information on
                Legal Remedies You are basically entitled to the rights of
                information, correction, deletion, restriction, data
                transferability and objection. Please contact us for this
                purpose. If you believe that the processing of your data
                violates data protection law or your data protection rights have
                otherwise been violated in any way, you can complain to the
                supervisory authority. Information Security All information
                gathered on our App is securely stored within our controlled
                database. The database is stored on the servers secured behind a
                firewall, access to the server is password protected and
                strictly limited. However as effective as our security measures
                are, no security system is impenetrable. We can not guarantee
                the security of our database, nor can we guarantee that
                information you supply will not be intercepted while being
                transmitted to us over the internet. However, the internet is an
                ever-evolving medium. We may change our privacy policy from time
                to time to incorporate necessary future changes. Of course, our
                use consistent with the policy under which the information was
                collected, regardless of what the new policy may be.
            </Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

export default AboutUs
