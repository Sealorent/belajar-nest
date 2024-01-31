import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("provinces", { schema: "registrationservice" })
export class Provinces {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 200 })
  uid: string;

  @Column("varchar", { name: "code", length: 20 })
  code: string;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("datetime", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("datetime", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
