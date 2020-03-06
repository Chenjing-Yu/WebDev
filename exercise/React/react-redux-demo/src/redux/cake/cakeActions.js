import { BUY_CAKE } from './cakeTypes.js'

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  }
}

export default buyCake
