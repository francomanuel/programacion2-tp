export interface ICliente {
  id?: number;
  nombre?: string;
  apellido?: string;
  dni?: number;
  cc?: string;
  limite?: number;
}

export class Cliente implements ICliente {
  constructor(
    public id?: number,
    public nombre?: string,
    public apellido?: string,
    public dni?: number,
    public cc?: string,
    public limite?: number
  ) {}
}
