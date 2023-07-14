import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm"
import Lote from "./lote.entity"

@Entity("boletos")
class Boleto {
  @PrimaryGeneratedColumn()
  readonly id: number

  @Column("varchar", { length: 255 })
  nome_sacado: string

  @Column("integer")
  valor: number

  @Column("varchar", { length: 255 })
  linha_digitavel: string

  @Column("boolean", { default: true })
  ativo: boolean

  @CreateDateColumn()
  criado_em: Date

  @ManyToOne(() => Lote, (lote) => lote.boletos)
  lote: Lote
}

export default Boleto
