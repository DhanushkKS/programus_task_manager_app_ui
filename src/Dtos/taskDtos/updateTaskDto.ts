export default class UpdateTaskDto {
  private _id: number;
  private _title: string;
  private _description: string;
  private _dueDate: Date;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
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

  constructor(id: number, title: string, description: string, dueDate: Date) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
  }
}
