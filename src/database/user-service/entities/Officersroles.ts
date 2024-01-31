import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uid", ["uid"], {})
@Entity("officersroles", { schema: "UserDB_KIMO" })
export class Officersroles {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 50 })
  uid: string;

  @Column("int", { name: "officer_id" })
  officerId: number;

  @Column("int", { name: "role_id" })
  roleId: number;

  @Column("int", { name: "branch_id" })
  branchId: number;

  @Column("varchar", { name: "name_branch", length: 30 })
  nameBranch: string;

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
