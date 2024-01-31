import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("merchants", { schema: "registrationservice" })
export class Merchants {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 200 })
  uid: string;

  @Column("varchar", { name: "merchant_code", length: 100 })
  merchantCode: string;

  @Column("varchar", { name: "merchant_name", length: 100 })
  merchantName: string;

  @Column("varchar", { name: "admin_fee", length: 100 })
  adminFee: string;

  @Column("varchar", { name: "merchant_logo_url", length: 255 })
  merchantLogoUrl: string;

  @Column("varchar", { name: "merchant_type", length: 100 })
  merchantType: string;

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
