import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uid", ["uid"], {})
@Entity("complaintdetails", { schema: "userservice" })
export class Complaintdetails {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 100 })
  uid: string;

  @Column("int", { name: "complain_id" })
  complainId: number;

  @Column("int", { name: "category_id" })
  categoryId: number;

  @Column("varchar", { name: "detail", length: 255 })
  detail: string;

  @Column("varchar", { name: "updated_by", length: 100 })
  updatedBy: string;

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
