import { Project } from './types';
import data from './api/mocks/projects.json';

class FuulSDK {
  private apiKey: string | null = null;
  private project: Project | null = null;

  public async init(apiKey: string): Promise<Project | null> {
    this.apiKey = apiKey;
    this.project = await this.fetchProject(apiKey);
    return this.project;
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

const Fuul = new FuulSDK();
export default Fuul;
