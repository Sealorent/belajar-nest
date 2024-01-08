import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uid", ["uid"], {})
@Entity("permissionletters", { schema: "userservice" })
export class Permissionletters {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 100 })
  uid: string;

  @Column("varchar", { name: "noreg", length: 20 })
  noreg: string;

  @Column("varchar", { name: "class_main", length: 30 })
  classMain: string;

  @Column("int", { name: "tutorcamp_id" })
  tutorcampId: number;

  @Column("varchar", { name: "destination", length: 200 })
  destination: string;

  @Column("datetime", { name: "departure_date" })
  departureDate: Date;

  @Column("datetime", { name: "return_date" })
  returnDate: Date;

  @Column("text", { name: "reason" })
  reason: string;

  @Column("varchar", { name: "parental_permission", length: 255 })
  parentalPermission: string;

  @Column("varchar", { name: "status", length: 50, default: () => "'waiting'" })
  status: string;

  @Column("varchar", {
    name: "updated_by",
    length: 100,
    default: () => "'system'",
  })
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
