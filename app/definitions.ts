// This file contains type definitions for data.
// It describes the shape of the data, and what data type each property should accept.
export type Hero = {
    id: number;
    name: string;
}

export type HeroNode = {
    name: string,
    height: string,
    mass: string,
    id: string,
    birth_year: string,
}

export type MovieNodeData = {
    title: string,
    producer: string,
    episode_id: string,
    opening_crawl: string
}

export type StarshipNodeData = {
    name: string,
    model: string,
    starship_class: string,
}

export type FlowNodes = {
    id: string;
    type: string;
    data: {
        name: string;
        height: string;
        mass: string;
        id: string;
        birth_year: string;
    };
    position: {
        x: number;
        y: number;
    };
} | {
    id: string;
    type: string;
    data: {
        id: never;
    };
    position: {
        x: number;
        y: number;
    };
}

export type FlowEdges = {
    id: string;
    source: string;
    target: string;
    type: string;
}