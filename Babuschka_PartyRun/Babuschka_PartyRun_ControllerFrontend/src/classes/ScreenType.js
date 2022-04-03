export default class ScreenType {
  static EnterName = new ScreenType("enterName");
  static RoleSelection = new ScreenType("roleSelection");
  static TriggerSelection = new ScreenType("triggerSelection");
  static Instruction = new ScreenType("instruction");
  static WaitingRoom = new ScreenType("waitingRoom");
  static Gameplay = new ScreenType("gamePlay");
  static Options = new ScreenType("options");
  static Impressum = new ScreenType("impressum");
  static LeaveConfirmation = new ScreenType("leaveConfirmation");
  static Disconnected = new ScreenType("disconnected");

  constructor(type) {
    this.type = type;
  }
}
