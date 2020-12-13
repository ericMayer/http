export class CustomFieldUtils {
  
  static getLabel(isRequired: boolean, label: string): string {
    if (isRequired !== undefined && label)
      return isRequired ? `*${label}` : label;
  }

  static getBorderSuccess(value: string, invalid: boolean): boolean {
    return value && !invalid;
  }

}