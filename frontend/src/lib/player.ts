export class Player {
  data: any;
  id: number;
  name: string;
  base?: number;

  constructor(data?: any) {
    this.data = data || {};

    this.id = this.data.id;
    this.name = this.data.name;
    this.base = this.data.base;
  }
}

