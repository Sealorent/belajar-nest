import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("history_payments", { schema: "registrationservice" })
export class HistoryPayments {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 200 })
  uid: string;

  @Column("int", { name: "id_transaction" })
  idTransaction: number;

  @Column("int", { name: "id_merchant", nullable: true })
  idMerchant: number | null;

  @Column("varchar", { name: "bill_payment", nullable: true, length: 100 })
  billPayment: string | null;

  @Column("varchar", { name: "status", length: 100 })
  status: string;

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
