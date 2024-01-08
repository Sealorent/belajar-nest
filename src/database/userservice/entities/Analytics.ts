import { Column, Entity } from "typeorm";

@Entity("analytics", { schema: "userservice" })
export class Analytics {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;
}
