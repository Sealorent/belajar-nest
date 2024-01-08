import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("regencies", { schema: "registrationservice" })
export class Regencies {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 100 })
  uid: string;

  @Column("varchar", { name: "code", length: 20 })
  code: string;

  @Column("varchar", { name: "code_province", length: 20 })
  codeProvince: string;

  @Column("varchar", { name: "name", length: 255 })
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
