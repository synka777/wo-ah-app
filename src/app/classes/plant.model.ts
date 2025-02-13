export class Plant {
  id: number;
  isFertilized: boolean = false;
  isRepotted: boolean = false;
  lastRepotted: Date;

  constructor(
    public name: string,
    public nickname: string,
    public species: string,
    public lastWatered: Date,
    public lastFertilized: Date,
    public note: string,
    public location: any
  ) {
    this.id = Math.floor(Math.random() * 1000);
    this.lastRepotted = new Date();
  }

  waterPlant() {
    this.lastWatered = new Date();
  }

  fertilizePlant() {
    this.isFertilized = true;
    this.lastFertilized = new Date();
  }

  repottedPlant() {
    this.isRepotted = true;
    this.lastRepotted = new Date();
  }
}