import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


// Tüm duraklar burada yer alır.
@Entity('location')
export class Location {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    mapLat: string

    @Column()
    mapLong: string

    @CreateDateColumn()
    createdAt: Date;
}