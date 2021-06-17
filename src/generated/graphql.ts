export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export class Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  FileUpload: any;
  Upload: any;
};


export enum ICacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export class IFile {
  id: Scalars['ID'];
  filename: Scalars['String'];
};


export class IMutation {
  _?: Maybe<Scalars['String']>;
  uploadFile: IFile;
};


export class IMutationUploadFileArgs {
  input?: Maybe<IUploadFileInput>;
};

export class IQuery {
  _?: Maybe<Scalars['String']>;
};

export class ISubscription {
  _?: Maybe<Scalars['String']>;
};


export class IUploadFileInput {
  file?: Maybe<Scalars['FileUpload']>;
};
