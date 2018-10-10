export interface ICheck {
  text: string;
  checked?: boolean;
}

export class Choice implements ICheck {
  constructor(public text: string, public checked = true) {}
}
