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
        id: string|number;
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