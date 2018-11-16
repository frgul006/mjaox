export class Upload {
  id: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  handle: string;
  fileName: string;
  mimeType: string;

  static mockOne() {
    return {
      id: 'cjoj18tq5exsb0932igssjx2u',
      status: 'PUBLISHED',
      createdAt: new Date(),
      updatedAt: new Date(),
      handle: 'b97ve50JSCyn01hlMsy9',
      fileName: 'file.zip',
      mimeType: 'application/zip'
    } as Upload;
  }
}
