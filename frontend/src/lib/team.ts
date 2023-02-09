export class Team {
  data: any;
  id: number;
  name: string;
  shorthand: string;
  slogan: string;
  emoji: string;
  primaryColor: string;
  secondaryColor: string;

  constructor(data?: any) {
    if (data === undefined) {
      this.data = {};
    } else {
      this.data = data;
    }

    this.id = this.data?.id;
    this.name = this.data?.name;
    this.shorthand = this.data?.shorthand;
    this.slogan = this.data?.slogan;
    this.emoji = this.data?.emoji;
    this.primaryColor = this.data?.primayColor;
    this.secondaryColor = this.data?.secondaryColor;
  }
}

