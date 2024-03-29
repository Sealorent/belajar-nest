import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email", ["email"], { unique: true })
@Index("uid", ["uid"], {})
@Entity("users", { schema: "UserDB_KIMO" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", nullable: true, length: 100 })
  uid: string | null;

  @Column("varchar", { name: "google_id", nullable: true, length: 100 })
  googleId: string | null;

  @Column("varchar", { name: "email", unique: true, length: 255 })
  email: string;

  @Column("varchar", { name: "randompass", length: 255 })
  randompass: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "username", nullable: true, length: 255 })
  username: string | null;

  @Column("varchar", { name: "gender", nullable: true, length: 100 })
  gender: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 50 })
  phone: string | null;

  @Column("varchar", { name: "phone_parent", nullable: true, length: 50 })
  phoneParent: string | null;

  @Column("varchar", { name: "province", nullable: true, length: 100 })
  province: string | null;

  @Column("varchar", { name: "regency", nullable: true, length: 100 })
  regency: string | null;

  @Column("varchar", { name: "subdistrict", nullable: true, length: 100 })
  subdistrict: string | null;

  @Column("varchar", { name: "district", nullable: true, length: 100 })
  district: string | null;

  @Column("varchar", { name: "nik", nullable: true, length: 50 })
  nik: string | null;

  @Column("date", { name: "birth_date", nullable: true })
  birthDate: string | null;

  @Column("varchar", { name: "birth_place_city", nullable: true, length: 200 })
  birthPlaceCity: string | null;

  @Column("varchar", {
    name: "birth_place_province",
    nullable: true,
    length: 200,
  })
  birthPlaceProvince: string | null;

  @Column("longtext", { name: "address", nullable: true })
  address: string | null;

  @Column("varchar", { name: "img_url", nullable: true, length: 255 })
  imgUrl: string | null;

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
