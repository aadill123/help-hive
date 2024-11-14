export class ConflictError extends Error {
  constructor(error: string | Error) {
    super(`Conflict | ${error}`);
  }
}

export const UserNotFoundError = () =>
    new ConflictError(`User not found`);
export const UserAlreadExistError = () =>
    new ConflictError(`User already exists`);
export const UploadImageError = (msg: string) =>
  new ConflictError(`Failed to upload image to bucket | ${msg}`);

export const FalseFormatError = (key: string) =>
  new ConflictError(`False is wrong in key "${key}"`);

export const UUIDFormatError = (key: string) =>
  new ConflictError(`UUID is wrong in key "${key}"`);

export const EmailFormatError = (key: string) =>
  new ConflictError(`Email is wrong in key "${key}"`);

export const UsernameFormatError = (key: string) =>
  new ConflictError(`Username is wrong in key "${key}"`);

export const CodeFormatError = (key: string) =>
  new ConflictError(`Code is wrong in key "${key}"`);

export const StringNotEmptyError = (key: string) =>
  new ConflictError(`String empty in key "${key}"`);

export const Base64FormatError = (key: string) =>
  new ConflictError(`String not encoded in base 64 in key "${key}"`);

export const DateFormatError = (key: string) =>
  new ConflictError(`Date is wrong in key "${key}"`);

export const UniqueKeyRepeatedError = (key: string) =>
  new ConflictError(`Unique key "${key}" repeated`);

export const EnumFormatError = (key: string) =>
  new ConflictError(`Enum is wrong in key "${key}"`);

export const ValueOnlyNullError = (key: string) =>
  new ConflictError(`Value should only be null in key "${key}"`);

export const ImageMissingLowResponsability = () =>
  new ConflictError(`Image required with LOW responsability`);

export const FolderDeletedError = () =>
  new ConflictError(`Cannot create resources related to a deleted folder`);

export const TimeCurrentMissingError = () =>
  new ConflictError(`Time current missing`);

export const LimitDayMissingError = () =>
  new ConflictError(`Limit day missing`);

export const LimitDayWithSameFrequencyError = () =>
  new ConflictError(`Existing active LimitDay with the same frequency`);

export const CurrentTimePlayError = () =>
  new ConflictError(`The CurrentTime has already started`);

export const CurrentTimePauseError = () =>
  new ConflictError(`The CurrentTime has already been stopped`);

export const CurrentTimeAvaibleTimeError = () =>
  new ConflictError(`The child no longer has time available`);

export const LockedPeriodNotFoundError = () =>
  new ConflictError(`Locked period not found`);

export const LockedPeriodExistError = () =>
  new ConflictError(`Locked period exist`);

export const RequestTimeDeniedExistingError = () =>
  new ConflictError(`Request time denied existing`);
