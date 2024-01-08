import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity("tokens", { schema: "userservice" })
export class Tokens {
  
  @PrimaryColumn({ type: "varchar", length: 255, generated: "uuid" })
  id: string;


  @Column("varchar", { name: "user_uid", length: 50 })
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
    length: 255,
    default: () => "'system'",
  })
  updatedBy: string;
}
