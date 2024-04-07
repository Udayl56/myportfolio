import React from 'react';

import { Contact } from './Contact';
import { Work } from './Work';
import { AboutCard } from './AboutCard'


export function Home() {
    return (

        <div className="container   pb-4  "   >
            <AboutCard />
            <Work />
            <Contact />
        </div>





    );
}