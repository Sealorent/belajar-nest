import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("tokens", { schema: "UserDB_KIMO" })
export class Tokens {
  @PrimaryColumn("varchar", { name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "user_uid", length: 100 })
  userUid: string;

  @Column("varchar", { name: "token_fcm", nullable: true, length: 255 })
  tokenFcm: string | null;

  @Column("date", { name: "exp" })
  exp: string;

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
    length: 100,
    default: () => "'system'",
  })
  updatedBy: string;
}
