import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("building_uid", ["buildingUid"], {})
@Entity("buildings", { schema: "userservice" })
export class Buildings {
  @PrimaryGeneratedColumn({ type: "int", name: "building_id" })
  buildingId: number;

  @Column("varchar", { name: "building_uid", length: 50 })
  buildingUid: string;

  @Column("int", { name: "allincamp_id", default: () => "'0'" })
  allincampId: number;

  @Column("int", { name: "branch_id" })
  branchId: number;

  @Column("varchar", { name: "name_building", length: 255 })
  nameBuilding: string;

  @Column("varchar", { name: "category", length: 255 })
  category: string;

  @Column("varchar", {
    name: "gender",
    nullable: true,
    length: 30,
    default: () => "'netral'",
  })
  gender: string | null;

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
