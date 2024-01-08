import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uid", ["uid"], {})
@Entity("feedbacks", { schema: "userservice" })
export class Feedbacks {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 100 })
  uid: string;

  @Column("varchar", { name: "user_uid", length: 100 })
  userUid: string;

  @Column("varchar", { name: "noreg", nullable: true, length: 50 })
  noreg: string | null;

  @Column("int", { name: "branch_id" })
  branchId: number;

  @Column("longtext", { name: "detail_feed" })
  detailFeed: string;

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

  @Column("varchar", {
    name: "updated_by",
    length: 100,
    default: () => "'system'",
  })
  updatedBy: string;
}
