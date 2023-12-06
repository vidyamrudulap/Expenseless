import BlogNewsletter from '../blog/BlogNewsletter';
import HaveQuestions from '../pricing/HaveQuestions';
import './terms.css'

const Terms = () => {
    return (
        <main className="terms">
            <article className="terms-content">
                <h2>Terms of Service</h2>
                <p>
                    These Terms of Service ("Terms") govern your use of Expenseless's website, products, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. Please read these Terms carefully before using our Services.


                    By using our Services, you agree to comply with these Terms and any additional guidelines or rules provided by us. You agree that you will not:

                    - Use the Services for any illegal or unauthorized purpose.
                    - Violate any laws in your jurisdiction while using our Services.
                    - Use the Services to transmit any viruses, malware, or other types of malicious code.
                    - Attempt to gain unauthorized access to any part of the Services or systems connected to the Services.

                    The Services and its original content, features, and functionality are owned by Expenseless and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You agree not to copy, modify, distribute, reproduce, or sell any part of our Services without prior written consent from us.

                    Your use of our Services is also subject to our Privacy Policy. By using our Services, you consent to the collection, use, and sharing of information as described in the Privacy Policy.


                    Our Services are provided on an "as is" and "as available" basis. WE makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.


                    In no event shall Expenseless, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your use of our Services.


                    Expenseless reserves the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes. Your continued use of the Services after any modifications to these Terms constitutes acceptance of those changes.


                    These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.


                    If you have any questions about these Terms, please contact us at 000.
                </p>
            </article>
            <article>
                <BlogNewsletter />
                <HaveQuestions />

            </article>
        </main>
    )
}

export default Terms;