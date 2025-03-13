// This file should not export class instances or non-serializable objects
// when they might be passed between Server and Client components

// Export simple interfaces and data structures instead
export interface AppConfig {
  name: string;
  version: string;
}

export const appConfig: AppConfig = {
  name: 'ReadingUnits',
  version: '1.0.0',
}
