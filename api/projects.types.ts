export enum ProjectLanguage {
  react = "react",
  node = "node",
  python = "python",
}

export enum ProjectStatus {
  stable = "stable",
  warning = "warning",
  critical = "critical",
}

export type Project = {
  id: string;
  name: string;
  language: ProjectLanguage;
  numIssues: number;
  numEvents24h: number;
  status: ProjectStatus;
};

export function updateStatus(newStatus: string) {
  if (newStatus === "info") {
    return "stable";
  } else if (newStatus === "warning") {
    return "warning";
  } else {
    return "critical";
  }
}
