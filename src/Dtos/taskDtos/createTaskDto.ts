export default class CreateTaskDto {
  constructor(title: string, description: string, dueDate: Date) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
  }
  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get dueDate(): Date {
    return this._dueDate;
  }

  set dueDate(value: Date) {
    this._dueDate = value;
  }
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  private _title: string;
  private _description: string;
  private _dueDate: Date;
}
