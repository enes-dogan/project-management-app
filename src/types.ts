export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export interface InputProps {
  label: string;
  textarea?: boolean;
}

export interface NoProjectSelectedProps {
  onStartAddProject: () => void;
}

export interface ProjectsSideBarProps {
  onStartAddProject: () => void;
}

export interface ProjectsState {
  selectedProjectId: number | null | undefined;
  projects: any[]; // TODO fix
}
