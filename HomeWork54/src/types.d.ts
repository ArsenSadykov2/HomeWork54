export interface IBlock {
    hasItem: false | true;
    id: number;
    class: 'block' | 'clicked' | 'win';
}