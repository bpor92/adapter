interface WeirdResponse {
  status: number;
  data: {
    data: [Array<any>];
    parameters: {
      status: number;
      msg: string;
    };
  };
}

export default WeirdResponse;
