import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("transaction_payments", { schema: "registrationservice" })
export class TransactionPayments {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uid", length: 255 })
  uid: string;

  @Column("varchar", { name: "user_uid", length: 255 })
  userUid: string;

  @Column("varchar", { name: "no_transaction", length: 100 })
  noTransaction: string;

  @Column("int", { name: "id_merchant" })
  idMerchant: number;

  @Column("varchar", { name: "bill_payment", nullable: true, length: 100 })
  billPayment: string | null;

  @Column("varchar", { name: "va_number", nullable: true, length: 25 })
  vaNumber: string | null;

  @Column("date", { name: "exp_date" })
  expDate: string;

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
