export class Image {
  id: string;
  url: string;
  handle: string;

  static mockOne() {
    return {
      id: '002',
      url: 'test.jpg',
      handle: 'ACOADPACDCKPAD14545'
    } as Image;
  }
}
