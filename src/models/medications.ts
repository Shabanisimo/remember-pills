export interface IMedication {
  name: string;
  description: string;
  initialCount: number;
  destinationCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface IMedicationForm
  extends Omit<IMedication, 'createdAt' | 'updatedAt'> {
  createdAt: undefined;
  updatedAt: undefined;
}
