export interface IMedication {
  id: string;
  name: string;
  description: string;
  initialCount: number;
  destinationCount: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IMedicationForm
  extends Omit<IMedication, 'id' | 'createdAt' | 'updatedAt' | 'isActive'> {
  id: undefined;
  isActive: undefined;
  createdAt: undefined;
  updatedAt: undefined;
}
