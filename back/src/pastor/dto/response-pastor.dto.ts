// src/pastors/dto/response-pastor.dto.ts
import { Devotional } from 'src/devotional/devotional.entity';
import { Sermon } from 'src/sermon/sermon.entity';

export class ResponsePastorDto {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  age: number;
  nid: number;
  account: string;
  bank: string;
  federation: string;
  devotionals: Devotional[];
  sermons: Sermon[];

  constructor(pastor: any) {
    this.id = pastor.id;
    this.name = pastor.name;
    this.email = pastor.email;
    this.phone = pastor.phone;
    this.address = pastor.address;
    this.city = pastor.city;
    this.country = pastor.country;
    this.age = pastor.age;
    this.nid = pastor.nid;
    this.account = pastor.account;
    this.bank = pastor.bank;
    this.federation = pastor.federation;
    this.devotionals = pastor.devotionals || [];
    this.sermons = pastor.sermons || [];
  }
}

