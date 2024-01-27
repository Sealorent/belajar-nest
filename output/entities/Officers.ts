import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uid", ["uid"], {})
@Entity("officers", { schema: "UserDB_KIMO" })
export class Officers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 50 })
  uid: string;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("varchar", { name: "nip", length: 25 })
  nip: string;

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
