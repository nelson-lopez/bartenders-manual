export interface LogoutMethods {
  handleRemoveToken(): void;
}

export interface UserInput {
  handleOnInput(e: React.FormEvent<HTMLInputElement>): void;
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
  type: string;
}

export interface Login {
  handleSetToken(token: string | null): void;
}
