import { Project } from './types';
import data from './api/mocks/projects.json';

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
    // To be replaced for a real API call
    const project = data.projects.find((project: Project) => project.apiKey === apiKey);
    if (!project) {
      return null;
    }
    return project;
  }
}

export default {
  init: FuulSDK.init
};
