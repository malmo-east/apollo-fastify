import { Entity, Column } from "typeorm";
import { CommonEntity } from "../common";

@Entity("file")
export class FileEntity extends CommonEntity {
    @Column()
    filename: string;
}
