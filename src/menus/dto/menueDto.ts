import { ServiceAvailability } from '../interfaces/ServiceAvailability';

export class MenuDto {
  service_availability: ServiceAvailability[];
  category_ids: any[];
  title: string;
  id: string;
}
