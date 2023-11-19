export type TConfig = Record<string, string>;

class ConfigLoader {
  private configCache: TConfig = {};

  constructor(initialConfig?: TConfig) {
    if (initialConfig) this.setConfigCache(initialConfig);
  }

  setConfigCache(config: TConfig) {
    this.configCache = config;
  }

  private setCache(key: string, value: string) {
    this.configCache[key] = value;
  }

  private getCache(key: string) {
    return this.configCache[key];
  }

  private loadConfig(key: string, processEnv?: string): string {
    if (!processEnv) throw new Error("Configuration not found.");

    this.setCache(key, processEnv);

    return processEnv;
  }

  get(key: string, processEnv?: string): string {
    const config = this.getCache(key);
    if (!config) return this.loadConfig(key, processEnv);

    return config;
  }
}

const configLoader = new ConfigLoader();
export default configLoader;
