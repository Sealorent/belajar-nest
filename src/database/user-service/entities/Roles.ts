import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uid", ["uid"], {})
@Entity("roles", { schema: "UserDB_KIMO" })
export class Roles {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 50 })
  uid: string;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("tinyint", { name: "branch_access", default: () => "'0'" })
  branchAccess: number;

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
