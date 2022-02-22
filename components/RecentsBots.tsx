import type { NextPage, NextPageContext } from 'next';
import { BotCard } from './cards/BotCard';
import React from 'react';

interface Props {
    userAgent?: string;
}

export default class RecentsBots extends React.Component {
    state = {
        bots: [
            { id: 0, name: 'LunarBot', servers: '167', invite: 'https://usbo.ml/', category: 'Utility', description: 'Official bot of LunarBots so many peapople likes my bot because it most be' },
            { id: 1, name: 'LunarBot', servers: '167', invite: 'https://usbo.ml/', category: 'Utility', description: 'Official bot of LunarBots' },
            { id: 2, name: 'LunarBot', servers: '167', invite: 'https://usbo.ml/', category: 'Utility', description: 'Official bot of LunarBots' },
            { id: 3, name: 'LunarBot', servers: '167', invite: 'https://usbo.ml/', category: 'Utility', description: 'Official bot of LunarBots' },
            { id: 4, name: 'LunarBot', servers: '167', invite: 'https://usbo.ml/', category: 'Utility', description: 'Official bot of LunarBots' },
            { id: 5, name: 'LunarBot', servers: '167', invite: 'https://usbo.ml/', category: 'Utility', description: 'Official bot of LunarBots' },
        
        ]
    }
    render() {
        const allbots = this.state.bots.map(({ 
            id,
            name,
            servers,
            invite,
            category,
            description
        }: 
        {
            id: number;
            name: string;
            servers: string;
            invite: string;
            category: string;
            description: string;
        }) => (
            <>
            <BotCard
                id={id}
                name={name} 
                servers={servers} 
                invite={invite}
                category={category}
                description={description}
            />
            </>
        ))
        return(
            <>
            <section className="hero-section">
                <div className="card-grid">
                    {allbots}
                </div>
            </section>
            </>
        );
    }
  }