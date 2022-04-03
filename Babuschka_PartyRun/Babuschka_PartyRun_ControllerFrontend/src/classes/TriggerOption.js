export default class TriggerOption {
  static Shake = new TriggerOption("shake");
  static Touch = new TriggerOption("touch");
  static Voice = new TriggerOption("voice");

  constructor(option) {
    this.option = option;
  }
}
