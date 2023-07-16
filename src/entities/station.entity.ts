import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

// En yakın istasyon burada yer alır.

@Entity("station")
export class Station {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    lat: string

    @Column()
    lon: string

    @Column()
    rotation: string

    @CreateDateColumn()
    createdAt: Date
}