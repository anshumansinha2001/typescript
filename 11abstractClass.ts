abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("sepia");
  }
  getReelTime(): number {
    // some complec claculation
    return 8;
  }
}

const as = new Instagram("", "", 3);
as.getReelTime();
