
'use client';

import { Accordion } from 'flowbite-react';
export default function FAQ() {
    return (
        <section className="my-10 md:w-2/4 w-full px-5 md:px-0 mx-auto">
            <h1 className="text-3xl text-center my-10">Frequently asked questions</h1>
            <Accordion >
                <Accordion.Panel >
                    <Accordion.Title > Is there a minimum amount of orders I need to have?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            We help people from 1 order per day! Whether you are a beginner or an expert, everyone is welcome at e-Com Rebels</p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel  >
                    <Accordion.Title>How much do I need to pay for the platform?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">

                            NOTHING! The e-Com Rebels platform is completely free. You only pay the product & shipping fee of the orders you receive. NO hidden costs!
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel  >
                    <Accordion.Title> To which countries can you ship?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">

                            e-Com Rebels ships worldwide. Whether you sell in Europe, the Americas, Asia, or any other continent, we get the order to your customer.

                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel  >
                    <Accordion.Title>How can you ensure quality products?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">

                            Are your current suppliers/agents (on the e-Com Rebels platform) not performing as well due to for example, holidays or busyness? Then easily switch to another supplier with good statistics, choice enough. We currently work with 5 premium Chinese suppliers.</p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel  >
                    <Accordion.Title>Why should I work with e-Com Rebels?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">

                            e-Com Rebels is not a simple fulfillment service. We stand for a lot more than that. We guide e-commerce entrepreneurs A-Z in setting up and thriving towards a healthy, successful business. Next to our group of premium Chinese suppliers, we’ve created a community of like-minded e-commerce entrepreneurs that all want the same thing: get to the e-commerce top!
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>

            </Accordion>
        </section>
    );
}
