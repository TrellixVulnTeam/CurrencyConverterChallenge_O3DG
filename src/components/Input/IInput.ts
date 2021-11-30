export interface IInputProps {
    title?: string;
    setValue?: any;
    label?: string;
    value?: number|undefined|"";
    type: 'number'|'text';
    maxLength?: number|undefined;
    clickFunc?: any;
    triggerFunc?: any;
    error?:any;
  }