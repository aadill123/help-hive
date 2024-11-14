export type TSelect<T> = { [k in keyof T]?: true };

// export type TEnumerable<T> = T | Array<T>;
export type TEnumerable<T> = Array<T>;

export type TSortType<T = any> = { [k in keyof T]?: TSortOrder };

export type TSortOrder = 'asc' | 'desc';

export type TGroupByType<T = any> = [keyof T];

export type TQueryMode = 'default' | 'insensitive';

export type TBoolFilterInput = {
  equals?: boolean;
  not?: TBoolFilterInput | boolean;
};

export type TStringFilterInput = {
  equals?: string;
  in?: TEnumerable<string>;
  notIn?: TEnumerable<string>;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: TQueryMode;
  // not?: Omit<TStringFilterInput, 'mode'> | string;
  not?: Omit<TStringFilterInput, 'mode' | 'not'>;
};

export type TStringNullableFilterInput = {
  equals?: string | null;
  in?: TEnumerable<string> | null;
  notIn?: TEnumerable<string> | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: TQueryMode;
  not?: Omit<TStringNullableFilterInput, 'mode'> | string | null;
};

export type TIntFilterInput = {
  in?: TEnumerable<number>;
  notIn?: TEnumerable<number>;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  mode?: TQueryMode;
};

export type TIntNullableFilterInput = {
  in?: TEnumerable<number> | null;
  notIn?: TEnumerable<number> | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  mode?: TQueryMode;
};

export type TFloatFilterInput = {
  in?: TEnumerable<number>;
  notIn?: TEnumerable<number>;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  mode?: TQueryMode;
};

export type TFloatNullableFilterInput = {
  in?: TEnumerable<number> | null;
  notIn?: TEnumerable<number> | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  mode?: TQueryMode;
};

export type TDateTimeFilterInput = {
  // equals?: Date | string;
  equals?: Date;
  // in?: TEnumerable<Date> | TEnumerable<string>;
  in?: TEnumerable<Date>;
  // notIn?: TEnumerable<Date> | TEnumerable<string>;
  notIn?: TEnumerable<Date>;
  // lt?: Date | string;
  lt?: Date;
  // lte?: Date | string;
  lte?: Date;
  // gt?: Date | string;
  gt?: Date;
  // gte?: Date | string;
  gte?: Date;
  // not?: TDateTimeFilterInput | Date | string;
  not?: Omit<TDateTimeFilterInput, 'not'>;
};

export type TDateTimeNullableFilterInput = {
  equals?: Date | string | null;
  in?: TEnumerable<Date> | TEnumerable<string> | null;
  notIn?: TEnumerable<Date> | TEnumerable<string> | null;
  lt?: Date | string;
  lte?: Date | string;
  gt?: Date | string;
  gte?: Date | string;
  not?: TDateTimeNullableFilterInput | Date | string | null;
};

export type TEnumFilterInput<T> = {
  equals?: T;
  in?: TEnumerable<T>;
  notIn?: TEnumerable<T>;
  not?: TEnumFilterInput<T> | T;
};

export type TListFilterInput<T> = {
  equals?: TEnumerable<T>;
  has?: T;
  hasEvery?: TEnumerable<T>;
  hasSome?: TEnumerable<T>;
  isEmpty?: boolean;
};

export type TPaginationInput = {
  page: number;
  docsByPage: number;
};

export type TPaginationDto = {
  skip: number;
  take: number;
};
