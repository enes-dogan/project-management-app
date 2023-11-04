export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export interface InputProps {
  label: string;
  textarea?: boolean;
  type?: string;
}

export interface ModalProps {
  children: React.ReactNode;
  buttonCaption: string;
}

export interface ModalHandle {
  open(): void;
  close(): void;
}

export interface projectDataProps {
  title: string;
  description: string;
  dueDate: string;
  id?: number;
}

export interface projectsState {
  selectedProjectId: number | null | undefined;
  projects: projectDataProps[];
}

export interface NoProjectSelectedProps {
  onStartAddProject: () => void;
}

export interface ProjectsSideBarProps extends NoProjectSelectedProps {
  projects: projectDataProps[];
}

export interface NewProjectProps {
  onAdd: (projectData: projectDataProps) => void;
  onCancel: () => void;
}
