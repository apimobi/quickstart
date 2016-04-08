import { Destination } from './destination';
import { Station } from './station';


export interface Line {
  id : number;
  line: string;
  name: string;
  destinations: Destination[];
  type: string;
  stations : Station[];
}
