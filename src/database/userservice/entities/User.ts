import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "userservice" })
export class User {

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;
}
