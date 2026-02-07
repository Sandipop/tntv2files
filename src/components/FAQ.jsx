import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
    return (
        <div
            className={`border border-white/5 mb-4 rounded-2xl bg-white/5 overflow-hidden transition-all duration-300 hover:bg-white/[0.07] ${isOpen ? 'bg-white/[0.08] border-white/10 shadow-lg shadow-blue-900/5' : ''}`}
        >
            <button
                onClick={toggle}
                className="w-full py-6 px-6 md:px-8 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                    {question}
                </span>
                <span className={`ml-6 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-white/10 ${isOpen ? 'rotate-45 bg-blue-500/20 border-blue-500/30' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-blue-400' : 'text-gray-400 group-hover:text-white'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </span>
            </button>
            <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed text-base md:text-lg border-t border-white/5 pt-4 mt-2">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What does unlimited design services mean?",
            answer: "Our goal is to address most of the requests within two business days, although the timeline may vary based on the complexity and urgency of your specific needs. Rest assured, we'll always keep you informed every step of the way and when your designs will be delivered."
        },
        {
            question: "What types of projects do you work on?",
            answer: "We specialize in enhancing existing products and apps. By applying UX principles and leveraging valuable user feedback, we help you optimize your product's performance and drive key metrics."
        },
        {
            question: "I need my designs on an urgent basis. Can you help?",
            answer: "Absolutely! We understand that some projects are time-sensitive. We offer expedited pathways for urgent requests. When submitting your task, just mark it as 'high priority' and our team will adjust the workflow to accommodate your specific timeline."
        },
        {
            question: "What if I want to cancel my service with you?",
            answer: "We believe in flexibility. You can pause or cancel your subscription at any time directly from your dashboard. There are no locking contracts, hidden fees, or cancellation charges. We prefer to earn your business with quality work every single month."
        },
        {
            question: "What is your typical turnaround time for design projects?",
            answer: "We prioritize efficiency and aim to complete most design projects within a few days. The timeline can be adjusted to meet your specific needs. We'll provide regular updates on the project's status."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="bg-[#060010] text-white py-24 px-4 relative overflow-hidden" id="faq">
            {/* Background ambients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <span className="text-blue-400 font-medium tracking-wider uppercase mb-3 block">Common Questions</span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white max-w-3xl">
                        Got questions?
                        We've got answers
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl">
                        Everything you need to know about our process, billing, and deliverables. Can't find the answer you're looking for? Feel free to contact us.
                    </p>
                </div>

                <div className="max-w-full mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            toggle={() => toggleFAQ(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
