import { ApiModelProperty } from '@nestjs/swagger';

export default class Todo {
    @ApiModelProperty()
    public id: number;

    @ApiModelProperty()
    public name: string;

    @ApiModelProperty()
    public completed: boolean;

    @ApiModelProperty()
    public dateCompleted: Date;
}
