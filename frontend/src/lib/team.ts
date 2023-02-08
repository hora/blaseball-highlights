export class Team {
  data: any;
  id: number;

  constructor(data?: any) {
    if (data === undefined) {
      this.data = {};
    }

    this.id = data?.entity_id || '';
  }
}

