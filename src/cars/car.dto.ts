/* eslint-disable prettier/prettier */
// game.dto.ts
export class CreateCarDto {
  readonly modelo: string;
  readonly marca: string;
  readonly ano: string;
}

export class UpdateCarDto {
  readonly modelo: string;
  readonly marca: string;
  readonly ano: string;
  // propriedades do DTO para atualização
}
