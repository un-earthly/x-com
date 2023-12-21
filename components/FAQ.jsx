
'use client';

import { Accordion } from 'flowbite-react';
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import { useState } from 'react';
export default function FAQ() {
    return (
        <section className="my-10 w-2/4 mx-auto">
            <h1 className="text-3xl text-center my-10">Frequently asked questions</h1>
            <Accordion >
                <Accordion.Panel >
                    <Accordion.Title > Lorem ipsum dolor?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio deserunt voluptas blanditiis fugiat suscipit autem quasi perferendis unde odit ullam?
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ab quod suscipit voluptates dolore, quas vitae. Aliquam tempora, eos optio culpa architecto iure, cupiditate ipsa facilis inventore fugiat voluptate in.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel  >
                    <Accordion.Title> Lorem ipsum dolor?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio deserunt voluptas blanditiis fugiat suscipit autem quasi perferendis unde odit ullam?
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ab quod suscipit voluptates dolore, quas vitae. Aliquam tempora, eos optio culpa architecto iure, cupiditate ipsa facilis inventore fugiat voluptate in.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel  >
                    <Accordion.Title> Lorem ipsum dolor?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio deserunt voluptas blanditiis fugiat suscipit autem quasi perferendis unde odit ullam?
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ab quod suscipit voluptates dolore, quas vitae. Aliquam tempora, eos optio culpa architecto iure, cupiditate ipsa facilis inventore fugiat voluptate in.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>

            </Accordion>
        </section>
    );
}
