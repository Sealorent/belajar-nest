import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("key", { schema: "userservice" })
export class Key {
  @PrimaryColumn({ type: "int", generated: "increment"})
  id: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("varchar", { name: "token_id", length: 255 })
  tokenId: string;

  @Column("tinyint", { name: "status" })
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
    default: () => "'System'",
  })
  updatedBy: string;
}
