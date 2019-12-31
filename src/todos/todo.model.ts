import { ApiProperty } from '@nestjs/swagger';

export default class Todo {
    @ApiProperty()
    public id: number;

    @ApiProperty()
    public name: string;

    @ApiProperty()
    public completed: boolean;

    @ApiProperty()
    public dateCompleted: Date;
}
