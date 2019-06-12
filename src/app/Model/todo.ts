export class Todo {
  id: number;
  title: string;
  description: string;
  status: string;

  constructor(
              title: string = '',
              description: string='',
              status: string = '')  {
    this.title = title;
    this.description = description;
    this.status = status;
  }

}
