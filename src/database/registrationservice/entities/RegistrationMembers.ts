import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("registration_members", { schema: "registrationservice" })
export class RegistrationMembers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 255 })
  uid: string;

  @Column("int", { name: "id_transaction" })
  idTransaction: number;

  @Column("varchar", { name: "regcode", length: 100 })
  regcode: string;

  @Column("varchar", { name: "branch", length: 100 })
  branch: string;

  @Column("varchar", { name: "name", length: 150 })
  name: string;

  @Column("varchar", { name: "email", length: 100 })
  email: string;

  @Column("varchar", { name: "gender", length: 10 })
  gender: string;

  @Column("varchar", { name: "education", length: 20 })
  education: string;

  @Column("varchar", { name: "phone", length: 20 })
  phone: string;

  @Column("datetime", { name: "periode" })
  periode: Date;

  @Column("int", { name: "course_id_allin" })
  courseIdAllin: number;

  @Column("varchar", { name: "course", length: 100 })
  course: string;

  @Column("varchar", { name: "course_name", length: 255 })
  courseName: string;

  @Column("varchar", { name: "course_cost", length: 100 })
  courseCost: string;

  @Column("varchar", { name: "cs", length: 50 })
  cs: string;

  @Column("date", { name: "courseStartDate" })
  courseStartDate: string;

  @Column("date", { name: "courseEndDate" })
  courseEndDate: string;

  @Column("varchar", { name: "pickup", nullable: true, length: 10 })
  pickup: string | null;

  @Column("varchar", { name: "pickupLocation", nullable: true, length: 100 })
  pickupLocation: string | null;

  @Column("varchar", { name: "passenger", nullable: true, length: 20 })
  passenger: string | null;

  @Column("varchar", { name: "pickup_cost", nullable: true, length: 100 })
  pickupCost: string | null;

  @Column("varchar", { name: "is_retention", length: 20, default: () => "'0'" })
  isRetention: string;

  @Column("varchar", { name: "voucher", nullable: true, length: 100 })
  voucher: string | null;

  @Column("varchar", { name: "discount_percent", nullable: true, length: 50 })
  discountPercent: string | null;

  @Column("varchar", { name: "discount_nominal", nullable: true, length: 50 })
  discountNominal: string | null;

  @Column("varchar", { name: "discount_total", nullable: true, length: 50 })
  discountTotal: string | null;

  @Column("tinyint", { name: "ac_room", default: () => "'0'" })
  acRoom: number;

  @Column("varchar", {
    name: "ac_room_cost",
    length: 100,
    default: () => "'0'",
  })
  acRoomCost: string;

  @Column("varchar", { name: "down_payment", length: 255 })
  downPayment: string;

  @Column("date", { name: "exp_down_payment" })
  expDownPayment: string;

  @Column("varchar", { name: "final_payment", length: 255 })
  finalPayment: string;

  @Column("varchar", { name: "full_payment", length: 255 })
  fullPayment: string;

  @Column("varchar", { name: "tshirt", nullable: true, length: 10 })
  tshirt: string | null;

  @Column("varchar", { name: "aff", nullable: true, length: 200 })
  aff: string | null;

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
