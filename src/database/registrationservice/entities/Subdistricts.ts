import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("subdistricts", { schema: "registrationservice" })
export class Subdistricts {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 100 })
  uid: string;

  @Column("varchar", { name: "code", length: 30 })
  code: string;

  @Column("varchar", { name: "code_regency", length: 20 })
  codeRegency: string;

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
