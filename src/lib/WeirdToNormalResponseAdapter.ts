import NormalResponse from "./NormalResponse";
import WeirdResponse from "./WeirdResponse";

class WeirdToNormalResponseAdapter implements NormalResponse {
  status: number;
  data: any[];
  msg: string;

  constructor(response: WeirdResponse) {
    this.status = response.status;
    [this.data] = response.data.data;
    this.msg = response.data.parameters.msg;
  }
}

export default WeirdToNormalResponseAdapter;
