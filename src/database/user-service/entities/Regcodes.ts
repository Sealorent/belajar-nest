import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uid", ["uid"], {})
@Entity("regcodes", { schema: "UserDB_KIMO" })
export class Regcodes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 100 })
  uid: string;

  @Column("int", { name: "member_id" })
  memberId: number;

  @Column("varchar", { name: "noreg", length: 50 })
  noreg: string;

  @Column("date", { name: "periode" })
  periode: string;

  @Column("varchar", { name: "branch_id", nullable: true, length: 100 })
  branchId: string | null;

  @Column("int", { name: "building_id", nullable: true })
  buildingId: number | null;

  @Column("int", { name: "room_id", nullable: true })
  roomId: number | null;

  @Column("varchar", { name: "name_room", nullable: true, length: 100 })
  nameRoom: string | null;

  @Column("varchar", { name: "parent_phone", length: 50 })
  parentPhone: string;

  @Column("varchar", { name: "course_name", length: 255 })
  courseName: string;

  @Column("date", { name: "courseEndDate" })
  courseEndDate: string;

  @Column("varchar", { name: "status_member", length: 100 })
  statusMember: string;

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
