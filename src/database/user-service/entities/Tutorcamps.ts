import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uid", ["uid"], {})
@Entity("tutorcamps", { schema: "UserDB_KIMO" })
export class Tutorcamps {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 50 })
  uid: string;

  @Column("int", { name: "officer_id" })
  officerId: number;

  @Column("int", { name: "building_id" })
  buildingId: number;

  @Column("int", { name: "branch_id" })
  branchId: number;

  @Column("tinyint", { name: "status", default: () => "'1'" })
  status: number;

  @Column("varchar", { name: "updated_by", length: 50 })
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
