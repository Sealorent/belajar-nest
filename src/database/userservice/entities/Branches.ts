import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uid", ["branchUid"], {})
@Entity("branches", { schema: "userservice" })
export class Branches {
  @PrimaryGeneratedColumn({ type: "int", name: "branch_id" })
  branchId: number;

  @Column("varchar", { name: "branch_uid", length: 50 })
  branchUid: string;

  @Column("varchar", { name: "code", length: 100 })
  code: string;

  @Column("varchar", { name: "name_branch", length: 100 })
  nameBranch: string;

  @Column("varchar", { name: "img_url", nullable: true, length: 255 })
  imgUrl: string | null;

  @Column("tinyint", { name: "status", default: () => "'1'" })
  status: number;

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
    length: 125,
    default: () => "'system'",
  })
  updatedBy: string;
}
