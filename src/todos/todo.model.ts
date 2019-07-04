export default class Todo {
    constructor(
        public id: number,
        public name: string,
        public completed: boolean,
        public dateCompleted: Date
    ) {}
}
