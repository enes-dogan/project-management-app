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

export interface taskProp {
  task: string;
  projectId: number | undefined | null;
  id: number;
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
  tasks: taskProp[];
}

export interface NoProjectSelectedProps {
  onStartAddProject: () => void;
}

export interface ProjectsSideBarProps extends NoProjectSelectedProps {
  projects: projectDataProps[];
  onSelectProject: (projectId: number | undefined) => void;
  selectedProjectId: number | null | undefined;
}

export interface NewProjectProps {
  onAdd: (projectData: projectDataProps) => void;
  onCancel: () => void;
}

export interface SelectedProjectProps {
  project: projectDataProps | undefined;
  onDelete: () => void;
  tasks: taskProp[];
  onAddTask: (text: string) => void;
  onDeleteTask: (id: number) => void;
}

export interface TasksProps {
  tasks: taskProp[];
  onAdd: (task: string) => void;
  onDelete: (taskId: number) => void;
}

export interface NewTaskProps {
  onAdd: (task: string) => void;
}
