export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      client: string;
      token: string;
    }
  }
}
