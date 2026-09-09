export class Logger {
  private static timestamp(): string {
    return new Date().toISOString();
  }

  static info(message: string): void {
    console.log(`[${this.timestamp()}] [INFO] ${message}`);
  }

  static warn(message: string): void {
    console.warn(`[${this.timestamp()}] [WARN] ${message}`);
  }

  static error(message: string): void {
    console.error(`[${this.timestamp()}] [ERROR] ${message}`);
  }

  static debug(message: string): void {
    console.debug(`[${this.timestamp()}] [DEBUG] ${message}`);
  }
}