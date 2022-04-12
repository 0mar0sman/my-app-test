export interface IDemo {
  id: number;
  name: string;
  comment: string;
  hidden: boolean;
  insDate: string;
  updDate: string;
}

export const defaultForm: IDemo = {
  id: 5,
  name: "",
  comment: "",
  hidden: false,
  insDate: "",
  updDate: "",
};

export interface demoState {
  readonly all: IDemo[];
  readonly one: IDemo;
  readonly errorMessage?: string;
}

export const defaultState: demoState = {
  all: [],
  one: defaultForm,
  errorMessage: undefined,
};
