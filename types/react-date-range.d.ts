declare module 'react-date-range' {
  import { ComponentType } from 'react';

  export interface DateRange {
    startDate: Date;
    endDate: Date;
    key: string;
  }

  export interface DateRangePickerProps {
    ranges: DateRange[];
    onChange: (ranges: { selection: DateRange }) => void;
    months?: number;
    direction?: 'horizontal' | 'vertical';
  }

  export const DateRangePicker: ComponentType<DateRangePickerProps>;
} 