export class Player {
  data: any;
  id: number;
  name: string;

  constructor(data?: any) {
    if (data === undefined) {
      this.data = {};
    }

    this.id = this.data?.id;
    this.name = this.data?.name;
  }
}

