import React from 'react';
import NextHero from '../components/NextHero.jsx';

const TermsConditions = () => {
    return (
        <div className='bg-[#060010] min-h-screen text-gray-300 pb-20'>
            <NextHero
                title="T&C"
                subtext="Please read these terms and conditions carefully before using our services."
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-20 relative z-10">
                <div className="space-y-20">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                        <p className="leading-relaxed text-gray-400">
                            Welcome to Tagntarget. By accessing or using our website and services, you agree to be bound by these Terms and Conditions and our Privacy Policy.
                            If you disagree with any part of the terms, then you may not access the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
                        <p className="leading-relaxed text-gray-400">
                            The Service and its original content (excluding Content provided by you or other users), features and functionality are and will remain the exclusive property of Tagntarget and its licensors.
                            The Service is protected by copyright, trademark, and other laws of both the United Kingdom and foreign countries.
                            Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Tagntarget.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. User Obligations</h2>
                        <p className="leading-relaxed text-gray-400 mb-4">
                            By using our services, you agree not to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-400">
                            <li>Use the Service for any illegal purpose or in violation of any local, state, national, or international law.</li>
                            <li>Harass, threaten, demean, embarrass, or otherwise harm any other user of the Service.</li>
                            <li>Interfere with security-related features of the Service.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                        <p className="leading-relaxed text-gray-400">
                            In no event shall Tagntarget, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
                        <p className="leading-relaxed text-gray-400">
                            These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
                            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
                        <p className="leading-relaxed text-gray-400">
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
