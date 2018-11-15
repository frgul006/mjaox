export class Tag {
  id: string;
  title: string;

  static mockOne() {
    return {
      id: '001',
      title: 'Test'
    } as Tag;
  }

  static mockMany() {
    return [Tag.mockOne(), Tag.mockOne()];
  }
}
