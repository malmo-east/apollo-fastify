import { BaseEntity, PrimaryColumn, BeforeInsert, BeforeUpdate, Column } from "typeorm";
import { v4 as uuid } from "uuid";

export class CommonEntity extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column("text", { select: false })
    createdAt: string;

    @Column("text", { nullable: true, select: false })
    updatedAt: string;

    @BeforeInsert()
    private createUuid() {
        this.id = uuid();
    }

    @BeforeUpdate()
    public setUpdateDate(): void {
        this.updatedAt = new Date().toLocaleString("ru-RU", {
            timeZone: "Asia/Almaty",
        });
    }
}
