import { Player } from './models';

const makePlayer = (data?: any) : Player => {
  return {
    id: data.id,
    name: data.name,
    base: data.base,
  };
}

export {
  makePlayer,
}
