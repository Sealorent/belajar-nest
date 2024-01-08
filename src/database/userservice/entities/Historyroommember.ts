import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("historyroommember", { schema: "userservice" })
export class Historyroommember {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 200 })
  uid: string;

  @Column("int", { name: "regcode_id" })
  regcodeId: number;

  @Column("int", { name: "building_id" })
  buildingId: number;

  @Column("int", { name: "room_id" })
  roomId: number;

  @Column("varchar", { name: "name_room", length: 200 })
  nameRoom: string;

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

  @Column("varchar", { name: "updated_by", length: 255 })
  updatedBy: string;
}
