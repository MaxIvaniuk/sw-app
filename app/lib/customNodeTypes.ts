// types for custom react-flow nodes
import { NodeTypes } from "react-flow-renderer";
import HeroCustomNode from "../ui/hero-info/hero-node";
import MovieCustomNode from '../ui/hero-info/movie-node';
import StarshipCustomNode from '../ui/hero-info/starship-node';

export const nodeTypes: NodeTypes = {
    heroCustom: HeroCustomNode,
    movieCustom: MovieCustomNode, 
    starshipCustom: StarshipCustomNode
};