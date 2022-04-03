export default class Role {
  static Jump = new Role("jump");
  static ShotCharge = new Role("shotCharge");
  static ShotRelease = new Role("shotRelease");
  static Enemy = new Role("enemy");

  constructor(role) {
    this.role = role;
  }
}
