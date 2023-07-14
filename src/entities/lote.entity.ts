import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm"
import Boleto from "./boleto.entity"

@Entity("lotes")
class Lote {
  @PrimaryGeneratedColumn()
  readonly id: number

  @Column("varchar", { length: 100 })
  nome: string

  @Column("boolean", { default: true })
  ativo: boolean

  @CreateDateColumn()
  criado_em: Date

  @OneToMany(() => Boleto, (boleto) => boleto.lote)
  boletos: Boleto[]
}

export default Lote
