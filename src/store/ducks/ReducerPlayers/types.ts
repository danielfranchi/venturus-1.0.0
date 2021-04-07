export enum TypesPlayers {
  GET_PLAYER = "GET_PLAYER",
}

export interface ItemPlayers {
  id: number
  team: string
  player: string
  age: number
}

export interface ArrayPlayers {
  dataPlayers: ItemPlayers[]
}

export interface StorePlayers {
  players: ArrayPlayers;
}
