import { Project } from './types';

class FuulSDK {
  private static instance: FuulSDK | null = null;
  private apiKey: string | null = null;
  private project: Project | null = null;

  private constructor() {}

  private static getInstance(): FuulSDK {
    if (!FuulSDK.instance) {
      FuulSDK.instance = new FuulSDK();
    }
    return FuulSDK.instance;
  }

  public static async init(apiKey: string): Promise<Project | null> {
    const instance = FuulSDK.getInstance();
    if (instance.apiKey) {
      console.warn('SDK is already initialized.');
      return instance.project;
    }

    instance.apiKey = apiKey;
    instance.project = await instance.fetchProject(apiKey);
    return instance.project;
  }

  private async fetchProject(apiKey: string): Promise<Project | null> {
    try {
      const response = await fetch(`https://mockapi.dprietoc.workers.dev/api/project?id=${apiKey}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const project = await response.json();

      if (!project) {
        return null;
      }
      return project;
    } catch (error) {
      console.error('Failed to fetch project:', error);
      return null;
    }
  }
}

export default {
  init: FuulSDK.init
};
