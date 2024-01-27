import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uid", ["uid"], {})
@Entity("complaints", { schema: "UserDB_KIMO" })
export class Complaints {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 50 })
  uid: string;

  @Column("varchar", { name: "user_uid", length: 100 })
  userUid: string;

  @Column("varchar", { name: "noreg", nullable: true, length: 100 })
  noreg: string | null;

  @Column("int", { name: "branch_id", default: () => "'0'" })
  branchId: number;

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
