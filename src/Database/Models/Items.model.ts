// item.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './Base.model';

@Entity({ name: 'item' })
export class ItemEntity extends BaseEntity {

  @Column({ type: 'varchar', length: 300 })
  name: string;

  

  @Column({ type: 'varchar', length: 300 })
  description: string;
}